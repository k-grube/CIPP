import{r as a,C as Ie,R as _,a5 as we,Z as Be,n as C,j as k,l as le,m as ce,s as Q,w as ee,k as Se,o as De}from"./iframe-Kds-RheI.js";function se(...e){const t=a.useRef(void 0),n=a.useCallback(s=>{const o=e.map(r=>{if(r==null)return null;if(typeof r=="function"){const i=r,c=i(s);return typeof c=="function"?c:()=>{i(null)}}return r.current=s,()=>{r.current=null}});return()=>{o.forEach(r=>r?.())}},e);return a.useMemo(()=>e.every(s=>s==null)?null:s=>{t.current&&(t.current(),t.current=void 0),s!=null&&(t.current=n(s))},e)}function H(e){const t=a.useRef(e);return Ie(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function ie(e){try{return e.matches(":focus-visible")}catch{}return!1}const ue={};function pe(e,t){const n=a.useRef(ue);return n.current===ue&&(n.current=e(t)),n}class G{static create(){return new G}static use(){const t=pe(G.create).current,[n,s]=a.useState(!1);return t.shouldMount=n,t.setShouldMount=s,a.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=Le(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function je(){return G.use()}function Le(){let e,t;const n=new Promise((s,o)=>{e=s,t=o});return n.resolve=e,n.reject=t,n}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,s){return n.__proto__=s,n},Z(e,t)}function ke(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Z(e,t)}const ae=_.createContext(null);function Ne(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e,t){var n=function(r){return t&&a.isValidElement(r)?t(r):r},s=Object.create(null);return e&&a.Children.map(e,function(o){return o}).forEach(function(o){s[o.key]=n(o)}),s}function Oe(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var s=Object.create(null),o=[];for(var r in e)r in t?o.length&&(s[r]=o,o=[]):o.push(r);var i,c={};for(var l in t){if(s[l])for(i=0;i<s[l].length;i++){var p=s[l][i];c[s[l][i]]=n(p)}c[l]=n(l)}for(i=0;i<o.length;i++)c[o[i]]=n(o[i]);return c}function L(e,t,n){return n[t]!=null?n[t]:e.props[t]}function $e(e,t){return te(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:L(n,"appear",e),enter:L(n,"enter",e),exit:L(n,"exit",e)})})}function Fe(e,t,n){var s=te(e.children),o=Oe(t,s);return Object.keys(o).forEach(function(r){var i=o[r];if(a.isValidElement(i)){var c=r in t,l=r in s,p=t[r],d=a.isValidElement(p)&&!p.props.in;l&&(!c||d)?o[r]=a.cloneElement(i,{onExited:n.bind(null,i),in:!0,exit:L(i,"exit",e),enter:L(i,"enter",e)}):!l&&c&&!d?o[r]=a.cloneElement(i,{in:!1}):l&&c&&a.isValidElement(p)&&(o[r]=a.cloneElement(i,{onExited:n.bind(null,i),in:p.props.in,exit:L(i,"exit",e),enter:L(i,"enter",e)}))}}),o}var Ue=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ze={component:"div",childFactory:function(t){return t}},ne=(function(e){ke(t,e);function t(s,o){var r;r=e.call(this,s,o)||this;var i=r.handleExited.bind(Ne(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var i=r.children,c=r.handleExited,l=r.firstRender;return{children:l?$e(o,c):Fe(o,i,c),firstRender:!1}},n.handleExited=function(o,r){var i=te(this.props.children);o.key in i||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(c){var l=we({},c.children);return delete l[o.key],{children:l}}))},n.render=function(){var o=this.props,r=o.component,i=o.childFactory,c=Be(o,["component","childFactory"]),l=this.state.contextValue,p=Ue(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,r===null?_.createElement(ae.Provider,{value:l},p):_.createElement(ae.Provider,{value:l},_.createElement(r,c,p))},t})(_.Component);ne.propTypes={};ne.defaultProps=ze;const Ae=[];function Ye(e){a.useEffect(e,Ae)}class re{static create(){return new re}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function _e(){const e=pe(re.create).current;return Ye(e.disposeEffect),e}function Xe(e){const{className:t,classes:n,pulsate:s=!1,rippleX:o,rippleY:r,rippleSize:i,in:c,onExited:l,timeout:p}=e,[d,h]=a.useState(!1),M=C(t,n.ripple,n.rippleVisible,s&&n.ripplePulsate),v={width:i,height:i,top:-(i/2)+r,left:-(i/2)+o},b=C(n.child,d&&n.childLeaving,s&&n.childPulsate);return!c&&!d&&h(!0),a.useEffect(()=>{if(!c&&l!=null){const B=setTimeout(l,p);return()=>{clearTimeout(B)}}},[l,c,p]),k.jsx("span",{className:M,style:v,children:k.jsx("span",{className:b})})}const g=le("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Ke=80,We=ee`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,He=ee`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Ge=ee`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,qe=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ze=Q(Xe,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${We};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${He};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ge};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Je=a.forwardRef(function(t,n){const s=ce({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:r={},className:i,...c}=s,[l,p]=a.useState([]),d=a.useRef(0),h=a.useRef(null);a.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=a.useRef(!1),v=_e(),b=a.useRef(null),B=a.useRef(null),x=a.useCallback(f=>{const{pulsate:y,rippleX:R,rippleY:$,rippleSize:S,cb:U}=f;p(E=>[...E,k.jsx(Ze,{classes:{ripple:C(r.ripple,g.ripple),rippleVisible:C(r.rippleVisible,g.rippleVisible),ripplePulsate:C(r.ripplePulsate,g.ripplePulsate),child:C(r.child,g.child),childLeaving:C(r.childLeaving,g.childLeaving),childPulsate:C(r.childPulsate,g.childPulsate)},timeout:J,pulsate:y,rippleX:R,rippleY:$,rippleSize:S},d.current)]),d.current+=1,h.current=U},[r]),N=a.useCallback((f={},y={},R=()=>{})=>{const{pulsate:$=!1,center:S=o||y.pulsate,fakeElement:U=!1}=y;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const E=U?null:B.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let I,T,w;if(S||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)I=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:z,clientY:D}=f.touches&&f.touches.length>0?f.touches[0]:f;I=Math.round(z-V.left),T=Math.round(D-V.top)}if(S)w=Math.sqrt((2*V.width**2+V.height**2)/3),w%2===0&&(w+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-I),I)*2+2,D=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;w=Math.sqrt(z**2+D**2)}f?.touches?b.current===null&&(b.current=()=>{x({pulsate:$,rippleX:I,rippleY:T,rippleSize:w,cb:R})},v.start(Ke,()=>{b.current&&(b.current(),b.current=null)})):x({pulsate:$,rippleX:I,rippleY:T,rippleSize:w,cb:R})},[o,x,v]),X=a.useCallback(()=>{N({},{pulsate:!0})},[N]),O=a.useCallback((f,y)=>{if(v.clear(),f?.type==="touchend"&&b.current){b.current(),b.current=null,v.start(0,()=>{O(f,y)});return}b.current=null,p(R=>R.length>0?R.slice(1):R),h.current=y},[v]);return a.useImperativeHandle(n,()=>({pulsate:X,start:N,stop:O}),[X,N,O]),k.jsx(qe,{className:C(g.root,r.root,i),ref:B,...c,children:k.jsx(ne,{component:null,exit:!0,children:l})})});function Qe(e){return Se("MuiButtonBase",e)}const et=le("MuiButtonBase",["root","disabled","focusVisible"]),tt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:s,classes:o}=e,i=De({root:["root",t&&"disabled",n&&"focusVisible"]},Qe,o);return n&&s&&(i.root+=` ${s}`),i},nt=Q("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${et.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ot=a.forwardRef(function(t,n){const s=ce({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:r=!1,children:i,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:v,LinkComponent:b="a",onBlur:B,onClick:x,onContextMenu:N,onDragLeave:X,onFocus:O,onFocusVisible:f,onKeyDown:y,onKeyUp:R,onMouseDown:$,onMouseLeave:S,onMouseUp:U,onTouchEnd:E,onTouchMove:V,onTouchStart:I,tabIndex:T=0,TouchRippleProps:w,touchRippleRef:z,type:D,...F}=s,A=a.useRef(null),m=je(),fe=se(m.ref,z),[j,K]=a.useState(!1);p&&j&&K(!1),a.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const de=m.shouldMount&&!d&&!p;a.useEffect(()=>{j&&M&&!d&&m.pulsate()},[d,M,j,m]);const he=P(m,"start",$,h),me=P(m,"stop",N,h),be=P(m,"stop",X,h),ge=P(m,"stop",U,h),Me=P(m,"stop",u=>{j&&u.preventDefault(),S&&S(u)},h),Re=P(m,"start",I,h),ye=P(m,"stop",E,h),Ee=P(m,"stop",V,h),Ce=P(m,"stop",u=>{ie(u.target)||K(!1),B&&B(u)},!1),xe=H(u=>{A.current||(A.current=u.currentTarget),ie(u.target)&&(K(!0),f&&f(u)),O&&O(u)}),q=()=>{const u=A.current;return l&&l!=="button"&&!(u.tagName==="A"&&u.href)},Te=H(u=>{M&&!u.repeat&&j&&u.key===" "&&m.stop(u,()=>{m.start(u)}),u.target===u.currentTarget&&q()&&u.key===" "&&u.preventDefault(),y&&y(u),u.target===u.currentTarget&&q()&&u.key==="Enter"&&!p&&(u.preventDefault(),x&&x(u))}),Pe=H(u=>{M&&u.key===" "&&j&&!u.defaultPrevented&&m.stop(u,()=>{m.pulsate(u)}),R&&R(u),x&&u.target===u.currentTarget&&q()&&u.key===" "&&!u.defaultPrevented&&x(u)});let W=l;W==="button"&&(F.href||F.to)&&(W=b);const Y={};if(W==="button"){const u=!!F.formAction;Y.type=D===void 0&&!u?"button":D,Y.disabled=p}else!F.href&&!F.to&&(Y.role="button"),p&&(Y["aria-disabled"]=p);const ve=se(n,A),oe={...s,centerRipple:r,component:l,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:j},Ve=tt(oe);return k.jsxs(nt,{as:W,className:C(Ve.root,c),ownerState:oe,onBlur:Ce,onClick:x,onContextMenu:me,onFocus:xe,onKeyDown:Te,onKeyUp:Pe,onMouseDown:he,onMouseLeave:Me,onMouseUp:ge,onDragLeave:be,onTouchEnd:ye,onTouchMove:Ee,onTouchStart:Re,ref:ve,tabIndex:p?-1:T,type:D,...Y,...F,children:[i,de?k.jsx(Je,{ref:fe,center:r,...w}):null]})});function P(e,t,n,s=!1){return H(o=>(n&&n(o),s||e[t](o),!0))}export{ot as B,ae as T,ke as _,_e as a,H as b,re as c,ne as d,ie as i,se as u};
