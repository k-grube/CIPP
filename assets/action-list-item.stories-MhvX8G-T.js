import{j as e,S as r}from"./iframe-DTaiHxvg.js";import{A as m,a as p}from"./action-list-item-DNCN_1IZ.js";import{F as i}from"./CheckCircleIcon-CRJDXQZw.js";import"./preload-helper-PPVm8Dsz.js";import"./createSimplePaletteValueFilter-NEMDFZiU.js";import"./useSlot-Ds_8gz1i.js";import"./Typography-BIJo1y5z.js";const{fn:d,expect:o,within:l}=__STORYBOOK_MODULE_TEST__,v={title:"ActionListItem",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},onClick:d()}},c={args:{icon:e.jsx(r,{fontSize:"small",children:e.jsx(i,{})}),label:"Check"},play:async({canvasElement:t})=>{const a=l(t);await o(a.getByText("Check")).toBeInTheDocument();const n=a.getByRole("button");await o(n).toBeInTheDocument(),await o(n).toBeEnabled()}},s={decorators:[t=>e.jsx(p,{children:e.jsx(t,{})})],args:{label:"Mark as Paid",icon:e.jsx(r,{fontSize:"small",children:e.jsx(i,{})})},play:async({canvasElement:t})=>{const a=l(t);await o(a.getByText("Mark as Paid")).toBeInTheDocument();const n=a.getByRole("button");await o(n).toBeEnabled()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <SvgIcon fontSize="small">\r
        <CheckCircleIcon />\r
      </SvgIcon>,
    label: 'Check'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify the label text is rendered
    await expect(canvas.getByText('Check')).toBeInTheDocument();

    // Verify the button role element is present and enabled
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();
    await expect(button).toBeEnabled();
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <ActionList>\r
        <Story />\r
      </ActionList>],
  args: {
    label: 'Mark as Paid',
    icon: <SvgIcon fontSize="small">\r
        <CheckCircleIcon />\r
      </SvgIcon>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify the label text is rendered
    await expect(canvas.getByText('Mark as Paid')).toBeInTheDocument();
    const button = canvas.getByRole('button');
    await expect(button).toBeEnabled();
  }
}`,...s.parameters?.docs?.source}}};const S=["Primary","Example"];export{s as Example,c as Primary,S as __namedExportsOrder,v as default};
