import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Ajv from 'ajv'
  import addFormats from 'ajv-formats'
import {
  getConfig,
  getAccessToken,
  callEndpoint,
  getResultObjects,
} from './helpers.js'

import registry from './endpoint-registry.json'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SCHEMAS_DIR = path.join(__dirname, 'schemas')

const ajv = new Ajv({ allErrors: true, strict: false })
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
    if (ep.requiresTenant) params.tenantFilter = config.tenantFilter

    const schema = loadSchema(ep)
    if (!schema) {
      console.warn(`No schema for ${label} — run: node Tools/generate-schemas.js`)
      return
    }

    // AJV with strict:false ignores unknown keywords (_generatedAt, _endpoint, etc.)
    const validate = ajv.compile(schema)

    const response = await callEndpoint(token, config.apiUrl, ep.name, params, config)
    const rows = getResultObjects(response)

    if (rows.length === 0) {
      console.warn(`${label}: empty response${ep.allowEmpty ? ' (allowed)' : ''}`)
      return
    }

    const failures = []
    for (let i = 0; i < rows.length; i++) {
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

describe('API Shape Tests', () => {
  describe('Global endpoints', () => {
    for (const ep of globalEndpoints) {
      if (ep.skip) {
        it.skip(`${testLabel(ep)} — ${ep.skipReason}`, () => {})
      } else {
        it(testLabel(ep), runEndpointTest(ep), 120_000)
      }
    }
  })

  describe('Tenant-specific endpoints', () => {
    for (const ep of tenantEndpoints) {
      if (ep.skip) {
        it.skip(`${testLabel(ep)} — ${ep.skipReason}`, () => {})
      } else {
        it(testLabel(ep), runEndpointTest(ep), 120_000)
      }
    }
  })
})
