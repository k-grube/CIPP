import{r as a,w as we,R as _,y as Se,i as C,j,f as le,u as ce,s as Q,o as ee,e as Ie,l as Be}from"./iframe-DMhi3qFE.js";function H(e){const t=a.useRef(e);return we(()=>{t.current=e}),a.useRef((...n)=>(0,t.current)(...n)).current}function ie(...e){const t=a.useRef(void 0),n=a.useCallback(o=>{const i=e.map(r=>{if(r==null)return null;if(typeof r=="function"){const s=r,c=s(o);return typeof c=="function"?c:()=>{s(null)}}return r.current=o,()=>{r.current=null}});return()=>{i.forEach(r=>r?.())}},e);return a.useMemo(()=>e.every(o=>o==null)?null:o=>{t.current&&(t.current(),t.current=void 0),o!=null&&(t.current=n(o))},e)}function De(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;n[o]=e[o]}return n}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},Z(e,t)}function Le(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Z(e,t)}const se=_.createContext(null);function ke(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e,t){var n=function(r){return t&&a.isValidElement(r)?t(r):r},o=Object.create(null);return e&&a.Children.map(e,function(i){return i}).forEach(function(i){o[i.key]=n(i)}),o}function je(e,t){e=e||{},t=t||{};function n(d){return d in t?t[d]:e[d]}var o=Object.create(null),i=[];for(var r in e)r in t?i.length&&(o[r]=i,i=[]):i.push(r);var s,c={};for(var l in t){if(o[l])for(s=0;s<o[l].length;s++){var p=o[l][s];c[o[l][s]]=n(p)}c[l]=n(l)}for(s=0;s<i.length;s++)c[i[s]]=n(i[s]);return c}function k(e,t,n){return n[t]!=null?n[t]:e.props[t]}function Ne(e,t){return te(e.children,function(n){return a.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:k(n,"appear",e),enter:k(n,"enter",e),exit:k(n,"exit",e)})})}function Oe(e,t,n){var o=te(e.children),i=je(t,o);return Object.keys(i).forEach(function(r){var s=i[r];if(a.isValidElement(s)){var c=r in t,l=r in o,p=t[r],d=a.isValidElement(p)&&!p.props.in;l&&(!c||d)?i[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:k(s,"exit",e),enter:k(s,"enter",e)}):!l&&c&&!d?i[r]=a.cloneElement(s,{in:!1}):l&&c&&a.isValidElement(p)&&(i[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:p.props.in,exit:k(s,"exit",e),enter:k(s,"enter",e)}))}}),i}var Fe=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},$e={component:"div",childFactory:function(t){return t}},ne=(function(e){Le(t,e);function t(o,i){var r;r=e.call(this,o,i)||this;var s=r.handleExited.bind(ke(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,r){var s=r.children,c=r.handleExited,l=r.firstRender;return{children:l?Ne(i,c):Oe(i,s,c),firstRender:!1}},n.handleExited=function(i,r){var s=te(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(c){var l=Se({},c.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,r=i.component,s=i.childFactory,c=De(i,["component","childFactory"]),l=this.state.contextValue,p=Fe(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?_.createElement(se.Provider,{value:l},p):_.createElement(se.Provider,{value:l},_.createElement(r,c,p))},t})(_.Component);ne.propTypes={};ne.defaultProps=$e;const ue={};function pe(e,t){const n=a.useRef(ue);return n.current===ue&&(n.current=e(t)),n}const Ue=[];function ze(e){a.useEffect(e,Ue)}class re{static create(){return new re}currentId=null;start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function Ae(){const e=pe(re.create).current;return ze(e.disposeEffect),e}function ae(e){try{return e.matches(":focus-visible")}catch{}return!1}class G{static create(){return new G}static use(){const t=pe(G.create).current,[n,o]=a.useState(!1);return t.shouldMount=n,t.setShouldMount=o,a.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=_e(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...t){this.mount().then(()=>this.ref.current?.start(...t))}stop(...t){this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(...t){this.mount().then(()=>this.ref.current?.pulsate(...t))}}function Ye(){return G.use()}function _e(){let e,t;const n=new Promise((o,i)=>{e=o,t=i});return n.resolve=e,n.reject=t,n}function Xe(e){const{className:t,classes:n,pulsate:o=!1,rippleX:i,rippleY:r,rippleSize:s,in:c,onExited:l,timeout:p}=e,[d,h]=a.useState(!1),M=C(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),v={width:s,height:s,top:-(s/2)+r,left:-(s/2)+i},b=C(n.child,d&&n.childLeaving,o&&n.childPulsate);return!c&&!d&&h(!0),a.useEffect(()=>{if(!c&&l!=null){const I=setTimeout(l,p);return()=>{clearTimeout(I)}}},[l,c,p]),j.jsx("span",{className:M,style:v,children:j.jsx("span",{className:b})})}const g=le("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Ke=80,We=ee`
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
`,Je=a.forwardRef(function(t,n){const o=ce({props:t,name:"MuiTouchRipple"}),{center:i=!1,classes:r={},className:s,...c}=o,[l,p]=a.useState([]),d=a.useRef(0),h=a.useRef(null);a.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=a.useRef(!1),v=Ae(),b=a.useRef(null),I=a.useRef(null),x=a.useCallback(f=>{const{pulsate:R,rippleX:y,rippleY:F,rippleSize:B,cb:U}=f;p(E=>[...E,j.jsx(Ze,{classes:{ripple:C(r.ripple,g.ripple),rippleVisible:C(r.rippleVisible,g.rippleVisible),ripplePulsate:C(r.ripplePulsate,g.ripplePulsate),child:C(r.child,g.child),childLeaving:C(r.childLeaving,g.childLeaving),childPulsate:C(r.childPulsate,g.childPulsate)},timeout:J,pulsate:R,rippleX:y,rippleY:F,rippleSize:B},d.current)]),d.current+=1,h.current=U},[r]),N=a.useCallback((f={},R={},y=()=>{})=>{const{pulsate:F=!1,center:B=i||R.pulsate,fakeElement:U=!1}=R;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const E=U?null:I.current,V=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let w,T,S;if(B||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)w=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:z,clientY:D}=f.touches&&f.touches.length>0?f.touches[0]:f;w=Math.round(z-V.left),T=Math.round(D-V.top)}if(B)S=Math.sqrt((2*V.width**2+V.height**2)/3),S%2===0&&(S+=1);else{const z=Math.max(Math.abs((E?E.clientWidth:0)-w),w)*2+2,D=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;S=Math.sqrt(z**2+D**2)}f?.touches?b.current===null&&(b.current=()=>{x({pulsate:F,rippleX:w,rippleY:T,rippleSize:S,cb:y})},v.start(Ke,()=>{b.current&&(b.current(),b.current=null)})):x({pulsate:F,rippleX:w,rippleY:T,rippleSize:S,cb:y})},[i,x,v]),X=a.useCallback(()=>{N({},{pulsate:!0})},[N]),O=a.useCallback((f,R)=>{if(v.clear(),f?.type==="touchend"&&b.current){b.current(),b.current=null,v.start(0,()=>{O(f,R)});return}b.current=null,p(y=>y.length>0?y.slice(1):y),h.current=R},[v]);return a.useImperativeHandle(n,()=>({pulsate:X,start:N,stop:O}),[X,N,O]),j.jsx(qe,{className:C(g.root,r.root,s),ref:I,...c,children:j.jsx(ne,{component:null,exit:!0,children:l})})});function Qe(e){return Ie("MuiButtonBase",e)}const et=le("MuiButtonBase",["root","disabled","focusVisible"]),tt=e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,classes:i}=e,s=Be({root:["root",t&&"disabled",n&&"focusVisible"]},Qe,i);return n&&o&&(s.root+=` ${o}`),s},nt=Q("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${et.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),st=a.forwardRef(function(t,n){const o=ce({props:t,name:"MuiButtonBase"}),{action:i,centerRipple:r=!1,children:s,className:c,component:l="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:v,LinkComponent:b="a",onBlur:I,onClick:x,onContextMenu:N,onDragLeave:X,onFocus:O,onFocusVisible:f,onKeyDown:R,onKeyUp:y,onMouseDown:F,onMouseLeave:B,onMouseUp:U,onTouchEnd:E,onTouchMove:V,onTouchStart:w,tabIndex:T=0,TouchRippleProps:S,touchRippleRef:z,type:D,...$}=o,A=a.useRef(null),m=Ye(),fe=ie(m.ref,z),[L,K]=a.useState(!1);p&&L&&K(!1),a.useImperativeHandle(i,()=>({focusVisible:()=>{K(!0),A.current.focus()}}),[]);const de=m.shouldMount&&!d&&!p;a.useEffect(()=>{L&&M&&!d&&m.pulsate()},[d,M,L,m]);const he=P(m,"start",F,h),me=P(m,"stop",N,h),be=P(m,"stop",X,h),ge=P(m,"stop",U,h),Me=P(m,"stop",u=>{L&&u.preventDefault(),B&&B(u)},h),ye=P(m,"start",w,h),Re=P(m,"stop",E,h),Ee=P(m,"stop",V,h),Ce=P(m,"stop",u=>{ae(u.target)||K(!1),I&&I(u)},!1),xe=H(u=>{A.current||(A.current=u.currentTarget),ae(u.target)&&(K(!0),f&&f(u)),O&&O(u)}),q=()=>{const u=A.current;return l&&l!=="button"&&!(u.tagName==="A"&&u.href)},Te=H(u=>{M&&!u.repeat&&L&&u.key===" "&&m.stop(u,()=>{m.start(u)}),u.target===u.currentTarget&&q()&&u.key===" "&&u.preventDefault(),R&&R(u),u.target===u.currentTarget&&q()&&u.key==="Enter"&&!p&&(u.preventDefault(),x&&x(u))}),Pe=H(u=>{M&&u.key===" "&&L&&!u.defaultPrevented&&m.stop(u,()=>{m.pulsate(u)}),y&&y(u),x&&u.target===u.currentTarget&&q()&&u.key===" "&&!u.defaultPrevented&&x(u)});let W=l;W==="button"&&($.href||$.to)&&(W=b);const Y={};if(W==="button"){const u=!!$.formAction;Y.type=D===void 0&&!u?"button":D,Y.disabled=p}else!$.href&&!$.to&&(Y.role="button"),p&&(Y["aria-disabled"]=p);const ve=ie(n,A),oe={...o,centerRipple:r,component:l,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:L},Ve=tt(oe);return j.jsxs(nt,{as:W,className:C(Ve.root,c),ownerState:oe,onBlur:Ce,onClick:x,onContextMenu:me,onFocus:xe,onKeyDown:Te,onKeyUp:Pe,onMouseDown:he,onMouseLeave:Me,onMouseUp:ge,onDragLeave:be,onTouchEnd:Re,onTouchMove:Ee,onTouchStart:ye,ref:ve,tabIndex:p?-1:T,type:D,...Y,...$,children:[s,de?j.jsx(Je,{ref:fe,center:r,...S}):null]})});function P(e,t,n,o=!1){return H(i=>(n&&n(i),o||e[t](i),!0))}function rt(e){return typeof e.main=="string"}function ot(e,t=[]){if(!rt(e))return!1;for(const n of t)if(!e.hasOwnProperty(n)||typeof e[n]!="string")return!1;return!0}function ut(e=[]){return([,t])=>t&&ot(t,e)}export{st as B,se as T,Le as _,De as a,Ae as b,ut as c,H as d,re as e,ne as f,ae as i,ie as u};
