import { CippPropertyListCard } from '../../../components/CippCards/CippPropertyListCard'
import { userPropertyItems } from '../../fixtures/property-items'

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
