"use strict";(self.webpackChunk_cromwell_admin_panel=self.webpackChunk_cromwell_admin_panel||[]).push([[195],{50195:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(25047),a=n.n(r),l=n(63756),i=n(76082),o=n(23883),u=n(2784),s=n(7829),c=n(27475),f=n(28743),p=n(98371);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t,n,r,a,l,i){try{var o=e[l](i),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,a)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function i(e){d(l,r,a,i,o,"next",e)}function o(e){d(l,r,a,i,o,"throw",e)}i(void 0)}))}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}var S=s.Z;function P(){var e,t,n,r=(0,i.getGraphQLClient)(),s=h((0,u.useState)(null),2),m=s[0],d=s[1],v=h((0,u.useState)(null),2),w=v[0],P=v[1],x={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},O=(e=y(a().mark((function e(){var t,n,l,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getFilteredUsers({pagedParams:{pageSize:9999},filterParams:{role:"administrator"}}).catch((function(e){console.error(e)}));case 2:return t=e.sent,e.next=5,r.getFilteredUsers({pagedParams:{pageSize:9999},filterParams:{role:"author"}}).catch((function(e){console.error(e)}));case 5:n=e.sent,d(g(null!==(l=null==t?void 0:t.elements)&&void 0!==l?l:[]).concat(g(null!==(i=null==n?void 0:n.elements)&&void 0!==i?i:[])));case 8:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),E=function(){var e=y(a().mark((function e(){var t,n,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,null==r?void 0:r.getTags({pageSize:99999}).catch((function(e){console.error(e)}));case 3:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=7;break}e.t0=void 0===t;case 7:if(!e.t0){e.next=11;break}e.t2=void 0,e.next=12;break;case 11:e.t2=t.elements;case 12:n=e.t2,P(null!==(l=null==n?void 0:n.sort((function(e,t){return e.name<t.name?-1:1})))&&void 0!==l?l:[]);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){O(),E()}),[]),m&&w?u.createElement(S,{entityCategory:l.EDBEntity.Post,entityListRoute:f.pv.route,entityBaseRoute:f.QW.baseRoute,listLabel:"Posts",entityLabel:"Post",nameProperty:"title",getManyFiltered:r.getFilteredPosts,deleteOne:r.deletePost,deleteMany:r.deleteManyPosts,deleteManyFiltered:r.deleteManyFilteredPosts,columns:[{name:"mainImage",label:"Image",type:"Image",visible:!0},{name:"title",label:"Title",type:"Simple text",visible:!0,minWidth:"25%",width:"25%"},{name:"author",label:"Author",type:"Simple text",visible:!0,customGraphQlFragment:"author {\n id\n fullName\n }\n",getValueView:function(e){return u.createElement("p",{style:x},null==e?void 0:e.fullName)},searchOptions:null!==(t=null==m?void 0:m.map((function(e){return{value:e.id,label:e.fullName}})))&&void 0!==t?t:[],applyFilter:function(e,t){return t.authorId=e,t}},{name:"published",label:"Status",type:"Simple text",visible:!0,exactSearch:!0,searchOptions:[{label:"Published",value:!0},{label:"Draft",value:!1}],getValueView:function(e){return u.createElement("p",{style:x},e?"Published":"Draft")}},{name:"publishDate",label:"Published at",type:"Datetime",visible:!0},{name:"tags",label:"Tags",type:"Simple text",visible:!0,disableSort:!0,customGraphQlFragment:"tags {\n id\n name\n }\n",getValueView:function(e){var t,n,r=null!==(n=null===(t=null==e?void 0:e.map((function(e){return e.name})))||void 0===t?void 0:t.join(", "))&&void 0!==n?n:"";return u.createElement(o.Z,{title:r},u.createElement("p",{style:x},r))},multipleOptions:!0,searchOptions:null!==(n=null==w?void 0:w.map((function(e){return{value:e.id,label:e.name}})))&&void 0!==n?n:[],applyFilter:function(e,t){var n=[];if("string"==typeof e)try{n=JSON.parse(e)}catch(e){console.error(e)}return"number"==typeof e&&n.push(e),t.tagIds=n,t}}].concat(g(p.xz.map((function(e){return"createDate"===e.name?b({},e,{visible:!0}):b({},e,{visible:!1})}))))}):u.createElement(c.Z,null)}}}]);