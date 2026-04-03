import{h as s,a as i,H as o,j as e}from"./iframe-DTaiHxvg.js";import{S as m,n as p}from"./config-C0WCMe4R.js";import{b as n,S as l}from"./CippOffCanvas-CWE9igGI.js";import{a as r}from"./link-axkzj7Lj.js";import"./preload-helper-PPVm8Dsz.js";import"./action-list-item-DNCN_1IZ.js";import"./createSimplePaletteValueFilter-NEMDFZiU.js";import"./useSlot-Ds_8gz1i.js";import"./Typography-BIJo1y5z.js";import"./CippCopyToClipboard-CAmKTSQj.js";import"./index-CCG3k8cM.js";import"./index-Bqrug7mA.js";import"./CircularProgress-Byl06xYe.js";import"./ApiCall-bIIZRR5s.js";import"./Laptop-C6aY7v-4.js";import"./index-DJ_y5Jyg.js";const d=270,_={title:"Layouts/SideNav + Table",decorators:[a=>e.jsx(l,{children:e.jsx(a,{})})],parameters:{layout:"fullscreen",msw:{handlers:[i.get("/api/me",()=>o.json({clientPrincipal:{userRoles:["admin","editor","Global Administrator"]}})),...s]}}},t={render:()=>e.jsxs(r,{sx:{display:"flex",minHeight:"100vh"},children:[e.jsx(m,{items:p,pinned:!0}),e.jsx(r,{component:"main",sx:{flexGrow:1,ml:`${d}px`,p:2},children:e.jsx(n,{title:"API-Driven (10k rows)",api:{url:"/api/ListUsers",dataKey:"Results"},queryKey:"storybook-sidenav-table-10k",simpleColumns:["displayName","userPrincipalName","createdDateTime","accountEnabled","Severity","Status","department"],maxHeightOffset:"100px"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    minHeight: '100vh'
  }}>\r
      <SideNav items={nativeMenuItems} pinned={true} />\r
      <Box component="main" sx={{
      flexGrow: 1,
      ml: \`\${SIDE_NAV_WIDTH}px\`,
      p: 2
    }}>\r
        <CippDataTable title="API-Driven (10k rows)" api={{
        url: '/api/ListUsers',
        dataKey: 'Results'
      }} queryKey="storybook-sidenav-table-10k" simpleColumns={['displayName', 'userPrincipalName', 'createdDateTime', 'accountEnabled', 'Severity', 'Status', 'department']} maxHeightOffset="100px" />\r
      </Box>\r
    </Box>
}`,...t.parameters?.docs?.source}}};const k=["WithLargeDataset"];export{t as WithLargeDataset,k as __namedExportsOrder,_ as default};
