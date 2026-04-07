import { CippInfoBar } from '../../../components/CippCards/CippInfoBar'
import { infoBarData } from '../../fixtures/property-items'

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
