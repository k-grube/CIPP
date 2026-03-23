import React from 'react'
import { fn, within, userEvent, expect } from 'storybook/test'
import { CippOffCanvas } from '../../../components/CippComponents/CippOffCanvas'

export default {
  title: 'Components/CippOffCanvas',
  component: CippOffCanvas,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // fn() automatically creates spies so we can assert if these actions were fired
  args: {
    onClose: fn(),
    onNavigateUp: fn(),
    onNavigateDown: fn(),
  },
}

// Realistic mock data for the extendedData prop
const mockDeviceData = {
  displayName: 'DESKTOP-ENTRA-01',
  userPrincipalName: 'jdoe@domain.com',
  mdeStatus: 'Active',
  riskLevel: 'Low',
  nested: {
    osVersion: 'Windows 11',
  },
}

export const InteractiveOffCanvas = {
  args: {
    title: 'Device Details',
    visible: true,
    size: 'md',
    extendedData: mockDeviceData,
    // Maps to the nested/flat keys in our mock object
    extendedInfoFields: [
      'displayName',
      'userPrincipalName',
      'mdeStatus',
      'riskLevel',
      'nested.osVersion',
    ],
    canNavigateUp: true,
    canNavigateDown: true,
    // CippOffCanvas supports a render prop pattern for children
    children: (data) => (
      <div data-testid="custom-children">
        <p>Investigate UPN: {data.userPrincipalName} in MDE Portal.</p>
      </div>
    ),
    footer: <button type="button">Force Sync</button>,
  },

  play: async ({ args, step }) => {
    // ⚠️ CRITICAL GOTCHA: MUI's <Drawer> uses React Portals.
    // It renders outside the standard Storybook `canvasElement`.
    // Therefore, we MUST query `document.body` to find the drawer's content.
    const root = within(document.body)

    await step('Verify Header and Content Render', async () => {
      // Assert the title passed in args is visible
      await expect(root.getByText('Device Details')).toBeVisible()

      // Assert the children render prop correctly received and displayed the data
      const customChild = root.getByTestId('custom-children')
      await expect(customChild).toHaveTextContent('jdoe@domain.com')

      // Assert the footer is rendered
      await expect(root.getByRole('button', { name: /force sync/i })).toBeVisible()
    })

    await step('Test Up/Down Navigation Interactions', async () => {
      // Find the arrow icon buttons by their title attributes
      const upButton = root.getByTitle('Previous row')
      const downButton = root.getByTitle('Next row')

      // Simulate user clicks
      await userEvent.click(upButton)
      await userEvent.click(downButton)

      // Assert that the component successfully called our mocked fn() props
      await expect(args.onNavigateUp).toHaveBeenCalledTimes(1)
      await expect(args.onNavigateDown).toHaveBeenCalledTimes(1)
    })

    await step('Test Close Interaction', async () => {
      // MUI icons automatically get a data-testid matching their icon name
      const closeIcon = root.getByTestId('CloseIcon')

      await userEvent.click(closeIcon)
      await expect(args.onClose).toHaveBeenCalledTimes(1)
    })
  },
}
