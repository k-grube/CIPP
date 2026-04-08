import { CippPropertyListCard } from '../../../components/CippCards/CippPropertyListCard'

const userPropertyItems = [
  { label: 'Display Name', value: 'Alice Smith' },
  { label: 'UPN', value: 'alice@contoso.com' },
  { label: 'Department', value: 'Engineering' },
  { label: 'Job Title', value: 'Senior Developer' },
  { label: 'Location', value: 'Seattle, WA' },
  { label: 'Account Enabled', value: 'Yes' },
  { label: 'MFA Status', value: 'Enabled' },
  { label: 'Last Sign-In', value: '2026-04-05T14:30:00Z' },
]

export default {
  title: 'Components/CippCards/CippPropertyListCard',
  component: CippPropertyListCard,
  tags: ['autodocs'],
  argTypes: {
    isFetching: { control: 'boolean' },
    layout: { control: 'radio', options: ['single', 'dual'] },
    align: { control: 'radio', options: ['vertical', 'horizontal'] },
  },
}

export const SingleLayout = {
  args: {
    title: 'User Details',
    propertyItems: userPropertyItems,
    layout: 'single',
  },
}

export const DualLayout = {
  args: {
    title: 'User Details',
    propertyItems: userPropertyItems,
    layout: 'dual',
  },
}

export const WithActionButton = {
  args: {
    title: 'User Details',
    propertyItems: userPropertyItems,
    layout: 'single',
    actionButton: <button type="button">Edit</button>,
  },
}

export const Loading = {
  args: {
    title: 'User Details',
    propertyItems: userPropertyItems,
    isFetching: true,
  },
}
