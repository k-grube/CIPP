import React from 'react'
import { render, screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTheme } from '../../../theme'
import CippDataTableButton from '../../../components/CippTable/CippDataTableButton'

const theme = createTheme({
  colorPreset: 'orange',
  direction: 'ltr',
  paletteMode: 'light',
  contrast: 'high',
})

const mockStore = configureStore({
  reducer: {
    toasts: (state = { toasts: [] }) => state,
  },
})

const renderWithProviders = (ui) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  return render(
    <Provider store={mockStore}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{ui}</ThemeProvider>
      </QueryClientProvider>
    </Provider>
  )
}

describe('CippDataTableButton', () => {
  it('shows item count and opens dialog on click', async () => {
    const user = userEvent.setup()
    renderWithProviders(
      <CippDataTableButton
        title="View List"
        data={[
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
        ]}
        tableTitle="Items List"
      />
    )

    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('2 items')

    await user.click(button)

    const root = within(document.body)
    await waitFor(() => {
      expect(root.getByRole('dialog')).toBeInTheDocument()
    })
  })

  it('shows item count for object data', () => {
    renderWithProviders(
      <CippDataTableButton
        title="View Details"
        data={{
          'Display Name': 'John Doe',
          Email: 'john@example.com',
        }}
        tableTitle="User Details"
      />
    )
    expect(screen.getByText('2 items')).toBeInTheDocument()
  })

  it('shows disabled button for empty data', () => {
    renderWithProviders(
      <CippDataTableButton title="No Data" data={null} />
    )
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('No items')
    expect(button).toBeDisabled()
  })
})
