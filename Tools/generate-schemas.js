#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getConfig, getAccessToken, callEndpoint, getResultObjects } from '../Tests/api/helpers.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SCHEMAS_DIR = path.join(ROOT, 'Tests', 'api', 'schemas')
const REGISTRY_PATH = path.join(ROOT, 'Tests', 'api', 'endpoint-registry.json')

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/
const MAX_DEPTH = 10

/**
 * @typedef {import('ajv').SchemaObject} SchemaObject
 */

/**
 * Infer the JSON Schema type string for a primitive value.
 * @param {*} value
 * @returns {'string' | 'boolean' | 'number' | 'null'}
 */
function jsonSchemaType(value) {
  if (value === null || value === undefined) return 'null'
  if (typeof value === 'boolean') return 'boolean'
  if (typeof value === 'number') return 'number'
  return 'string'
}

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
 * @param {string} type - JSON Schema type to add (e.g. 'string', 'null')
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
 * Builds the schema tree directly — no intermediate sentinel values.
 *
 * @param {SchemaObject} schema - The schema to merge into (mutated in place)
 * @param {*} value - The observed value
 * @param {number} depth - Current recursion depth
 * @param {WeakSet<object>} seen - Circular reference guard
 */
function mergeValue(schema, value, depth, seen) {
  if (value === null || value === undefined) {
    addType(schema, 'null')
    return
  }

  if (typeof value === 'boolean') {
    addType(schema, 'boolean')
    return
  }

  if (typeof value === 'number') {
    addType(schema, 'number')
    return
  }

  if (typeof value === 'string') {
    addType(schema, 'string')
    if (isDatetime(value) && !schema.format) {
      schema.format = 'date-time'
    }
    return
  }

  if (Array.isArray(value)) {
    addType(schema, 'array')
    if (!schema.items) schema.items = {}
    for (const item of value.slice(0, 5)) {
      mergeValue(schema.items, item, depth + 1, seen)
    }
    return
  }

  if (typeof value === 'object') {
    if (depth >= MAX_DEPTH) return
    if (seen.has(value)) return
    seen.add(value)

    addType(schema, 'object')
    if (!schema.properties) schema.properties = {}
    if (schema.additionalProperties === undefined) schema.additionalProperties = true

    for (const [key, val] of Object.entries(value)) {
      if (!schema.properties[key]) schema.properties[key] = {}
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
    if (row == null || typeof row !== 'object') continue
    mergeValue(schema, row, 0, new WeakSet())
  }

  return schema
}

/**
 * Main entry point. Connects to the CIPP API, samples each endpoint,
 * and writes JSON Schema files to Tests/api/schemas/.
 */
async function main() {
  fs.mkdirSync(SCHEMAS_DIR, { recursive: true })

  /** @type {Array<{name: string, requiresTenant: boolean, allowEmpty?: boolean, extraParams?: Record<string, string>}>} */
  const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'))

  const config = getConfig()
  console.log(`API: ${config.apiUrl}`)
  console.log(`Tenant: ${config.tenantFilter}`)
  const token = await getAccessToken(config)
  console.log('Token acquired.\n')

  for (const ep of registry) {
    const label = ep.case ? `${ep.name} (${ep.case})` : ep.name
    const schemaFile = ep.case ? `${ep.name}.${ep.case}.schema.json` : `${ep.name}.schema.json`

    if (ep.skip) {
      console.log(`\tSKIP ${label} (${ep.skipReason})`)
      continue
    }
    /** @type {Record<string, string>} */
    const params = { ...(ep.extraParams || {}) }
    if (ep.requiresTenant) params.tenantFilter = config.tenantFilter

    try {
      const response = await callEndpoint(token, config.apiUrl, ep.name, params, config)
      const rows = getResultObjects(response, 50)

      if (rows.length === 0) {
        console.log(`\tSKIP ${label} (no data)`)
        continue
      }

      const shape = buildSchemaFromRows(rows)

      /** @type {SchemaObject & Record<string, unknown>} */
      const schema = {
        $schema: 'http://json-schema.org/draft-07/schema#',
        $id: ep.case ? `${ep.name}.${ep.case}` : ep.name,
        description: `Shape schema for /api/${ep.name}${ep.case ? ` (${ep.case})` : ''}`,
        type: shape.type || 'object',
        properties: shape.properties || {},
        additionalProperties: true,
        ...(shape.items ? { items: shape.items } : {}),
        _generatedAt: new Date().toISOString(),
        _endpoint: ep.name,
        _case: ep.case || null,
        _tenantFilter: ep.requiresTenant ? config.tenantFilter : null,
        _requiresTenant: ep.requiresTenant,
        _sampledRows: rows.length,
      }

      const outPath = path.join(SCHEMAS_DIR, schemaFile)
      fs.writeFileSync(outPath, JSON.stringify(schema, null, 2) + '\n')
      console.log(`\tSAVED ${label} (${rows.length} rows)`)
    } catch (err) {
      console.log(`\tERROR ${label}: ${err.message}`)
    }
  }

  console.log('\tDone.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
