"use strict";(self.webpackChunk_cromwell_root=self.webpackChunk_cromwell_root||[]).push([[93422],{93422:function(r,t,n){n.r(t);var e=n(2043);t.default=e.Z},2043:function(r,t,n){n.d(t,{Z:function(){return s}});var e=n(75595),o=n(31239),u=n(99785);function i(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,u=[],i=!0,a=!1;try{for(n=n.call(r);!(i=(e=n.next()).done)&&(u.push(e.value),!t||u.length!==t);i=!0);}catch(r){a=!0,o=r}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return u}}(r,t)||function(r,t){if(r){if("string"==typeof r)return a(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(r,t):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}var l=["getTrigger","target"];function c(r,t){var n=t.disableHysteresis,e=void 0!==n&&n,o=t.threshold,u=void 0===o?100:o,i=t.target,a=r.current;return i&&(r.current=void 0!==i.pageYOffset?i.pageYOffset:i.scrollTop),!(!e&&void 0!==a&&r.current<a)&&r.current>u}var f="undefined"!=typeof window?window:null;function s(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=r.getTrigger,n=void 0===t?c:t,a=r.target,s=void 0===a?f:a,d=(0,o.Z)(r,l),v=u.useRef(),y=u.useState((function(){return n(v,d)})),g=i(y,2),p=g[0],h=g[1];return u.useEffect((function(){var r=function(){h(n(v,(0,e.Z)({target:s},d)))};return r(),s.addEventListener("scroll",r),function(){s.removeEventListener("scroll",r)}}),[s,n,JSON.stringify(d)]),p}},75595:function(r,t,n){function e(){return e=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},e.apply(this,arguments)}n.d(t,{Z:function(){return e}})},31239:function(r,t,n){function e(r,t){if(null==r)return{};var n,e,o={},u=Object.keys(r);for(e=0;e<u.length;e++)n=u[e],t.indexOf(n)>=0||(o[n]=r[n]);return o}n.d(t,{Z:function(){return e}})}}]);