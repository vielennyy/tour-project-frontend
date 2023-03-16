"use strict";(self.webpackChunk_cromwell_root=self.webpackChunk_cromwell_root||[]).push([[49086],{49086:function(e,t,n){n.d(t,{Z:function(){return je}});var r=n(75595),o=n(99785),i=(n(14078),n(31239)),a=n(86128);function s(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function f(e){return e instanceof s(e).Element||e instanceof Element}function c(e){return e instanceof s(e).HTMLElement||e instanceof HTMLElement}function u(e){return"undefined"!=typeof ShadowRoot&&(e instanceof s(e).ShadowRoot||e instanceof ShadowRoot)}var p=Math.max,l=Math.min,d=Math.round;function m(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(c(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=d(n.width)/a||1),i>0&&(o=d(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function h(e){var t=s(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function v(e){return e?(e.nodeName||"").toLowerCase():null}function y(e){return((f(e)?e.ownerDocument:e.document)||window.document).documentElement}function b(e){return m(y(e)).left+h(e).scrollLeft}function g(e){return s(e).getComputedStyle(e)}function w(e){var t=g(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function x(e,t,n){void 0===n&&(n=!1);var r,o,i=c(t),a=c(t)&&function(e){var t=e.getBoundingClientRect(),n=d(t.width)/e.offsetWidth||1,r=d(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),f=y(t),u=m(e,a),p={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!n)&&(("body"!==v(t)||w(f))&&(p=(r=t)!==s(r)&&c(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:h(r)),c(t)?((l=m(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):f&&(l.x=b(f))),{x:u.left+p.scrollLeft-l.x,y:u.top+p.scrollTop-l.y,width:u.width,height:u.height}}function O(e){var t=m(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function E(e){return"html"===v(e)?e:e.assignedSlot||e.parentNode||(u(e)?e.host:null)||y(e)}function j(e){return["html","body","#document"].indexOf(v(e))>=0?e.ownerDocument.body:c(e)&&w(e)?e:j(E(e))}function A(e,t){var n;void 0===t&&(t=[]);var r=j(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=s(r),a=o?[i].concat(i.visualViewport||[],w(r)?r:[]):r,f=t.concat(a);return o?f:f.concat(A(E(a)))}function D(e){return["table","td","th"].indexOf(v(e))>=0}function P(e){return c(e)&&"fixed"!==g(e).position?e.offsetParent:null}function k(e){for(var t=s(e),n=P(e);n&&D(n)&&"static"===g(n).position;)n=P(n);return n&&("html"===v(n)||"body"===v(n)&&"static"===g(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&c(e)&&"fixed"===g(e).position)return null;var n=E(e);for(u(n)&&(n=n.host);c(n)&&["html","body"].indexOf(v(n))<0;){var r=g(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var R="top",M="bottom",L="right",W="left",T="auto",B=[R,M,L,W],S="start",H="end",C="viewport",_="popper",q=B.reduce((function(e,t){return e.concat([t+"-"+S,t+"-"+H])}),[]),V=[].concat(B,[T]).reduce((function(e,t){return e.concat([t,t+"-"+S,t+"-"+H])}),[]),I=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Z(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}var N={placement:"bottom",modifiers:[],strategy:"absolute"};function U(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function F(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?N:o;return function(e,t,n){void 0===n&&(n=i);var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},N,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],u=!1,p={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n;l(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:f(e)?A(e):e.contextElement?A(e.contextElement):[],popper:A(t)};var a,u,d=function(e){var t=Z(e);return I.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),u=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(u).map((function(e){return u[e]}))));return s.orderedModifiers=d.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:s,name:t,instance:p,options:r});c.push(i||function(){})}})),p.update()},forceUpdate:function(){if(!u){var e=s.elements,t=e.reference,n=e.popper;if(U(t,n)){s.rects={reference:x(t,k(n),"fixed"===s.options.strategy),popper:O(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,c=o.name;"function"==typeof i&&(s=i({state:s,options:f,name:c,instance:p})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){p.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),u=!0}};if(!U(e,t))return p;function l(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(n).then((function(e){!u&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var z={passive:!0};function X(e){return e.split("-")[0]}function Y(e){return e.split("-")[1]}function $(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function G(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?X(o):null,a=o?Y(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case R:t={x:s,y:n.y-r.height};break;case M:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:f};break;case W:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?$(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case S:t[c]=t[c]-(n[u]/2-r[u]/2);break;case H:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var J={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,f=e.position,c=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,l=e.isFixed,m=a.x,h=void 0===m?0:m,v=a.y,b=void 0===v?0:v,w="function"==typeof p?p({x:h,y:b}):{x:h,y:b};h=w.x,b=w.y;var x=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),E=W,j=R,A=window;if(u){var D=k(n),P="clientHeight",T="clientWidth";D===s(n)&&"static"!==g(D=y(n)).position&&"absolute"===f&&(P="scrollHeight",T="scrollWidth"),D=D,(o===R||(o===W||o===L)&&i===H)&&(j=M,b-=(l&&D===A&&A.visualViewport?A.visualViewport.height:D[P])-r.height,b*=c?1:-1),o!==W&&(o!==R&&o!==M||i!==H)||(E=L,h-=(l&&D===A&&A.visualViewport?A.visualViewport.width:D[T])-r.width,h*=c?1:-1)}var B,S=Object.assign({position:f},u&&J),C=!0===p?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:d(t*r)/r||0,y:d(n*r)/r||0}}({x:h,y:b}):{x:h,y:b};return h=C.x,b=C.y,c?Object.assign({},S,((B={})[j]=O?"0":"",B[E]=x?"0":"",B.transform=(A.devicePixelRatio||1)<=1?"translate("+h+"px, "+b+"px)":"translate3d("+h+"px, "+b+"px, 0)",B)):Object.assign({},S,((t={})[j]=O?b+"px":"",t[E]=x?h+"px":"",t.transform="",t))}var Q={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Q[e]}))}var te={start:"end",end:"start"};function ne(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function re(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&u(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function oe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ie(e,t){return t===C?oe(function(e){var t=s(e),n=y(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,f=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,f=r.offsetTop)),{width:o,height:i,x:a+b(e),y:f}}(e)):f(t)?function(e){var t=m(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):oe(function(e){var t,n=y(e),r=h(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=p(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=p(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+b(e),f=-r.scrollTop;return"rtl"===g(o||n).direction&&(s+=p(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(y(e)))}function ae(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function se(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function fe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,u=void 0===s?C:s,d=n.elementContext,h=void 0===d?_:d,b=n.altBoundary,w=void 0!==b&&b,x=n.padding,O=void 0===x?0:x,j=ae("number"!=typeof O?O:se(O,B)),D=h===_?"reference":_,P=e.rects.popper,W=e.elements[w?D:h],T=function(e,t,n){var r="clippingParents"===t?function(e){var t=A(E(e)),n=["absolute","fixed"].indexOf(g(e).position)>=0&&c(e)?k(e):e;return f(n)?t.filter((function(e){return f(e)&&re(e,n)&&"body"!==v(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ie(e,n);return t.top=p(r.top,t.top),t.right=l(r.right,t.right),t.bottom=l(r.bottom,t.bottom),t.left=p(r.left,t.left),t}),ie(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(f(W)?W:W.contextElement||y(e.elements.popper),a,u),S=m(e.elements.reference),H=G({reference:S,element:P,strategy:"absolute",placement:o}),q=oe(Object.assign({},P,H)),V=h===_?q:S,I={top:T.top-V.top+j.top,bottom:V.bottom-T.bottom+j.bottom,left:T.left-V.left+j.left,right:V.right-T.right+j.right},Z=e.modifiersData.offset;if(h===_&&Z){var N=Z[o];Object.keys(I).forEach((function(e){var t=[L,M].indexOf(e)>=0?1:-1,n=[R,M].indexOf(e)>=0?"y":"x";I[e]+=N[n]*t}))}return I}function ce(e,t,n){return p(e,l(t,n))}function ue(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function pe(e){return[R,L,M,W].some((function(t){return e[t]>=0}))}var le=F({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,f=void 0===a||a,c=s(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,z)})),f&&c.addEventListener("resize",n.update,z),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,z)})),f&&c.removeEventListener("resize",n.update,z)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=G({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:X(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];c(o)&&v(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});c(r)&&v(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=V.reduce((function(e,n){return e[n]=function(e,t,n){var r=X(e),o=[W,R].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[W,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=X(v),b=f||(y!==v&&m?function(e){if(X(e)===T)return[];var t=ee(e);return[ne(e),t,ne(t)]}(v):[ee(v)]),g=[v].concat(b).reduce((function(e,n){return e.concat(X(n)===T?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?V:f,u=Y(r),p=u?s?q:q.filter((function(e){return Y(e)===u})):B,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=fe(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[X(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,j=g[0],A=0;A<g.length;A++){var D=g[A],P=X(D),k=Y(D)===S,H=[R,M].indexOf(P)>=0,C=H?"width":"height",_=fe(t,{placement:D,boundary:u,rootBoundary:p,altBoundary:l,padding:c}),I=H?k?L:W:k?M:R;w[C]>x[C]&&(I=ee(I));var Z=ee(I),N=[];if(i&&N.push(_[P]<=0),s&&N.push(_[I]<=0,_[Z]<=0),N.every((function(e){return e}))){j=D,E=!1;break}O.set(D,N)}if(E)for(var U=function(e){var t=g.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},F=m?3:1;F>0&&"break"!==U(F);F--);t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,d=n.padding,m=n.tether,h=void 0===m||m,v=n.tetherOffset,y=void 0===v?0:v,b=fe(t,{boundary:f,rootBoundary:c,padding:d,altBoundary:u}),g=X(t.placement),w=Y(t.placement),x=!w,E=$(g),j="x"===E?"y":"x",A=t.modifiersData.popperOffsets,D=t.rects.reference,P=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,B="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0};if(A){if(i){var _,q="y"===E?R:W,V="y"===E?M:L,I="y"===E?"height":"width",Z=A[E],N=Z+b[q],U=Z-b[V],F=h?-P[I]/2:0,z=w===S?D[I]:P[I],G=w===S?-P[I]:-D[I],J=t.elements.arrow,K=h&&J?O(J):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[q],te=Q[V],ne=ce(0,D[I],K[I]),re=x?D[I]/2-F-ne-ee-B.mainAxis:z-ne-ee-B.mainAxis,oe=x?-D[I]/2+F+ne+te+B.mainAxis:G+ne+te+B.mainAxis,ie=t.elements.arrow&&k(t.elements.arrow),ae=ie?"y"===E?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(_=null==H?void 0:H[E])?_:0,ue=Z+oe-se,pe=ce(h?l(N,Z+re-se-ae):N,Z,h?p(U,ue):U);A[E]=pe,C[E]=pe-Z}if(s){var le,de="x"===E?R:W,me="x"===E?M:L,he=A[j],ve="y"===j?"height":"width",ye=he+b[de],be=he-b[me],ge=-1!==[R,W].indexOf(g),we=null!=(le=null==H?void 0:H[j])?le:0,xe=ge?ye:he-D[ve]-P[ve]-we+B.altAxis,Oe=ge?he+D[ve]+P[ve]-we-B.altAxis:be,Ee=h&&ge?function(e,t,n){var r=ce(e,t,n);return r>n?n:r}(xe,he,Oe):ce(h?xe:ye,he,h?Oe:be);A[j]=Ee,C[j]=Ee-he}t.modifiersData[r]=C}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=X(n.placement),f=$(s),c=[W,L].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return ae("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:se(e,B))}(o.padding,n),p=O(i),l="y"===f?R:W,d="y"===f?M:L,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=k(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,b=m/2-h/2,g=u[l],w=y-p[c]-u[d],x=y/2-p[c]/2+b,E=ce(g,x,w),j=f;n.modifiersData[r]=((t={})[j]=E,t.centerOffset=E-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&re(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=fe(t,{elementContext:"reference"}),s=fe(t,{altBoundary:!0}),f=ue(a,r),c=ue(s,o,i),u=pe(f),p=pe(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),de=n(35725),me=n(82373);function he(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ve(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ye=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","TransitionProps"],be=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function ge(e){return"function"==typeof e?e():e}var we={},xe=o.forwardRef((function(e,t){var n=e.anchorEl,s=e.children,f=e.direction,c=e.disablePortal,u=e.modifiers,p=e.open,l=e.placement,d=e.popperOptions,m=e.popperRef,h=e.TransitionProps,v=(0,i.Z)(e,ye),y=o.useRef(null),b=(0,a.unstable_useForkRef)(y,t),g=o.useRef(null),w=(0,a.unstable_useForkRef)(g,m),x=o.useRef(w);(0,a.unstable_useEnhancedEffect)((function(){x.current=w}),[w]),o.useImperativeHandle(m,(function(){return g.current}),[]);var O=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(l,f),E=he(o.useState(O),2),j=E[0],A=E[1];o.useEffect((function(){g.current&&g.current.forceUpdate()})),(0,a.unstable_useEnhancedEffect)((function(){if(n&&p){ge(n);var e=[{name:"preventOverflow",options:{altBoundary:c}},{name:"flip",options:{altBoundary:c}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;A(t.placement)}}];null!=u&&(e=e.concat(u)),d&&null!=d.modifiers&&(e=e.concat(d.modifiers));var t=le(ge(n),y.current,(0,r.Z)({placement:O},d,{modifiers:e}));return x.current(t),function(){t.destroy(),x.current(null)}}}),[n,c,u,p,d,O]);var D={placement:j};return null!==h&&(D.TransitionProps=h),(0,me.jsx)("div",(0,r.Z)({ref:b,role:"tooltip"},v,{children:"function"==typeof s?s(D):s}))})),Oe=o.forwardRef((function(e,t){var n=e.anchorEl,s=e.children,f=e.container,c=e.direction,u=void 0===c?"ltr":c,p=e.disablePortal,l=void 0!==p&&p,d=e.keepMounted,m=void 0!==d&&d,h=e.modifiers,v=e.open,y=e.placement,b=void 0===y?"bottom":y,g=e.popperOptions,w=void 0===g?we:g,x=e.popperRef,O=e.style,E=e.transition,j=void 0!==E&&E,A=(0,i.Z)(e,be),D=he(o.useState(!0),2),P=D[0],k=D[1];if(!m&&!v&&(!j||P))return null;var R=f||(n?(0,a.unstable_ownerDocument)(ge(n)).body:void 0);return(0,me.jsx)(de.Z,{disablePortal:l,container:R,children:(0,me.jsx)(xe,(0,r.Z)({anchorEl:n,direction:u,disablePortal:l,modifiers:h,ref:t,open:j?!P:v,placement:b,popperOptions:w,popperRef:x},A,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:v||!m||j&&!P?null:"none"},O),TransitionProps:j?{in:v,onEnter:function(){k(!1)},onExited:function(){k(!0)}}:null,children:s}))})})),Ee=n(22725),je=o.forwardRef((function(e,t){var n=(0,Ee.useThemeWithoutDefault)();return(0,me.jsx)(Oe,(0,r.Z)({direction:null==n?void 0:n.direction},e,{ref:t}))}))}}]);