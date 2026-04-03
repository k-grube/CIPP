import{h as s,a as i,H as o,j as e}from"./iframe-DMhi3qFE.js";import{S as m,n as p}from"./config-Cfjs-6Ig.js";import{b as n,S as l}from"./CippOffCanvas-Bmlb3oUf.js";import{a as r}from"./link-ocKDbm0K.js";import"./preload-helper-PPVm8Dsz.js";import"./action-list-item-BfMaT8UI.js";import"./createSimplePaletteValueFilter-X8Sq-umX.js";import"./useSlot-pCq8jr36.js";import"./Typography-BRPPXXao.js";import"./CippCopyToClipboard-qVaY9xj4.js";import"./index-BMp29z_Q.js";import"./index-B66fs8u6.js";import"./CircularProgress-BNkI-Cbk.js";import"./ApiCall-D9dXd0ez.js";import"./Laptop-BU_4AgIm.js";import"./index-DjIMHIN-.js";const d=270,_={title:"Layouts/SideNav + Table",decorators:[a=>e.jsx(l,{children:e.jsx(a,{})})],parameters:{layout:"fullscreen",msw:{handlers:[i.get("/api/me",()=>o.json({clientPrincipal:{userRoles:["admin","editor","Global Administrator"]}})),...s]}}},t={render:()=>e.jsxs(r,{sx:{display:"flex",minHeight:"100vh"},children:[e.jsx(m,{items:p,pinned:!0}),e.jsx(r,{component:"main",sx:{flexGrow:1,ml:`${d}px`,p:2},children:e.jsx(n,{title:"API-Driven (10k rows)",api:{url:"/api/ListUsers",dataKey:"Results"},queryKey:"storybook-sidenav-table-10k",simpleColumns:["displayName","userPrincipalName","createdDateTime","accountEnabled","Severity","Status","department"],maxHeightOffset:"100px"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
