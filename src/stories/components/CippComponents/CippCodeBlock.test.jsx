import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../test-utils'
import { CippCodeBlock } from '../../../components/CippComponents/CippCodeBlock'

vi.mock('@monaco-editor/react', () => ({
  Editor: ({ value, language }) => (
    <div data-testid="monaco-editor" data-language={language}>{value}</div>
  ),
}))

describe('CippCodeBlock', () => {
  it('renders code in syntax highlighter mode (default)', () => {
    const { container } = renderWithProviders(
      <CippCodeBlock code="const x = 1;" language="javascript" />
    )
    // SyntaxHighlighter splits tokens across spans, so check the pre/code element contains all text
    const codeEl = container.querySelector('pre')
    expect(codeEl).toBeInTheDocument()
    expect(codeEl.textContent).toContain('const')
    expect(codeEl.textContent).toContain('1')
  })

  it('renders code in editor mode (type="editor")', () => {
    renderWithProviders(
      <CippCodeBlock code="const y = 2;" language="javascript" type="editor" />
    )
    expect(screen.getByTestId('monaco-editor')).toBeInTheDocument()
  })

  it('renders copy button', () => {
    renderWithProviders(
      <CippCodeBlock code="const z = 3;" language="javascript" />
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
