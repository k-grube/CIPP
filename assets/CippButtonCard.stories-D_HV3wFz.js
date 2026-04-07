import{j as t}from"./iframe-Kds-RheI.js";import{C as a}from"./CippButtonCard-3UVL4iP-.js";import{B as n}from"./Button-C625JZN7.js";import"./preload-helper-PPVm8Dsz.js";import"./createSvgIcon-B1PB8NQb.js";import"./Card-Dv1M4W2j.js";import"./useTheme-BssS5EDL.js";import"./CardHeader-Dx8ZXv6f.js";import"./useSlot-CFvr878R.js";import"./ButtonBase-BIz1bFQc.js";import"./Typography--MlFd96o.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Divider-Cs7kLfLE.js";import"./CardActions-BvF0OaHR.js";import"./utils-BsWkfC9c.js";import"./index-4rZEjlsE.js";import"./index-rMiCqmFq.js";import"./CircularProgress-CqmdIrg0.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,E={title:"Components/CippCards/CippButtonCard",component:a,tags:["autodocs"],args:{onAccordionChange:s()}},o={args:{title:"Card Title",children:t.jsx("p",{children:"This is the card body content."})}},r={args:{title:"Card with Button",children:t.jsx("p",{children:"This card has an action button in the footer."}),CardButton:t.jsx(n,{variant:"contained",size:"small",children:"Take Action"})}},e={args:{title:"Collapsible Section",component:"accordion",accordionExpanded:!0,children:t.jsx("p",{children:"This content is inside an accordion panel."}),CardButton:t.jsx(n,{variant:"outlined",size:"small",children:"View Details"})}},i={args:{title:"Loading Card",isFetching:!0,children:t.jsx("p",{children:"This content is hidden while loading."})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card Title',
    children: <p>This is the card body content.</p>
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card with Button',
    children: <p>This card has an action button in the footer.</p>,
    CardButton: <Button variant="contained" size="small">Take Action</Button>
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Collapsible Section',
    component: 'accordion',
    accordionExpanded: true,
    children: <p>This content is inside an accordion panel.</p>,
    CardButton: <Button variant="outlined" size="small">View Details</Button>
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading Card',
    isFetching: true,
    children: <p>This content is hidden while loading.</p>
  }
}`,...i.parameters?.docs?.source}}};const A=["Default","WithButton","AccordionMode","Loading"];export{e as AccordionMode,o as Default,i as Loading,r as WithButton,A as __namedExportsOrder,E as default};
