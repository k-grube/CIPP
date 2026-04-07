import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../test-utils'
import { CippPropertyListCard } from '../../../components/CippCards/CippPropertyListCard'

const sampleItems = [
  { label: 'Display Name', value: 'Alice Smith' },
  { label: 'UPN', value: 'alice@contoso.com' },
]

describe('CippPropertyListCard', () => {
  it('renders title and property items', () => {
    renderWithProviders(
      <CippPropertyListCard title="User Details" propertyItems={sampleItems} />
    )
    expect(screen.getByText('User Details')).toBeInTheDocument()
    expect(screen.getByText('Display Name')).toBeInTheDocument()
    expect(screen.getByText('Alice Smith')).toBeInTheDocument()
    expect(screen.getByText('UPN')).toBeInTheDocument()
    expect(screen.getByText('alice@contoso.com')).toBeInTheDocument()
  })

  it('renders skeletons when isFetching', () => {
    const { container } = renderWithProviders(
      <CippPropertyListCard title="Loading Card" propertyItems={sampleItems} isFetching={true} />
    )
    const skeletons = container.querySelectorAll('.MuiSkeleton-root')
    expect(skeletons.length).toBeGreaterThan(0)
  })

  it('renders in dual-column layout with 4 items', () => {
    const fourItems = [
      { label: 'Display Name', value: 'Alice Smith' },
      { label: 'UPN', value: 'alice@contoso.com' },
      { label: 'Department', value: 'Engineering' },
      { label: 'Office', value: 'Seattle' },
    ]
    renderWithProviders(
      <CippPropertyListCard title="Dual Layout" propertyItems={fourItems} layout="dual" />
    )
    expect(screen.getByText('Display Name')).toBeInTheDocument()
    expect(screen.getByText('Alice Smith')).toBeInTheDocument()
    expect(screen.getByText('Department')).toBeInTheDocument()
    expect(screen.getByText('Engineering')).toBeInTheDocument()
    expect(screen.getByText('Office')).toBeInTheDocument()
    expect(screen.getByText('Seattle')).toBeInTheDocument()
  })

  it('renders action button in card header', () => {
    renderWithProviders(
      <CippPropertyListCard
        title="Card With Action"
        propertyItems={sampleItems}
        actionButton={<button>Edit</button>}
      />
    )
    expect(screen.getByRole('button', { name: /Edit/i })).toBeInTheDocument()
  })

  it('renders card button in footer', () => {
    renderWithProviders(
      <CippPropertyListCard
        title="Card With Footer"
        propertyItems={sampleItems}
        cardButton={<button>View All</button>}
      />
    )
    expect(screen.getByRole('button', { name: /View All/i })).toBeInTheDocument()
  })
})
