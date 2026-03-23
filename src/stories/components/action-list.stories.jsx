import { fn } from 'storybook/test';
import { ActionList } from '../../components/action-list';
import { ActionListItem } from '../../components/action-list-item';
import { SvgIcon } from '@mui/material';
import CheckCircleIcon from '@heroicons/react/24/outline/CheckCircleIcon';
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon';
import ReceiptRefundIcon from '@heroicons/react/24/outline/ReceiptRefundIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ActionList',
  component: ActionList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    children: []
  }
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
  }
};
