import { utilTableMode } from '../../../components/CippTable/util-tablemode'

const defaultSettings = { tablePageSize: { value: 25 } }

describe('utilTableMode', () => {
  it('simple mode disables selection and row actions', () => {
    const result = utilTableMode({}, true, null, [], false, null, '380px', defaultSettings)
    expect(result.enableRowSelection).toBe(false)
    expect(result.enableRowActions).toBe(false)
  })

  it('full mode enables selection when onChange is provided', () => {
    const result = utilTableMode({}, false, null, [], false, () => {}, '380px', defaultSettings)
    expect(result.enableRowSelection).toBe(true)
  })

  it('full mode enables selection when actions are provided', () => {
    const actions = [{ label: 'Edit', customFunction: () => {} }]
    const result = utilTableMode({}, false, actions, [], false, null, '380px', defaultSettings)
    expect(result.enableRowSelection).toBe(true)
  })

  it('full mode disables selection when no actions or onChange', () => {
    const result = utilTableMode({}, false, null, [], false, null, '380px', defaultSettings)
    expect(result.enableRowSelection).toBe(false)
  })

  it('enables row actions when actions are provided', () => {
    const actions = [{ label: 'Edit', customFunction: () => {} }]
    const result = utilTableMode({}, false, actions, [], false, null, '380px', defaultSettings)
    expect(result.enableRowActions).toBe(true)
  })

  it('disables row actions when no actions or offCanvas', () => {
    const result = utilTableMode({}, false, null, [], false, null, '380px', defaultSettings)
    expect(result.enableRowActions).toBe(false)
  })

  it('returns pagination config', () => {
    const result = utilTableMode({}, false, null, [], false, null, '380px', defaultSettings)
    expect(result.muiPaginationProps).toBeDefined()
    expect(result.muiPaginationProps.rowsPerPageOptions).toBeDefined()
  })

  it('returns table container height config', () => {
    const result = utilTableMode({}, false, null, [], false, null, '500px', defaultSettings)
    expect(result.muiTableContainerProps).toBeDefined()
  })
})
