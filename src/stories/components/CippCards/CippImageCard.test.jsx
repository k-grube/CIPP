import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../test-utils'
import { CippImageCard } from '../../../components/CippCards/CippImageCard'

describe('CippImageCard', () => {
  it('renders title, text, and link', () => {
    renderWithTheme(
      <CippImageCard
        title="Reports Illustration"
        text="This is a card showing reports and analytics."
        imageUrl="/assets/illustrations/undraw_lost_re_xqjt.svg"
        linkText="View Reports"
        link="/reports"
      />
    )
    expect(screen.getByText('Reports Illustration')).toBeInTheDocument()
    expect(screen.getByText('This is a card showing reports and analytics.')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /View Reports/i })
    expect(link).toHaveAttribute('href', '/reports')
  })

  it('renders step progress indicator', () => {
    renderWithTheme(
      <CippImageCard
        title="Onboarding Step"
        text="Please complete your company profile."
        imageUrl="/assets/illustrations/undraw_website_ij0l.svg"
        step={2}
        maxstep={5}
        linkText="Continue"
        link="/onboarding"
      />
    )
    expect(screen.getByText('2/5')).toBeInTheDocument()
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('renders skeleton when loading', () => {
    const { container } = renderWithTheme(
      <CippImageCard
        title="Loading Reports"
        isFetching={true}
        imageUrl="/assets/illustrations/undraw_website_ij0l.svg"
      />
    )
    expect(container.querySelector('.MuiSkeleton-root')).toBeInTheDocument()
  })
})
