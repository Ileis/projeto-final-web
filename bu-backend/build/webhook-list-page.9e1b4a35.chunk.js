(self.webpackChunkbu_backend_v_2=self.webpackChunkbu_backend_v_2||[]).push([[4121],{81610:(V,z,p)=>{"use strict";V.exports=p(96233)},96233:function(V,z,p){(function(i,w){V.exports=w(p(67294),p(78384))})(this,function(i,w){return function(o){var b={};function n(a){if(b[a])return b[a].exports;var r=b[a]={i:a,l:!1,exports:{}};return o[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=o,n.c=b,n.d=function(a,r,u){n.o(a,r)||Object.defineProperty(a,r,{enumerable:!0,get:u})},n.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,r){if(1&r&&(a=n(a)),8&r||4&r&&typeof a=="object"&&a&&a.__esModule)return a;var u=Object.create(null);if(n.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:a}),2&r&&typeof a!="string")for(var l in a)n.d(u,l,function(f){return a[f]}.bind(null,l));return u},n.n=function(a){var r=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(r,"a",r),r},n.o=function(a,r){return Object.prototype.hasOwnProperty.call(a,r)},n.p="",n(n.s=125)}({0:function(o,b,n){o.exports=n(22)()},1:function(o,b){o.exports=i},10:function(o,b,n){"use strict";n.r(b),n.d(b,"Flex",function(){return e});var a,r=n(3),u=n.n(r),l=n(2),f=n.n(l),c=n(4),m=n(7),E=n(1),C=n.n(E),s=n(0),v=n.n(s),k=function(t){return C.a.createElement("div",t)},S={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},L={alignItems:v.a.string,basis:v.a.oneOfType([v.a.string,v.a.number]),direction:v.a.string,gap:v.a.oneOfType([v.a.shape({desktop:v.a.number,mobile:v.a.number,tablet:v.a.number}),v.a.number,v.a.arrayOf(v.a.number),v.a.string]),inline:v.a.bool,justifyContent:v.a.string,reverse:v.a.bool,shrink:v.a.number,wrap:v.a.string};k.defaultProps=S,k.propTypes=L;var D={direction:!0},e=f()(c.Box).withConfig({shouldForwardProp:function(t,d){return!D[t]&&d(t)}})(a||(a=u()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(t){return t.alignItems},function(t){return t.inline?"inline-flex":"flex"},function(t){return t.direction},function(t){return t.shrink},function(t){return t.wrap},function(t){var d=t.gap,j=t.theme;return Object(m.a)("gap",d,j)},function(t){return t.justifyContent});e.defaultProps=S,e.propTypes=L},11:function(o,b,n){var a=n(27),r=n(28),u=n(25),l=n(29);o.exports=function(f,c){return a(f)||r(f,c)||u(f,c)||l()},o.exports.default=o.exports,o.exports.__esModule=!0},125:function(o,b,n){"use strict";n.r(b),n.d(b,"Switch",function(){return B});var a,r,u=n(6),l=n.n(u),f=n(5),c=n.n(f),m=n(3),E=n.n(m),C=n(1),s=n.n(C),v=n(0),k=n.n(v),S=n(2),L=n.n(S),D=n(10),e=n(4),t=["label","onChange","onLabel","offLabel","selected","visibleLabels"],d=L.a.div(a||(a=E()([`
  background: `,`;
  border: none;
  border-radius: 16px;
  position: relative;
  height: `,`rem;
  width: `,`rem;

  & span {
    font-size: `,`;
  }

  &:before {
    content: '';
    background: `,`;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: `,`;
    top: `,`;
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`])),function(O){return O.theme.colors.danger500},1.5,2.5,function(O){return O.visibleLabels?"1rem":0},function(O){return O.theme.colors.neutral0},function(O){return O.theme.spaces[1]},function(O){return O.theme.spaces[1]}),j=L.a.button(r||(r=E()([`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] `,` {
    background: `,`;
  }

  &[aria-checked='true'] `,`:before {
    transform: translateX(1rem);
  }
`])),d,function(O){return O.theme.colors.success500},d),B=s.a.forwardRef(function(O,_){var ee=O.label,ne=O.onChange,G=O.onLabel,$=O.offLabel,U=O.selected,Q=O.visibleLabels,te=c()(O,t);return s.a.createElement(j,l()({ref:_,role:"switch","aria-checked":U,"aria-label":ee,onClick:ne,visibleLabels:Q,type:"button"},te),s.a.createElement(D.Flex,null,s.a.createElement(d,null,s.a.createElement("span",null,G),s.a.createElement("span",null,$)),Q&&s.a.createElement(e.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:U?"success600":"danger600"},U?G:$)))});B.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},B.propTypes={label:k.a.string.isRequired,offLabel:k.a.string,onChange:k.a.func.isRequired,onLabel:k.a.string,selected:k.a.bool.isRequired,visibleLabels:k.a.bool},B.displayName="Switch"},15:function(o,b){function n(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(o.exports=n=function(r){return typeof r},o.exports.default=o.exports,o.exports.__esModule=!0):(o.exports=n=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o.exports.default=o.exports,o.exports.__esModule=!0),n(a)}o.exports=n,o.exports.default=o.exports,o.exports.__esModule=!0},2:function(o,b){o.exports=w},22:function(o,b,n){"use strict";var a=n(23);function r(){}function u(){}u.resetWarningCache=r,o.exports=function(){function l(m,E,C,s,v,k){if(k!==a){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}function f(){return l}l.isRequired=l;var c={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:f,element:l,elementType:l,instanceOf:f,node:l,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:u,resetWarningCache:r};return c.PropTypes=c,c}},23:function(o,b,n){"use strict";o.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},24:function(o,b){o.exports=function(n,a){(a==null||a>n.length)&&(a=n.length);for(var r=0,u=new Array(a);r<a;r++)u[r]=n[r];return u},o.exports.default=o.exports,o.exports.__esModule=!0},25:function(o,b,n){var a=n(24);o.exports=function(r,u){if(r){if(typeof r=="string")return a(r,u);var l=Object.prototype.toString.call(r).slice(8,-1);return l==="Object"&&r.constructor&&(l=r.constructor.name),l==="Map"||l==="Set"?Array.from(r):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?a(r,u):void 0}},o.exports.default=o.exports,o.exports.__esModule=!0},27:function(o,b){o.exports=function(n){if(Array.isArray(n))return n},o.exports.default=o.exports,o.exports.__esModule=!0},28:function(o,b){o.exports=function(n,a){var r=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var u,l,f=[],c=!0,m=!1;try{for(r=r.call(n);!(c=(u=r.next()).done)&&(f.push(u.value),!a||f.length!==a);c=!0);}catch(E){m=!0,l=E}finally{try{c||r.return==null||r.return()}finally{if(m)throw l}}return f}},o.exports.default=o.exports,o.exports.__esModule=!0},29:function(o,b){o.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},o.exports.default=o.exports,o.exports.__esModule=!0},3:function(o,b){o.exports=function(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))},o.exports.default=o.exports,o.exports.__esModule=!0},30:function(o,b){o.exports=function(n,a){if(n==null)return{};var r,u,l={},f=Object.keys(n);for(u=0;u<f.length;u++)r=f[u],a.indexOf(r)>=0||(l[r]=n[r]);return l},o.exports.default=o.exports,o.exports.__esModule=!0},4:function(o,b,n){"use strict";n.r(b),n.d(b,"Box",function(){return D});var a,r=n(3),u=n.n(r),l=n(2),f=n.n(l),c=n(7),m=n(1),E=n.n(m),C=n(0),s=n.n(C),v=function(e){return E.a.createElement("div",e)},k={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},S={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])};v.defaultProps=k,v.propTypes=S;var L={color:!0},D=f.a.div.withConfig({shouldForwardProp:function(e,t){return!L[e]&&t(e)}})(a||(a=u()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t},function(e){var t=e.theme,d=e.background;return t.colors[d]},function(e){var t=e.theme,d=e.color;return t.colors[d]},function(e){var t=e.theme,d=e.padding;return Object(c.a)("padding",d,t)},function(e){var t=e.theme,d=e.paddingTop;return Object(c.a)("padding-top",d,t)},function(e){var t=e.theme,d=e.paddingRight;return Object(c.a)("padding-right",d,t)},function(e){var t=e.theme,d=e.paddingBottom;return Object(c.a)("padding-bottom",d,t)},function(e){var t=e.theme,d=e.paddingLeft;return Object(c.a)("padding-left",d,t)},function(e){var t=e.theme,d=e.marginLeft;return Object(c.a)("margin-left",d,t)},function(e){var t=e.theme,d=e.marginRight;return Object(c.a)("margin-right",d,t)},function(e){var t=e.theme,d=e.marginTop;return Object(c.a)("margin-top",d,t)},function(e){var t=e.theme,d=e.marginBottom;return Object(c.a)("margin-bottom",d,t)},function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0},function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0},function(e){var t=e.theme,d=e.hasRadius,j=e.borderRadius;return d?t.borderRadius:j},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var t=e.borderColor;return e.theme.colors[t]},function(e){var t=e.theme,d=e.borderColor,j=e.borderStyle,B=e.borderWidth;if(d&&!j&&!B)return"1px solid ".concat(t.colors[d])},function(e){var t=e.theme,d=e.shadow;return t.shadows[d]},function(e){return e.pointerEvents},function(e){var t=e._hover,d=e.theme;return t?t(d):void 0},function(e){return e.display},function(e){return e.position},function(e){var t=e.left;return e.theme.spaces[t]||t},function(e){var t=e.right;return e.theme.spaces[t]||t},function(e){var t=e.top;return e.theme.spaces[t]||t},function(e){var t=e.bottom;return e.theme.spaces[t]||t},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var t=e.width;return e.theme.spaces[t]||t},function(e){var t=e.maxWidth;return e.theme.spaces[t]||t},function(e){var t=e.minWidth;return e.theme.spaces[t]||t},function(e){var t=e.height;return e.theme.spaces[t]||t},function(e){var t=e.maxHeight;return e.theme.spaces[t]||t},function(e){var t=e.minHeight;return e.theme.spaces[t]||t},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});D.defaultProps=k,D.propTypes=S},5:function(o,b,n){var a=n(30);o.exports=function(r,u){if(r==null)return{};var l,f,c=a(r,u);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(r);for(f=0;f<m.length;f++)l=m[f],u.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(r,l)&&(c[l]=r[l])}return c},o.exports.default=o.exports,o.exports.__esModule=!0},6:function(o,b){function n(){return o.exports=n=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var u=arguments[r];for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&(a[l]=u[l])}return a},o.exports.default=o.exports,o.exports.__esModule=!0,n.apply(this,arguments)}o.exports=n,o.exports.default=o.exports,o.exports.__esModule=!0},7:function(o,b,n){"use strict";var a=n(11),r=n.n(a),u=n(15),l=n.n(u);b.a=function(f,c,m){var E=c;if(Array.isArray(c)||l()(c)!=="object"||(E=[c==null?void 0:c.desktop,c==null?void 0:c.tablet,c==null?void 0:c.mobile]),E!==void 0){if(Array.isArray(E)){var C=E,s=r()(C,3),v=s[0],k=s[1],S=s[2],L="".concat(f,": ").concat(m.spaces[v],";");return k!==void 0&&(L+="".concat(m.mediaQueries.tablet,`{
          `).concat(f,": ").concat(m.spaces[k],`;
        }`)),S!==void 0&&(L+="".concat(m.mediaQueries.mobile,`{
          `).concat(f,": ").concat(m.spaces[S],`;
        }`)),L}var D=m.spaces[E]||E;return"".concat(f,": ").concat(D,";")}}}})})},6784:(V,z,p)=>{"use strict";p.r(z),p.d(z,{default:()=>Ee});var i=p(67294),w=p(68547),o=p(87751),b=p(49656),n=p(97132),a=p(78862),r=p(62791),u=p(67826),l=p(9008),f=p(30741),c=p(59522),m=p(41798),E=p(49425),C=p(19408),s=p(26851),v=p(81610),k=p(62031),S=p(84686),L=p(5493),D=p(80768),e=p.n(D),t=p(19352),d=p.n(t),j=p(18568),B=p.n(j),O=p(85407),_=p.n(O),ee=p(8041),ne=p(36968),G=p.n(ne);const $={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0},Q=(x,y)=>(0,ee.default)(x,g=>{switch(y.type){case"GET_DATA_SUCCEEDED":{g.webhooks=y.data,g.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{g.loadingWebhooks=!x.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{G()(g,["webhooks",...y.keys],y.value);break}case"SET_WEBHOOK_TO_DELETE":{g.webhookToDelete=y.id;break}case"SET_WEBHOOKS_TO_DELETE":{y.value?g.webhooksToDelete.push(y.id):g.webhooksToDelete=x.webhooksToDelete.filter(P=>P!==y.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{x.webhooksToDelete.length===0?g.webhooksToDelete=x.webhooks.map(P=>P.id):g.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{g.webhooks=x.webhooks.filter(P=>!x.webhooksToDelete.includes(P.id)),g.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{g.webhooks=x.webhooks.filter((P,H)=>H!==y.index),g.webhookToDelete=null;break}default:return g}});var te=p(25108),pe=Object.defineProperty,he=Object.defineProperties,me=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,be=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,ie=(x,y,g)=>y in x?pe(x,y,{enumerable:!0,configurable:!0,writable:!0,value:g}):x[y]=g,F=(x,y)=>{for(var g in y||(y={}))be.call(y,g)&&ie(x,g,y[g]);if(ae)for(var g of ae(y))ge.call(y,g)&&ie(x,g,y[g]);return x},ve=(x,y)=>he(x,me(y)),X=(x,y,g)=>new Promise((P,H)=>{var N=A=>{try{T(g.next(A))}catch(R){H(R)}},W=A=>{try{T(g.throw(A))}catch(R){H(R)}},T=A=>A.done?P(A.value):Promise.resolve(A.value).then(N,W);T((g=g.apply(x,y)).next())});const ye=()=>{const{isLoading:x,allowedActions:{canCreate:y,canRead:g,canUpdate:P,canDelete:H}}=(0,w.useRBAC)(o.Z.settings.webhooks),N=(0,w.useNotification)(),W=(0,i.useRef)(!0),{formatMessage:T}=(0,n.useIntl)(),[A,R]=(0,i.useState)(!1),[{webhooks:Z,webhooksToDelete:Y,webhookToDelete:oe,loadingWebhooks:re},I]=(0,i.useReducer)(Q,$),{notifyStatus:xe}=(0,S.useNotifyAT)();(0,w.useFocusWhenNavigate)();const{push:Te}=(0,b.useHistory)(),{pathname:se}=(0,b.useLocation)(),J=Z.length,K=Y.length,le=h=>Z.findIndex(M=>M.id===h);(0,i.useEffect)(()=>(W.current=!0,()=>{W.current=!1}),[]),(0,i.useEffect)(()=>{g&&Oe()},[g]);const Oe=()=>X(void 0,null,function*(){try{const{data:h}=yield(0,w.request)("/admin/webhooks",{method:"GET"});W.current&&(I({type:"GET_DATA_SUCCEEDED",data:h}),xe("webhooks have been loaded"))}catch(h){te.log(h),W.current&&(h.code!==20&&N({type:"warning",message:{id:"notification.error"}}),I({type:"TOGGLE_LOADING"}))}}),we=()=>{R(h=>!h)},ke=()=>{oe?Se():Le()},Se=()=>X(void 0,null,function*(){try{yield(0,w.request)(`/admin/webhooks/${oe}`,{method:"DELETE"}),I({type:"WEBHOOK_DELETED",index:le(oe)})}catch(h){h.code!==20&&N({type:"warning",message:{id:"notification.error"}})}R(!1)}),Le=()=>X(void 0,null,function*(){const h={ids:Y};try{yield(0,w.request)("/admin/webhooks/batch-delete",{method:"POST",body:h}),W.current&&I({type:"WEBHOOKS_DELETED"})}catch(M){W.current&&M.code!==20&&N({type:"warning",message:{id:"notification.error"}})}R(!1)}),ue=h=>{R(!0),h!=="all"&&I({type:"SET_WEBHOOK_TO_DELETE",id:h})},Ce=(h,M)=>X(void 0,null,function*(){const ce=le(M),Me=Z[ce],de=[ce,"isEnabled"],fe=ve(F({},Me),{isEnabled:h});delete fe.id;try{I({type:"SET_WEBHOOK_ENABLED",keys:de,value:h}),yield(0,w.request)(`/admin/webhooks/${M}`,{method:"PUT",body:fe})}catch(je){W.current&&(I({type:"SET_WEBHOOK_ENABLED",keys:de,value:!h}),je.code!==20&&N({type:"warning",message:{id:"notification.error"}}))}}),De=()=>{I({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},Pe=(h,M)=>{I({type:"SET_WEBHOOKS_TO_DELETE",value:h,id:M})},q=h=>{Te(`${se}/${h}`)};return i.createElement(a.Layout,null,i.createElement(w.SettingsPageTitle,{name:"Webhooks"}),i.createElement(k.Main,{"aria-busy":x||re},i.createElement(a.HeaderLayout,{title:T({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:T({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:y&&!re&&i.createElement(w.LinkButton,{startIcon:i.createElement(e(),null),variant:"default",to:`${se}/create`,size:"S"},T({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),K>0&&H&&i.createElement(a.ActionLayout,{startActions:i.createElement(i.Fragment,null,i.createElement(E.Typography,{variant:"epsilon",textColor:"neutral600"},T({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:K})),i.createElement(C.Button,{onClick:()=>ue("all"),startIcon:i.createElement(B(),null),size:"L",variant:"danger-light"},T({id:"global.delete",defaultMessage:"Delete"})))}),i.createElement(a.ContentLayout,null,x||re?i.createElement(L.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},i.createElement(w.LoadingIndicatorPage,null)):i.createElement(i.Fragment,null,J>0?i.createElement(m.Table,{colCount:5,rowCount:J+1,footer:i.createElement(m.TFooter,{onClick:()=>y?q("create"):{},icon:i.createElement(e(),null)},T({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},i.createElement(m.Thead,null,i.createElement(m.Tr,null,i.createElement(m.Th,null,i.createElement(c.BaseCheckbox,{"aria-label":T({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:K>0&&K<J,value:K===J,onValueChange:De})),i.createElement(m.Th,{width:"20%"},i.createElement(E.Typography,{variant:"sigma",textColor:"neutral600"},T({id:"global.name",defaultMessage:"Name"}))),i.createElement(m.Th,{width:"60%"},i.createElement(E.Typography,{variant:"sigma",textColor:"neutral600"},T({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),i.createElement(m.Th,{width:"20%"},i.createElement(E.Typography,{variant:"sigma",textColor:"neutral600"},T({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),i.createElement(m.Th,null,i.createElement(s.VisuallyHidden,null,T({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),i.createElement(m.Tbody,null,Z.map(h=>i.createElement(m.Tr,F({key:h.id},(0,w.onRowClick)({fn:()=>q(h.id),condition:P})),i.createElement(m.Td,F({},w.stopPropagation),i.createElement(c.BaseCheckbox,{"aria-label":`${T({id:"global.select",defaultMessage:"Select"})} ${h.name}`,value:Y==null?void 0:Y.includes(h.id),onValueChange:M=>Pe(M,h.id),id:"select",name:"select"})),i.createElement(m.Td,null,i.createElement(E.Typography,{fontWeight:"semiBold",textColor:"neutral800"},h.name)),i.createElement(m.Td,null,i.createElement(E.Typography,{textColor:"neutral800"},h.url)),i.createElement(m.Td,null,i.createElement(u.Flex,F({},w.stopPropagation),i.createElement(v.Switch,{onLabel:T({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:T({id:"global.disabled",defaultMessage:"Disabled"}),label:`${h.name} ${T({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:h.isEnabled,onChange:()=>Ce(!h.isEnabled,h.id),visibleLabels:!0}))),i.createElement(m.Td,null,i.createElement(l.Stack,F({horizontal:!0,spacing:1},w.stopPropagation),P&&i.createElement(f.IconButton,{onClick:()=>{q(h.id)},label:T({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:i.createElement(d(),null),noBorder:!0}),H&&i.createElement(f.IconButton,{onClick:()=>ue(h.id),label:T({id:"global.delete",defaultMessage:"Delete"}),icon:i.createElement(B(),null),noBorder:!0,id:`delete-${h.id}`}))))))):i.createElement(r.EmptyStateLayout,{icon:i.createElement(_(),{width:"160px"}),content:T({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:i.createElement(C.Button,{variant:"secondary",startIcon:i.createElement(e(),null),onClick:()=>y?q("create"):{}},T({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))})))),i.createElement(w.ConfirmDialog,{isOpen:A,onToggleDialog:we,onConfirm:ke}))},Ee=()=>i.createElement(w.CheckPagePermissions,{permissions:o.Z.settings.webhooks.main},i.createElement(ye,null))}}]);
