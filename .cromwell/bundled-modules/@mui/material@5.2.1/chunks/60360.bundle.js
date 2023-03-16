/*! For license information please see 60360.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_cromwell_root=self.webpackChunk_cromwell_root||[]).push([[60360],{60360:function(n,t,e){e.r(t);var r=e(89773);t.default=r.Z},89773:function(n,t,e){var r=e(75595),o=e(31239),i=e(99785),a=(e(14078),e(61419)),s=(e(86128),e(80637)),u=e(49203),f=e(37780),c=e(66951),l=e(82373),d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],y={entering:{transform:"none"},entered:{transform:"none"}},m={enter:s.x9.enteringScreen,exit:s.x9.leavingScreen},p=i.forwardRef((function(n,t){var e=n.addEndListener,s=n.appear,p=void 0===s||s,E=n.children,v=n.easing,_=n.in,b=n.onEnter,x=n.onEntered,g=n.onEntering,Z=n.onExit,S=n.onExited,k=n.onExiting,w=n.style,T=n.timeout,h=void 0===T?m:T,C=n.TransitionComponent,R=void 0===C?a.Transition:C,O=(0,o.Z)(n,d),L=(0,u.Z)(),j=i.useRef(null),D=(0,c.Z)(E.ref,t),P=(0,c.Z)(j,D),F=function(n){return function(t){if(n){var e=j.current;void 0===t?n(e):n(e,t)}}},I=F(g),N=F((function(n,t){(0,f.n)(n);var e=(0,f.C)({style:w,timeout:h,easing:v},{mode:"enter"});n.style.webkitTransition=L.transitions.create("transform",e),n.style.transition=L.transitions.create("transform",e),b&&b(n,t)})),U=F(x),$=F(k),A=F((function(n){var t=(0,f.C)({style:w,timeout:h,easing:v},{mode:"exit"});n.style.webkitTransition=L.transitions.create("transform",t),n.style.transition=L.transitions.create("transform",t),Z&&Z(n)})),B=F(S);return(0,l.jsx)(R,(0,r.Z)({appear:p,in:_,nodeRef:j,onEnter:N,onEntered:U,onEntering:I,onExit:A,onExited:B,onExiting:$,addEndListener:function(n){e&&e(j.current,n)},timeout:h},O,{children:function(n,t){return i.cloneElement(E,(0,r.Z)({style:(0,r.Z)({transform:"scale(0)",visibility:"exited"!==n||_?void 0:"hidden"},y[n],w,E.props.style),ref:P},t))}}))}));t.Z=p},57686:function(n,t,e){var r=(0,e(26665).Z)();t.Z=r},49203:function(n,t,e){e.d(t,{Z:function(){return i}}),e(99785);var r=e(22725),o=e(57686);function i(){return(0,r.useTheme)(o.Z)}},37780:function(n,t,e){function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}e.d(t,{n:function(){return o},C:function(){return i}});var o=function(n){return n.scrollTop};function i(n,t){var e,o,i=n.timeout,a=n.easing,s=n.style,u=void 0===s?{}:s;return{duration:null!=(e=u.transitionDuration)?e:"number"==typeof i?i:i[t.mode]||0,easing:null!=(o=u.transitionTimingFunction)?o:"object"===r(a)?a[t.mode]:a,delay:u.transitionDelay}}},66951:function(n,t,e){var r=e(86128);t.Z=r.unstable_useForkRef},80356:function(n,t,e){e(4446);var r=e(99785),o=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function f(n,t,e){var r,i={},f=null,c=null;for(r in void 0!==e&&(f=""+e),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(n&&n.defaultProps)for(r in t=n.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:n,key:f,ref:c,props:i,_owner:a.current}}t.jsx=f,t.jsxs=f},82373:function(n,t,e){n.exports=e(80356)}}]);