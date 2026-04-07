import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../test-utils'
import { CippInfoBar } from '../../../components/CippCards/CippInfoBar'

const sampleData = [
  { name: 'Total Users', data: '1,234' },
  { name: 'Licensed', data: '1,100' },
  { name: 'Guests', data: '134' },
  { name: 'Blocked', data: '12' },
]

describe('CippInfoBar', () => {
  it('renders all info items', () => {
    renderWithTheme(<CippInfoBar data={sampleData} isFetching={false} />)
    for (const item of sampleData) {
      expect(screen.getByText(item.name)).toBeInTheDocument()
      expect(screen.getByText(item.data)).toBeInTheDocument()
    }
  })

  it('renders skeletons when isFetching', () => {
    const { container } = renderWithTheme(<CippInfoBar data={sampleData} isFetching={true} />)
    const skeletons = container.querySelectorAll('.MuiSkeleton-root')
    expect(skeletons.length).toBe(sampleData.length)
  })

  it('renders items with tooltips', () => {
    const dataWithTooltip = [
      { name: 'Total Users', data: '1,234', toolTip: 'Total number of users' },
      { name: 'Licensed', data: '1,100' },
    ]
    renderWithTheme(<CippInfoBar data={dataWithTooltip} isFetching={false} />)
    expect(screen.getByText('Total Users')).toBeInTheDocument()
    expect(screen.getByText('1,234')).toBeInTheDocument()
    expect(screen.getByText('Licensed')).toBeInTheDocument()
    expect(screen.getByText('1,100')).toBeInTheDocument()
  })
})
