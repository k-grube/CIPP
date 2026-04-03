import React, { useState } from 'react'
import { fn, within, userEvent, expect } from 'storybook/test'
import { Button } from '@mui/material'
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
    visible: false,
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

  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open offcanvas
        </Button>
        <CippOffCanvas
          {...args}
          visible={open}
          onClose={(...closeArgs) => {
            setOpen(false)
            args.onClose?.(...closeArgs)
          }}
        />
      </>
    )
  },

  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)

    await step('Open the offcanvas', async () => {
      await userEvent.click(canvas.getByRole('button', { name: /open offcanvas/i }))
    })

    // MUI's Drawer uses a portal, so query document.body
    const root = within(document.body)

    await step('Verify Header and Content Render', async () => {
      await expect(root.getByText('Device Details')).toBeVisible()

      const customChild = root.getByTestId('custom-children')
      await expect(customChild).toHaveTextContent('jdoe@domain.com')

      await expect(root.getByRole('button', { name: /force sync/i })).toBeVisible()
    })

    await step('Test Up/Down Navigation Interactions', async () => {
      const upButton = root.getByTitle('Previous row')
      const downButton = root.getByTitle('Next row')

      await userEvent.click(upButton)
      await userEvent.click(downButton)

      await expect(args.onNavigateUp).toHaveBeenCalledTimes(1)
      await expect(args.onNavigateDown).toHaveBeenCalledTimes(1)
    })

    await step('Test Close Interaction', async () => {
      const closeIcon = root.getByTestId('CloseIcon')

      await userEvent.click(closeIcon)
      await expect(args.onClose).toHaveBeenCalledTimes(1)
    })
  },
}
