import React from 'react'
import { screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../test-utils'
import CippDataTableButton from '../../../components/CippTable/CippDataTableButton'

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
