import{j as r,c as l,P as e}from"./iframe-Kds-RheI.js";import{C as h}from"./Card-Dv1M4W2j.js";import{S as j}from"./Stack-B3YVI2gW.js";import{A as v}from"./Avatar-DqdNrP_D.js";import{F as C}from"./CubeIcon-C_-ZPJWZ.js";import{T as p}from"./Typography--MlFd96o.js";import{S as d,B as y}from"./Button-C625JZN7.js";import{D as T}from"./Divider-Cs7kLfLE.js";import{C as b}from"./CardActions-BvF0OaHR.js";import{L as S}from"./Link--Y64UtRa.js";import{F as k}from"./ArrowRightIcon-DYJIu55W.js";import"./preload-helper-PPVm8Dsz.js";import"./useTheme-BssS5EDL.js";import"./createSvgIcon-B1PB8NQb.js";import"./useSlot-CFvr878R.js";import"./ButtonBase-BIz1bFQc.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CqmdIrg0.js";const i=m=>{const{isFetching:n,actionLink:t,actionText:u,value:x,icon:c,label:f,cardSize:F,...g}=m;return r.jsxs(h,{...g,children:[r.jsxs(j,{alignItems:"center",direction:"row",spacing:2,sx:{p:2},children:[r.jsx(v,{sx:{backgroundColor:"primary.alpha12",color:"primary.main"},children:r.jsx(l,{fontSize:"small",children:c||r.jsx(C,{})})}),r.jsxs("div",{children:[r.jsx(p,{color:"text.secondary",variant:"overline",children:n?r.jsx(d,{width:150}):f}),r.jsx(p,{variant:"h6",children:n?r.jsx(d,{width:200}):x})]})]}),t&&r.jsxs(r.Fragment,{children:[r.jsx(T,{}),r.jsx(b,{sx:{px:3,py:1},children:r.jsx(y,{color:"inherit",component:S,endIcon:r.jsx(l,{fontSize:"small",children:r.jsx(k,{})}),href:t,size:"small",children:u})})]})]})};i.propTypes={action:e.node,icon:e.node,label:e.string.isRequired,value:e.number.isRequired};i.__docgenInfo={description:"",methods:[],displayName:"CippInfoCard",props:{action:{description:"",type:{name:"node"},required:!1},icon:{description:"",type:{name:"node"},required:!1},label:{description:"",type:{name:"string"},required:!0},value:{description:"",type:{name:"number"},required:!0}}};const G={title:"Components/CippCards/CippInfoCard",component:i,tags:["autodocs"],argTypes:{isFetching:{control:"boolean"}}},o={args:{label:"Total Users",value:"1,234"}},s={args:{label:"Total Users",value:"1,234",actionLink:"/users",actionText:"View All"}},a={args:{label:"Total Users",value:"1,234",isFetching:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Users',
    value: '1,234'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Users',
    value: '1,234',
    actionLink: '/users',
    actionText: 'View All'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Users',
    value: '1,234',
    isFetching: true
  }
}`,...a.parameters?.docs?.source}}};const H=["Default","WithActionLink","Loading"];export{o as Default,a as Loading,s as WithActionLink,H as __namedExportsOrder,G as default};
