"use strict";(self.webpackChunk_cromwell_admin_panel=self.webpackChunk_cromwell_admin_panel||[]).push([[591],{16366:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(6620),a=r(52322);const l=(0,n.Z)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},76901:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(6620),a=r(52322);const l=(0,n.Z)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},77485:(e,t,r)=>{r.d(t,{I:()=>n});var n=["administrator","author","customer","guest"]},38084:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Gy:()=>l,WF:()=>i,Cy:()=>o});var l=function(e){if(!e)return"";var t;try{t=JSON.parse(e)}catch(e){}if(!t)return e;var r="",n=!0,l=!1,i=void 0;try{for(var o,s=Object.entries(t)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=a(o.value,2),u=c[0],d=c[1];d&&u&&(r+=d+", ")}}catch(e){l=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(l)throw i}}return r},i=function(e){if(!e)return"";var t;try{t=JSON.parse(e)}catch(e){}if(!t)return e;var r="",n=!0,l=!1,i=void 0;try{for(var o,s=Object.entries(t)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=a(o.value,2),u=c[0],d=c[1];d&&u&&(r+="".concat(u,": ").concat(d,"\n"))}}catch(e){l=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(l)throw i}}return r},o=function(e){var t,r;if(e){try{r=JSON.parse(e)}catch(e){}r||(t=e),r&&"object"!=typeof r&&(t=r,r=void 0)}return{addressString:t,addressJson:r}}},59591:(e,t,r)=>{r.r(t),r.d(t,{default:()=>K});var n=r(25047),a=r.n(n),l=r(65040),i=r(63756),o=r(76082),s=r(20355),c=r(16366),u=r(76901),d=r(87037),f=r(38677),m=r(63735),p=r(53242),v=r(30680),g=r(2784),b=r(63884),h=r(75232),y=r(95856),x=r(38084),w=r(65479),E=r(28743),k=r(77485),_=r(53111),P=r(80763),Z=r(46062),N=r.n(Z),S=r(44036),j=r.n(S),O=r(96793),A=r.n(O),C=r(9978),I=r.n(C),D=r(11173),U=r.n(D),T=r(42464),F=r.n(T),M=r(21702),B={attributes:{"data-meta":"crw-admin-style"}};B.styleTagTransform=F(),B.setAttributes=I(),B.insert=A().bind(null,"head"),B.domAPI=j(),B.insertStyleElement=U(),N()(M.Z,B);const G=M.Z&&M.Z.locals?M.Z.locals:void 0;function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function H(e,t,r,n,a,l,i){try{var o=e[l](i),s=o.value}catch(e){return void r(e)}o.done?t(s):Promise.resolve(s).then(n,a)}function J(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function i(e){H(l,n,a,i,o,"next",e)}function o(e){H(l,n,a,i,o,"throw",e)}i(void 0)}))}}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){W(e,t,r[t])}))}return e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(){var e,t,r=(e=["\n                fragment AdminPanelUserFragment on User {\n                    id\n                    slug\n                    createDate\n                    updateDate\n                    isEnabled\n                    pageTitle\n                    pageDescription\n                    meta {\n                        keywords\n                    }\n                    fullName\n                    email\n                    avatar\n                    bio\n                    phone\n                    address\n                    role\n                    customMeta (keys: ",")\n                }"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return Q=function(){return r},r}function K(){var e,t=(0,b.UO)().id,r=(0,o.getGraphQLClient)(),n=R((0,g.useState)(!1),2),Z=n[0],N=n[1],S=R((0,g.useState)(""),2),j=S[0],O=S[1],A=(0,b.k6)(),C=R((0,g.useState)(null),2),I=C[0],D=C[1],U=R((0,g.useState)(!1),2),T=U[0],F=U[1],M="new"===t,B=R((0,g.useState)(!1),2),z=B[0],H=B[1],K=(0,x.Cy)(null==I?void 0:I.address),V=K.addressString,Y=K.addressJson,$=(e=J(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,null==r?void 0:r.getUserById(t,(0,l.gql)(Q(),JSON.stringify((0,_.He)(i.EDBEntity.User))),"AdminPanelUserFragment");case 4:n=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),function(t){return e.apply(this,arguments)}),q=function(){var e=J(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||M){e.next=7;break}return e.next=3,$(parseInt(t));case 3:(null==(r=e.sent)?void 0:r.id)?D(r):N(!0),e.next=8;break;case 7:M&&D({});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,g.useEffect)((function(){q()}),[]);var X,ee,te=function(){var e=J(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,$(parseInt(t));case 4:return r=e.sent,e.abrupt("return",null==r?void 0:r.customMeta);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(e,t){I&&D((function(r){var n=Object.assign({},r);return n[e]=t,n}))},ne=function(){var e=J(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=I.slug,e.t1=I.pageTitle,e.t2=I.pageDescription,e.t3=I.fullName,e.t4=I.email,e.t5=I.avatar,e.t6=I.bio,e.t7=I.phone,e.t8=I.address,e.t9=I.role,e.t10=Object,e.t11={},e.t12=I.customMeta,e.next=15,(0,_.Q7)(i.EDBEntity.User);case 15:return e.t13=e.sent,e.t14=e.t10.assign.call(e.t10,e.t11,e.t12,e.t13),e.abrupt("return",{slug:e.t0,pageTitle:e.t1,pageDescription:e.t2,fullName:e.t3,email:e.t4,avatar:e.t5,bio:e.t6,phone:e.t7,address:e.t8,role:e.t9,customMeta:e.t14});case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=J(a().mark((function e(){var n,l,o,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(!0),e.next=3,ne();case 3:if((n=e.sent).email&&n.fullName&&n.role){e.next=6;break}return e.abrupt("return");case 6:if(!M){e.next=25;break}if(j){e.next=9;break}return e.abrupt("return");case 9:return e.prev=9,l=L({},n,{password:j}),e.next=13,null==r?void 0:r.createUser(l);case 13:o=e.sent,w.A.success("Created user"),A.replace("".concat(E.Uu.baseRoute,"/").concat(o.id)),D(o),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(9),w.A.error("Failed to create user"),console.error(e.t0);case 23:e.next=42;break;case 25:if(!(null==I?void 0:I.id)){e.next=42;break}return e.prev=26,e.next=29,null==r?void 0:r.updateUser(I.id,n);case 29:return e.next=31,$(parseInt(t));case 31:s=e.sent,D(s),w.A.success("Saved!"),(null==(c=(0,i.getStoreItem)("userInfo"))?void 0:c.id)&&c.id===s.id&&(0,i.setStoreItem)("userInfo",I),e.next=42;break;case 38:e.prev=38,e.t1=e.catch(26),w.A.error("Failed to save"),console.error(e.t1);case 42:H(!1);case 43:case"end":return e.stop()}}),e,null,[[9,19],[26,38]])})));return function(){return e.apply(this,arguments)}}();return Z?g.createElement("div",{className:G.UserPage},g.createElement("div",{className:G.notFoundPage},g.createElement("p",{className:G.notFoundText},"User not found"))):g.createElement("div",{className:G.UserPage},g.createElement("div",{className:G.header},g.createElement("div",{className:G.headerLeft},g.createElement(d.Z,{onClick:function(){return window.history.back()}},g.createElement(s.Z,{style:{fontSize:"18px"}})),g.createElement("p",{className:P.Z.pageTitle},"account")),g.createElement("div",{className:G.headerActions},g.createElement(f.Z,{variant:"contained",color:"primary",className:G.saveBtn,size:"small",onClick:ae},"Save"))),g.createElement("div",{className:G.fields},g.createElement(m.ZP,{container:!0,spacing:3},g.createElement(m.ZP,{item:!0,xs:12,sm:6,style:{display:"flex",alignItems:"flex-end"}},g.createElement(p.Z,{label:"Name",value:(null==I?void 0:I.fullName)||"",fullWidth:!0,variant:"standard",className:G.field,onChange:function(e){re("fullName",e.target.value)},error:z&&!(null==I?void 0:I.fullName)})),g.createElement(m.ZP,{item:!0,xs:12,sm:6},g.createElement(h.u,{label:"Avatar",onChange:function(e){re("avatar",e)},value:null!==(X=null==I?void 0:I.avatar)&&void 0!==X?X:null,className:G.imageField,classes:{image:G.image},backgroundSize:"cover",width:"50px",height:"50px",showRemove:!0})),g.createElement(m.ZP,{item:!0,xs:12,sm:6},g.createElement(p.Z,{label:"E-mail",value:(null==I?void 0:I.email)||"",fullWidth:!0,variant:"standard",className:G.field,onChange:function(e){re("email",e.target.value)},error:z&&!(null==I?void 0:I.email)})),M&&g.createElement(m.ZP,{item:!0,xs:12,sm:6},g.createElement(p.Z,{label:"Password",value:j||"",type:T?"text":"password",fullWidth:!0,variant:"standard",className:G.field,onChange:function(e){O(e.target.value)},error:z&&!j,InputProps:{endAdornment:g.createElement(v.Z,{position:"end"},g.createElement(d.Z,{"aria-label":"toggle password visibility",onClick:function(){F(!T)},edge:"end"},T?g.createElement(c.Z,null):g.createElement(u.Z,null)))}})),g.createElement(m.ZP,{item:!0,xs:12,sm:6,display:"flex",alignItems:"flex-end"},g.createElement(y.P,{fullWidth:!0,variant:"standard",label:"Role",value:null!==(ee=null==I?void 0:I.role)&&void 0!==ee?ee:"",onChange:function(e){re("role",e.target.value)},error:z&&!(null==I?void 0:I.role),options:k.I.map((function(e){return{label:e,value:e}}))})),g.createElement(m.ZP,{item:!0,xs:12,sm:12},g.createElement(p.Z,{label:"Bio",value:(null==I?void 0:I.bio)||"",fullWidth:!0,variant:"standard",multiline:!0,className:G.field,onChange:function(e){re("bio",e.target.value)}})),!Y&&g.createElement(m.ZP,{item:!0,xs:12,sm:12},g.createElement(p.Z,{label:"Address",value:V||"",fullWidth:!0,variant:"standard",className:G.field,onChange:function(e){re("address",e.target.value)}})),Y&&Object.entries(Y).map((function(e){var t=R(e,2),r=t[0],n=t[1];return g.createElement(m.ZP,{item:!0,xs:12,sm:6,key:r},g.createElement(p.Z,{label:r,value:n||"",fullWidth:!0,variant:"standard",className:G.field,onChange:function(e){var t=e.target.value;re("address",JSON.stringify(L({},Y,W({},r,t))))}}))})),g.createElement(m.ZP,{item:!0,xs:12,sm:6},g.createElement(p.Z,{label:"Phone",value:(null==I?void 0:I.phone)||"",fullWidth:!0,variant:"standard",className:G.field,onChange:function(e){re("phone",e.target.value)}})),g.createElement(m.ZP,{item:!0,xs:12,sm:12},I&&g.createElement(_._i,{entityType:i.EDBEntity.User,entityData:I,refetchMeta:te})))))}},21702:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8081),a=r.n(n),l=r(23645),i=r.n(l)()(a());i.push([e.id,'.text_D1Ase{font-family:"Roboto","sans-serif"}.center_LYmZP{display:flex;align-items:center;justify-content:center}.paper_tHteJ{box-shadow:0 2px 3px 0 rgba(0,0,0,.05),0 0 11px 5px rgba(0,0,0,.05);background-color:#fff;border-radius:5px}.page_QEWpL{display:flex;flex-direction:column;height:100%}.pageHeader_NG3ma{display:inline-block}.pageContent_aey5d{display:inline-block;height:100%;overflow:auto}.pageTitle_hKGkR{display:flex;align-items:center;font-weight:500}.pageTitle_hKGkR::before{content:"";width:5px;height:5px;background-color:#333;margin-right:8px;display:block;border-radius:100%}.modeDark .pageTitle_hKGkR::before{background-color:#eee}.UserPage_EMRuo{position:relative;max-width:900px;margin:0 auto;padding:20px;width:100%}.container_wktjy,.header_HjbBv{max-width:900px;margin:0 auto}.notFoundPage_QpM9v{display:flex;justify-content:center;align-items:center;height:100%}.notFoundText_lP08G{font-size:25px;font-weight:500}.header_HjbBv{box-shadow:0 2px 3px 0 rgba(0,0,0,.05),0 0 11px 5px rgba(0,0,0,.05);background-color:#fff;border-radius:5px;padding:5px 10px 5px 0;margin-bottom:15px;width:100%;display:flex;justify-content:space-between;align-items:center}.headerLeft_EjD2P{display:flex;align-items:center}.fields_GNBxv{box-shadow:0 2px 3px 0 rgba(0,0,0,.05),0 0 11px 5px rgba(0,0,0,.05);background-color:#fff;border-radius:5px;padding:20px;display:flex;flex-direction:column}.imageField_xSfw2{padding-bottom:4px}.image_vkJ6Z{border-radius:100%}.modeDark .header_HjbBv,.modeDark .fields_GNBxv{background-color:#333}.modeDark .header_HjbBv *,.modeDark .fields_GNBxv *{color:#eee}',""]),i.locals={text:"text_D1Ase",center:"center_LYmZP",paper:"paper_tHteJ",page:"page_QEWpL",pageHeader:"pageHeader_NG3ma",pageContent:"pageContent_aey5d",pageTitle:"pageTitle_hKGkR",UserPage:"UserPage_EMRuo",container:"container_wktjy",header:"header_HjbBv",notFoundPage:"notFoundPage_QpM9v",notFoundText:"notFoundText_lP08G",headerLeft:"headerLeft_EjD2P",fields:"fields_GNBxv",imageField:"imageField_xSfw2",image:"image_vkJ6Z"};const o=i}}]);