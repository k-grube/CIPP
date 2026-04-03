import React from 'react'
import { within, expect, sb, mocks } from 'storybook/test'
import { Layout } from '../../layouts/index'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Mock API calls
const mockSuccessResult = {
  isSuccess: true,
  isFetched: true,
  isLoading: false,
  isFetching: false,
  data: { clientPrincipal: { userRoles: ['Global Administrator'] } },
}

const mockPaginationResult = {
  data: { pages: [] },
  isLoading: false,
  isSuccess: true,
  isFetched: true,
  isFetching: false,
}

sb.mock('../../api/ApiCall', () => ({
  ApiGetCall: () => mockSuccessResult,
  ApiPostCall: () => ({
    mutate: () => {},
    isLoading: false,
    isSuccess: false,
  }),
  ApiGetCallWithPagination: () => mockPaginationResult,
}))

const mockStore = configureStore({
  reducer: {
    toasts: (state = { toasts: [] }, action) => state,
  },
})

const queryClient = new QueryClient()

export default {
  title: 'Layouts/Layout',
  component: Layout,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Provider store={mockStore}>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </Provider>
    ),
  ],
}

export const Default = {
  args: {
    children: (
      <div style={{ padding: '20px' }}>
        <h1>Dashboard Content</h1>
        <p>This is the main content of the dashboard layout.</p>
      </div>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Dashboard Content')).toBeInTheDocument()
    await expect(canvas.getByRole('navigation')).toBeInTheDocument()
  },
}
