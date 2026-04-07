import React, { useState } from 'react'
import { fn } from 'storybook/test'
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

}
