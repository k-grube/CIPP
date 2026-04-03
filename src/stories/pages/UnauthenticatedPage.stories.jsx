import React from 'react'
import { within, expect, waitFor } from 'storybook/test'
import UnauthenticatedPage from '../../pages/unauthenticated'

export default {
  title: 'Pages/Unauthenticated',
  component: UnauthenticatedPage,
  tags: ['autodocs'],
}

export const AccessDenied = {
  render: () => <UnauthenticatedPage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Wait for API calls to resolve via MSW handlers
    await waitFor(() => {
      expect(canvas.getByText('Access Denied')).toBeInTheDocument()
    })
    await expect(canvas.getByText('Permission Denied')).toBeInTheDocument()
    const loginButton = canvas.getByRole('link', { name: /Login/i })
    await expect(loginButton).toBeInTheDocument()
  },
}
