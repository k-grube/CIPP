import { fn } from 'storybook/test'
import CippDataTableButton from '../../../components/CippTable/CippDataTableButton'

export default {
  title: 'Components/CippTable/CippDataTableButton',
  component: CippDataTableButton,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
}

export const ArrayData = {
  args: {
    title: 'View List',
    data: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ],
    tableTitle: 'Items List',
  },
}

export const ObjectData = {
  args: {
    title: 'View Details',
    data: {
      'Display Name': 'John Doe',
      Email: 'john@example.com',
    },
    tableTitle: 'User Details',
  },
}

export const EmptyData = {
  args: {
    title: 'No Data',
    data: null,
  },
}
