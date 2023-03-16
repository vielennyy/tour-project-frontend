/*! For license information please see 97104.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_cromwell_root=self.webpackChunk_cromwell_root||[]).push([[97104],{97104:function(t,e,n){n.r(e);var r=n(55105);e.default=r.Z},55105:function(t,e,n){var r=n(31239),o=n(75595),i=n(99785),a=n(96488),u=n.n(a),s=(n(14078),n(61419)),l=(n(86128),n(28737)),c=n(63754),d=n(76133),f=n(80637),p=n(37780),h=n(49203),m=n(66951),y=n(19235),v=n(82373),w=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],g=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[e.root,e[n.orientation],"entered"===n.state&&e.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&e.hidden]}})((function(t){var e=t.theme,n=t.ownerState;return(0,o.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===n.state&&(0,o.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),Z=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(t,e){return e.wrapper}})((function(t){var e=t.ownerState;return(0,o.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})})),x=(0,c.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(t,e){return e.wrapperInner}})((function(t){var e=t.ownerState;return(0,o.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})})),E=i.forwardRef((function(t,e){var n=(0,d.Z)({props:t,name:"MuiCollapse"}),a=n.addEndListener,c=n.children,E=n.className,S=n.collapsedSize,b=void 0===S?"0px":S,_=n.component,C=n.easing,R=n.in,T=n.onEnter,P=n.onEntered,z=n.onEntering,D=n.onExit,O=n.onExited,j=n.onExiting,k=n.orientation,F=void 0===k?"vertical":k,I=n.style,N=n.timeout,L=void 0===N?f.x9.standard:N,M=n.TransitionComponent,W=void 0===M?s.Transition:M,A=(0,r.Z)(n,w),H=(0,o.Z)({},n,{orientation:F,collapsedSize:b}),U=function(t){var e=t.orientation,n=t.classes,r={root:["root","".concat(e)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(e)],wrapperInner:["wrapperInner","".concat(e)]};return(0,l.unstable_composeClasses)(r,y.d,n)}(H),$=(0,h.Z)(),B=i.useRef(),Y=i.useRef(null),q=i.useRef(),G="number"==typeof b?"".concat(b,"px"):b,J="horizontal"===F,K=J?"width":"height";i.useEffect((function(){return function(){clearTimeout(B.current)}}),[]);var Q=i.useRef(null),V=(0,m.Z)(e,Q),X=function(t){return function(e){if(t){var n=Q.current;void 0===e?t(n):t(n,e)}}},tt=function(){return Y.current?Y.current[J?"clientWidth":"clientHeight"]:0},et=X((function(t,e){Y.current&&J&&(Y.current.style.position="absolute"),t.style[K]=G,T&&T(t,e)})),nt=X((function(t,e){var n=tt();Y.current&&J&&(Y.current.style.position="");var r=(0,p.C)({style:I,timeout:L,easing:C},{mode:"enter"}),o=r.duration,i=r.easing;if("auto"===L){var a=$.transitions.getAutoHeightDuration(n);t.style.transitionDuration="".concat(a,"ms"),q.current=a}else t.style.transitionDuration="string"==typeof o?o:"".concat(o,"ms");t.style[K]="".concat(n,"px"),t.style.transitionTimingFunction=i,z&&z(t,e)})),rt=X((function(t,e){t.style[K]="auto",P&&P(t,e)})),ot=X((function(t){t.style[K]="".concat(tt(),"px"),D&&D(t)})),it=X(O),at=X((function(t){var e=tt(),n=(0,p.C)({style:I,timeout:L,easing:C},{mode:"exit"}),r=n.duration,o=n.easing;if("auto"===L){var i=$.transitions.getAutoHeightDuration(e);t.style.transitionDuration="".concat(i,"ms"),q.current=i}else t.style.transitionDuration="string"==typeof r?r:"".concat(r,"ms");t.style[K]=G,t.style.transitionTimingFunction=o,j&&j(t)}));return(0,v.jsx)(W,(0,o.Z)({in:R,onEnter:et,onEntered:rt,onEntering:nt,onExit:ot,onExited:it,onExiting:at,addEndListener:function(t){"auto"===L&&(B.current=setTimeout(t,q.current||0)),a&&a(Q.current,t)},nodeRef:Q,timeout:"auto"===L?null:L},A,{children:function(t,e){return(0,v.jsx)(g,(0,o.Z)({as:_,className:u()(U.root,E,{entered:U.entered,exited:!R&&"0px"===G&&U.hidden}[t]),style:(0,o.Z)((n={},r=J?"minWidth":"minHeight",i=G,r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n),I),ownerState:(0,o.Z)({},H,{state:t}),ref:V},e,{children:(0,v.jsx)(Z,{ownerState:(0,o.Z)({},H,{state:t}),className:U.wrapper,ref:Y,children:(0,v.jsx)(x,{ownerState:(0,o.Z)({},H,{state:t}),className:U.wrapperInner,children:c})})}));var n,r,i}}))}));E.muiSupportAuto=!0,e.Z=E},19235:function(t,e,n){n.d(e,{d:function(){return o}});var r=n(28737);function o(t){return(0,r.generateUtilityClass)("MuiCollapse",t)}var i=(0,r.generateUtilityClasses)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);e.Z=i},57686:function(t,e,n){var r=(0,n(26665).Z)();e.Z=r},63754:function(t,e,n){n.d(e,{FO:function(){return i},Dz:function(){return a}});var r=n(22725),o=n(57686),i=function(t){return(0,r.shouldForwardProp)(t)&&"classes"!==t},a=r.shouldForwardProp,u=(0,r.createStyled)({defaultTheme:o.Z,rootShouldForwardProp:i});e.ZP=u},49203:function(t,e,n){n.d(e,{Z:function(){return i}}),n(99785);var r=n(22725),o=n(57686);function i(){return(0,r.useTheme)(o.Z)}},76133:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(22725),o=n(57686);function i(t){var e=t.props,n=t.name;return(0,r.useThemeProps)({props:e,name:n,defaultTheme:o.Z})}},37780:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,{n:function(){return o},C:function(){return i}});var o=function(t){return t.scrollTop};function i(t,e){var n,o,i=t.timeout,a=t.easing,u=t.style,s=void 0===u?{}:u;return{duration:null!=(n=s.transitionDuration)?n:"number"==typeof i?i:i[e.mode]||0,easing:null!=(o=s.transitionTimingFunction)?o:"object"===r(a)?a[e.mode]:a,delay:s.transitionDelay}}},66951:function(t,e,n){var r=n(86128);e.Z=r.unstable_useForkRef},80356:function(t,e,n){n(4446);var r=n(99785),o=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,n){var r,i={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(c=e.ref),e)u.call(e,r)&&!s.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===i[r]&&(i[r]=e[r]);return{$$typeof:o,type:t,key:l,ref:c,props:i,_owner:a.current}}e.jsx=l,e.jsxs=l},82373:function(t,e,n){t.exports=n(80356)}}]);