import{r as v,j as e}from"./iframe-DMhi3qFE.js";import{C as m}from"./CippOffCanvas-Bmlb3oUf.js";import{B as f}from"./link-ocKDbm0K.js";import"./preload-helper-PPVm8Dsz.js";import"./action-list-item-BfMaT8UI.js";import"./createSimplePaletteValueFilter-X8Sq-umX.js";import"./useSlot-pCq8jr36.js";import"./Typography-BRPPXXao.js";import"./CippCopyToClipboard-qVaY9xj4.js";import"./index-BMp29z_Q.js";import"./index-B66fs8u6.js";import"./CircularProgress-BNkI-Cbk.js";import"./ApiCall-D9dXd0ez.js";import"./index-DjIMHIN-.js";const{fn:d,within:p,userEvent:r,expect:s}=__STORYBOOK_MODULE_TEST__,j={title:"Components/CippOffCanvas",component:m,parameters:{layout:"centered"},tags:["autodocs"],args:{onClose:d(),onNavigateUp:d(),onNavigateDown:d()}},w={displayName:"DESKTOP-ENTRA-01",userPrincipalName:"jdoe@domain.com",mdeStatus:"Active",riskLevel:"Low",nested:{osVersion:"Windows 11"}},c={args:{title:"Device Details",visible:!1,size:"md",extendedData:w,extendedInfoFields:["displayName","userPrincipalName","mdeStatus","riskLevel","nested.osVersion"],canNavigateUp:!0,canNavigateDown:!0,children:t=>e.jsx("div",{"data-testid":"custom-children",children:e.jsxs("p",{children:["Investigate UPN: ",t.userPrincipalName," in MDE Portal."]})}),footer:e.jsx("button",{type:"button",children:"Force Sync"})},render:t=>{const[a,o]=v.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(f,{variant:"contained",onClick:()=>o(!0),children:"Open offcanvas"}),e.jsx(m,{...t,visible:a,onClose:(...l)=>{o(!1),t.onClose?.(...l)}})]})},play:async({canvasElement:t,step:a,args:o})=>{const l=p(t);await a("Open the offcanvas",async()=>{await r.click(l.getByRole("button",{name:/open offcanvas/i}))});const n=p(document.body);await a("Verify Header and Content Render",async()=>{await s(n.getByText("Device Details")).toBeVisible();const i=n.getByTestId("custom-children");await s(i).toHaveTextContent("jdoe@domain.com"),await s(n.getByRole("button",{name:/force sync/i})).toBeVisible()}),await a("Test Up/Down Navigation Interactions",async()=>{const i=n.getByTitle("Previous row"),u=n.getByTitle("Next row");await r.click(i),await r.click(u),await s(o.onNavigateUp).toHaveBeenCalledTimes(1),await s(o.onNavigateDown).toHaveBeenCalledTimes(1)}),await a("Test Close Interaction",async()=>{const i=n.getByTestId("CloseIcon");await r.click(i),await s(o.onClose).toHaveBeenCalledTimes(1)})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement,
    step,
    args
  }) => {
    const canvas = within(canvasElement);
    await step('Open the offcanvas', async () => {
      await userEvent.click(canvas.getByRole('button', {
        name: /open offcanvas/i
      }));
    });

    // MUI's Drawer uses a portal, so query document.body
    const root = within(document.body);
    await step('Verify Header and Content Render', async () => {
      await expect(root.getByText('Device Details')).toBeVisible();
      const customChild = root.getByTestId('custom-children');
      await expect(customChild).toHaveTextContent('jdoe@domain.com');
      await expect(root.getByRole('button', {
        name: /force sync/i
      })).toBeVisible();
    });
    await step('Test Up/Down Navigation Interactions', async () => {
      const upButton = root.getByTitle('Previous row');
      const downButton = root.getByTitle('Next row');
      await userEvent.click(upButton);
      await userEvent.click(downButton);
      await expect(args.onNavigateUp).toHaveBeenCalledTimes(1);
      await expect(args.onNavigateDown).toHaveBeenCalledTimes(1);
    });
    await step('Test Close Interaction', async () => {
      const closeIcon = root.getByTestId('CloseIcon');
      await userEvent.click(closeIcon);
      await expect(args.onClose).toHaveBeenCalledTimes(1);
    });
  }
}`,...c.parameters?.docs?.source}}};const P=["InteractiveOffCanvas"];export{c as InteractiveOffCanvas,P as __namedExportsOrder,j as default};
