/*! For license information please see 53336.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_cromwell_root=self.webpackChunk_cromwell_root||[]).push([[53336],{53336:function(e,t,a){a.r(t);var n=a(12996);t.default=n.Z},18515:function(e,t,a){var n=a(31239),o=a(75595),r=a(99785),i=(a(14078),a(96488)),l=a.n(i),s=(a(86128),a(28737)),u=a(22725),c=a(63754),v=a(76133),d=a(98875),f=a(82373),p=["className","component","elevation","square","variant"],m=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},g=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],!a.square&&t.rounded,"elevation"===a.variant&&t["elevation".concat(a.elevation)]]}})((function(e){var t=e.theme,a=e.ownerState;return(0,o.Z)({backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},!a.square&&{borderRadius:t.shape.borderRadius},"outlined"===a.variant&&{border:"1px solid ".concat(t.palette.divider)},"elevation"===a.variant&&(0,o.Z)({boxShadow:t.shadows[a.elevation]},"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,u.alpha)("#fff",m(a.elevation)),", ").concat((0,u.alpha)("#fff",m(a.elevation)),")")}))})),b=r.forwardRef((function(e,t){var a=(0,v.Z)({props:e,name:"MuiPaper"}),r=a.className,i=a.component,u=void 0===i?"div":i,c=a.elevation,m=void 0===c?1:c,b=a.square,h=void 0!==b&&b,w=a.variant,Z=void 0===w?"elevation":w,y=(0,n.Z)(a,p),_=(0,o.Z)({},a,{component:u,elevation:m,square:h,variant:Z}),k=function(e){var t=e.square,a=e.elevation,n=e.variant,o=e.classes,r={root:["root",n,!t&&"rounded","elevation"===n&&"elevation".concat(a)]};return(0,s.unstable_composeClasses)(r,d.J,o)}(_);return(0,f.jsx)(g,(0,o.Z)({as:u,ownerState:_,className:l()(k.root,r),ref:t},y))}));t.Z=b},98875:function(e,t,a){a.d(t,{J:function(){return o}});var n=a(28737);function o(e){return(0,n.generateUtilityClass)("MuiPaper",e)}var r=(0,n.generateUtilityClasses)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);t.Z=r},12996:function(e,t,a){var n=a(31239),o=a(75595),r=a(99785),i=(a(14078),a(96488)),l=a.n(i),s=a(28737),u=a(22725),c=a(63754),v=a(76133),d=a(18515),f=a(53660),p=a(82373),m=["action","className","message","role"],g=(0,c.ZP)(d.Z,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a,n,r=e.theme,i="light"===r.palette.mode?.8:.98,l=(0,u.emphasize)(r.palette.background.default,i);return(0,o.Z)({},r.typography.body2,(t={color:r.palette.getContrastText(l),backgroundColor:l,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:r.shape.borderRadius,flexGrow:1},n={flexGrow:"initial",minWidth:288},(a=r.breakpoints.up("sm"))in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t))})),b=(0,c.ZP)("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),h=(0,c.ZP)("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),w=r.forwardRef((function(e,t){var a=(0,v.Z)({props:e,name:"MuiSnackbarContent"}),r=a.action,i=a.className,u=a.message,c=a.role,d=void 0===c?"alert":c,w=(0,n.Z)(a,m),Z=a,y=function(e){var t=e.classes;return(0,s.unstable_composeClasses)({root:["root"],action:["action"],message:["message"]},f.A,t)}(Z);return(0,p.jsxs)(g,(0,o.Z)({role:d,square:!0,elevation:6,className:l()(y.root,i),ownerState:Z,ref:t},w,{children:[(0,p.jsx)(b,{className:y.message,ownerState:Z,children:u}),r?(0,p.jsx)(h,{className:y.action,ownerState:Z,children:r}):null]}))}));t.Z=w},53660:function(e,t,a){a.d(t,{A:function(){return o}});var n=a(28737);function o(e){return(0,n.generateUtilityClass)("MuiSnackbarContent",e)}var r=(0,n.generateUtilityClasses)("MuiSnackbarContent",["root","message","action"]);t.Z=r},57686:function(e,t,a){var n=(0,a(26665).Z)();t.Z=n},63754:function(e,t,a){a.d(t,{FO:function(){return r},Dz:function(){return i}});var n=a(22725),o=a(57686),r=function(e){return(0,n.shouldForwardProp)(e)&&"classes"!==e},i=n.shouldForwardProp,l=(0,n.createStyled)({defaultTheme:o.Z,rootShouldForwardProp:r});t.ZP=l},76133:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(22725),o=a(57686);function r(e){var t=e.props,a=e.name;return(0,n.useThemeProps)({props:t,name:a,defaultTheme:o.Z})}},80356:function(e,t,a){a(4446);var n=a(99785),o=60103;if("function"==typeof Symbol&&Symbol.for){var r=Symbol.for;o=r("react.element"),r("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,a){var n,r={},u=null,c=null;for(n in void 0!==a&&(u=""+a),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,n)&&!s.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:c,props:r,_owner:i.current}}t.jsx=u,t.jsxs=u},82373:function(e,t,a){e.exports=a(80356)}}]);