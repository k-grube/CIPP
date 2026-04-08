import { CippInfoBar } from '../../../components/CippCards/CippInfoBar'

const infoBarData = [
  { name: 'Total Users', data: '1,234' },
  { name: 'Licensed', data: '1,100' },
  { name: 'Guests', data: '134' },
  { name: 'Blocked', data: '12' },
]

export default {
  title: 'Components/CippCards/CippInfoBar',
  component: CippInfoBar,
  tags: ['autodocs'],
  argTypes: {
    isFetching: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    data: infoBarData,
  },
}

export const WithTooltips = {
  args: {
    data: infoBarData.map((item) => ({
      ...item,
      toolTip: `Click to view details for ${item.name}`,
    })),
  },
}

export const Loading = {
  args: {
    data: infoBarData,
    isFetching: true,
  },
}
