import { fn } from 'storybook/test'
import { Button } from '@mui/material'
import CippButtonCard from '../../../components/CippCards/CippButtonCard'

export default {
  title: 'Components/CippCards/CippButtonCard',
  component: CippButtonCard,
  tags: ['autodocs'],
  args: {
    onAccordionChange: fn(),
  },
}

export const Default = {
  args: {
    title: 'Card Title',
    children: <p>This is the card body content.</p>,
  },
}

export const WithButton = {
  args: {
    title: 'Card with Button',
    children: <p>This card has an action button in the footer.</p>,
    CardButton: <Button variant="contained" size="small">Take Action</Button>,
  },
}

export const AccordionMode = {
  args: {
    title: 'Collapsible Section',
    component: 'accordion',
    accordionExpanded: true,
    children: <p>This content is inside an accordion panel.</p>,
    CardButton: <Button variant="outlined" size="small">View Details</Button>,
  },
}

export const Loading = {
  args: {
    title: 'Loading Card',
    isFetching: true,
    children: <p>This content is hidden while loading.</p>,
  },
}
