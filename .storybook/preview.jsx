import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initialize, mswLoader } from 'msw-storybook-addon'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { createTheme } from '../src/theme'
import { handlers } from '../src/stories/mocks/handlers'

TimeAgo.addDefaultLocale(en)
initialize()

const darkTheme = createTheme({
  colorPreset: 'orange',
  direction: 'ltr',
  paletteMode: 'dark',
  contrast: 'high',
})

const lightTheme = createTheme({
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

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers,
    },
  },
  loaders: [mswLoader],
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
    (Story) => {
      const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } },
      })
      return (
        <Provider store={mockStore}>
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </Provider>
      )
    },
  ],
}

export default preview
