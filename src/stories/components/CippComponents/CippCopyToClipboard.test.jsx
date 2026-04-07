import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from '../../test-utils'
import { CippCopyToClipBoard } from '../../../components/CippComponents/CippCopyToClipboard'

describe('CippCopyToClipboard', () => {
  it('renders button and copies text on click', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.assign(navigator, {
      clipboard: { writeText },
    })

    const onClick = vi.fn()
    renderWithTheme(
      <CippCopyToClipBoard text="Copy me!" type="button" visible={true} onClick={onClick} />
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    await userEvent.click(button)
    expect(writeText).toHaveBeenCalledWith('Copy me!')
    expect(onClick).toHaveBeenCalled()
  })

  it('renders chip with text', () => {
    renderWithTheme(
      <CippCopyToClipBoard text="cipp-secret-key" type="chip" visible={true} />
    )
    expect(screen.getByText('cipp-secret-key')).toBeInTheDocument()
  })

  it('renders masked password and toggles visibility', async () => {
    renderWithTheme(
      <CippCopyToClipBoard text="S3cr3tP@ssw0rd" type="password" visible={true} />
    )
    expect(screen.getByText('********')).toBeInTheDocument()

    const toggleButton = screen.getAllByRole('button')[0]
    await userEvent.click(toggleButton)

    expect(screen.getByText('S3cr3tP@ssw0rd')).toBeInTheDocument()
  })
})
