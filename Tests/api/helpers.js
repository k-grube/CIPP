import 'dotenv/config'

const {
  CIPP_API_URL,
  CIPP_CLIENT_ID,
  CIPP_CLIENT_SECRET,
  CIPP_TENANT_ID,
  CIPP_API_SCOPE,
  CIPP_TENANT_FILTER = '',
  CIPP_AUTH_MODE = '',
} = process.env

export function getConfig() {
  const isLocal = CIPP_AUTH_MODE === 'local'

  const missing = []
  if (!CIPP_API_URL) missing.push('CIPP_API_URL')
  if (!CIPP_CLIENT_ID) missing.push('CIPP_CLIENT_ID')
  if (!isLocal) {
    if (!CIPP_CLIENT_SECRET) missing.push('CIPP_CLIENT_SECRET')
    if (!CIPP_TENANT_ID) missing.push('CIPP_TENANT_ID')
    if (!CIPP_API_SCOPE) missing.push('CIPP_API_SCOPE')
  }
  if (missing.length) {
    throw new Error(
      `Missing environment variables: ${missing.join(', ')}. ` +
      'Copy .env.example to .env and fill in your credentials.'
    )
  }
  return {
    apiUrl: CIPP_API_URL.replace(/\/+$/, ''),
    clientId: CIPP_CLIENT_ID,
    clientSecret: CIPP_CLIENT_SECRET,
    tenantId: CIPP_TENANT_ID,
    apiScope: CIPP_API_SCOPE,
    tenantFilter: CIPP_TENANT_FILTER,
    isLocal,
  }
}

export async function getAccessToken(config) {
  if (config.isLocal) {
    // Local mode: no OAuth needed, we use header-based auth
    return null
  }

  const tokenUrl = `https://login.microsoftonline.com/${config.tenantId}/oauth2/v2.0/token`
  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    scope: config.apiScope,
    grant_type: 'client_credentials',
  })

  const res = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`OAuth2 token request failed (${res.status}): ${text}`)
  }

  const data = await res.json()
  return data.access_token
}

export async function callEndpoint(token, apiUrl, endpoint, params = {}, config = {}) {
  const url = new URL(`/api/${endpoint}`, apiUrl)
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value)
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 120_000)

  const headers = config.isLocal
    ? {
        'x-ms-client-principal-idp': 'aad',
        'x-ms-client-principal-name': config.clientId,
      }
    : { Authorization: `Bearer ${token}` }

  try {
    const res = await fetch(url, {
      headers,
      signal: controller.signal,
    })

    if (!res.ok) {
      throw new Error(`API call to /${endpoint} failed (HTTP ${res.status})`)
    }

    const text = await res.text()
    try {
      return JSON.parse(text)
    } catch {
      throw new Error(`API call to /${endpoint} returned invalid JSON (${text.length} bytes): ${text.slice(0, 200)}`)
    }
  } finally {
    clearTimeout(timeout)
  }
}

export function getResultObjects(response, maxRows = 50) {
  if (response == null) return []

  let rows
  if (response.Results !== undefined) {
    rows = response.Results
  } else if (Array.isArray(response)) {
    rows = response
  } else {
    rows = [response]
  }

  if (!Array.isArray(rows)) rows = [rows]
  if (rows.length === 0) return []

  return rows.slice(0, maxRows)
}
