import { utilColumnsFromAPI, resolveSimpleColumnVariables } from '../../../components/CippTable/util-columnsFromAPI'

describe('utilColumnsFromAPI', () => {
  it('generates columns from simple flat data', () => {
    const data = [
      { displayName: 'Alice Smith', mail: 'alice@contoso.com', department: 'IT' },
      { displayName: 'Bob Johnson', mail: 'bob@contoso.com', department: 'Sales' },
    ]
    const columns = utilColumnsFromAPI(data)
    const ids = columns.map((c) => c.id)
    expect(ids).toContain('displayName')
    expect(ids).toContain('mail')
    expect(ids).toContain('department')
  })

  it('generates columns for nested object properties', () => {
    const data = [
      { info: { city: 'Seattle', state: 'WA' }, name: 'Test' },
    ]
    const columns = utilColumnsFromAPI(data)
    const ids = columns.map((c) => c.id)
    expect(ids).toContain('info.city')
    expect(ids).toContain('info.state')
  })

  it('returns empty array for empty data', () => {
    const columns = utilColumnsFromAPI([])
    expect(columns).toEqual([])
  })

  it('handles null/undefined values in data', () => {
    const data = [
      { name: 'Alice', email: null },
      { name: 'Bob', email: 'bob@test.com' },
    ]
    const columns = utilColumnsFromAPI(data)
    const ids = columns.map((c) => c.id)
    expect(ids).toContain('name')
    expect(ids).toContain('email')
  })

  it('each column has required MRT properties', () => {
    const data = [{ displayName: 'Alice', accountEnabled: true }]
    const columns = utilColumnsFromAPI(data)
    for (const col of columns) {
      expect(col).toHaveProperty('id')
      expect(col).toHaveProperty('header')
      expect(col).toHaveProperty('accessorFn')
    }
  })
})

describe('resolveSimpleColumnVariables', () => {
  it('returns columns as-is when no variables present', () => {
    const columns = ['displayName', 'mail', 'department']
    const result = resolveSimpleColumnVariables(columns, [])
    expect(result).toEqual(['displayName', 'mail', 'department'])
  })

  it('returns empty array for empty input', () => {
    const result = resolveSimpleColumnVariables([], [])
    expect(result).toEqual([])
  })
})
