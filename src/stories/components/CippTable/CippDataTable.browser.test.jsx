import React from 'react'
import { render } from 'vitest-browser-react'
import { page } from '@vitest/browser/context'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '../../../theme'
import { SettingsContext } from '../../../contexts/settings-context'
import { CippDataTable } from '../../../components/CippTable/CippDataTable'

const theme = createTheme({
  colorPreset: 'orange',
  direction: 'ltr',
  paletteMode: 'light',
  contrast: 'high',
})

const settings = {
  currentTenant: 'testdomain.com',
  currentTheme: { value: 'light', label: 'light' },
  paletteMode: 'light',
  direction: 'ltr',
  pinNav: true,
  handleUpdate: () => {},
  handleReset: () => {},
  isCustom: false,
}

const store = configureStore({
  reducer: {
    toasts: (state = { toasts: [] }) => state,
  },
})

function renderWithProviders(component) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  return render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SettingsContext.Provider value={settings}>
          <ThemeProvider theme={theme}>{component}</ThemeProvider>
        </SettingsContext.Provider>
      </QueryClientProvider>
    </Provider>
  )
}

const basicData = [
  { displayName: 'Alice Smith', mail: 'alice@contoso.com', department: 'IT', accountEnabled: true },
  { displayName: 'Bob Johnson', mail: 'bob@contoso.com', department: 'Sales', accountEnabled: true },
  { displayName: 'Carol Williams', mail: 'carol@contoso.com', department: 'HR', accountEnabled: false },
]

describe('CippDataTable (browser)', () => {
  it('renders row data in real browser', async () => {
    renderWithProviders(
      <CippDataTable
        data={basicData}
        simpleColumns={['displayName', 'mail', 'department']}
        maxHeightOffset="100px"
      />
    )

    // In a real browser, MRT virtualizer has actual dimensions and renders rows
    await expect.element(page.getByText('Alice Smith')).toBeVisible()
    await expect.element(page.getByText('bob@contoso.com')).toBeVisible()
    await expect.element(page.getByText('HR')).toBeVisible()
  })

  it('opens action menu and shows action labels', async () => {
    const mockFn = vi.fn()
    const { container } = renderWithProviders(
      <CippDataTable
        data={basicData}
        simpleColumns={['displayName', 'mail']}
        actions={[
          { label: 'View User', noConfirm: true, customFunction: mockFn },
          { label: 'Delete User', noConfirm: true, customFunction: mockFn, color: 'error.main' },
        ]}
        maxHeightOffset="100px"
      />
    )

    await expect.element(page.getByText('Alice Smith')).toBeVisible()

    // MRT row action buttons are the "..." icon buttons in the Actions column
    // They use aria-label "Row Actions" or similar — find by the MoreHoriz icon testid
    const actionButtons = container.querySelectorAll('[data-testid="MoreHorizIcon"]')
    if (actionButtons.length > 0) {
      actionButtons[0].closest('button').click()
      await expect.element(page.getByText('View User')).toBeVisible()
      await expect.element(page.getByText('Delete User')).toBeVisible()
    } else {
      // Fallback: try finding any button in the actions column
      const allButtons = container.querySelectorAll('td button')
      expect(allButtons.length).toBeGreaterThan(0)
      allButtons[0].click()
      await expect.element(page.getByText('View User')).toBeVisible()
    }
  })

  it('clicks action and invokes customFunction', async () => {
    const mockFn = vi.fn()
    const { container } = renderWithProviders(
      <CippDataTable
        data={basicData}
        simpleColumns={['displayName', 'mail']}
        actions={[
          { label: 'View User', noConfirm: true, customFunction: mockFn },
        ]}
        maxHeightOffset="100px"
      />
    )

    await expect.element(page.getByText('Alice Smith')).toBeVisible()

    const actionButtons = container.querySelectorAll('[data-testid="MoreHorizIcon"]')
    if (actionButtons.length > 0) {
      actionButtons[0].closest('button').click()
    } else {
      const allButtons = container.querySelectorAll('td button')
      allButtons[0].click()
    }

    await page.getByText('View User').click()

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(
      expect.objectContaining({ displayName: 'Alice Smith' }),
      expect.anything(),
      expect.anything()
    )
  })

  it('renders loading skeletons when isFetching', async () => {
    const { container } = renderWithProviders(
      <CippDataTable
        data={[]}
        isFetching={true}
        simpleColumns={['displayName', 'mail', 'department']}
        maxHeightOffset="100px"
      />
    )

    // In a real browser, MRT renders skeleton rows with actual dimensions
    await vi.waitFor(() => {
      const skeletons = container.querySelectorAll('.MuiSkeleton-root')
      expect(skeletons.length).toBeGreaterThan(0)
    }, { timeout: 3000 })

    expect(container.textContent).not.toContain('Alice Smith')
  })
})
