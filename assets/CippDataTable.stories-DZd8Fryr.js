import{j as a}from"./iframe-BR2dYeKc.js";import{b as B,E as A,D as W,S as R}from"./CippOffCanvas-Ck_JXJ4U.js";import{c as _,V as K}from"./CippCopyToClipboard-e9ZSrYXo.js";import{C as H}from"./CheckCircle-7N7u4Myh.js";import"./preload-helper-PPVm8Dsz.js";import"./action-list-item-D2df1jzm.js";import"./createSimplePaletteValueFilter-Dc6Jcc3a.js";import"./useSlot-DdvjmGFf.js";import"./Typography-G-ehh6d7.js";import"./ApiCall-7mVpNvJq.js";import"./link-DDArGXbW.js";import"./CircularProgress-tbM7aGRq.js";import"./index-e8EF6pVZ.js";import"./index-CITmvDFv.js";import"./index-KRictWQN.js";const k=_(a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12m8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8"})),{fn:r}=__STORYBOOK_MODULE_TEST__,J=(s=1e4)=>{const L=["Alice","Bob","Carol","Dave","Eve","Frank","Grace","Hank","Ivy","Jack","Karen","Leo","Mia","Noah","Olivia","Paul","Quinn","Rachel","Sam","Tina"],U=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Anderson","Taylor","Thomas","Moore","Jackson"],F=["contoso.com","fabrikam.com","northwind.com","adventure-works.com"],P=["IT","Sales","Marketing","Engineering","HR","Finance","Legal","Operations"],x=["Manager","Developer","Analyst","Director","Coordinator","Specialist","Administrator","Engineer"],M=["High","Medium","Low","Informational"],I=["Success","Failed","In Progress","Not Started","Warning"],O=["none","low","medium","high","hidden"],j=["enabled","disabled","enabledForReportingButNotEnforced"],$=["directTenant","granularDelegatedAdminPrivileges"],T=["05e9a617-0261-4cee-bb44-138d3ef5d965","06ebc4ee-1bb5-47dd-8120-11324bc54e06","f30db892-07e9-47e9-837c-80727f46fd3d","4b585984-651b-448a-9e53-3b10f069cf7f"],e=o=>o[Math.floor(Math.random()*o.length)],v=(o,i)=>{const n=new Date(o,0,1).getTime(),c=new Date(i,11,31).getTime();return new Date(n+Math.random()*(c-n)).toISOString()};return Array.from({length:s},(o,i)=>{const n=e(L),c=e(U),N=e(F),E=`${n.toLowerCase()}.${c.toLowerCase()}${i}@${N}`;return{id:`00000000-0000-0000-0000-${String(i).padStart(12,"0")}`,displayName:`${n} ${c}`,userPrincipalName:E,mail:E,createdDateTime:v(2020,2025),lastSignInDateTime:v(2024,2026),accountEnabled:Math.random()>.2,proxyAddresses:[`SMTP:${E}`,`smtp:${n.toLowerCase()}${i}@${N}`,...Math.random()>.5?[`smtp:alias${i}@${N}`]:[]],assignedLicenses:[{skuId:e(T)},...Math.random()>.5?[{skuId:e(T)}]:[]],Severity:e(M),Status:e(I),riskLevel:e(O),state:e(j),info:{displayName:`${n} ${c} (Info)`},businessPhones:Math.random()>.3?[`+1-555-${String(Math.floor(Math.random()*9e3)+1e3)}`,...Math.random()>.5?[`+1-555-${String(Math.floor(Math.random()*9e3)+1e3)}`]:[]]:[],delegatedPrivilegeStatus:e($),jobTitle:e(x),department:e(P)}})},t=J(500),w=[{displayName:"Alice Smith",mail:"alice@contoso.com",department:"IT",accountEnabled:!0,createdDateTime:"2024-01-15T10:30:00Z"},{displayName:"Bob Johnson",mail:"bob@contoso.com",department:"Sales",accountEnabled:!0,createdDateTime:"2024-03-22T14:15:00Z"},{displayName:"Carol Williams",mail:"carol@contoso.com",department:"HR",accountEnabled:!1,createdDateTime:"2023-11-01T09:00:00Z"}],oe={title:"Components/CippTable/CippDataTable",component:B,tags:["autodocs"],args:{maxHeightOffset:"100px"},decorators:[s=>a.jsx(R,{children:a.jsx(s,{})})]},l={args:{title:"Basic User List",data:w}},m={args:{title:"Users (Simple Columns)",data:t.slice(0,50),simpleColumns:["displayName","mail","accountEnabled","department"]}},d={args:{title:"All Formatters (500 rows)",data:t,simpleColumns:["displayName","userPrincipalName","createdDateTime","lastSignInDateTime","accountEnabled","proxyAddresses","assignedLicenses","Severity","Status","riskLevel","state","info.displayName","businessPhones","department"]}},u={args:{title:"API-Driven (10k rows)",api:{url:"/api/ListUsers",dataKey:"Results"},queryKey:"storybook-ListUsers-10k",simpleColumns:["displayName","userPrincipalName","createdDateTime","lastSignInDateTime","accountEnabled","proxyAddresses","assignedLicenses","Severity","Status","riskLevel","state","businessPhones","department","jobTitle"]}},p={args:{title:"Users with Actions",data:t.slice(0,25),simpleColumns:["displayName","userPrincipalName","accountEnabled","Status"],actions:[{label:"View User",icon:a.jsx(K,{}),noConfirm:!0,customFunction:r()},{label:"Edit User",icon:a.jsx(A,{}),noConfirm:!0,customFunction:r()},{label:"Block Sign-in",icon:a.jsx(k,{}),color:"warning.main",noConfirm:!0,customFunction:r()},{label:"Delete User",icon:a.jsx(W,{}),color:"error.main",noConfirm:!0,customFunction:r()}]}},g={args:{title:"Users with Off Canvas",data:t.slice(0,50),simpleColumns:["displayName","userPrincipalName","department","accountEnabled"],offCanvas:{title:"User Details",extendedInfoFields:["displayName","userPrincipalName","mail","department","jobTitle","accountEnabled","createdDateTime"]},offCanvasOnRowClick:!0}},f={args:{title:"Users with Actions + Off Canvas",data:t.slice(0,25),simpleColumns:["displayName","userPrincipalName","Status","accountEnabled"],actions:[{label:"Edit User",icon:a.jsx(A,{}),noConfirm:!0,customFunction:r()}],offCanvas:{title:"User Details",extendedInfoFields:["displayName","userPrincipalName","mail","department"]}}},C={args:{title:"Compact Table",data:t.slice(0,15),simpleColumns:["displayName","mail","department"],simple:!0}},b={args:{title:"No Card Wrapper",data:w,noCard:!0}},S={args:{title:"Filtered Users",data:t.slice(0,200),simpleColumns:["displayName","department","Status","accountEnabled"],filters:[{id:"department",value:"Engineering"}]}},h={args:{title:"Loading Users...",data:[],isFetching:!0,simpleColumns:["displayName","mail","department"]}},D={args:{title:"Sorted by Created Date",data:t.slice(0,100),simpleColumns:["displayName","createdDateTime","department","Status"],defaultSorting:[{id:"createdDateTime",desc:!0}]}},y={args:{title:"Conditional Actions",data:t.slice(0,25),simpleColumns:["displayName","accountEnabled","Status"],actions:[{label:"Enable Account",icon:a.jsx(H,{}),noConfirm:!0,customFunction:r(),condition:s=>s.accountEnabled===!1},{label:"Block Sign-in",icon:a.jsx(k,{}),color:"warning.main",noConfirm:!0,customFunction:r(),condition:s=>s.accountEnabled===!0}]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Basic User List',
    data: basicData
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Users (Simple Columns)',
    data: richDataset.slice(0, 50),
    simpleColumns: ['displayName', 'mail', 'accountEnabled', 'department']
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'All Formatters (500 rows)',
    data: richDataset,
    simpleColumns: ['displayName', 'userPrincipalName', 'createdDateTime', 'lastSignInDateTime', 'accountEnabled', 'proxyAddresses', 'assignedLicenses', 'Severity', 'Status', 'riskLevel', 'state', 'info.displayName', 'businessPhones', 'department']
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'API-Driven (10k rows)',
    api: {
      url: '/api/ListUsers',
      dataKey: 'Results'
    },
    queryKey: 'storybook-ListUsers-10k',
    simpleColumns: ['displayName', 'userPrincipalName', 'createdDateTime', 'lastSignInDateTime', 'accountEnabled', 'proxyAddresses', 'assignedLicenses', 'Severity', 'Status', 'riskLevel', 'state', 'businessPhones', 'department', 'jobTitle']
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Users with Actions',
    data: richDataset.slice(0, 25),
    simpleColumns: ['displayName', 'userPrincipalName', 'accountEnabled', 'Status'],
    actions: [{
      label: 'View User',
      icon: <Visibility />,
      noConfirm: true,
      customFunction: fn()
    }, {
      label: 'Edit User',
      icon: <Edit />,
      noConfirm: true,
      customFunction: fn()
    }, {
      label: 'Block Sign-in',
      icon: <Block />,
      color: 'warning.main',
      noConfirm: true,
      customFunction: fn()
    }, {
      label: 'Delete User',
      icon: <Delete />,
      color: 'error.main',
      noConfirm: true,
      customFunction: fn()
    }]
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Users with Off Canvas',
    data: richDataset.slice(0, 50),
    simpleColumns: ['displayName', 'userPrincipalName', 'department', 'accountEnabled'],
    offCanvas: {
      title: 'User Details',
      extendedInfoFields: ['displayName', 'userPrincipalName', 'mail', 'department', 'jobTitle', 'accountEnabled', 'createdDateTime']
    },
    offCanvasOnRowClick: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Users with Actions + Off Canvas',
    data: richDataset.slice(0, 25),
    simpleColumns: ['displayName', 'userPrincipalName', 'Status', 'accountEnabled'],
    actions: [{
      label: 'Edit User',
      icon: <Edit />,
      noConfirm: true,
      customFunction: fn()
    }],
    offCanvas: {
      title: 'User Details',
      extendedInfoFields: ['displayName', 'userPrincipalName', 'mail', 'department']
    }
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Compact Table',
    data: richDataset.slice(0, 15),
    simpleColumns: ['displayName', 'mail', 'department'],
    simple: true
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No Card Wrapper',
    data: basicData,
    noCard: true
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Filtered Users',
    data: richDataset.slice(0, 200),
    simpleColumns: ['displayName', 'department', 'Status', 'accountEnabled'],
    filters: [{
      id: 'department',
      value: 'Engineering'
    }]
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading Users...',
    data: [],
    isFetching: true,
    simpleColumns: ['displayName', 'mail', 'department']
  }
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Sorted by Created Date',
    data: richDataset.slice(0, 100),
    simpleColumns: ['displayName', 'createdDateTime', 'department', 'Status'],
    defaultSorting: [{
      id: 'createdDateTime',
      desc: true
    }]
  }
}`,...D.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Conditional Actions',
    data: richDataset.slice(0, 25),
    simpleColumns: ['displayName', 'accountEnabled', 'Status'],
    actions: [{
      label: 'Enable Account',
      icon: <CheckCircle />,
      noConfirm: true,
      customFunction: fn(),
      condition: row => row.accountEnabled === false
    }, {
      label: 'Block Sign-in',
      icon: <Block />,
      color: 'warning.main',
      noConfirm: true,
      customFunction: fn(),
      condition: row => row.accountEnabled === true
    }]
  }
}`,...y.parameters?.docs?.source}}};const ce=["BasicUsage","SimpleColumns","AllFormatters","LargeDataset10kApi","WithActions","WithOffCanvas","WithActionsAndOffCanvas","SimpleMode","NoCard","WithFilters","LoadingState","DefaultSorting","WithConditionalActions"];export{d as AllFormatters,l as BasicUsage,D as DefaultSorting,u as LargeDataset10kApi,h as LoadingState,b as NoCard,m as SimpleColumns,C as SimpleMode,p as WithActions,f as WithActionsAndOffCanvas,y as WithConditionalActions,S as WithFilters,g as WithOffCanvas,ce as __namedExportsOrder,oe as default};
