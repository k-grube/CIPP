import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTheme } from '../../theme'
import { Layout } from '../../layouts/index'

// Mock heavy ESM modules that Layout transitively imports
vi.mock('../../components/ReleaseNotesDialog', () => ({
  ReleaseNotesDialog: () => null,
}))
vi.mock('../../contexts/release-notes-context', () => ({
  ReleaseNotesProvider: ({ children }) => children,
  useReleaseNotes: () => ({ open: false, setOpen: () => {} }),
}))

// Mock ApiCall module
vi.mock('../../api/ApiCall', () => ({
  ApiGetCall: () => ({
    isSuccess: true,
    isFetched: true,
    isLoading: false,
    isFetching: false,
    data: { clientPrincipal: { userRoles: ['Global Administrator'] } },
  }),
  ApiPostCall: () => ({
    mutate: () => {},
    isLoading: false,
    isSuccess: false,
  }),
  ApiGetCallWithPagination: () => ({
    data: { pages: [] },
    isLoading: false,
    isSuccess: true,
    isFetched: true,
    isFetching: false,
  }),
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

// TODO: Layout pulls in too many transitive deps that hang vitest.
// Test the layout via Storybook stories instead.
describe.skip('Layout', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders children and navigation', () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false, gcTime: 0, staleTime: 0 },
      },
    })
    render(
      <Provider store={mockStore}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Layout>
              <div>
                <h1>Dashboard Content</h1>
                <p>This is the main content of the dashboard layout.</p>
              </div>
            </Layout>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    )

    expect(screen.getByText('Dashboard Content')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    queryClient.clear()
  })
})
