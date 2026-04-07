import{C as a}from"./CippCodeBlock-BCx0ti8E.js";import"./iframe-Kds-RheI.js";import"./preload-helper-PPVm8Dsz.js";import"./CippCopyToClipboard-CKsZoX9K.js";import"./useTheme-BssS5EDL.js";import"./useSlot-CFvr878R.js";import"./ButtonBase-BIz1bFQc.js";import"./utils-BsWkfC9c.js";import"./index-4rZEjlsE.js";import"./index-rMiCqmFq.js";import"./IconButton-BP1WbM1J.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CqmdIrg0.js";import"./createSvgIcon-B1PB8NQb.js";import"./Chip-CyeE901q.js";import"./use-settings-C0L3nlzW.js";import"./styled-BXFJWb_j.js";const L={title:"Components/CippComponents/CippCodeBlock",component:a,tags:["autodocs"],argTypes:{language:{control:{type:"select"},options:["json","powershell","javascript","bash","text"]},type:{control:{type:"select"},options:["syntax","editor"]},showLineNumbers:{control:"boolean"},wrapLongLines:{control:"boolean"},readOnly:{control:"boolean"}}},r=JSON.stringify({displayName:"Alice",mail:"alice@contoso.com",accountEnabled:!0},null,2),n=JSON.stringify({id:"72f988bf-86f1-41af-91ab-2d7cd011db47",displayName:"Contoso Ltd",defaultDomain:"contoso.onmicrosoft.com",customDomain:"contoso.com",licenseCount:250,createdDateTime:"2021-01-15T00:00:00Z",assignedPlans:[{service:"exchange",capabilityStatus:"Enabled"},{service:"SharePoint",capabilityStatus:"Enabled"}]},null,2),e={args:{code:r,language:"json",type:"syntax"}},o={args:{code:"Get-MsolUser -All | Where-Object {$_.isLicensed -eq $true} | Select-Object DisplayName, UserPrincipalName",language:"powershell",type:"syntax"}},s={args:{code:n,language:"json",type:"syntax",showLineNumbers:!0}},t={args:{code:r,language:"json",type:"editor",editorHeight:"300px"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    code: sampleJson,
    language: 'json',
    type: 'syntax'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    code: 'Get-MsolUser -All | Where-Object {$_.isLicensed -eq $true} | Select-Object DisplayName, UserPrincipalName',
    language: 'powershell',
    type: 'syntax'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    code: multilineJson,
    language: 'json',
    type: 'syntax',
    showLineNumbers: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    code: sampleJson,
    language: 'json',
    type: 'editor',
    editorHeight: '300px'
  }
}`,...t.parameters?.docs?.source}}};const w=["JsonSyntax","PowerShell","WithLineNumbers","EditorMode"];export{t as EditorMode,e as JsonSyntax,o as PowerShell,s as WithLineNumbers,w as __namedExportsOrder,L as default};
