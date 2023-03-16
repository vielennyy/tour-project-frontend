"use strict";(self.webpackChunk_cromwell_root=self.webpackChunk_cromwell_root||[]).push([[3033],{3033:function(n,e,t){t.r(e);var r=t(6256);e.default=r.yG},1473:function(n,e,t){t.d(e,{wX:function(){return h},CO:function(){return g},NZ:function(){return y},Yf:function(){return v},QE:function(){return b},SY:function(){return E},fg:function(){return N},df:function(){return w},V4:function(){return I},xg:function(){return R}});var r=t(1729),i=t(9752),o=t(2616),a=t(1703),u=t(9345),c=t(2167),s=t(8909),f=t(6427),p=t(9478),l=t(8516),d=t(701);function m(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function h(n){return(0,c.Z)(n,y)}function g(n){if(!h(n))throw new Error("Expected ".concat((0,o.Z)(n)," to be a GraphQL directive."));return n}var y=function(){function n(n){var e,t;this.name=n.name,this.description=n.description,this.locations=n.locations,this.isRepeatable=null!==(e=n.isRepeatable)&&void 0!==e&&e,this.extensions=n.extensions&&(0,a.Z)(n.extensions),this.astNode=n.astNode,n.name||(0,u.Z)(0,"Directive must be named."),Array.isArray(n.locations)||(0,u.Z)(0,"@".concat(n.name," locations must be an Array."));var i=null!==(t=n.args)&&void 0!==t?t:{};(0,s.Z)(i)&&!Array.isArray(i)||(0,u.Z)(0,"@".concat(n.name," args must be an object with argument names as keys.")),this.args=(0,r.Z)(i).map((function(n){var e=n[0],t=n[1];return{name:e,description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions&&(0,a.Z)(t.extensions),astNode:t.astNode}}))}var e,t,o=n.prototype;return o.toConfig=function(){return{name:this.name,description:this.description,locations:this.locations,args:(0,d.DM)(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}},o.toString=function(){return"@"+this.name},o.toJSON=function(){return this.toString()},e=n,(t=[{key:i.YF,get:function(){return"GraphQLDirective"}}])&&m(e.prototype,t),n}();(0,f.Z)(y);var v=new y({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[p.B.FIELD,p.B.FRAGMENT_SPREAD,p.B.INLINE_FRAGMENT],args:{if:{type:new d.bM(l.EZ),description:"Included when true."}}}),b=new y({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[p.B.FIELD,p.B.FRAGMENT_SPREAD,p.B.INLINE_FRAGMENT],args:{if:{type:new d.bM(l.EZ),description:"Skipped when true."}}}),E="No longer supported",N=new y({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[p.B.FIELD_DEFINITION,p.B.ARGUMENT_DEFINITION,p.B.INPUT_FIELD_DEFINITION,p.B.ENUM_VALUE],args:{reason:{type:l.kH,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:E}}}),w=new y({name:"specifiedBy",description:"Exposes a URL that specifies the behaviour of this scalar.",locations:[p.B.SCALAR],args:{url:{type:new d.bM(l.kH),description:"The URL that specifies the behaviour of this scalar."}}}),I=Object.freeze([v,b,N,w]);function R(n){return I.some((function(e){return e.name===n.name}))}},6256:function(n,e,t){t.d(e,{t3:function(){return d},CO:function(){return m},yG:function(){return v}});var r=t(2115),i=t(2616),o=t(5782),a=t(8251),u=t(614),c=t(7735),s=t(8516),f=t(1473),p=t(701),l=t(6982);function d(n,e){return g(n,(function(n){return!(0,f.xg)(n)}),h,e)}function m(n,e){return g(n,f.xg,c.s9,e)}function h(n){return!(0,s.u1)(n)&&!(0,c.s9)(n)}function g(n,e,t,i){var o=n.getDirectives().filter(e),a=(0,r.Z)(n.getTypeMap()).filter(t);return[y(n)].concat(o.map((function(n){return function(n,e){return Z(e,n)+"directive @"+n.name+w(e,n.args)+(n.isRepeatable?" repeatable":"")+" on "+n.locations.join(" | ")}(n,i)})),a.map((function(n){return v(n,i)}))).filter(Boolean).join("\n\n")+"\n"}function y(n){if(null!=n.description||!function(n){var e=n.getQueryType();if(e&&"Query"!==e.name)return!1;var t=n.getMutationType();if(t&&"Mutation"!==t.name)return!1;var r=n.getSubscriptionType();return!r||"Subscription"===r.name}(n)){var e=[],t=n.getQueryType();t&&e.push("  query: ".concat(t.name));var r=n.getMutationType();r&&e.push("  mutation: ".concat(r.name));var i=n.getSubscriptionType();return i&&e.push("  subscription: ".concat(i.name)),Z({},n)+"schema {\n".concat(e.join("\n"),"\n}")}}function v(n,e){return(0,p.KA)(n)?function(n,e){return Z(e,n)+"scalar ".concat(n.name)+function(n){if(null==n.specifiedByUrl)return"";var e=n.specifiedByUrl,t=(0,l.J)(e,s.kH);return t||(0,o.Z)(0,"Unexpected null value returned from `astFromValue` for specifiedByUrl")," @specifiedBy(url: "+(0,a.S)(t)+")"}(n)}(n,e):(0,p.lp)(n)?function(n,e){return Z(e,n)+"type ".concat(n.name)+b(n)+E(e,n)}(n,e):(0,p.oT)(n)?function(n,e){return Z(e,n)+"interface ".concat(n.name)+b(n)+E(e,n)}(n,e):(0,p.EN)(n)?function(n,e){var t=n.getTypes(),r=t.length?" = "+t.join(" | "):"";return Z(e,n)+"union "+n.name+r}(n,e):(0,p.EM)(n)?function(n,e){var t=n.getValues().map((function(n,t){return Z(e,n,"  ",!t)+"  "+n.name+R(n.deprecationReason)}));return Z(e,n)+"enum ".concat(n.name)+N(t)}(n,e):(0,p.hL)(n)?function(n,e){var t=(0,r.Z)(n.getFields()).map((function(n,t){return Z(e,n,"  ",!t)+"  "+I(n)}));return Z(e,n)+"input ".concat(n.name)+N(t)}(n,e):void(0,o.Z)(0,"Unexpected type: "+(0,i.Z)(n))}function b(n){var e=n.getInterfaces();return e.length?" implements "+e.map((function(n){return n.name})).join(" & "):""}function E(n,e){return N((0,r.Z)(e.getFields()).map((function(e,t){return Z(n,e,"  ",!t)+"  "+e.name+w(n,e.args,"  ")+": "+String(e.type)+R(e.deprecationReason)})))}function N(n){return 0!==n.length?" {\n"+n.join("\n")+"\n}":""}function w(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return 0===e.length?"":e.every((function(n){return!n.description}))?"("+e.map(I).join(", ")+")":"(\n"+e.map((function(e,r){return Z(n,e,"  "+t,!r)+"  "+t+I(e)})).join("\n")+"\n"+t+")"}function I(n){var e=(0,l.J)(n.defaultValue,n.type),t=n.name+": "+String(n.type);return e&&(t+=" = ".concat((0,a.S)(e))),t+R(n.deprecationReason)}function R(n){if(null==n)return"";var e=(0,l.J)(n,s.kH);return e&&n!==f.SY?" @deprecated(reason: "+(0,a.S)(e)+")":" @deprecated"}function Z(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=e.description;if(null==i)return"";if(!0===(null==n?void 0:n.commentDescriptions))return x(i,t,r);var o=i.length>70,a=(0,u.LZ)(i,"",o),c=t&&!r?"\n"+t:t;return c+a.replace(/\n/g,"\n"+t)+"\n"}function x(n,e,t){return(e&&!t?"\n":"")+n.split("\n").map((function(n){return e+(""!==n?"# "+n:"#")})).join("\n")+"\n"}}}]);