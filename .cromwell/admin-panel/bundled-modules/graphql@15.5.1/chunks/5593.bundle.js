"use strict";(self.webpackChunk_cromwell_root=self.webpackChunk_cromwell_root||[]).push([[5593],{5593:function(e,n,t){t.d(n,{aS:function(){return w},w$:function(){return I},Eb:function(){return _}});var r=t(2115),o=t(6868),i=t(2616),a=t(3512),u=t(5782),c=t(9345),s=t(9659),l=t(2925),f=t(614),d=t(1332),v=t(5570),p=t(7628),N=t(5465),T=t(8516),h=t(7735),g=t(1473),m=t(701),y=t(4114);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){b(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e,n,t){(0,N.EO)(e),null!=n&&n.kind===s.h.DOCUMENT||(0,c.Z)(0,"Must provide valid Document AST."),!0!==(null==t?void 0:t.assumeValid)&&!0!==(null==t?void 0:t.assumeValidSDL)&&(0,v.ED)(n,e);var r=e.toConfig(),o=I(r,n,t);return r===o?e:new N.XO(o)}function I(e,n,t){for(var o,c,l,f,v,p=[],N=Object.create(null),O=[],b=[],w=0,I=n.definitions;w<I.length;w++){var j=I[w];if(j.kind===s.h.SCHEMA_DEFINITION)v=j;else if(j.kind===s.h.SCHEMA_EXTENSION)b.push(j);else if((0,d.zT)(j))p.push(j);else if((0,d.D$)(j)){var C=j.name.value,D=N[C];N[C]=D?D.concat([j]):[j]}else j.kind===s.h.DIRECTIVE_DEFINITION&&O.push(j)}if(0===Object.keys(N).length&&0===p.length&&0===O.length&&0===b.length&&null==v)return e;for(var P=Object.create(null),k=0,Z=e.types;k<Z.length;k++){var R=Z[k];P[R.name]=(M=R,(0,h.s9)(M)||(0,T.u1)(M)?M:(0,m.KA)(M)?function(e){for(var n,t=e.toConfig(),r=null!==(n=N[t.name])&&void 0!==n?n:[],o=t.specifiedByUrl,i=0;i<r.length;i++){var a;o=null!==(a=x(r[i]))&&void 0!==a?a:o}return new m.n2(E(E({},t),{},{specifiedByUrl:o,extensionASTNodes:t.extensionASTNodes.concat(r)}))}(M):(0,m.lp)(M)?function(e){var n,t=e.toConfig(),r=null!==(n=N[t.name])&&void 0!==n?n:[];return new m.h6(E(E({},t),{},{interfaces:function(){return[].concat(e.getInterfaces().map(z),ee(r))},fields:function(){return E(E({},(0,a.Z)(t.fields,H)),X(r))},extensionASTNodes:t.extensionASTNodes.concat(r)}))}(M):(0,m.oT)(M)?function(e){var n,t=e.toConfig(),r=null!==(n=N[t.name])&&void 0!==n?n:[];return new m.oW(E(E({},t),{},{interfaces:function(){return[].concat(e.getInterfaces().map(z),ee(r))},fields:function(){return E(E({},(0,a.Z)(t.fields,H)),X(r))},extensionASTNodes:t.extensionASTNodes.concat(r)}))}(M):(0,m.EN)(M)?function(e){var n,t=e.toConfig(),r=null!==(n=N[t.name])&&void 0!==n?n:[];return new m.Gp(E(E({},t),{},{types:function(){return[].concat(e.getTypes().map(z),ne(r))},extensionASTNodes:t.extensionASTNodes.concat(r)}))}(M):(0,m.EM)(M)?function(e){var n,t=e.toConfig(),r=null!==(n=N[e.name])&&void 0!==n?n:[];return new m.mR(E(E({},t),{},{values:E(E({},t.values),Q(r)),extensionASTNodes:t.extensionASTNodes.concat(r)}))}(M):(0,m.hL)(M)?function(e){var n,t=e.toConfig(),r=null!==(n=N[t.name])&&void 0!==n?n:[];return new m.sR(E(E({},t),{},{fields:function(){return E(E({},(0,a.Z)(t.fields,(function(e){return E(E({},e),{},{type:B(e.type)})}))),K(r))},extensionASTNodes:t.extensionASTNodes.concat(r)}))}(M):void(0,u.Z)(0,"Unexpected type: "+(0,i.Z)(M)))}for(var M,U=0;U<p.length;U++){var F,V=p[U],Y=V.name.value;P[Y]=null!==(F=S[Y])&&void 0!==F?F:te(V)}var L=E(E({query:e.query&&z(e.query),mutation:e.mutation&&z(e.mutation),subscription:e.subscription&&z(e.subscription)},v&&G([v])),G(b));return E(E({description:null===(o=v)||void 0===o||null===(c=o.description)||void 0===c?void 0:c.value},L),{},{types:(0,r.Z)(P),directives:[].concat(e.directives.map((function(e){var n=e.toConfig();return new g.NZ(E(E({},n),{},{args:(0,a.Z)(n.args,q)}))})),O.map((function(e){var n=e.locations.map((function(e){return e.value}));return new g.NZ({name:e.name.value,description:_(e,t),locations:n,isRepeatable:e.repeatable,args:$(e.arguments),astNode:e})}))),extensions:void 0,astNode:null!==(l=v)&&void 0!==l?l:e.astNode,extensionASTNodes:e.extensionASTNodes.concat(b),assumeValid:null!==(f=null==t?void 0:t.assumeValid)&&void 0!==f&&f});function B(e){return(0,m.HG)(e)?new m.p2(B(e.ofType)):(0,m.zM)(e)?new m.bM(B(e.ofType)):z(e)}function z(e){return P[e.name]}function H(e){return E(E({},e),{},{type:B(e.type),args:(0,a.Z)(e.args,q)})}function q(e){return E(E({},e),{},{type:B(e.type)})}function G(e){for(var n={},t=0;t<e.length;t++)for(var r,o=null!==(r=e[t].operationTypes)&&void 0!==r?r:[],i=0;i<o.length;i++){var a=o[i];n[a.operation]=W(a.type)}return n}function W(e){var n,t=e.name.value,r=null!==(n=S[t])&&void 0!==n?n:P[t];if(void 0===r)throw new Error('Unknown type: "'.concat(t,'".'));return r}function J(e){return e.kind===s.h.LIST_TYPE?new m.p2(J(e.type)):e.kind===s.h.NON_NULL_TYPE?new m.bM(J(e.type)):W(e)}function X(e){for(var n=Object.create(null),r=0;r<e.length;r++)for(var o,i=null!==(o=e[r].fields)&&void 0!==o?o:[],a=0;a<i.length;a++){var u=i[a];n[u.name.value]={type:J(u.type),description:_(u,t),args:$(u.arguments),deprecationReason:A(u),astNode:u}}return n}function $(e){for(var n=null!=e?e:[],r=Object.create(null),o=0;o<n.length;o++){var i=n[o],a=J(i.type);r[i.name.value]={type:a,description:_(i,t),defaultValue:(0,y.u)(i.defaultValue,a),deprecationReason:A(i),astNode:i}}return r}function K(e){for(var n=Object.create(null),r=0;r<e.length;r++)for(var o,i=null!==(o=e[r].fields)&&void 0!==o?o:[],a=0;a<i.length;a++){var u=i[a],c=J(u.type);n[u.name.value]={type:c,description:_(u,t),defaultValue:(0,y.u)(u.defaultValue,c),deprecationReason:A(u),astNode:u}}return n}function Q(e){for(var n=Object.create(null),r=0;r<e.length;r++)for(var o,i=null!==(o=e[r].values)&&void 0!==o?o:[],a=0;a<i.length;a++){var u=i[a];n[u.name.value]={description:_(u,t),deprecationReason:A(u),astNode:u}}return n}function ee(e){for(var n=[],t=0;t<e.length;t++)for(var r,o=null!==(r=e[t].interfaces)&&void 0!==r?r:[],i=0;i<o.length;i++){var a=o[i];n.push(W(a))}return n}function ne(e){for(var n=[],t=0;t<e.length;t++)for(var r,o=null!==(r=e[t].types)&&void 0!==r?r:[],i=0;i<o.length;i++){var a=o[i];n.push(W(a))}return n}function te(e){var n,r=e.name.value,o=_(e,t),a=null!==(n=N[r])&&void 0!==n?n:[];switch(e.kind){case s.h.OBJECT_TYPE_DEFINITION:var c=a,l=[e].concat(c);return new m.h6({name:r,description:o,interfaces:function(){return ee(l)},fields:function(){return X(l)},astNode:e,extensionASTNodes:c});case s.h.INTERFACE_TYPE_DEFINITION:var f=a,d=[e].concat(f);return new m.oW({name:r,description:o,interfaces:function(){return ee(d)},fields:function(){return X(d)},astNode:e,extensionASTNodes:f});case s.h.ENUM_TYPE_DEFINITION:var v=a,p=[e].concat(v);return new m.mR({name:r,description:o,values:Q(p),astNode:e,extensionASTNodes:v});case s.h.UNION_TYPE_DEFINITION:var T=a,h=[e].concat(T);return new m.Gp({name:r,description:o,types:function(){return ne(h)},astNode:e,extensionASTNodes:T});case s.h.SCALAR_TYPE_DEFINITION:var g=a;return new m.n2({name:r,description:o,specifiedByUrl:x(e),astNode:e,extensionASTNodes:g});case s.h.INPUT_OBJECT_TYPE_DEFINITION:var y=a,O=[e].concat(y);return new m.sR({name:r,description:o,fields:function(){return K(O)},astNode:e,extensionASTNodes:y})}(0,u.Z)(0,"Unexpected type definition node: "+(0,i.Z)(e))}}var S=(0,o.Z)(T.HS.concat(h.nL),(function(e){return e.name}));function A(e){var n=(0,p.zu)(g.fg,e);return null==n?void 0:n.reason}function x(e){var n=(0,p.zu)(g.df,e);return null==n?void 0:n.url}function _(e,n){if(e.description)return e.description.value;if(!0===(null==n?void 0:n.commentDescriptions)){var t=function(e){var n=e.loc;if(n){for(var t=[],r=n.startToken.prev;null!=r&&r.kind===l.T.COMMENT&&r.next&&r.prev&&r.line+1===r.next.line&&r.line!==r.prev.line;){var o=String(r.value);t.push(o),r=r.prev}return t.length>0?t.reverse().join("\n"):void 0}}(e);if(void 0!==t)return(0,f.W7)("\n"+t)}}}}]);