import { CippFormComponent } from '../../../components/CippComponents/CippFormComponent'
import { FormDecorator } from '../../utils/form-decorator'
import { departmentOptions, licenseOptions, statusOptions } from '../../fixtures/form-options'

export default {
  title: 'Components/CippComponents/CippFormComponent',
  component: CippFormComponent,
  tags: ['autodocs'],
  decorators: [FormDecorator],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'textField',
        'textFieldWithVariables',
        'password',
        'number',
        'switch',
        'checkbox',
        'radio',
        'select',
        'autoComplete',
        'richText',
        'CSVReader',
        'datePicker',
        'file',
        'hidden',
        'heading',
        'cippDataTable',
      ],
    },
  },
}

export const TextField = {
  args: {
    type: 'textField',
    name: 'displayName',
    label: 'Display Name',
  },
}

export const Password = {
  args: {
    type: 'password',
    name: 'password',
    label: 'Password',
  },
}

export const Number = {
  args: {
    type: 'number',
    name: 'age',
    label: 'Age',
  },
}

export const Switch = {
  args: {
    type: 'switch',
    name: 'enabled',
    label: 'Account Enabled',
  },
}

export const SwitchLabelAbove = {
  args: {
    type: 'switch',
    name: 'mfa',
    label: 'MFA Enabled',
    labelLocation: 'above',
  },
}

export const Checkbox = {
  args: {
    type: 'checkbox',
    name: 'agree',
    label: 'I agree to the terms',
  },
}

export const Radio = {
  args: {
    type: 'radio',
    name: 'status',
    label: 'Status',
    row: true,
    options: statusOptions,
  },
}

export const Select = {
  args: {
    type: 'select',
    name: 'department',
    label: 'Department',
    options: departmentOptions,
  },
}

export const AutoComplete = {
  args: {
    type: 'autoComplete',
    name: 'licenses',
    label: 'Assigned Licenses',
    multiple: true,
    options: licenseOptions,
  },
}

export const DatePicker = {
  args: {
    type: 'datePicker',
    name: 'startDate',
    label: 'Start Date',
  },
}

export const Heading = {
  args: {
    type: 'heading',
    label: 'User Configuration',
  },
}

export const Hidden = {
  args: {
    type: 'hidden',
    name: 'tenantId',
  },
}

export const RichText = {
  args: {
    type: 'richText',
    name: 'autoReply',
    label: 'Auto-Reply Message',
  },
}

export const WithHelperText = {
  args: {
    type: 'textField',
    name: 'email',
    label: 'Email',
    helperText: 'Enter the user principal name',
  },
}

export const WithValidation = {
  args: {
    type: 'textField',
    name: 'required',
    label: 'Required Field',
    validators: {
      required: { value: true, message: 'This field is required' },
    },
  },
}
