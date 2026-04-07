import { CippPropertyList } from '../../../components/CippComponents/CippPropertyList'
import { tenantPropertyItems } from '../../fixtures/property-items'

export default {
  title: 'Components/CippComponents/CippPropertyList',
  component: CippPropertyList,
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
    },
    layout: {
      control: { type: 'select' },
      options: ['single', 'dual'],
    },
    isFetching: { control: 'boolean' },
    copyItems: { control: 'boolean' },
    showDivider: { control: 'boolean' },
  },
}

export const SingleLayout = {
  args: {
    propertyItems: tenantPropertyItems,
  },
}

export const DualLayout = {
  args: {
    propertyItems: tenantPropertyItems,
    layout: 'dual',
  },
}

export const Loading = {
  args: {
    propertyItems: tenantPropertyItems,
    isFetching: true,
  },
}

export const NoDividers = {
  args: {
    propertyItems: tenantPropertyItems,
    showDivider: false,
  },
}
