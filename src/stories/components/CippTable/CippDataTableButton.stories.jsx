import React from 'react'
import { within, userEvent, expect, fn, waitFor } from 'storybook/test'
import CippDataTableButton from '../../../components/CippTable/CippDataTableButton'

export default {
  title: 'Components/CippTable/CippDataTableButton',
  component: CippDataTableButton,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
}

export const ArrayData = {
  args: {
    title: 'View List',
    data: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ],
    tableTitle: 'Items List',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await expect(button).toHaveTextContent('2 items')

    await userEvent.click(button)

    // Dialog renders in a portal with the real CippDataTable
    const root = within(document.body)
    await waitFor(() => {
      expect(root.getByRole('dialog')).toBeInTheDocument()
    })
  },
}

export const ObjectData = {
  args: {
    title: 'View Details',
    data: {
      'Display Name': 'John Doe',
      Email: 'john@example.com',
    },
    tableTitle: 'User Details',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('2 items')).toBeInTheDocument()
  },
}

export const EmptyData = {
  args: {
    title: 'No Data',
    data: null,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await expect(button).toHaveTextContent('No items')
    await expect(button).toBeDisabled()
  },
}
