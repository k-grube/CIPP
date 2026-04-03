import React from 'react'
import { http, HttpResponse } from 'msw'
import { Box } from '@mui/material'
import { SideNav } from '../../layouts/side-nav'
import { CippDataTable } from '../../components/CippTable/CippDataTable'
import { SettingsProvider } from '../../contexts/settings-context'
import { nativeMenuItems } from '../../layouts/config'
import { handlers as globalHandlers } from '../mocks/handlers'

const SIDE_NAV_WIDTH = 270
const TOP_NAV_HEIGHT = 64

export default {
  title: 'Layouts/SideNav + Table',
  decorators: [
    (Story) => (
      <SettingsProvider>
        <Story />
      </SettingsProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [
        // Override /api/me to return a valid user so SideNav renders
        http.get('/api/me', () => {
          return HttpResponse.json({
            clientPrincipal: {
              userRoles: ['admin', 'editor', 'Global Administrator'],
            },
          })
        }),
        // Include global handlers (ListUsers, listTenants, etc.)
        ...globalHandlers,
      ],
    },
  },
}

export const WithLargeDataset = {
  render: () => (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <SideNav items={nativeMenuItems} pinned={true} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: `${SIDE_NAV_WIDTH}px`,
          p: 2,
        }}
      >
        <CippDataTable
          title="API-Driven (10k rows)"
          api={{
            url: '/api/ListUsers',
            dataKey: 'Results',
          }}
          queryKey="storybook-sidenav-table-10k"
          simpleColumns={[
            'displayName',
            'userPrincipalName',
            'createdDateTime',
            'accountEnabled',
            'Severity',
            'Status',
            'department',
          ]}
          maxHeightOffset="100px"
        />
      </Box>
    </Box>
  ),
}
