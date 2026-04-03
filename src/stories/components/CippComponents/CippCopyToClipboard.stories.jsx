import { fn, within, userEvent, expect, spyOn } from 'storybook/test'
import { CippCopyToClipBoard } from '../../../components/CippComponents/CippCopyToClipboard'

export default {
  title: 'Components/CippComponents/CippCopyToClipboard',
  component: CippCopyToClipBoard,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['button', 'chip', 'password'],
    },
    visible: { control: 'boolean' },
  },
  args: {
    onClick: fn(),
  },
}

export const Default = {
  args: {
    text: 'Copy me!',
    type: 'button',
    visible: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await expect(button).toBeInTheDocument()

    // Mock navigator.clipboard.writeText
    const writeText =
      typeof navigator.clipboard !== 'undefined'
        ? spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined)
        : (navigator.clipboard = { writeText: fn().mockResolvedValue(undefined) }).writeText

    await userEvent.click(button)
    await expect(writeText).toHaveBeenCalledWith('Copy me!')
    await expect(args.onClick).toHaveBeenCalled()
  },
}

export const Chip = {
  args: {
    text: 'cipp-secret-key',
    type: 'chip',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('cipp-secret-key')).toBeInTheDocument()
  },
}

export const Password = {
  args: {
    text: 'S3cr3tP@ssw0rd',
    type: 'password',
    visible: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('********')).toBeInTheDocument()

    const toggleButton = canvas.getAllByRole('button')[0]
    await userEvent.click(toggleButton)

    await expect(canvas.getByText('S3cr3tP@ssw0rd')).toBeInTheDocument()
  },
}
