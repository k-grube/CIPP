import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../test-utils'
import { CippApiResults } from '../../../components/CippComponents/CippApiResults'

// Mock sub-components that pull in heavy dependencies
vi.mock('../../../components/CippComponents/CippCopyToClipboard', () => ({
  CippCopyToClipBoard: () => <button aria-label="copy">copy</button>,
}))

vi.mock('../../../components/CippComponents/CippDocsLookup', () => ({
  CippDocsLookup: () => null,
}))

vi.mock('../../../components/CippComponents/CippCodeBlock', () => ({
  CippCodeBlock: ({ code }) => <pre data-testid="code-block">{code}</pre>,
}))

vi.mock('../../../components/CippComponents/CippTableDialog', () => ({
  CippTableDialog: () => <div data-testid="table-dialog" />,
}))

const emptyApiObject = {
  data: undefined,
  isFetching: false,
  isSuccess: false,
  isError: false,
  error: null,
}

describe('CippApiResults', () => {
  it('renders nothing meaningful when apiObject has no data', () => {
    const { container } = renderWithTheme(
      <CippApiResults apiObject={emptyApiObject} />
    )
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(container.firstChild).toBeInTheDocument()
  })

  it('shows loading indicator when isFetching is true', () => {
    const apiObject = {
      ...emptyApiObject,
      isFetching: true,
    }
    renderWithTheme(<CippApiResults apiObject={apiObject} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('does not show loading indicator when errorsOnly is true even while fetching', () => {
    const apiObject = {
      ...emptyApiObject,
      isFetching: true,
    }
    renderWithTheme(<CippApiResults apiObject={apiObject} errorsOnly />)
    expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
  })

  it('renders success result from string data via data.Results', () => {
    const apiObject = {
      data: { Results: 'Operation completed successfully' },
      isFetching: false,
      isSuccess: true,
      isError: false,
      error: null,
    }
    renderWithTheme(<CippApiResults apiObject={apiObject} />)
    expect(screen.getByText('Operation completed successfully')).toBeInTheDocument()
  })

  it('renders success result from nested data.data.Results string', () => {
    const apiObject = {
      data: { data: { Results: 'Task done' } },
      isFetching: false,
      isSuccess: true,
      isError: false,
      error: null,
    }
    renderWithTheme(<CippApiResults apiObject={apiObject} />)
    expect(screen.getByText('Task done')).toBeInTheDocument()
  })

  it('renders error severity for result text containing "failed"', () => {
    const apiObject = {
      data: { Results: 'Operation failed: access denied' },
      isFetching: false,
      isSuccess: true,
      isError: false,
      error: null,
    }
    renderWithTheme(<CippApiResults apiObject={apiObject} />)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(screen.getByText('Operation failed: access denied')).toBeInTheDocument()
    // Error alerts render a "Get Help" button
    expect(screen.getByText('Get Help')).toBeInTheDocument()
  })

  it('renders array of results from data.Results array', () => {
    const apiObject = {
      data: {
        Results: [
          'First result done',
          'Second result failed',
          'Third result success',
        ],
      },
      isFetching: false,
      isSuccess: true,
      isError: false,
      error: null,
    }
    renderWithTheme(<CippApiResults apiObject={apiObject} />)
    expect(screen.getByText('First result done')).toBeInTheDocument()
    expect(screen.getByText('Second result failed')).toBeInTheDocument()
    expect(screen.getByText('Third result success')).toBeInTheDocument()
  })

  it('renders results from array of objects with resultText', () => {
    const apiObject = {
      data: {
        Results: [
          { resultText: 'User created', copyField: 'user@example.com', state: 'success' },
          { resultText: 'License assignment failed', copyField: 'license-error', state: 'error' },
        ],
      },
      isFetching: false,
      isSuccess: true,
      isError: false,
      error: null,
    }
    renderWithTheme(<CippApiResults apiObject={apiObject} />)
    expect(screen.getByText('User created')).toBeInTheDocument()
    expect(screen.getByText('License assignment failed')).toBeInTheDocument()
  })

  it('renders error message when isError is true and error has response data', () => {
    const apiObject = {
      data: undefined,
      isFetching: false,
      isSuccess: false,
      isError: true,
      error: {
        response: {
          data: { Results: 'Authorization error occurred' },
        },
        message: 'Request failed with status 401',
      },
    }
    renderWithTheme(<CippApiResults apiObject={apiObject} />)
    expect(screen.getByText('Authorization error occurred')).toBeInTheDocument()
  })
})
