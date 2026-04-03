import{C as p}from"./CippImageCard-DI0I48mR.js";import"./iframe-DMhi3qFE.js";import"./preload-helper-PPVm8Dsz.js";import"./link-ocKDbm0K.js";import"./createSimplePaletteValueFilter-X8Sq-umX.js";import"./CircularProgress-BNkI-Cbk.js";import"./Typography-BRPPXXao.js";const{within:i,expect:n,fn:c}=__STORYBOOK_MODULE_TEST__,x={title:"Components/CippCards/CippImageCard",component:p,tags:["autodocs"],argTypes:{isFetching:{control:"boolean"},onButtonClick:c(),onClick:c()}},a={args:{title:"Reports Illustration",text:"This is a card showing reports and analytics.",imageUrl:"/assets/illustrations/undraw_lost_re_xqjt.svg",linkText:"View Reports",link:"/reports"},play:async({canvasElement:e})=>{const t=i(e);await n(t.getByText("Reports Illustration")).toBeInTheDocument(),await n(t.getByText("This is a card showing reports and analytics.")).toBeInTheDocument();const l=t.getByRole("link",{name:/View Reports/i});await n(l).toHaveAttribute("href","/reports")}},s={args:{title:"Onboarding Step",text:"Please complete your company profile.",imageUrl:"/assets/illustrations/undraw_website_ij0l.svg",step:2,maxstep:5,linkText:"Continue",link:"/onboarding"},play:async({canvasElement:e})=>{const t=i(e);await n(t.getByText("2/5")).toBeInTheDocument(),await n(t.getByRole("progressbar")).toBeInTheDocument()}},o={args:{title:"Loading Reports",isFetching:!0,imageUrl:"/assets/illustrations/undraw_website_ij0l.svg"},play:async({canvasElement:e})=>{i(e);const t=e.querySelector(".MuiSkeleton-root");await n(t).toBeInTheDocument()}},r={args:{title:"Action Card",text:"This card triggers a custom action.",imageUrl:"/assets/illustrations/undraw_website_ij0l.svg",linkText:"Click Me",onButtonClick:()=>alert("Button clicked!")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Reports Illustration',
    text: 'This is a card showing reports and analytics.',
    imageUrl: '/assets/illustrations/undraw_lost_re_xqjt.svg',
    linkText: 'View Reports',
    link: '/reports'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Reports Illustration')).toBeInTheDocument();
    await expect(canvas.getByText('This is a card showing reports and analytics.')).toBeInTheDocument();
    const link = canvas.getByRole('link', {
      name: /View Reports/i
    });
    await expect(link).toHaveAttribute('href', '/reports');
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Onboarding Step',
    text: 'Please complete your company profile.',
    imageUrl: '/assets/illustrations/undraw_website_ij0l.svg',
    step: 2,
    maxstep: 5,
    linkText: 'Continue',
    link: '/onboarding'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('2/5')).toBeInTheDocument();
    await expect(canvas.getByRole('progressbar')).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading Reports',
    isFetching: true,
    imageUrl: '/assets/illustrations/undraw_website_ij0l.svg'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const skeleton = canvasElement.querySelector('.MuiSkeleton-root');
    await expect(skeleton).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Action Card',
    text: 'This card triggers a custom action.',
    imageUrl: '/assets/illustrations/undraw_website_ij0l.svg',
    linkText: 'Click Me',
    onButtonClick: () => alert('Button clicked!')
  }
}`,...r.parameters?.docs?.source}}};const h=["Default","StepProgress","Loading","CustomButton"];export{r as CustomButton,a as Default,o as Loading,s as StepProgress,h as __namedExportsOrder,x as default};
