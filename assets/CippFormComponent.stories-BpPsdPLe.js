import{k as b}from"./CippPropertyListCard-B69cU4cl.js";import{F as y}from"./form-decorator-BmHTclHl.js";import"./iframe-Kds-RheI.js";import"./preload-helper-PPVm8Dsz.js";import"./action-list-item-6Wy2TrQ_.js";import"./listItemButtonClasses-yPh6NX7X.js";import"./useSlot-CFvr878R.js";import"./ButtonBase-BIz1bFQc.js";import"./Typography--MlFd96o.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItemIcon-D3N0JPYR.js";import"./CippPropertyList-BK5becvN.js";import"./CippCopyToClipboard-CKsZoX9K.js";import"./useTheme-BssS5EDL.js";import"./utils-BsWkfC9c.js";import"./index-4rZEjlsE.js";import"./index-rMiCqmFq.js";import"./IconButton-BP1WbM1J.js";import"./CircularProgress-CqmdIrg0.js";import"./createSvgIcon-B1PB8NQb.js";import"./Chip-CyeE901q.js";import"./ListItem-WfH4nH2e.js";import"./isMuiElement-B0676mKz.js";import"./Box-2Y34SUcf.js";import"./Button-C625JZN7.js";import"./Stack-B3YVI2gW.js";import"./ApiCall--xjQy2aX.js";import"./styled-BXFJWb_j.js";import"./CippCodeBlock-BCx0ti8E.js";import"./use-settings-C0L3nlzW.js";import"./CippButtonCard-3UVL4iP-.js";import"./Card-Dv1M4W2j.js";import"./CardHeader-Dx8ZXv6f.js";import"./Divider-Cs7kLfLE.js";import"./CardActions-BvF0OaHR.js";import"./next-link-D57Jeldp.js";import"./CippTimeAgo-z88BFROf.js";import"./Link--Y64UtRa.js";import"./UsersIcon-CJUa3bnw.js";import"./CippFormCondition-Bd3-ef2F.js";import"./index-BMFQDhFT.js";const h=[{label:"Engineering",value:"engineering"},{label:"Sales",value:"sales"},{label:"Marketing",value:"marketing"},{label:"Human Resources",value:"hr"},{label:"Finance",value:"finance"},{label:"Legal",value:"legal"},{label:"IT",value:"it"},{label:"Operations",value:"operations"}],x=[{label:"Microsoft 365 E3",value:"M365_E3"},{label:"Microsoft 365 E5",value:"M365_E5"},{label:"Microsoft 365 Business Basic",value:"M365_BB"},{label:"Microsoft 365 Business Premium",value:"M365_BP"},{label:"Exchange Online Plan 1",value:"EXO_P1"},{label:"Exchange Online Plan 2",value:"EXO_P2"}],S=[{label:"Enabled",value:"enabled"},{label:"Disabled",value:"disabled"},{label:"Report Only",value:"reportOnly"}],ie={title:"Components/CippComponents/CippFormComponent",component:b,tags:["autodocs"],decorators:[y],argTypes:{type:{control:{type:"select"},options:["textField","textFieldWithVariables","password","number","switch","checkbox","radio","select","autoComplete","richText","CSVReader","datePicker","file","hidden","heading","cippDataTable"]}}},e={args:{type:"textField",name:"displayName",label:"Display Name"}},a={args:{type:"password",name:"password",label:"Password"}},r={args:{type:"number",name:"age",label:"Age"}},t={args:{type:"switch",name:"enabled",label:"Account Enabled"}},s={args:{type:"switch",name:"mfa",label:"MFA Enabled",labelLocation:"above"}},o={args:{type:"checkbox",name:"agree",label:"I agree to the terms"}},n={args:{type:"radio",name:"status",label:"Status",row:!0,options:S}},i={args:{type:"select",name:"department",label:"Department",options:h}},l={args:{type:"autoComplete",name:"licenses",label:"Assigned Licenses",multiple:!0,options:x}},p={args:{type:"datePicker",name:"startDate",label:"Start Date"}},m={args:{type:"heading",label:"User Configuration"}},c={args:{type:"hidden",name:"tenantId"}},d={args:{type:"richText",name:"autoReply",label:"Auto-Reply Message"}},u={args:{type:"textField",name:"email",label:"Email",helperText:"Enter the user principal name"}},g={args:{type:"textField",name:"required",label:"Required Field",validators:{required:{value:!0,message:"This field is required"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'textField',
    name: 'displayName',
    label: 'Display Name'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    name: 'password',
    label: 'Password'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    name: 'age',
    label: 'Age'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'switch',
    name: 'enabled',
    label: 'Account Enabled'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'switch',
    name: 'mfa',
    label: 'MFA Enabled',
    labelLocation: 'above'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    name: 'agree',
    label: 'I agree to the terms'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'radio',
    name: 'status',
    label: 'Status',
    row: true,
    options: statusOptions
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'select',
    name: 'department',
    label: 'Department',
    options: departmentOptions
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'autoComplete',
    name: 'licenses',
    label: 'Assigned Licenses',
    multiple: true,
    options: licenseOptions
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'datePicker',
    name: 'startDate',
    label: 'Start Date'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'heading',
    label: 'User Configuration'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'hidden',
    name: 'tenantId'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'richText',
    name: 'autoReply',
    label: 'Auto-Reply Message'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'textField',
    name: 'email',
    label: 'Email',
    helperText: 'Enter the user principal name'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'textField',
    name: 'required',
    label: 'Required Field',
    validators: {
      required: {
        value: true,
        message: 'This field is required'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const le=["TextField","Password","Number","Switch","SwitchLabelAbove","Checkbox","Radio","Select","AutoComplete","DatePicker","Heading","Hidden","RichText","WithHelperText","WithValidation"];export{l as AutoComplete,o as Checkbox,p as DatePicker,m as Heading,c as Hidden,r as Number,a as Password,n as Radio,d as RichText,i as Select,t as Switch,s as SwitchLabelAbove,e as TextField,u as WithHelperText,g as WithValidation,le as __namedExportsOrder,ie as default};
