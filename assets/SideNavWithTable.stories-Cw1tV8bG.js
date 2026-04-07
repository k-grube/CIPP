import{h as o,a,H as s,j as t,S as m}from"./iframe-Kds-RheI.js";import{S as p,n}from"./config-n1sdURaG.js";import{i as l}from"./CippPropertyListCard-B69cU4cl.js";import{B as r}from"./Box-2Y34SUcf.js";import"./preload-helper-PPVm8Dsz.js";import"./next-link-D57Jeldp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-B1PB8NQb.js";import"./ApiCall--xjQy2aX.js";import"./styled-BXFJWb_j.js";import"./isMuiElement-B0676mKz.js";import"./use-settings-C0L3nlzW.js";import"./Stack-B3YVI2gW.js";import"./ButtonBase-BIz1bFQc.js";import"./CippButtonCard-3UVL4iP-.js";import"./Card-Dv1M4W2j.js";import"./useTheme-BssS5EDL.js";import"./CardHeader-Dx8ZXv6f.js";import"./useSlot-CFvr878R.js";import"./Typography--MlFd96o.js";import"./Divider-Cs7kLfLE.js";import"./Button-C625JZN7.js";import"./CircularProgress-CqmdIrg0.js";import"./CardActions-BvF0OaHR.js";import"./utils-BsWkfC9c.js";import"./index-4rZEjlsE.js";import"./index-rMiCqmFq.js";import"./IconButton-BP1WbM1J.js";import"./CippCopyToClipboard-CKsZoX9K.js";import"./Chip-CyeE901q.js";import"./UsersIcon-CJUa3bnw.js";import"./Laptop-Dbv8DE3W.js";import"./action-list-item-6Wy2TrQ_.js";import"./listItemButtonClasses-yPh6NX7X.js";import"./ListItemIcon-D3N0JPYR.js";import"./CippPropertyList-BK5becvN.js";import"./ListItem-WfH4nH2e.js";import"./CippCodeBlock-BCx0ti8E.js";import"./CippTimeAgo-z88BFROf.js";import"./Link--Y64UtRa.js";import"./CippFormCondition-Bd3-ef2F.js";import"./index-BMFQDhFT.js";const d=270,tt={title:"Layouts/SideNav + Table",decorators:[i=>t.jsx(m,{children:t.jsx(i,{})})],parameters:{layout:"fullscreen",msw:{handlers:[a.get("/api/me",()=>s.json({clientPrincipal:{userRoles:["admin","editor","Global Administrator"]}})),...o]}}},e={render:()=>t.jsxs(r,{sx:{display:"flex",minHeight:"100vh"},children:[t.jsx(p,{items:n,pinned:!0}),t.jsx(r,{component:"main",sx:{flexGrow:1,ml:`${d}px`,p:2},children:t.jsx(l,{title:"API-Driven (10k rows)",api:{url:"/api/ListUsers",dataKey:"Results"},queryKey:"storybook-sidenav-table-10k",simpleColumns:["displayName","userPrincipalName","createdDateTime","accountEnabled","Severity","Status","department"],maxHeightOffset:"100px"})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const et=["WithLargeDataset"];export{e as WithLargeDataset,et as __namedExportsOrder,tt as default};
