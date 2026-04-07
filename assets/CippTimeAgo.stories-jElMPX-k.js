import{C as s}from"./CippTimeAgo-z88BFROf.js";import"./iframe-Kds-RheI.js";import"./preload-helper-PPVm8Dsz.js";import"./Chip-CyeE901q.js";import"./createSvgIcon-B1PB8NQb.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-CFvr878R.js";import"./ButtonBase-BIz1bFQc.js";const l={title:"Components/CippComponents/CippTimeAgo",component:s,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","chip"]},timeStyle:{control:{type:"select"},options:["round-minute","round","mini","short","long"]}}},e={args:{data:new Date(Date.now()-3e5).toISOString(),type:"text"}},t={args:{data:"2024-01-15T10:30:00Z",type:"text"}},a={args:{data:new Date(Date.now()-36e5).toISOString(),type:"chip"}},r={args:{data:"not-a-date",type:"text"}},o={args:{data:0,type:"text"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: new Date(Date.now() - 300000).toISOString(),
    type: 'text'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: '2024-01-15T10:30:00Z',
    type: 'text'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: new Date(Date.now() - 3600000).toISOString(),
    type: 'chip'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: 'not-a-date',
    type: 'text'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: 0,
    type: 'text'
  }
}`,...o.parameters?.docs?.source}}};const y=["RecentDate","OldDate","ChipType","InvalidDate","Never"];export{a as ChipType,r as InvalidDate,o as Never,t as OldDate,e as RecentDate,y as __namedExportsOrder,l as default};
