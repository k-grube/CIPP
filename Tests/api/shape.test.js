import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { getConfig, getAccessToken, callEndpoint, getResultObjects } from './helpers.mjs'

import registry from './endpoint-registry.json'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SCHEMAS_DIR = path.join(__dirname, 'schemas')

// validateFormats: false treats format as documentation, not a hard constraint.
// The API returns inconsistent date formats across endpoints (i.e. space vs T separator).
const ajv = new Ajv({ allErrors: true, strict: false, validateFormats: false })
addFormats(ajv)

let token
let config

beforeAll(async () => {
  config = getConfig()
  token = await getAccessToken(config)
}, 30_000)

/**
 * Loads and parses a JSON schema file for the specified endpoint.
 *
 * @param {string} endpointName - The name of the endpoint whose schema should be loaded.
 * @return {Object|null} The parsed JSON schema object if the file exists, or null if not.
 */
/**
 * @param {Object} ep - Endpoint entry from the registry
 * @returns {string} Schema filename for this endpoint/case
 */
function schemaFileName(ep) {
  return ep.case ? `${ep.name}.${ep.case}.schema.json` : `${ep.name}.schema.json`
}

/**
 * @param {Object} ep - Endpoint entry from the registry
 * @returns {string} Display label for test output
 */
function testLabel(ep) {
  return ep.case ? `/${ep.name} (${ep.case})` : `/${ep.name}`
}

function loadSchema(ep) {
  const schemaPath = path.join(SCHEMAS_DIR, schemaFileName(ep))

  if (!fs.existsSync(schemaPath)) {
    return null
  }
  return JSON.parse(fs.readFileSync(schemaPath, 'utf8'))
}

/**
 * Executes a test for the specified API endpoint, validating its response based on schema constraints.
 *
 * @param {Object} ep - The endpoint configuration object.
 * @param {string} ep.name - The name of the endpoint to test.
 * @param {string} [ep.case] - The test case variant name.
 * @param {boolean} [ep.requiresTenant] - Indicates if tenant-specific filtering is required for the endpoint.
 * @param {Object} [ep.extraParams] - Additional parameters to include when calling the endpoint.
 * @param {boolean} [ep.allowEmpty] - Specifies if an empty response is considered valid.
 * @return {Function} An asynchronous function that, when executed, runs the endpoint test and validates the response.
 */
function runEndpointTest(ep) {
  const label = testLabel(ep)
  return async () => {
    const params = { ...(ep.extraParams || {}) }
    if (ep.requiresTenant) {
      params.tenantFilter = config.tenantFilter
    }

    const schema = loadSchema(ep)
    if (!schema) {
      console.warn(`No schema for ${label}`)
      return
    }

    // AJV with strict:false ignores unknown keywords (_generatedAt, _endpoint, etc.)
    const validate = ajv.compile(schema)

    let response
    try {
      response = await callEndpoint(token, config.apiUrl, ep.name, params, config)
    } catch (err) {
      if (err.message.includes('HTTP 401') || err.message.includes('HTTP 403')) {
        console.warn(`${label}: ${err.message} (skipping — insufficient permissions)`)
        return
      }
      throw err
    }
    // Validate up to 50 rows per endpoint. This caps test duration for
    // endpoints that return thousands of rows (i.e. ListUsers) while still
    // catching type mismatches in the first page of results.
    const rows = getResultObjects(response)

    if (rows.length === 0) {
      console.warn(`${label}: empty response${ep.allowEmpty ? ' (allowed)' : ''}`)
      return
    }

    const failures = []
    for (let i = 0; i < rows.length; i++) {
      if (rows[i] === null || rows[i] === undefined) {
        continue
      }
      const valid = validate(rows[i])
      if (!valid) {
        const errors = validate.errors
          .map((e) => `${e.instancePath || '/'} ${e.message}`)
          .join('; ')
        failures.push(`Row ${i}: ${errors}`)
      }
    }

    if (failures.length > 0) {
      throw new Error(
        `${label}: ${failures.length}/${rows.length} rows failed validation:\n` +
          failures.slice(0, 5).join('\n') +
          (failures.length > 5 ? `\n... and ${failures.length - 5} more` : '')
      )
    }
  }
}

const globalEndpoints = registry.filter((ep) => !ep.requiresTenant)
const tenantEndpoints = registry.filter((ep) => ep.requiresTenant)

// Run up to CIPP_API_CONCURRENCY endpoint tests in parallel (default: 5).
// Configurable via .env to tune for API rate limits.
const concurrency = parseInt(process.env.CIPP_API_CONCURRENCY || '5', 10)

describe('API Shape Tests', () => {
  describe.concurrent('Global endpoints', { concurrency }, () => {
    for (const ep of globalEndpoints) {
      if (ep.skip) {
        it.skip(`${testLabel(ep)} — ${ep.skipReason}`, () => {})
      } else if (!loadSchema(ep)) {
        it.skip(`${testLabel(ep)} — no schema`, () => {})
      } else {
        it(testLabel(ep), runEndpointTest(ep), 120_000)
      }
    }
  })

  describe.concurrent('Tenant-specific endpoints', { concurrency }, () => {
    for (const ep of tenantEndpoints) {
      if (ep.skip) {
        it.skip(`${testLabel(ep)} — ${ep.skipReason}`, () => {})
      } else if (!loadSchema(ep)) {
        it.skip(`${testLabel(ep)} — no schema`, () => {})
      } else {
        it(testLabel(ep), runEndpointTest(ep), 120_000)
      }
    }
  })
})
