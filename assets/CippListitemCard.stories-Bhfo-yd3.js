import{j as e,c as r}from"./iframe-Kds-RheI.js";import{F as l}from"./ArrowRightIcon-DYJIu55W.js";import{F as h}from"./CubeIcon-C_-ZPJWZ.js";import{F}from"./UsersIcon-CJUa3bnw.js";import{C as N}from"./Card-Dv1M4W2j.js";import{C as v}from"./CardHeader-Dx8ZXv6f.js";import{D as x}from"./Divider-Cs7kLfLE.js";import{L as z,a as f}from"./listItemButtonClasses-yPh6NX7X.js";import{L as g,a as j}from"./ListItem-WfH4nH2e.js";import{L as u}from"./ListItemIcon-D3N0JPYR.js";import{T as c}from"./Typography--MlFd96o.js";import{S as A,B as w}from"./Button-C625JZN7.js";import{I as L}from"./IconButton-BP1WbM1J.js";import{B as T}from"./Box-2Y34SUcf.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-BssS5EDL.js";import"./useSlot-CFvr878R.js";import"./ButtonBase-BIz1bFQc.js";import"./isMuiElement-B0676mKz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CqmdIrg0.js";const B=(t,n)=>e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx(r,{fontSize:"small",children:t.icon?t.icon:e.jsx(h,{})})}),e.jsx(f,{primary:e.jsx(c,{color:"inherit",variant:"body2",children:e.jsx(c,{color:"inherit",component:"span",variant:"subtitle2",children:t[n]})})}),e.jsx(j,{children:e.jsx(L,{size:"small",children:e.jsx(r,{fontSize:"small",children:e.jsx(l,{})})})})]}),y=({isFetching:t,title:n,listitems:s=[],textKey:d,seeAllLink:C,seeAllText:S})=>((!s||s.length===0)&&(s=[{id:"no-messages",icon:e.jsx(F,{}),[d]:"No messages found. You're good to go!"}]),e.jsxs(N,{style:{width:"100%"},children:[e.jsx(v,{title:n}),e.jsx(x,{}),e.jsx(z,{children:t?[0,1,2,3].map(m=>e.jsxs(g,{divider:!0,children:[e.jsx(u,{children:e.jsx(r,{fontSize:"small",children:e.jsx(h,{})})}),e.jsx(f,{children:e.jsx(c,{color:"inherit",variant:"body2",children:e.jsx(A,{height:30})})}),e.jsx(j,{children:e.jsx(L,{size:"small",children:e.jsx(r,{fontSize:"small",children:e.jsx(l,{})})})})]},`listitem-placeholder-${m}`)):s.map((m,p)=>{const I=s.length>p+1;return e.jsx(g,{divider:I,children:B(m,d)},`listitem-${p}`)})}),e.jsx(x,{}),e.jsx(T,{sx:{py:1,px:3},children:s.length>1&&e.jsx(w,{href:C,color:"inherit",endIcon:e.jsx(r,{fontSize:"small",children:e.jsx(l,{})}),children:S})})]}));y.__docgenInfo={description:"",methods:[],displayName:"CippListItemCard",props:{listitems:{defaultValue:{value:"[]",computed:!1},required:!1}}};const Z={title:"Components/CippCards/CippListItemCard",component:y,tags:["autodocs"],argTypes:{isFetching:{control:"boolean"}}},i={args:{title:"Notifications",listitems:[{id:"1",message:"New user created"},{id:"2",message:"License assigned"}],textKey:"message",seeAllLink:"/notifications",seeAllText:"See All Notifications"}},o={args:{title:"Notifications",listitems:[],textKey:"message"}},a={args:{title:"Loading...",isFetching:!0,listitems:[],textKey:"message"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Notifications',
    listitems: [{
      id: '1',
      message: 'New user created'
    }, {
      id: '2',
      message: 'License assigned'
    }],
    textKey: 'message',
    seeAllLink: '/notifications',
    seeAllText: 'See All Notifications'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Notifications',
    listitems: [],
    textKey: 'message'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading...',
    isFetching: true,
    listitems: [],
    textKey: 'message'
  }
}`,...a.parameters?.docs?.source}}};const ee=["Default","EmptyList","Loading"];export{i as Default,o as EmptyList,a as Loading,ee as __namedExportsOrder,Z as default};
