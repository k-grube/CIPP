import"./iframe-BR2dYeKc.js";import{a as m}from"./CippOffCanvas-Ck_JXJ4U.js";import"./preload-helper-PPVm8Dsz.js";import"./action-list-item-D2df1jzm.js";import"./createSimplePaletteValueFilter-Dc6Jcc3a.js";import"./useSlot-DdvjmGFf.js";import"./Typography-G-ehh6d7.js";import"./CippCopyToClipboard-e9ZSrYXo.js";import"./index-e8EF6pVZ.js";import"./index-CITmvDFv.js";import"./CircularProgress-tbM7aGRq.js";import"./ApiCall-7mVpNvJq.js";import"./link-DDArGXbW.js";import"./index-KRictWQN.js";const{within:i,userEvent:l,expect:e,fn:p,waitFor:u}=__STORYBOOK_MODULE_TEST__,_={title:"Components/CippTable/CippDataTableButton",component:m,tags:["autodocs"],args:{onClick:p()}},n={args:{title:"View List",data:[{id:1,name:"Item 1"},{id:2,name:"Item 2"}],tableTitle:"Items List"},play:async({canvasElement:t})=>{const a=i(t).getByRole("button");await e(a).toHaveTextContent("2 items"),await l.click(a);const r=i(document.body);await u(()=>{e(r.getByRole("dialog")).toBeInTheDocument()})}},o={args:{title:"View Details",data:{"Display Name":"John Doe",Email:"john@example.com"},tableTitle:"User Details"},play:async({canvasElement:t})=>{const c=i(t);await e(c.getByText("2 items")).toBeInTheDocument()}},s={args:{title:"No Data",data:null},play:async({canvasElement:t})=>{const a=i(t).getByRole("button");await e(a).toHaveTextContent("No items"),await e(a).toBeDisabled()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'View List',
    data: [{
      id: 1,
      name: 'Item 1'
    }, {
      id: 2,
      name: 'Item 2'
    }],
    tableTitle: 'Items List'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveTextContent('2 items');
    await userEvent.click(button);

    // Dialog renders in a portal with the real CippDataTable
    const root = within(document.body);
    await waitFor(() => {
      expect(root.getByRole('dialog')).toBeInTheDocument();
    });
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'View Details',
    data: {
      'Display Name': 'John Doe',
      Email: 'john@example.com'
    },
    tableTitle: 'User Details'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('2 items')).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No Data',
    data: null
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveTextContent('No items');
    await expect(button).toBeDisabled();
  }
}`,...s.parameters?.docs?.source}}};const O=["ArrayData","ObjectData","EmptyData"];export{n as ArrayData,s as EmptyData,o as ObjectData,O as __namedExportsOrder,_ as default};
