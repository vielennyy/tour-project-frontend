"use strict";(self.webpackChunk_cromwell_root=self.webpackChunk_cromwell_root||[]).push([[1341],{1341:function(e,n,t){t.r(n);var r=t(4920);n.default=r.a},6110:function(e,n,t){t.d(n,{_7:function(){return o},uJ:function(){return a},zR:function(){return c}});var r=t(701);function o(e,n){return e===n||((0,r.zM)(e)&&(0,r.zM)(n)||!(!(0,r.HG)(e)||!(0,r.HG)(n)))&&o(e.ofType,n.ofType)}function a(e,n,t){return n===t||((0,r.zM)(t)?!!(0,r.zM)(n)&&a(e,n.ofType,t.ofType):(0,r.zM)(n)?a(e,n.ofType,t):(0,r.HG)(t)?!!(0,r.HG)(n)&&a(e,n.ofType,t.ofType):!(0,r.HG)(n)&&(0,r.m0)(t)&&((0,r.oT)(n)||(0,r.lp)(n))&&e.isSubType(t,n))}function c(e,n,t){return n===t||((0,r.m0)(n)?(0,r.m0)(t)?e.getPossibleTypes(n).some((function(n){return e.isSubType(t,n)})):e.isSubType(n,t):!!(0,r.m0)(t)&&e.isSubType(t,n))}},1226:function(e,n,t){t.d(n,{_:function(){return u}});var r=t(2616),o=t(5782),a=t(9659),c=t(701);function u(e,n){var t;return n.kind===a.h.LIST_TYPE?(t=u(e,n.type))&&new c.p2(t):n.kind===a.h.NON_NULL_TYPE?(t=u(e,n.type))&&new c.bM(t):n.kind===a.h.NAMED_TYPE?e.getType(n.name.value):void(0,o.Z)(0,"Unexpected type node: "+(0,r.Z)(n))}},4920:function(e,n,t){t.d(n,{a:function(){return f}});var r=t(2616),o=t(6506),a=t(701),c=t(1226),u=t(6110);function f(e){return{InlineFragment:function(n){var t=e.getType(),c=e.getParentType();if((0,a.Gv)(t)&&(0,a.Gv)(c)&&!(0,u.zR)(e.getSchema(),t,c)){var f=(0,r.Z)(c),i=(0,r.Z)(t);e.reportError(new o._('Fragment cannot be spread here as objects of type "'.concat(f,'" can never be of type "').concat(i,'".'),n))}},FragmentSpread:function(n){var t=n.name.value,f=function(e,n){var t=e.getFragment(n);if(t){var r=(0,c._)(e.getSchema(),t.typeCondition);if((0,a.Gv)(r))return r}}(e,t),i=e.getParentType();if(f&&i&&!(0,u.zR)(e.getSchema(),f,i)){var p=(0,r.Z)(i),y=(0,r.Z)(f);e.reportError(new o._('Fragment "'.concat(t,'" cannot be spread here as objects of type "').concat(p,'" can never be of type "').concat(y,'".'),n))}}}}}}]);