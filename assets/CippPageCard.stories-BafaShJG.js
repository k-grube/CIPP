import{j as e}from"./iframe-Kds-RheI.js";import{C as m}from"./CippHead-BbhfxruQ.js";import{B as g}from"./Box-2Y34SUcf.js";import{C as x}from"./next-head-fRTPVqVT.js";import{S as i}from"./Stack-B3YVI2gW.js";import{T as f}from"./Typography--MlFd96o.js";import{C as u}from"./Card-Dv1M4W2j.js";import"./preload-helper-PPVm8Dsz.js";import"./use-settings-C0L3nlzW.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-BssS5EDL.js";const n=o=>{const{title:a,backButtonTitle:T="Back",children:d,cardSize:c="xl",hideTitleText:p=!1,hideBackButton:C=!1,noTenantInHead:l=!1,infoBar:h}=o;return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:a,noTenant:l}),e.jsx(g,{sx:{flexGrow:1,pb:4},children:e.jsx(x,{maxWidth:c,children:e.jsxs(i,{spacing:2,children:[e.jsx(i,{spacing:2,children:p!==!0&&e.jsx("div",{children:e.jsx(f,{variant:"h4",children:a})})}),h,e.jsx(u,{children:d})]})})})]})};n.__docgenInfo={description:"",methods:[],displayName:"CippPageCard"};const I={title:"Components/CippCards/CippPageCard",component:n,tags:["autodocs"]},r={args:{title:"Page Title",children:e.jsx("p",{children:"Main page content goes here."})}},t={args:{title:"Users Overview",infoBar:e.jsx("div",{style:{padding:"12px",background:"#f5f5f5",borderRadius:4},children:"Stats here"}),children:e.jsx("p",{children:"User list content goes here."})}},s={args:{title:"Hidden Title Page",hideTitleText:!0,children:e.jsx("p",{children:"The title is not shown above this card."})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    children: <p>Main page content goes here.</p>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Users Overview',
    infoBar: <div style={{
      padding: '12px',
      background: '#f5f5f5',
      borderRadius: 4
    }}>Stats here</div>,
    children: <p>User list content goes here.</p>
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Hidden Title Page',
    hideTitleText: true,
    children: <p>The title is not shown above this card.</p>
  }
}`,...s.parameters?.docs?.source}}};const U=["Default","WithInfoBar","HiddenTitle"];export{r as Default,s as HiddenTitle,t as WithInfoBar,U as __namedExportsOrder,I as default};
