import{j as e}from"./iframe-Kds-RheI.js";import{C as r}from"./CippFormCondition-Bd3-ef2F.js";import{F as i}from"./form-decorator-BmHTclHl.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Components/CippComponents/CippFormCondition",component:r,tags:["autodocs"],decorators:[i],argTypes:{compareType:{control:{type:"select"},options:["is","isNot","contains","doesNotContain","greaterThan","lessThan","hasValue","regex","arrayLength","labelEq","labelContains","valueEq","valueNotEq","valueContains","isOneOf","isNotOneOf"]},action:{control:{type:"select"},options:["hide","disable"]}}},a={args:{defaultValues:{status:"active"},field:"status",compareType:"is",compareValue:"active",children:e.jsx("p",{children:"This content is visible because status is active"})}},s={args:{defaultValues:{status:"inactive"},field:"status",compareType:"is",compareValue:"active",children:e.jsx("p",{children:"This content is visible because status is active"})}},t={args:{defaultValues:{toggle:!1},field:"toggle",compareType:"is",compareValue:!0,action:"disable",children:e.jsx("button",{children:"Submit"})}},n={args:{defaultValues:{name:"John"},field:"name",compareType:"hasValue",children:e.jsx("p",{children:"Name has a value"})}},o={args:{defaultValues:{},field:"anything",compareType:"is",compareValue:"anything",disabled:!0,children:e.jsx("button",{children:"Always Disabled"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValues: {
      status: 'active'
    },
    field: 'status',
    compareType: 'is',
    compareValue: 'active',
    children: <p>This content is visible because status is active</p>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValues: {
      status: 'inactive'
    },
    field: 'status',
    compareType: 'is',
    compareValue: 'active',
    children: <p>This content is visible because status is active</p>
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValues: {
      toggle: false
    },
    field: 'toggle',
    compareType: 'is',
    compareValue: true,
    action: 'disable',
    children: <button>Submit</button>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValues: {
      name: 'John'
    },
    field: 'name',
    compareType: 'hasValue',
    children: <p>Name has a value</p>
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValues: {},
    field: 'anything',
    compareType: 'is',
    compareValue: 'anything',
    disabled: true,
    children: <button>Always Disabled</button>
  }
}`,...o.parameters?.docs?.source}}};const m=["ConditionMet","ConditionNotMet","DisableAction","HasValue","Disabled"];export{a as ConditionMet,s as ConditionNotMet,t as DisableAction,o as Disabled,n as HasValue,m as __namedExportsOrder,d as default};
