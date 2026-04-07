import{r as T,j as e,c as R,P as a}from"./iframe-Kds-RheI.js";import{j as A,F as O,C as _,i as D}from"./CippPropertyListCard-B69cU4cl.js";import{S as n}from"./Stack-B3YVI2gW.js";import{C as S}from"./Card-Dv1M4W2j.js";import{B as p}from"./Box-2Y34SUcf.js";import{S as h}from"./Button-C625JZN7.js";import{T as d}from"./Typography--MlFd96o.js";import{I as H}from"./IconButton-BP1WbM1J.js";import{a as W}from"./CippButtonCard-3UVL4iP-.js";import{D as E}from"./Divider-Cs7kLfLE.js";import{b as x,u as N}from"./property-items-BGVeZ2Pv.js";import"./preload-helper-PPVm8Dsz.js";import"./action-list-item-6Wy2TrQ_.js";import"./listItemButtonClasses-yPh6NX7X.js";import"./useSlot-CFvr878R.js";import"./ButtonBase-BIz1bFQc.js";import"./ListItemIcon-D3N0JPYR.js";import"./CippPropertyList-BK5becvN.js";import"./CippCopyToClipboard-CKsZoX9K.js";import"./useTheme-BssS5EDL.js";import"./utils-BsWkfC9c.js";import"./index-4rZEjlsE.js";import"./index-rMiCqmFq.js";import"./createSvgIcon-B1PB8NQb.js";import"./Chip-CyeE901q.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ListItem-WfH4nH2e.js";import"./isMuiElement-B0676mKz.js";import"./ApiCall--xjQy2aX.js";import"./styled-BXFJWb_j.js";import"./CippCodeBlock-BCx0ti8E.js";import"./use-settings-C0L3nlzW.js";import"./next-link-D57Jeldp.js";import"./CircularProgress-CqmdIrg0.js";import"./CippTimeAgo-z88BFROf.js";import"./Link--Y64UtRa.js";import"./UsersIcon-CJUa3bnw.js";import"./CardHeader-Dx8ZXv6f.js";import"./CardActions-BvF0OaHR.js";import"./CippFormCondition-Bd3-ef2F.js";import"./index-BMFQDhFT.js";const L=i=>{const{items:s=[],isCollapsible:l=!1,isFetching:u=!1,children:K,onSelectionChange:m,selectedItems:g=[],...C}=i,[q,V]=T.useState(null),I=T.useCallback(t=>{V(o=>o===t?null:t)},[]),F=T.useCallback((t,o)=>{m&&m(o?[...g,t]:g.filter(j=>j!==t))},[m,g]),P=s.length>0;return u?e.jsx(n,{spacing:3,...C,children:[...Array(1)].map((t,o)=>e.jsx(S,{children:e.jsxs(n,{direction:"row",flexWrap:"wrap",justifyContent:"space-between",sx:{p:3},children:[e.jsx(n,{direction:"row",spacing:2,alignItems:"center",children:e.jsxs(p,{children:[e.jsx(h,{variant:"text",width:80}),e.jsx(h,{variant:"text",width:120})]})}),e.jsxs(n,{alignItems:"center",direction:"row",spacing:2,children:[e.jsx(h,{variant:"text",width:60}),e.jsx(h,{variant:"circular",width:24,height:24})]})]})},o))}):e.jsx(n,{spacing:3,...C,children:P?e.jsx(S,{children:e.jsx(n,{component:"ul",divider:e.jsx(E,{}),sx:{listStyle:"none",m:0,p:0},children:s.map(t=>{const o=q===t.id,j=t.statusColor||"neutral.500";return e.jsxs("li",{children:[e.jsxs(n,{direction:"row",justifyContent:"space-between",sx:{p:3,...l&&{cursor:"pointer","&:hover":{bgcolor:"action.hover"}}},onClick:l?()=>I(t.id):void 0,children:[e.jsxs(n,{direction:"row",spacing:2,alignItems:"center",sx:{flex:1,minWidth:0},children:[m&&e.jsx(A,{checked:g.includes(t.id),onChange:c=>{c.stopPropagation(),F(t.id,c.target.checked)},onClick:c=>c.stopPropagation()}),e.jsx(p,{sx:{alignItems:"center",display:"flex",flexDirection:"column",flexShrink:0},children:typeof t.cardLabelBox=="object"?e.jsxs(e.Fragment,{children:[e.jsx(d,{color:"text.secondary",variant:"h5",children:t.cardLabelBox.cardLabelBoxHeader}),e.jsx(d,{color:"text.secondary",variant:"caption",children:t.cardLabelBox.cardLabelBoxText})]}):e.jsx(d,{color:"text.secondary",variant:"h5",children:t.cardLabelBox})}),e.jsxs(p,{sx:{flex:1,minWidth:0,pr:2},children:[e.jsx(d,{color:"text.primary",variant:"h6",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.text}),e.jsx(d,{color:"text.secondary",variant:"body2",children:t.subtext})]})]}),e.jsxs(n,{alignItems:"center",direction:"row",spacing:2,sx:{flexShrink:0},children:[t?.statusText&&e.jsxs(n,{alignItems:"center",direction:"row",spacing:1,children:[e.jsx(p,{sx:{backgroundColor:j,borderRadius:"50%",height:8,width:8}}),e.jsx(d,{variant:"body2",children:t.statusText})]}),t?.cardLabelBoxActions&&e.jsx(p,{onClick:c=>c.stopPropagation(),children:t.cardLabelBoxActions}),l&&e.jsx(H,{onClick:c=>{c.stopPropagation(),I(t.id)},children:e.jsx(R,{fontSize:"small",sx:{transition:"transform 150ms",transform:o?"rotate(180deg)":"none"},children:e.jsx(O,{})})})]})]}),l&&e.jsxs(W,{in:o,unmountOnExit:!0,children:[e.jsx(E,{}),e.jsxs(n,{spacing:1,children:[t?.propertyItems?.length>0&&e.jsx(_,{propertyItems:t.propertyItems||[],layout:C.layout||"dual",isFetching:t.isFetching||!1}),t?.table&&e.jsx(D,{...t.table}),t?.children&&e.jsx(p,{sx:{pl:3},children:t.children}),t?.actionButton&&e.jsx(p,{sx:{pl:3,pb:2},children:t.actionButton})]})]})]},t.id)})})}):e.jsx(d,{variant:"body2",children:"No items available."})})};L.propTypes={items:a.arrayOf(a.shape({id:a.oneOfType([a.string,a.number]).isRequired,cardLabelBox:a.oneOfType([a.string,a.shape({cardLabelBoxHeader:a.string,cardLabelBoxText:a.string})]).isRequired,text:a.string.isRequired,subtext:a.string,statusColor:a.string,statusText:a.string,actionButton:a.element,propertyItems:a.array,table:a.object,isFetching:a.bool,children:a.node,cardLabelBoxActions:a.element})).isRequired,isCollapsible:a.bool,isFetching:a.bool,onSelectionChange:a.func,selectedItems:a.array};L.__docgenInfo={description:"",methods:[],displayName:"CippBannerListCard",props:{items:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{id:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},cardLabelBox:{name:"union",value:[{name:"string"},{name:"shape",value:{cardLabelBoxHeader:{name:"string",required:!1},cardLabelBoxText:{name:"string",required:!1}}}],required:!0},text:{name:"string",required:!0},subtext:{name:"string",required:!1},statusColor:{name:"string",required:!1},statusText:{name:"string",required:!1},actionButton:{name:"element",required:!1},propertyItems:{name:"array",required:!1},table:{name:"object",required:!1},isFetching:{name:"bool",required:!1},children:{name:"node",required:!1},cardLabelBoxActions:{name:"element",required:!1}}}},required:!0},isCollapsible:{description:"",type:{name:"bool"},required:!1},isFetching:{description:"",type:{name:"bool"},required:!1},onSelectionChange:{description:"",type:{name:"func"},required:!1},selectedItems:{description:"",type:{name:"array"},required:!1}}};const{fn:M,within:w,expect:r,userEvent:k,waitFor:z}=__STORYBOOK_MODULE_TEST__,Fe={title:"Components/CippCards/CippBannerListCard",component:L,tags:["autodocs"],argTypes:{isFetching:{control:"boolean"},isCollapsible:{control:"boolean"}}},b={args:{items:x},play:async({canvasElement:i})=>{const s=w(i);await r(s.getByText("Password Expiration Policy")).toBeVisible(),await r(s.getByText("Conditional Access - Require MFA")).toBeVisible(),await r(s.getByText("Enabled")).toBeVisible(),await r(s.getByText("Report Only")).toBeVisible(),await r(s.getByText("Disabled")).toBeVisible()}},y={args:{isCollapsible:!0,items:[{...x[0],propertyItems:N},x[1],x[2]]},play:async({canvasElement:i})=>{const s=w(i);await r(s.getByText("Password Expiration Policy")).toBeVisible();const l=s.getAllByRole("button");await k.click(l[0]),await z(()=>{r(s.getByText("Display Name")).toBeVisible()}),r(s.getByText("Alice Smith")).toBeVisible()}},B={args:{items:x,onSelectionChange:M(),selectedItems:[]},play:async({canvasElement:i,args:s})=>{const u=w(i).getAllByRole("checkbox");await r(u).toHaveLength(3),await k.click(u[0]),await r(s.onSelectionChange).toHaveBeenCalledWith(["1"])}},v={args:{items:x,isFetching:!0}},f={args:{items:[]},play:async({canvasElement:i})=>{const s=w(i);await r(s.getByText("No items available.")).toBeVisible()}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: bannerListItems
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Password Expiration Policy')).toBeVisible();
    await expect(canvas.getByText('Conditional Access - Require MFA')).toBeVisible();
    await expect(canvas.getByText('Enabled')).toBeVisible();
    await expect(canvas.getByText('Report Only')).toBeVisible();
    await expect(canvas.getByText('Disabled')).toBeVisible();
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isCollapsible: true,
    items: [{
      ...bannerListItems[0],
      propertyItems: userPropertyItems
    }, bannerListItems[1], bannerListItems[2]]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Password Expiration Policy')).toBeVisible();
    const expandButtons = canvas.getAllByRole('button');
    await userEvent.click(expandButtons[0]);
    await waitFor(() => {
      expect(canvas.getByText('Display Name')).toBeVisible();
    });
    expect(canvas.getByText('Alice Smith')).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    items: bannerListItems,
    onSelectionChange: fn(),
    selectedItems: []
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkbox');
    await expect(checkboxes).toHaveLength(3);
    await userEvent.click(checkboxes[0]);
    await expect(args.onSelectionChange).toHaveBeenCalledWith(['1']);
  }
}`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: bannerListItems,
    isFetching: true
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('No items available.')).toBeVisible();
  }
}`,...f.parameters?.docs?.source}}};const Pe=["Basic","Collapsible","WithSelection","Loading","Empty"];export{b as Basic,y as Collapsible,f as Empty,v as Loading,B as WithSelection,Pe as __namedExportsOrder,Fe as default};
