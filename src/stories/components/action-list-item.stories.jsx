import { fn, expect, within } from 'storybook/test';
import { ActionList } from '../../components/action-list';
import { ActionListItem } from '../../components/action-list-item';
import { SvgIcon } from '@mui/material';
import CheckCircleIcon from '@heroicons/react/24/outline/CheckCircleIcon';
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon';
import ReceiptRefundIcon from '@heroicons/react/24/outline/ReceiptRefundIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ActionListItem',
  component: ActionListItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: fn()
  }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    icon: <SvgIcon fontSize="small"><CheckCircleIcon/></SvgIcon>,
    label: 'Check'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify the label text is rendered
    await expect(canvas.getByText('Check')).toBeInTheDocument();

    // Verify the button role element is present and enabled
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toBeEnabled();
  },
};

export const Example = {
  args: {
    children: [
      <ActionListItem
        icon={
          <SvgIcon fontSize="small">
            <CheckCircleIcon/>
          </SvgIcon>
        }
        label="Mark as Paid"
      />,
      <ActionListItem
        disabled
        icon={
          <SvgIcon fontSize="small">
            <DocumentDuplicateIcon/>
          </SvgIcon>
        }
        label="Duplicate Order"
      />,
      <ActionListItem
        icon={
          <SvgIcon fontSize="small">
            <ReceiptRefundIcon/>
          </SvgIcon>
        }
        label="Request a Refund"
      />
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify all three action list item labels are rendered
    await expect(canvas.getByText('Mark as Paid')).toBeInTheDocument();
    await expect(canvas.getByText('Duplicate Order')).toBeInTheDocument();
    await expect(canvas.getByText('Request a Refund')).toBeInTheDocument();

    const buttons = canvas.getAllByRole('button');

    // Find the disabled button (Duplicate Order)
    const disabledButton = buttons.find(
      (btn) => within(btn).queryByText('Duplicate Order') !== null
    );
    await expect(disabledButton).toHaveAttribute('disabled');

    // Find enabled buttons and verify they are clickable
    const markAsPaidButton = buttons.find(
      (btn) => within(btn).queryByText('Mark as Paid') !== null
    );
    const refundButton = buttons.find(
      (btn) => within(btn).queryByText('Request a Refund') !== null
    );

    await expect(markAsPaidButton).toBeEnabled();
    await expect(refundButton).toBeEnabled();
  },
};
