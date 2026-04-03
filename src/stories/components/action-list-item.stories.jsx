import { fn, expect, within } from 'storybook/test'
import { ActionList } from '../../components/action-list'
import { ActionListItem } from '../../components/action-list-item'
import { SvgIcon } from '@mui/material'
import CheckCircleIcon from '@heroicons/react/24/outline/CheckCircleIcon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ActionListItem',
  component: ActionListItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: fn(),
  },
}

export default meta

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    icon: (
      <SvgIcon fontSize="small">
        <CheckCircleIcon />
      </SvgIcon>
    ),
    label: 'Check',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Verify the label text is rendered
    await expect(canvas.getByText('Check')).toBeInTheDocument()

    // Verify the button role element is present and enabled
    const button = canvas.getByRole('button')
    await expect(button).toBeInTheDocument()
    await expect(button).toBeEnabled()
  },
}

export const Example = {
  decorators: [
    (Story) => (
      <ActionList>
        <Story />
      </ActionList>
    ),
  ],
  args: {
    label: 'Mark as Paid',
    icon: (
      <SvgIcon fontSize="small">
        <CheckCircleIcon />
      </SvgIcon>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Verify the label text is rendered
    await expect(canvas.getByText('Mark as Paid')).toBeInTheDocument()

    const button = canvas.getByRole('button')
    await expect(button).toBeEnabled()
  },
}
