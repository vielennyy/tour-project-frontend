"use strict";(self.webpackChunk_cromwell_admin_panel=self.webpackChunk_cromwell_admin_panel||[]).push([[526],{16366:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(6620),a=r(52322);const i=(0,n.Z)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},76901:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(6620),a=r(52322);const i=(0,n.Z)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},5526:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var n=r(25047),a=r.n(n),i=r(63756),l=r(76082),o=r(16366),c=r(76901),s=r(30680),u=r(87037),m=r(38677),d=r(53242),p=r(79016),f=r(2784),g=r(63884),v=r(75232),h=r(31941),b=r(65479),x=r(46062),w=r.n(x),y=r(44036),_=r.n(y),k=r(96793),P=r.n(k),E=r(9978),W=r.n(E),C=r(11173),Z=r.n(C),q=r(42464),S=r.n(q),z=r(93337),N={attributes:{"data-meta":"crw-admin-style"}};N.styleTagTransform=S(),N.setAttributes=W(),N.insert=P().bind(null,"head"),N.domAPI=_(),N.insertStyleElement=Z(),w()(z.Z,N);const A=z.Z&&z.Z.locals?z.Z.locals:void 0;function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function I(e,t,r,n,a,i,l){try{var o=e[i](l),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,a)}function M(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function l(e){I(i,n,a,l,o,"next",e)}function o(e){I(i,n,a,l,o,"throw",e)}l(void 0)}))}}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){o=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(o)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(){var e,t=(0,l.getRestApiClient)(),r=(0,l.getGraphQLClient)(),n=(0,g.k6)(),d=j((0,f.useState)(!1),2),p=d[0],x=d[1],w=j((0,f.useState)(!1),2),y=w[0],_=w[1],k=j((0,f.useState)(""),2),P=k[0],E=k[1],W=j((0,f.useState)(""),2),C=W[0],Z=W[1],q=j((0,f.useState)(""),2),S=q[0],z=q[1],N=j((0,f.useState)(null),2),F=N[0],I=N[1],T=j((0,f.useState)(!1),2),O=T[0],L=T[1],Y=(e=M(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(!0),P&&C&&S){e.next=3;break}return e.abrupt("return");case 3:return L(!0),e.prev=4,e.next=7,r.createUser({fullName:S,email:P,password:C,avatar:F,role:"administrator"});case 7:e.next=15;break;case 9:return e.prev=9,e.t0=e.catch(4),b.A.error("Failed to create user with provided credentials"),console.error(e.t0),L(!1),e.abrupt("return");case 15:return e.prev=15,e.next=18,t.setUpCms({url:window.location.origin});case 18:return e.next=20,t.login({email:P,password:C});case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(15),console.error(e.t1);case 25:G(),L(!1);case 27:case"end":return e.stop()}}),e,null,[[4,9],[15,22]])}))),function(){return e.apply(this,arguments)}),G=function(){var e=M(a().mark((function e(){var r,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getUserInfo({disableLog:!0});case 2:(r=e.sent)&&((0,i.setStoreItem)("userInfo",r),null==n||null===(l=n.push)||void 0===l||l.call(n,"/"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return f.createElement("div",{className:A.WelcomePage},f.createElement("div",{className:A.wrapper},f.createElement("img",{src:"/admin/static/logo_small_black.svg",width:"100px",className:A.logo}),f.createElement("h1",{className:A.title},"Welcome to Cromwell CMS!"),f.createElement("h3",{className:A.subtitle},"Let's create your account"),f.createElement("div",{className:A.inputForm},f.createElement("div",{className:A.userMainInfo},f.createElement(v.u,{toolTip:"Pick avatar",onChange:I,value:F,className:A.avatar,hideSrc:!0}),f.createElement(U,{label:"Name",value:S,onChange:function(e){return z(e.target.value)},fullWidth:!0,variant:"standard",error:""===S&&y,helperText:""===S&&y?"This field is required":void 0,id:"name-input"})),f.createElement(U,{label:"E-mail",value:P,className:A.textField,onChange:function(e){return E(e.target.value)},fullWidth:!0,variant:"standard",error:""===P&&y,helperText:""===P&&y?"This field is required":void 0,id:"email-input"}),f.createElement(U,{label:"Password",type:p?"text":"password",value:C,onChange:function(e){return Z(e.target.value)},className:A.textField,fullWidth:!0,variant:"standard",error:""===C&&y,helperText:""===C&&y?"This field is required":void 0,id:"password-input",InputProps:{endAdornment:f.createElement(s.Z,{position:"end"},f.createElement(u.Z,{"aria-label":"toggle password visibility",onClick:function(){x(!p)},edge:"end"},p?f.createElement(o.Z,null):f.createElement(c.Z,null)))}}),f.createElement(m.Z,{onClick:Y,className:A.createBtn,disabled:O,color:"primary",variant:"contained"},"Create"))),f.createElement(h.Q,{isActive:O}))}var U=(0,p.Z)({root:{}})(d.Z)},93337:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(8081),a=r.n(n),i=r(23645),l=r.n(i)()(a());l.push([e.id,".WelcomePage_kbqen{position:fixed;display:flex;justify-content:center;align-items:flex-start;overflow:auto;z-index:999;background-size:cover;background-position:center;background-color:#fff;padding-top:50px;top:0;bottom:0;left:0;right:0}.WelcomePage_kbqen .wrapper_H7Obm{width:600px;max-width:77vw;display:flex;justify-content:center;flex-direction:column;align-items:center}.WelcomePage_kbqen div.textField_cLQx7{margin-bottom:15px}.WelcomePage_kbqen .inputForm_cUhWV{width:350px;max-width:77vw;display:flex;justify-content:center;flex-direction:column;align-items:center;margin:10px 0}.WelcomePage_kbqen .title_XGYzJ{font-size:30px;font-weight:500;margin-bottom:20px;text-align:center}.WelcomePage_kbqen .subtitle_tUgch{font-size:20px;font-weight:400;margin-bottom:30px}.WelcomePage_kbqen .userMainInfo_s4qmb{display:flex;align-items:center;width:100%;margin-bottom:15px}.WelcomePage_kbqen .avatar_zDOsG{margin-right:15px;display:flex}.WelcomePage_kbqen .createBtn_v3ojF{margin-top:15px}.WelcomePage_kbqen .logo_eYYPZ{margin-bottom:50px;opacity:.9}",""]),l.locals={WelcomePage:"WelcomePage_kbqen",wrapper:"wrapper_H7Obm",textField:"textField_cLQx7",inputForm:"inputForm_cUhWV",title:"title_XGYzJ",subtitle:"subtitle_tUgch",userMainInfo:"userMainInfo_s4qmb",avatar:"avatar_zDOsG",createBtn:"createBtn_v3ojF",logo:"logo_eYYPZ"};const o=l}}]);