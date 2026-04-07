import{r as d,j as e}from"./iframe-Kds-RheI.js";import{H as u,C as p}from"./next-head-fRTPVqVT.js";import{C as h}from"./CippImageCard-DhdIdzE-.js";import{A as c,G as l}from"./ApiCall--xjQy2aX.js";import{B as g}from"./Box-2Y34SUcf.js";import{S as x}from"./Stack-B3YVI2gW.js";import"./preload-helper-PPVm8Dsz.js";import"./next-link-D57Jeldp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ArrowRightIcon-DYJIu55W.js";import"./Typography--MlFd96o.js";import"./Button-C625JZN7.js";import"./ButtonBase-BIz1bFQc.js";import"./CircularProgress-CqmdIrg0.js";import"./styled-BXFJWb_j.js";import"./isMuiElement-B0676mKz.js";const r=()=>{const t=c({url:"/api/me",queryKey:"authmecipp"}),n=c({url:"/.auth/me",queryKey:"authmeswa",staleTime:12e4,refetchOnWindowFocus:!0}),a=["anonymous","authenticated"],i=d.useMemo(()=>t.isSuccess&&t.data?.clientPrincipal?.userRoles?t.data.clientPrincipal.userRoles.filter(m=>!a.includes(m)):[],[t.isSuccess,t.data?.clientPrincipal?.userRoles]);return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx("title",{children:"401 - Access Denied"})}),e.jsx(g,{sx:{flexGrow:1,py:4,height:"100vh"},children:e.jsx(p,{maxWidth:!1,children:e.jsx(x,{spacing:6,sx:{height:"100%"},children:e.jsx(l,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",sx:{height:"100%"},children:e.jsx(l,{size:{md:6,xs:12},children:(t.isSuccess||n.isSuccess)&&Array.isArray(i)&&e.jsx(h,{isFetching:!1,imageUrl:"/CIPP/assets/illustrations/undraw_online_test_re_kyfx.svg",text:t?.data?.message||"You're not allowed to be here, or are logged in under the wrong account.",title:"Access Denied",linkText:n?.data?.clientPrincipal!==null&&i.length>0?"Return to Home":"Login",link:n?.data?.clientPrincipal!==null&&i.length>0?"/":`/.auth/login/aad?post_login_redirect_uri=${encodeURIComponent(window.location.href)}`})})})})})})]})};r.__docgenInfo={description:"",methods:[],displayName:"Page"};const{within:y,expect:o,waitFor:w}=__STORYBOOK_MODULE_TEST__,U={title:"Pages/Unauthenticated",component:r,tags:["autodocs"]},s={render:()=>e.jsx(r,{}),play:async({canvasElement:t})=>{const n=y(t);await w(()=>{o(n.getByText("Access Denied")).toBeInTheDocument()}),await o(n.getByText("Permission Denied")).toBeInTheDocument();const a=n.getByRole("link",{name:/Login/i});await o(a).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <UnauthenticatedPage />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for API calls to resolve via MSW handlers
    await waitFor(() => {
      expect(canvas.getByText('Access Denied')).toBeInTheDocument();
    });
    await expect(canvas.getByText('Permission Denied')).toBeInTheDocument();
    const loginButton = canvas.getByRole('link', {
      name: /Login/i
    });
    await expect(loginButton).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const F=["AccessDenied"];export{s as AccessDenied,F as __namedExportsOrder,U as default};
