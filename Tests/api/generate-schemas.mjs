#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getConfig, getAccessToken, callEndpoint, getResultObjects } from './helpers.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SCHEMAS_DIR = path.join(__dirname, 'schemas')
const REGISTRY_PATH = path.join(__dirname, 'endpoint-registry.json')

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/
// Matches keys containing a GUID, with optional prefix separated by _ or .
// i.e. "872ccbb0-...", "AllRoles_a1b2c3d4-...", "standards.IntuneTemplate.a1b2c3d4-..."
const GUID_RE = /^(.+[._])?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
const MAX_DEPTH = 10

/**
 * @typedef {import('ajv').SchemaObject} SchemaObject
 */

/**
 * Check if a string value looks like an ISO 8601 datetime.
 * @param {*} value
 * @returns {boolean}
 */
function isDatetime(value) {
  return typeof value === 'string' && ISO_DATE_RE.test(value)
}

/**
 * Add a type to a schema's type field, handling the union (array) form.
 * Mutates `schema.type` in place. If the type is already present, no-op.
 * @param {SchemaObject} schema
 * @param {string} type - JSON Schema type to add (i.e. 'string', 'null')
 */
function addType(schema, type) {
  if (!schema.type) {
    schema.type = type
    return
  }
  const types = Array.isArray(schema.type) ? schema.type : [schema.type]
  if (!types.includes(type)) {
    types.push(type)
  }
  schema.type = types.length === 1 ? types[0] : types
}

/**
 * Merge a single value's type information into an existing JSON Schema.
 *
 * @param {SchemaObject} schema - The schema to merge into (mutated in place)
 * @param {*} value - The observed value
 * @param {number} depth - Current recursion depth
 * @param {WeakSet<object>} seen - Circular reference guard
 */
function mergeValue(schema, value, depth, seen) {
  if (value === null || value === undefined) {
    // Don't record "null" as a type, it just means the field had no data
    // in this sample. The field could be any type when populated.
    return
  }

  if (typeof value === 'boolean') {
    addType(schema, 'boolean')
    addType(schema, 'null')
    return
  }

  if (typeof value === 'number') {
    addType(schema, 'number')
    addType(schema, 'null')
    return
  }

  if (typeof value === 'string') {
    addType(schema, 'string')
    addType(schema, 'null')
    if (isDatetime(value) && !schema.format) {
      schema.format = 'date-time'
    }
    return
  }

  if (Array.isArray(value)) {
    addType(schema, 'array')
    addType(schema, 'null')
    if (!schema.items) {
      schema.items = {}
    }
    // Merge all items to catch type variations anywhere in the array.
    // This is cheap — mergeValue on leaf values is just an addType call.
    // The MAX_DEPTH guard prevents runaway recursion on deeply nested data.
    for (const item of value) {
      mergeValue(schema.items, item, depth + 1, seen)
    }
    return
  }

  if (typeof value === 'object') {
    if (depth >= MAX_DEPTH) {
      return
    }
    if (seen.has(value)) {
      return
    }
    seen.add(value)

    addType(schema, 'object')
    addType(schema, 'null')
    if (!schema.properties) {
      schema.properties = {}
    }
    if (schema.additionalProperties === undefined) {
      schema.additionalProperties = true
    }

    for (const [key, val] of Object.entries(value)) {
      // GUID-shaped keys are dynamic (e.g. "872ccbb0-...", "AllRoles_a1b2c3d4-...").
      // Merge their values into patternProperties instead of creating a property per GUID.
      const guidMatch = key.match(GUID_RE)
      if (guidMatch) {
        const prefix = guidMatch[1] || ''
        const guidPart =
          '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}'
        const pattern = `^${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}${guidPart}$`
        if (!schema.patternProperties) {
          schema.patternProperties = {}
        }
        if (!schema.patternProperties[pattern]) {
          schema.patternProperties[pattern] = {}
        }
        mergeValue(schema.patternProperties[pattern], val, depth + 1, seen)
        continue
      }
      if (!schema.properties[key]) {
        schema.properties[key] = {}
      }
      mergeValue(schema.properties[key], val, depth + 1, seen)
    }
  }
}

/**
 * Build a JSON Schema from multiple API response rows.
 * Merges type information across all rows into a single schema tree.
 *
 * @param {object[]} rows - Array of response objects to sample
 * @returns {SchemaObject} Complete JSON Schema for the response shape
 */
function buildSchemaFromRows(rows) {
  /** @type {SchemaObject} */
  const schema = {}

  for (const row of rows) {
    if (row == null || typeof row !== 'object') {
      continue
    }
    mergeValue(schema, row, 0, new WeakSet())
  }

  return schema
}

async function main() {
  fs.mkdirSync(SCHEMAS_DIR, { recursive: true })

  /** @type {Array<{name: string, requiresTenant: boolean, allowEmpty?: boolean, extraParams?: Record<string, string>}>} */
  const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'))

  const config = getConfig()
  console.log(`API: ${config.apiUrl}`)
  console.log(`Tenants: ${config.tenantFilters.join(', ')}`)
  const token = await getAccessToken(config)
  console.log('Token acquired.\n')

  // Sort properties alphabetically for deterministic output.
  function sortProperties(obj) {
    if (!obj || typeof obj !== 'object') {
      return obj
    }
    if (obj.properties) {
      const sorted = {}
      for (const key of Object.keys(obj.properties).sort()) {
        sorted[key] = sortProperties(obj.properties[key])
      }
      obj.properties = sorted
    }
    if (obj.patternProperties) {
      const sorted = {}
      for (const key of Object.keys(obj.patternProperties).sort()) {
        sorted[key] = sortProperties(obj.patternProperties[key])
      }
      obj.patternProperties = sorted
    }
    if (obj.items) {
      sortProperties(obj.items)
    }
    return obj
  }

  // Report fields with no type constraint (always null in sample data).
  function findUntypedFields(props, prefix) {
    const fields = []
    if (!props) {
      return fields
    }
    for (const [key, val] of Object.entries(props)) {
      const fieldPath = prefix ? `${prefix}.${key}` : key
      if (!val.type) {
        fields.push(fieldPath)
      }
      if (val.properties) {
        fields.push(...findUntypedFields(val.properties, fieldPath))
      }
    }
    return fields
  }

  async function processEndpoint(ep) {
    const label = ep.case ? `${ep.name} (${ep.case})` : ep.name
    const schemaFile = ep.case ? `${ep.name}.${ep.case}.schema.json` : `${ep.name}.schema.json`

    if (ep.skip) {
      console.log(`\tSKIP ${label} (${ep.skipReason})`)
      return
    }

    const tenants = ep.requiresTenant ? config.tenantFilters : [null]
    let allRows = []

    for (const tenant of tenants) {
      const params = { ...(ep.extraParams || {}) }
      if (tenant) {
        params.tenantFilter = tenant
      }

      try {
        const response = await callEndpoint(token, config.apiUrl, ep.name, params, config)
        const rows = getResultObjects(response, 50).filter((r) => r !== null && r !== undefined)
        if (rows.length > 0) {
          console.log(`\t${label} [${tenant || 'global'}]: ${rows.length} rows`)
          allRows = allRows.concat(rows)
        } else {
          console.log(`\t${label} [${tenant || 'global'}]: no data`)
        }
      } catch (err) {
        console.log(`\t${label} [${tenant || 'global'}]: ${err.message}`)
      }
    }

    if (allRows.length === 0) {
      console.log(`\tSKIP ${label} (no data from any tenant)`)
      return
    }

    try {
      const shape = buildSchemaFromRows(allRows)

      const schema = {
        $schema: 'http://json-schema.org/draft-07/schema#',
        $id: ep.case ? `${ep.name}.${ep.case}` : ep.name,
        description: `Shape schema for /api/${ep.name}${ep.case ? ` (${ep.case})` : ''}`,
        type: shape.type || 'object',
        properties: shape.properties || {},
        ...(shape.patternProperties ? { patternProperties: shape.patternProperties } : {}),
        additionalProperties: true,
        ...(shape.items ? { items: shape.items } : {}),
        _endpoint: ep.name,
        _case: ep.case || null,
        _requiresTenant: ep.requiresTenant,
      }

      sortProperties(schema)

      const untypedFields = findUntypedFields(schema.properties, '')
      const outPath = path.join(SCHEMAS_DIR, schemaFile)
      fs.writeFileSync(outPath, JSON.stringify(schema, null, 2) + '\n')
      console.log(`\tSAVED ${label} (${allRows.length} rows)`)
      if (untypedFields.length > 0) {
        console.log(
          `\t\t${untypedFields.length} untyped fields: ${untypedFields.slice(0, 5).join(', ')}${untypedFields.length > 5 ? ` ... and ${untypedFields.length - 5} more` : ''}`
        )
      }
    } catch (err) {
      console.log(`\tERROR ${label}: ${err.message}`)
    }
  }

  // Process endpoints in parallel batches.
  const concurrency = parseInt(process.env.CIPP_API_CONCURRENCY || '5', 10)
  const queue = registry.slice()
  while (queue.length > 0) {
    const batch = queue.splice(0, concurrency)
    await Promise.all(batch.map((ep) => processEndpoint(ep)))
  }

  console.log('\tDone.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
