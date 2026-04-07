import{r as p,j as e}from"./iframe-Kds-RheI.js";import{f as a}from"./CippPropertyListCard-B69cU4cl.js";import{B as m}from"./Button-C625JZN7.js";import"./preload-helper-PPVm8Dsz.js";import"./action-list-item-6Wy2TrQ_.js";import"./listItemButtonClasses-yPh6NX7X.js";import"./useSlot-CFvr878R.js";import"./ButtonBase-BIz1bFQc.js";import"./Typography--MlFd96o.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItemIcon-D3N0JPYR.js";import"./CippPropertyList-BK5becvN.js";import"./CippCopyToClipboard-CKsZoX9K.js";import"./useTheme-BssS5EDL.js";import"./utils-BsWkfC9c.js";import"./index-4rZEjlsE.js";import"./index-rMiCqmFq.js";import"./IconButton-BP1WbM1J.js";import"./CircularProgress-CqmdIrg0.js";import"./createSvgIcon-B1PB8NQb.js";import"./Chip-CyeE901q.js";import"./ListItem-WfH4nH2e.js";import"./isMuiElement-B0676mKz.js";import"./Box-2Y34SUcf.js";import"./Stack-B3YVI2gW.js";import"./ApiCall--xjQy2aX.js";import"./styled-BXFJWb_j.js";import"./CippCodeBlock-BCx0ti8E.js";import"./use-settings-C0L3nlzW.js";import"./CippButtonCard-3UVL4iP-.js";import"./Card-Dv1M4W2j.js";import"./CardHeader-Dx8ZXv6f.js";import"./Divider-Cs7kLfLE.js";import"./CardActions-BvF0OaHR.js";import"./next-link-D57Jeldp.js";import"./CippTimeAgo-z88BFROf.js";import"./Link--Y64UtRa.js";import"./UsersIcon-CJUa3bnw.js";import"./CippFormCondition-Bd3-ef2F.js";import"./index-BMFQDhFT.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,X={title:"Components/CippOffCanvas",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:o(),onNavigateUp:o(),onNavigateDown:o()}},c={displayName:"DESKTOP-ENTRA-01",userPrincipalName:"jdoe@domain.com",mdeStatus:"Active",riskLevel:"Low",nested:{osVersion:"Windows 11"}},r={args:{title:"Device Details",visible:!1,size:"md",extendedData:c,extendedInfoFields:["displayName","userPrincipalName","mdeStatus","riskLevel","nested.osVersion"],canNavigateUp:!0,canNavigateDown:!0,children:t=>e.jsx("div",{"data-testid":"custom-children",children:e.jsxs("p",{children:["Investigate UPN: ",t.userPrincipalName," in MDE Portal."]})}),footer:e.jsx("button",{type:"button",children:"Force Sync"})},render:t=>{const[s,i]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"contained",onClick:()=>i(!0),children:"Open offcanvas"}),e.jsx(a,{...t,visible:s,onClose:(...n)=>{i(!1),t.onClose?.(...n)}})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Device Details',
    visible: false,
    size: 'md',
    extendedData: mockDeviceData,
    // Maps to the nested/flat keys in our mock object
    extendedInfoFields: ['displayName', 'userPrincipalName', 'mdeStatus', 'riskLevel', 'nested.osVersion'],
    canNavigateUp: true,
    canNavigateDown: true,
    // CippOffCanvas supports a render prop pattern for children
    children: data => <div data-testid="custom-children">\r
        <p>Investigate UPN: {data.userPrincipalName} in MDE Portal.</p>\r
      </div>,
    footer: <button type="button">Force Sync</button>
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return <>\r
        <Button variant="contained" onClick={() => setOpen(true)}>\r
          Open offcanvas\r
        </Button>\r
        <CippOffCanvas {...args} visible={open} onClose={(...closeArgs) => {
        setOpen(false);
        args.onClose?.(...closeArgs);
      }} />\r
      </>;
  }
}`,...r.parameters?.docs?.source}}};const Z=["InteractiveOffCanvas"];export{r as InteractiveOffCanvas,Z as __namedExportsOrder,X as default};
