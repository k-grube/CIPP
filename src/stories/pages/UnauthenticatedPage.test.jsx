import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTheme } from '../../theme'
import UnauthenticatedPage from '../../pages/unauthenticated'

vi.mock('../../api/ApiCall', () => ({
  ApiGetCall: ({ url }) => {
    if (url === '/api/me') {
      return {
        isSuccess: true,
        isFetched: true,
        isLoading: false,
        isFetching: false,
        data: { message: 'Permission Denied' },
      }
    }
    // /.auth/me
    return {
      isSuccess: true,
      isFetched: true,
      isLoading: false,
      isFetching: false,
      data: { clientPrincipal: null },
    }
  },
}))

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

describe('UnauthenticatedPage', () => {
  it('renders access denied with login link', async () => {
    const queryClient = new QueryClient()
    render(
      <Provider store={mockStore}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <UnauthenticatedPage />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    )

    await waitFor(() => {
      expect(screen.getByText('Access Denied')).toBeInTheDocument()
    })
    expect(screen.getByText('Permission Denied')).toBeInTheDocument()
    const loginButton = screen.getByRole('link', { name: /Login/i })
    expect(loginButton).toBeInTheDocument()
  })
})
