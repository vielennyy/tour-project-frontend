"use strict";(self.webpackChunk_cromwell_root=self.webpackChunk_cromwell_root||[]).push([[7379],{7379:function(e,n,t){t.r(n);var r=t(9122);n.default=r.Z},9122:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(5570),a=t(8079);function c(e,n){return(0,r.Gu)(e,n,[a.r])}},8079:function(e,n,t){t.d(n,{r:function(){return o}});var r=t(5782),a=t(6506),c=t(701);function o(e){return{Field:function(n){var t=e.getFieldDef(),c=null==t?void 0:t.deprecationReason;if(t&&null!=c){var o=e.getParentType();null!=o||(0,r.Z)(0),e.reportError(new a._("The field ".concat(o.name,".").concat(t.name," is deprecated. ").concat(c),n))}},Argument:function(n){var t=e.getArgument(),c=null==t?void 0:t.deprecationReason;if(t&&null!=c){var o=e.getDirective();if(null!=o)e.reportError(new a._('Directive "@'.concat(o.name,'" argument "').concat(t.name,'" is deprecated. ').concat(c),n));else{var u=e.getParentType(),l=e.getFieldDef();null!=u&&null!=l||(0,r.Z)(0),e.reportError(new a._('Field "'.concat(u.name,".").concat(l.name,'" argument "').concat(t.name,'" is deprecated. ').concat(c),n))}}},ObjectField:function(n){var t=(0,c.xC)(e.getParentInputType());if((0,c.hL)(t)){var r=t.getFields()[n.name.value],o=null==r?void 0:r.deprecationReason;null!=o&&e.reportError(new a._("The input field ".concat(t.name,".").concat(r.name," is deprecated. ").concat(o),n))}},EnumValue:function(n){var t=e.getEnumValue(),o=null==t?void 0:t.deprecationReason;if(t&&null!=o){var u=(0,c.xC)(e.getInputType());null!=u||(0,r.Z)(0),e.reportError(new a._('The enum value "'.concat(u.name,".").concat(t.name,'" is deprecated. ').concat(o),n))}}}}}}]);