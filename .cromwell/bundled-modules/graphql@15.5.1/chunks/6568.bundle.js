"use strict";(self.webpackChunk_cromwell_root=self.webpackChunk_cromwell_root||[]).push([[6568],{6568:function(n,t,r){r.r(t);var o=r(2694);t.default=o.Q},4470:function(n,t,r){function o(n,t){for(var r,o=/\r\n|[\n\r]/g,c=1,e=t+1;(r=o.exec(n.body))&&r.index<t;)c+=1,e=t+1-(r.index+r[0].length);return{line:c,column:e}}r.d(t,{k:function(){return o}})},2694:function(n,t,r){r.d(t,{Q:function(){return c},z:function(){return e}});var o=r(4470);function c(n){return e(n.source,(0,o.k)(n.source,n.start))}function e(n,t){var r=n.locationOffset.column-1,o=i(r)+n.body,c=t.line-1,e=n.locationOffset.line-1,a=t.line+e,l=1===t.line?r:0,f=t.column+l,s="".concat(n.name,":").concat(a,":").concat(f,"\n"),h=o.split(/\r\n|[\n\r]/g),m=h[c];if(m.length>120){for(var p=Math.floor(f/80),d=f%80,v=[],g=0;g<m.length;g+=80)v.push(m.slice(g,g+80));return s+u([["".concat(a),v[0]]].concat(v.slice(1,p+1).map((function(n){return["",n]})),[[" ",i(d-1)+"^"],["",v[p+1]]]))}return s+u([["".concat(a-1),h[c-1]],["".concat(a),m],["",i(f-1)+"^"],["".concat(a+1),h[c+1]]])}function u(n){var t=n.filter((function(n){return n[0],void 0!==n[1]})),r=Math.max.apply(Math,t.map((function(n){return n[0].length})));return t.map((function(n){var t,o=n[0],c=n[1];return i(r-(t=o).length)+t+(c?" | "+c:" |")})).join("\n")}function i(n){return Array(n+1).join(" ")}}}]);