import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '../../theme'
import { ActionListItem } from '../../components/action-list-item'
import { SvgIcon } from '@mui/material'

const theme = createTheme({
  colorPreset: 'orange',
  direction: 'ltr',
  paletteMode: 'light',
  contrast: 'high',
})

const renderWithTheme = (ui) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('ActionListItem', () => {
  it('renders the label text', () => {
    renderWithTheme(
      <ActionListItem
        icon={<SvgIcon fontSize="small"><path d="M0 0h24v24H0z" /></SvgIcon>}
        label="Check"
      />
    )
    expect(screen.getByText('Check')).toBeInTheDocument()
  })

  it('renders an enabled button', () => {
    renderWithTheme(
      <ActionListItem
        icon={<SvgIcon fontSize="small"><path d="M0 0h24v24H0z" /></SvgIcon>}
        label="Mark as Paid"
      />
    )
    expect(screen.getByRole('button')).toBeEnabled()
  })
})
