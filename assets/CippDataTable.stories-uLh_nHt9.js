import{j as a,S as R}from"./iframe-Kds-RheI.js";import{i as V,E as L,D as _}from"./CippPropertyListCard-B69cU4cl.js";import{V as q}from"./CippCopyToClipboard-CKsZoX9K.js";import{c as G}from"./createSvgIcon-B1PB8NQb.js";import{C as z}from"./CheckCircle-BvgvX5_K.js";import"./preload-helper-PPVm8Dsz.js";import"./action-list-item-6Wy2TrQ_.js";import"./listItemButtonClasses-yPh6NX7X.js";import"./useSlot-CFvr878R.js";import"./ButtonBase-BIz1bFQc.js";import"./Typography--MlFd96o.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItemIcon-D3N0JPYR.js";import"./CippPropertyList-BK5becvN.js";import"./ListItem-WfH4nH2e.js";import"./isMuiElement-B0676mKz.js";import"./Box-2Y34SUcf.js";import"./Button-C625JZN7.js";import"./CircularProgress-CqmdIrg0.js";import"./Stack-B3YVI2gW.js";import"./ApiCall--xjQy2aX.js";import"./styled-BXFJWb_j.js";import"./CippCodeBlock-BCx0ti8E.js";import"./use-settings-C0L3nlzW.js";import"./CippButtonCard-3UVL4iP-.js";import"./Card-Dv1M4W2j.js";import"./useTheme-BssS5EDL.js";import"./CardHeader-Dx8ZXv6f.js";import"./Divider-Cs7kLfLE.js";import"./CardActions-BvF0OaHR.js";import"./utils-BsWkfC9c.js";import"./index-4rZEjlsE.js";import"./index-rMiCqmFq.js";import"./IconButton-BP1WbM1J.js";import"./Chip-CyeE901q.js";import"./next-link-D57Jeldp.js";import"./CippTimeAgo-z88BFROf.js";import"./Link--Y64UtRa.js";import"./UsersIcon-CJUa3bnw.js";import"./CippFormCondition-Bd3-ef2F.js";import"./index-BMFQDhFT.js";const M=G(a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12m8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8"})),{fn:i,within:K,expect:n,userEvent:B,waitFor:E}=__STORYBOOK_MODULE_TEST__,J=(e=1e4)=>{const c=["Alice","Bob","Carol","Dave","Eve","Frank","Grace","Hank","Ivy","Jack","Karen","Leo","Mia","Noah","Olivia","Paul","Quinn","Rachel","Sam","Tina"],l=["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Rodriguez","Martinez","Anderson","Taylor","Thomas","Moore","Jackson"],v=["contoso.com","fabrikam.com","northwind.com","adventure-works.com"],x=["IT","Sales","Marketing","Engineering","HR","Finance","Legal","Operations"],I=["Manager","Developer","Analyst","Director","Coordinator","Specialist","Administrator","Engineer"],O=["High","Medium","Low","Informational"],j=["Success","Failed","In Progress","Not Started","Warning"],$=["none","low","medium","high","hidden"],W=["enabled","disabled","enabledForReportingButNotEnforced"],H=["directTenant","granularDelegatedAdminPrivileges"],F=["05e9a617-0261-4cee-bb44-138d3ef5d965","06ebc4ee-1bb5-47dd-8120-11324bc54e06","f30db892-07e9-47e9-837c-80727f46fd3d","4b585984-651b-448a-9e53-3b10f069cf7f"],t=m=>m[Math.floor(Math.random()*m.length)],U=(m,r)=>{const o=new Date(m,0,1).getTime(),d=new Date(r,11,31).getTime();return new Date(o+Math.random()*(d-o)).toISOString()};return Array.from({length:e},(m,r)=>{const o=t(c),d=t(l),A=t(v),k=`${o.toLowerCase()}.${d.toLowerCase()}${r}@${A}`;return{id:`00000000-0000-0000-0000-${String(r).padStart(12,"0")}`,displayName:`${o} ${d}`,userPrincipalName:k,mail:k,createdDateTime:U(2020,2025),lastSignInDateTime:U(2024,2026),accountEnabled:Math.random()>.2,proxyAddresses:[`SMTP:${k}`,`smtp:${o.toLowerCase()}${r}@${A}`,...Math.random()>.5?[`smtp:alias${r}@${A}`]:[]],assignedLicenses:[{skuId:t(F)},...Math.random()>.5?[{skuId:t(F)}]:[]],Severity:t(O),Status:t(j),riskLevel:t($),state:t(W),info:{displayName:`${o} ${d} (Info)`},businessPhones:Math.random()>.3?[`+1-555-${String(Math.floor(Math.random()*9e3)+1e3)}`,...Math.random()>.5?[`+1-555-${String(Math.floor(Math.random()*9e3)+1e3)}`]:[]]:[],delegatedPrivilegeStatus:t(H),jobTitle:t(I),department:t(x)}})},s=J(500),P=[{displayName:"Alice Smith",mail:"alice@contoso.com",department:"IT",accountEnabled:!0,createdDateTime:"2024-01-15T10:30:00Z"},{displayName:"Bob Johnson",mail:"bob@contoso.com",department:"Sales",accountEnabled:!0,createdDateTime:"2024-03-22T14:15:00Z"},{displayName:"Carol Williams",mail:"carol@contoso.com",department:"HR",accountEnabled:!1,createdDateTime:"2023-11-01T09:00:00Z"}],Oe={title:"Components/CippTable/CippDataTable",component:V,tags:["autodocs"],args:{maxHeightOffset:"100px"},decorators:[e=>a.jsx(R,{children:a.jsx(e,{})})]},p={args:{title:"Basic User List",data:P},play:async({canvasElement:e})=>{await E(()=>{n(e.textContent).toContain("Alice Smith")},{timeout:5e3}),n(e.textContent).toContain("bob@contoso.com"),n(e.textContent).toContain("HR")}},u={args:{title:"Users (Simple Columns)",data:s.slice(0,50),simpleColumns:["displayName","mail","accountEnabled","department"]}},g={args:{title:"All Formatters (500 rows)",data:s,simpleColumns:["displayName","userPrincipalName","createdDateTime","lastSignInDateTime","accountEnabled","proxyAddresses","assignedLicenses","Severity","Status","riskLevel","state","info.displayName","businessPhones","department"]}},C={args:{title:"API-Driven (10k rows)",api:{url:"/api/ListUsers",dataKey:"Results"},queryKey:"storybook-ListUsers-10k",simpleColumns:["displayName","userPrincipalName","createdDateTime","lastSignInDateTime","accountEnabled","proxyAddresses","assignedLicenses","Severity","Status","riskLevel","state","businessPhones","department","jobTitle"]}},b={args:{title:"Users with Actions",data:s.slice(0,25),simpleColumns:["displayName","userPrincipalName","accountEnabled","Status"],actions:[{label:"View User",icon:a.jsx(q,{}),noConfirm:!0,customFunction:i()},{label:"Edit User",icon:a.jsx(L,{}),noConfirm:!0,customFunction:i()},{label:"Block Sign-in",icon:a.jsx(M,{}),color:"warning.main",noConfirm:!0,customFunction:i()},{label:"Delete User",icon:a.jsx(_,{}),color:"error.main",noConfirm:!0,customFunction:i()}]},play:async({canvasElement:e,args:c})=>{const l=K(document.body);await E(()=>{const x=e.querySelectorAll('[data-testid="MoreHorizIcon"]');n(x.length).toBeGreaterThan(0)},{timeout:5e3});const v=e.querySelectorAll('[data-testid="MoreHorizIcon"]')[0].closest("button");await B.click(v),await E(()=>{n(l.getByText("View User")).toBeVisible()},{timeout:3e3}),await n(l.getByText("Delete User")).toBeVisible(),await B.click(l.getByText("View User")),await n(c.actions[0].customFunction).toHaveBeenCalledTimes(1)}},f={args:{title:"Users with Off Canvas",data:s.slice(0,50),simpleColumns:["displayName","userPrincipalName","department","accountEnabled"],offCanvas:{title:"User Details",extendedInfoFields:["displayName","userPrincipalName","mail","department","jobTitle","accountEnabled","createdDateTime"]},offCanvasOnRowClick:!0}},S={args:{title:"Users with Actions + Off Canvas",data:s.slice(0,25),simpleColumns:["displayName","userPrincipalName","Status","accountEnabled"],actions:[{label:"Edit User",icon:a.jsx(L,{}),noConfirm:!0,customFunction:i()}],offCanvas:{title:"User Details",extendedInfoFields:["displayName","userPrincipalName","mail","department"]}}},y={args:{title:"Compact Table",data:s.slice(0,15),simpleColumns:["displayName","mail","department"],simple:!0}},h={args:{title:"No Card Wrapper",data:P,noCard:!0}},D={args:{title:"Filtered Users",data:s.slice(0,200),simpleColumns:["displayName","department","Status","accountEnabled"],filters:[{id:"department",value:"Engineering"}]}},w={args:{title:"Loading Users...",data:[],isFetching:!0,simpleColumns:["displayName","mail","department"]},play:async({canvasElement:e})=>{await E(()=>{const c=e.querySelectorAll(".MuiSkeleton-root");n(c.length).toBeGreaterThan(0)},{timeout:3e3}),n(e.textContent).not.toContain("Alice Smith")}},T={args:{title:"Sorted by Created Date",data:s.slice(0,100),simpleColumns:["displayName","createdDateTime","department","Status"],defaultSorting:[{id:"createdDateTime",desc:!0}]}},N={args:{title:"Conditional Actions",data:s.slice(0,25),simpleColumns:["displayName","accountEnabled","Status"],actions:[{label:"Enable Account",icon:a.jsx(z,{}),noConfirm:!0,customFunction:i(),condition:e=>e.accountEnabled===!1},{label:"Block Sign-in",icon:a.jsx(M,{}),color:"warning.main",noConfirm:!0,customFunction:i(),condition:e=>e.accountEnabled===!0}]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Basic User List',
    data: basicData
  },
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      expect(canvasElement.textContent).toContain('Alice Smith');
    }, {
      timeout: 5000
    });
    expect(canvasElement.textContent).toContain('bob@contoso.com');
    expect(canvasElement.textContent).toContain('HR');
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Users (Simple Columns)',
    data: richDataset.slice(0, 50),
    simpleColumns: ['displayName', 'mail', 'accountEnabled', 'department']
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'All Formatters (500 rows)',
    data: richDataset,
    simpleColumns: ['displayName', 'userPrincipalName', 'createdDateTime', 'lastSignInDateTime', 'accountEnabled', 'proxyAddresses', 'assignedLicenses', 'Severity', 'Status', 'riskLevel', 'state', 'info.displayName', 'businessPhones', 'department']
  }
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'API-Driven (10k rows)',
    api: {
      url: '/api/ListUsers',
      dataKey: 'Results'
    },
    queryKey: 'storybook-ListUsers-10k',
    simpleColumns: ['displayName', 'userPrincipalName', 'createdDateTime', 'lastSignInDateTime', 'accountEnabled', 'proxyAddresses', 'assignedLicenses', 'Severity', 'Status', 'riskLevel', 'state', 'businessPhones', 'department', 'jobTitle']
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const root = within(document.body);
    await waitFor(() => {
      const icons = canvasElement.querySelectorAll('[data-testid="MoreHorizIcon"]');
      expect(icons.length).toBeGreaterThan(0);
    }, {
      timeout: 5000
    });
    const actionButton = canvasElement.querySelectorAll('[data-testid="MoreHorizIcon"]')[0].closest('button');
    await userEvent.click(actionButton);
    await waitFor(() => {
      expect(root.getByText('View User')).toBeVisible();
    }, {
      timeout: 3000
    });
    await expect(root.getByText('Delete User')).toBeVisible();
    await userEvent.click(root.getByText('View User'));
    await expect(args.actions[0].customFunction).toHaveBeenCalledTimes(1);
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Compact Table',
    data: richDataset.slice(0, 15),
    simpleColumns: ['displayName', 'mail', 'department'],
    simple: true
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No Card Wrapper',
    data: basicData,
    noCard: true
  }
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Filtered Users',
    data: richDataset.slice(0, 200),
    simpleColumns: ['displayName', 'department', 'Status', 'accountEnabled'],
    filters: [{
      id: 'department',
      value: 'Engineering'
    }]
  }
}`,...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading Users...',
    data: [],
    isFetching: true,
    simpleColumns: ['displayName', 'mail', 'department']
  },
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      const skeletons = canvasElement.querySelectorAll('.MuiSkeleton-root');
      expect(skeletons.length).toBeGreaterThan(0);
    }, {
      timeout: 3000
    });
    expect(canvasElement.textContent).not.toContain('Alice Smith');
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Sorted by Created Date',
    data: richDataset.slice(0, 100),
    simpleColumns: ['displayName', 'createdDateTime', 'department', 'Status'],
    defaultSorting: [{
      id: 'createdDateTime',
      desc: true
    }]
  }
}`,...T.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const je=["BasicUsage","SimpleColumns","AllFormatters","LargeDataset10kApi","WithActions","WithOffCanvas","WithActionsAndOffCanvas","SimpleMode","NoCard","WithFilters","LoadingState","DefaultSorting","WithConditionalActions"];export{g as AllFormatters,p as BasicUsage,T as DefaultSorting,C as LargeDataset10kApi,w as LoadingState,h as NoCard,u as SimpleColumns,y as SimpleMode,b as WithActions,S as WithActionsAndOffCanvas,N as WithConditionalActions,D as WithFilters,f as WithOffCanvas,je as __namedExportsOrder,Oe as default};
