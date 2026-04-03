import{C as d}from"./CippCopyToClipboard-qVaY9xj4.js";import"./iframe-DMhi3qFE.js";import"./preload-helper-PPVm8Dsz.js";import"./useSlot-pCq8jr36.js";import"./createSimplePaletteValueFilter-X8Sq-umX.js";import"./index-BMp29z_Q.js";import"./index-B66fs8u6.js";import"./CircularProgress-BNkI-Cbk.js";const{fn:p,within:c,userEvent:l,expect:t,spyOn:m}=__STORYBOOK_MODULE_TEST__,C={title:"Components/CippComponents/CippCopyToClipboard",component:d,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["button","chip","password"]},visible:{control:"boolean"}},args:{onClick:p()}},a={args:{text:"Copy me!",type:"button",visible:!0},play:async({canvasElement:n,args:e})=>{const i=c(n).getByRole("button");await t(i).toBeInTheDocument();const u=typeof navigator.clipboard<"u"?m(navigator.clipboard,"writeText").mockResolvedValue(void 0):(navigator.clipboard={writeText:p().mockResolvedValue(void 0)}).writeText;await l.click(i),await t(u).toHaveBeenCalledWith("Copy me!"),await t(e.onClick).toHaveBeenCalled()}},o={args:{text:"cipp-secret-key",type:"chip",visible:!0},play:async({canvasElement:n})=>{const e=c(n);await t(e.getByText("cipp-secret-key")).toBeInTheDocument()}},s={args:{text:"S3cr3tP@ssw0rd",type:"password",visible:!0},play:async({canvasElement:n})=>{const e=c(n);await t(e.getByText("********")).toBeInTheDocument();const r=e.getAllByRole("button")[0];await l.click(r),await t(e.getByText("S3cr3tP@ssw0rd")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Copy me!',
    type: 'button',
    visible: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toBeInTheDocument();

    // Mock navigator.clipboard.writeText
    const writeText = typeof navigator.clipboard !== 'undefined' ? spyOn(navigator.clipboard, 'writeText').mockResolvedValue(undefined) : (navigator.clipboard = {
      writeText: fn().mockResolvedValue(undefined)
    }).writeText;
    await userEvent.click(button);
    await expect(writeText).toHaveBeenCalledWith('Copy me!');
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'cipp-secret-key',
    type: 'chip',
    visible: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('cipp-secret-key')).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'S3cr3tP@ssw0rd',
    type: 'password',
    visible: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('********')).toBeInTheDocument();
    const toggleButton = canvas.getAllByRole('button')[0];
    await userEvent.click(toggleButton);
    await expect(canvas.getByText('S3cr3tP@ssw0rd')).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const h=["Default","Chip","Password"];export{o as Chip,a as Default,s as Password,h as __namedExportsOrder,C as default};
