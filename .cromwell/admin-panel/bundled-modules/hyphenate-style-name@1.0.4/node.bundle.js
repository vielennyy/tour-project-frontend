!function(){var e={103:function(e,t,o){"use strict";o.r(t);var r=/[A-Z]/g,n=/^ms-/,l={};function u(e){return"-"+e.toLowerCase()}t.default=function(e){if(l.hasOwnProperty(e))return l[e];var t=e.replace(r,u);return l[e]=n.test(t)?"-"+t:t}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,o),l.exports}o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){function e(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function t(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}if(!global._crw_importer_window){var n=new(0,require("jsdom").JSDOM)("<!DOCTYPE html><p></p>");global._crw_importer_window=n.window,global._crw_importer_document=n.window.document}var l=o(103),u=(global.CromwellStore||(global.CromwellStore={}),global.CromwellStore);if(u.nodeModules.imports||(u.nodeModules.imports={}),u.nodeModules.modules||(u.nodeModules.modules={}),!u.nodeModules.modules["hyphenate-style-name"]){var i=function(e,t){if(e&&"object"===r(e)&&"default"in e&&("object"===r(e.default)||"function"==typeof e.default)){if(1===Object.keys(e).length)return e.default;if("default"in e.default&&Object.keys(e).length===Object.keys(e.default).length)return e.default;if(Object.keys(e).length===Object.keys(e.default).length+1)return e.default}return e}(l);"object"===r(i)&&i.default&&(i=function(o){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(e){t(o,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(n,e))}))}return o}({__esModule:!0},i)),u.nodeModules.modules["hyphenate-style-name"]=i}}()}();