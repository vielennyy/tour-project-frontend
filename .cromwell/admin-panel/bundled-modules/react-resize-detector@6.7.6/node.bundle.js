!function(){var e={461:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a},useResizeDetector:function(){return d},withResizeDetector:function(){return f}});var n=require("react"),o=(require("react-dom"),require("lodash.debounce"),require("lodash.throttle"),function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},o(e,t)});function i(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var u=function(){return u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)};function c(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}var l=function(e){return"function"==typeof e},a=function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props;e.targetRef,e.observerOptions},r.getElement=function(){var e=r.props;return e.querySelector,e.targetDomEl,null},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,u=void 0===i||i,c=t.onResize;if(o||u){(function(e,t,r,n){})(c,r.setState.bind(r),o,u);e.forEach((function(e){var t=e&&e.contentRect||{};t.width,t.height;r.skipOnMount,r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,o=e.children;return l(t)?"renderProp":l(o)?"childFunction":(0,n.isValidElement)(o)?"child":Array.isArray(o)?"childArray":"parent"};var o=t.skipOnMount;return t.refreshMode,t.refreshRate,t.refreshOptions,r.state={width:void 0,height:void 0},r.skipOnMount=o,r.targetRef=(0,n.createRef)(),r.observableElement=null,r}return i(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,u=void 0===i?"div":i,l=this.state,a={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(a);case"childFunction":return(e=o)(a);case"child":if((e=o).type&&"string"==typeof e.type){var f=c(a,["targetRef"]);return(0,n.cloneElement)(e,f)}return(0,n.cloneElement)(e,a);case"childArray":return(e=o).map((function(e){return!!e&&(0,n.cloneElement)(e,a)}));default:return n.createElement(u,null)}},t}(n.PureComponent);function f(e,t){void 0===t&&(t={});var r=function(r){function o(){var e=null!==r&&r.apply(this,arguments)||this;return e.ref=(0,n.createRef)(),e}return i(o,r),o.prototype.render=function(){var r=this.props,o=r.forwardedRef,i=c(r,["forwardedRef"]),l=null!=o?o:this.ref;return n.createElement(a,u({},t,{targetRef:l}),n.createElement(e,u({targetRef:l},i)))},o}(n.Component);function o(e,t){return n.createElement(r,u({},e,{forwardedRef:t}))}var l=e.displayName||e.name;return o.displayName="withResizeDetector("+l+")",(0,n.forwardRef)(o)}var s=n.useEffect;function d(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,o=e.refreshMode,i=e.refreshRate,c=void 0===i?1e3:i,l=e.refreshOptions,a=e.handleWidth,f=void 0===a||a,d=e.handleHeight,p=void 0===d||d,y=e.targetRef,h=e.observerOptions,b=e.onResize,v=((0,n.useRef)(r),(0,n.useRef)(null)),O=null!=y?y:v,m=((0,n.useRef)(),(0,n.useState)({width:void 0,height:void 0})),g=m[0];return m[1],s((function(){}),[o,c,l,f,p,b,h,O.current]),u({ref:O},g)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}if(!global._crw_importer_window){var o=new(0,require("jsdom").JSDOM)("<!DOCTYPE html><p></p>");global._crw_importer_window=o.window,global._crw_importer_document=o.window.document}var i=r(461),u=(global.CromwellStore||(global.CromwellStore={}),global.CromwellStore);if(u.nodeModules.imports||(u.nodeModules.imports={}),u.nodeModules.modules||(u.nodeModules.modules={}),!u.nodeModules.modules["react-resize-detector"]){var c=function(e,t){if(e&&"object"===n(e)&&"default"in e&&("object"===n(e.default)||"function"==typeof e.default)){if(1===Object.keys(e).length)return e.default;if("default"in e.default&&Object.keys(e).length===Object.keys(e.default).length)return e.default;if(Object.keys(e).length===Object.keys(e.default).length+1)return e.default}return e}(i);"object"===n(c)&&c.default&&(c=function(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){t(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}({__esModule:!0},c)),u.nodeModules.modules["react-resize-detector"]=c}}()}();