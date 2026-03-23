import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme()

const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Story/>
  </ThemeProvider>
)

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withMuiTheme],
}

export default preview