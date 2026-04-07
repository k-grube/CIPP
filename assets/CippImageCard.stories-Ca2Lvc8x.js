import{C as i}from"./CippImageCard-DhdIdzE-.js";import"./iframe-Kds-RheI.js";import"./preload-helper-PPVm8Dsz.js";import"./next-link-D57Jeldp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ArrowRightIcon-DYJIu55W.js";import"./Stack-B3YVI2gW.js";import"./Typography--MlFd96o.js";import"./Button-C625JZN7.js";import"./ButtonBase-BIz1bFQc.js";import"./CircularProgress-CqmdIrg0.js";import"./Box-2Y34SUcf.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,w={title:"Components/CippCards/CippImageCard",component:i,tags:["autodocs"],argTypes:{isFetching:{control:"boolean"},onButtonClick:a(),onClick:a()}},t={args:{title:"Reports Illustration",text:"This is a card showing reports and analytics.",imageUrl:"/CIPP/assets/illustrations/undraw_lost_re_xqjt.svg",linkText:"View Reports",link:"/reports"}},s={args:{title:"Onboarding Step",text:"Please complete your company profile.",imageUrl:"/CIPP/assets/illustrations/undraw_website_ij0l.svg",step:2,maxstep:5,linkText:"Continue",link:"/onboarding"}},e={args:{title:"Loading Reports",isFetching:!0,imageUrl:"/CIPP/assets/illustrations/undraw_website_ij0l.svg"}},r={args:{title:"Action Card",text:"This card triggers a custom action.",imageUrl:"/CIPP/assets/illustrations/undraw_website_ij0l.svg",linkText:"Click Me",onButtonClick:()=>alert("Button clicked!")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Reports Illustration',
    text: 'This is a card showing reports and analytics.',
    imageUrl: '/assets/illustrations/undraw_lost_re_xqjt.svg',
    linkText: 'View Reports',
    link: '/reports'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Onboarding Step',
    text: 'Please complete your company profile.',
    imageUrl: '/assets/illustrations/undraw_website_ij0l.svg',
    step: 2,
    maxstep: 5,
    linkText: 'Continue',
    link: '/onboarding'
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading Reports',
    isFetching: true,
    imageUrl: '/assets/illustrations/undraw_website_ij0l.svg'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Action Card',
    text: 'This card triggers a custom action.',
    imageUrl: '/assets/illustrations/undraw_website_ij0l.svg',
    linkText: 'Click Me',
    onButtonClick: () => alert('Button clicked!')
  }
}`,...r.parameters?.docs?.source}}};const x=["Default","StepProgress","Loading","CustomButton"];export{r as CustomButton,t as Default,e as Loading,s as StepProgress,x as __namedExportsOrder,w as default};
