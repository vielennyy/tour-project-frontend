!function(){var e={815:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,r),l.exports}!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}if(!global._crw_importer_window){var n=new(0,require("jsdom").JSDOM)("<!DOCTYPE html><p></p>");global._crw_importer_window=n.window,global._crw_importer_document=n.window.document}var l=r(815),u=(global.CromwellStore||(global.CromwellStore={}),global.CromwellStore);if(u.nodeModules.imports||(u.nodeModules.imports={}),u.nodeModules.modules||(u.nodeModules.modules={}),!u.nodeModules.modules["split-on-first"]){var i=function(e,t){if(e&&"object"===o(e)&&"default"in e&&("object"===o(e.default)||"function"==typeof e.default)){if(1===Object.keys(e).length)return e.default;if("default"in e.default&&Object.keys(e).length===Object.keys(e.default).length)return e.default;if(Object.keys(e).length===Object.keys(e.default).length+1)return e.default}return e}(l);"object"===o(i)&&i.default&&(i=function(r){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?e(Object(n),!0).forEach((function(e){t(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}({__esModule:!0},i)),u.nodeModules.modules["split-on-first"]=i}}()}();