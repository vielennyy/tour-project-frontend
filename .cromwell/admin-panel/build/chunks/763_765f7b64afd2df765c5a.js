"use strict";(self.webpackChunk_cromwell_admin_panel=self.webpackChunk_cromwell_admin_panel||[]).push([[763],{78763:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(63756),a=r(76082),l=r(2784),o=r(7829),i=r(28743),u=r(98371);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}var s=o.Z;function b(){var e,t=(0,a.getGraphQLClient)();return l.createElement(s,{entityCategory:n.EDBEntity.Tag,entityListRoute:i.zJ.route,entityBaseRoute:i.O_.baseRoute,listLabel:"Tags",entityLabel:"Tag",nameProperty:"name",getManyFiltered:t.getFilteredTags,deleteOne:t.deleteTag,deleteMany:t.deleteManyTags,deleteManyFiltered:t.deleteManyFilteredTags,columns:[{name:"image",label:"Image",type:"Image",visible:!0},{name:"name",label:"Name",type:"Simple text",visible:!0},{name:"color",label:"Color",type:"Color",visible:!0}].concat((e=u.xz.map((function(e){return"createDate"===e.name?m({},e,{visible:!0}):m({},e,{visible:!1})})),function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))})}}}]);