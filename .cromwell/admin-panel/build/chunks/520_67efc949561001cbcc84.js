"use strict";(self.webpackChunk_cromwell_admin_panel=self.webpackChunk_cromwell_admin_panel||[]).push([[520],{96896:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(6620),r=n(52322);const i=(0,a.Z)((0,r.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline")},50520:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ee});var a=n(25047),r=n.n(a),i=n(76082),l=n(38677),o=n(63735),s=n(23883),c=n(87037),u=n(30750),p=n(6620),d=n(52322);const g=(0,p.Z)((0,d.jsx)("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"}),"LibraryAdd");var f=n(96896),m=n(68019),h=n(85219),v=n(49810),x=n(3085),b=n(36269),_=n(2784),y=n(27166),P=n(82355),k=n(46043),w=n(12203),E=n(65479),U=n(28743),Z=n(17393),C=n(80763),L=n(46062),A=n.n(L),O=n(44036),S=n.n(O),R=n(96793),T=n.n(R),H=n(9978),M=n.n(H),N=n(11173),I=n.n(N),V=n(42464),F=n.n(V),j=n(14620),z={attributes:{"data-meta":"crw-admin-style"}};z.styleTagTransform=F(),z.setAttributes=M(),z.insert=T().bind(null,"head"),z.domAPI=S(),z.insertStyleElement=I(),A()(j.Z,z);const G=j.Z&&j.Z.locals?j.Z.locals:void 0;function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function B(e,t,n,a,r,i,l){try{var o=e[i](l),s=o.value}catch(e){return void n(e)}o.done?t(s):Promise.resolve(s).then(a,r)}function D(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function l(e){B(i,a,r,l,o,"next",e)}function o(e){B(i,a,r,l,o,"throw",e)}l(void 0)}))}}function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},K.apply(this,arguments)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}function q(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?W(e):t}function Q(e,t){return Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Q(e,t)}var J=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(p,e);var t,n,a=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=X(t);if(n){var r=X(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return q(this,e)});function p(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=a.call(this,e)).pluginUpdates={},t.pluginsUnderUpdate={},t.pageRef=_.createRef();var n=W(t);t.checkUpdates=D(r().mark((function e(){var t,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(t=n)||void 0===t||null===(a=t.pageRef)||void 0===a?void 0:a.current)){e.next=7;break}return e.next=4,n.getPluginList();case 4:return e.next=6,n.getPluginUpdates();case 6:requestAnimationFrame((function(){return setTimeout(n.checkUpdates,6e4)}));case 7:case"end":return e.stop()}}),e)})));var l=W(t);t.getPluginList=D(r().mark((function e(){var t,n,a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,null===(t=(0,i.getRestApiClient)())||void 0===t?void 0:t.getPluginList();case 4:(n=e.sent)&&Array.isArray(n)&&l.setState({pluginPackages:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,a=(0,i.getGraphQLClient)(),e.next=15,a.getAllEntities("Plugin",a.PluginFragment,"PluginFragment");case 15:(o=e.sent)&&Array.isArray(o)&&(o.forEach((function(e){l.pluginsUnderUpdate[e.name]=e.isUpdating})),l.setState({installedPlugins:o})),e.next=22;break;case 19:e.prev=19,e.t1=e.catch(11),console.error(e.t1);case 22:case"end":return e.stop()}}),e,null,[[0,8],[11,19]])})));var o=W(t);t.getPluginUpdates=D(r().mark((function e(){var t,n,a,l,s,c,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!0,n=!1,a=void 0,e.prev=1,l=o.state.pluginPackages[Symbol.iterator]();case 3:if(t=(s=l.next()).done){e.next=19;break}return c=s.value,o.pluginUpdates[c.name]=void 0,e.prev=6,e.next=9,(0,i.getRestApiClient)().getPluginUpdate(c.name);case 9:(u=e.sent)&&(o.pluginUpdates[c.name]=u),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.error(e.t0);case 16:t=!0,e.next=3;break;case 19:e.next=25;break;case 21:e.prev=21,e.t1=e.catch(1),n=!0,a=e.t1;case 25:e.prev=25,e.prev=26,t||null==l.return||l.return();case 28:if(e.prev=28,!n){e.next=31;break}throw a;case 31:return e.finish(28);case 32:return e.finish(25);case 33:o.forceUpdate();case 34:case"end":return e.stop()}}),e,null,[[1,21,25,33],[6,13],[26,,28,32]])}))),t.handleOpenPluginPage=function(e){return function(){var n="".concat(U.P8.baseRoute,"?pluginName=").concat(e);t.props.history.push(n)}};var s=W(t);t.handleDeletePlugin=function(e){return D(r().mark((function t(){var n,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,(0,P.UB)({title:"Delete plugin ".concat(null!==(n=e.title)&&void 0!==n?n:e.name,"?")});case 3:if(t.sent){t.next=6;break}return t.abrupt("return");case 6:return a=e.name,s.pluginsUnderUpdate[a]=!0,s.setState({updateModalInfo:null}),t.prev=9,t.next=12,(0,i.getRestApiClient)().deletePlugin(a);case 12:return t.prev=12,t.next=15,s.getPluginList();case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(12),console.error(t.t0);case 20:E.A.info("Plugin deleted"),t.next=27;break;case 23:t.prev=23,t.t1=t.catch(9),console.error(t.t1),E.A.error("Failed to delete plugin");case 27:s.pluginsUnderUpdate[a]=!1,s.forceUpdate(),(0,Z.b)({onlyNew:!0});case 30:case"end":return t.stop()}}),t,null,[[9,23],[12,17]])})))},t.handleActivatePlugin=function(e){var n=W(t);return D(r().mark((function t(){var a,l;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.setState({isLoading:!0}),a=!1,t.prev=2,t.next=6,null===(l=(0,i.getRestApiClient)())||void 0===l?void 0:l.activatePlugin(e);case 6:return a=t.sent,t.next=9,n.getPluginList();case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),console.error(t.t0);case 14:n.setState({isLoading:!1}),a?E.A.success("Plugin installed"):E.A.error("Failed to install plugin");case 16:case"end":return t.stop()}}),t,null,[[2,11]])})))},t.handleOpenMarket=function(){var e;null===(e=t.props.history)||void 0===e||e.push(U.FM.route)},t.handleShowUpdate=function(e,n,a){return function(){e&&a&&t.setState({updateModalInfo:{plugin:e,update:a,info:n}})}};var c,u=W(t);return t.startUpdate=(c=D(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.pluginsUnderUpdate[t.name]=!0,u.setState({updateModalInfo:null}),e.prev=3,e.next=6,(0,i.getRestApiClient)().updatePlugin(t.name);case 6:n=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error(e.t0);case 12:return n&&(u.pluginUpdates[t.name]=void 0),e.prev=13,e.next=16,u.getPluginList();case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(13),console.error(e.t1);case 21:return e.next=23,(0,Z.O)(t.name);case 23:n?E.A.success("Plugin updated"):E.A.error("Failed to update plugin"),u.pluginsUnderUpdate[t.name]=!1,u.forceUpdate(),(0,Z.b)({onlyNew:!0});case 27:case"end":return e.stop()}}),e,null,[[3,9],[13,18]])}))),function(e){return c.apply(this,arguments)}),t.state={isLoading:!1,pluginPackages:[],installedPlugins:[]},t}var d=p.prototype;return d.componentDidMount=function(){this.init()},d.init=function(){var e=this;return D(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),t.next=3,e.getPluginList();case 3:return e.setState({isLoading:!1}),t.next=6,e.getPluginUpdates();case 6:setTimeout(e.checkUpdates,6e4);case 7:case"end":return t.stop()}}),t)})))()},d.render=function(){var e,t,n,a,r,i=this,p=this.state,d=p.isLoading,b=p.installedPlugins,P=p.pluginPackages;return _.createElement("div",{className:G.PluginList,ref:this.pageRef},_.createElement(l.Z,{className:G.addBtn,onClick:this.handleOpenMarket,variant:"contained",color:"primary",startIcon:_.createElement(f.Z,null)},"Add plugins"),d&&_.createElement(w.s,{style:{maxHeight:"400px"}}),!d&&P&&P.map((function(e){var t,n,a=i,r=e.name,l=e.icon,p=null==b?void 0:b.find((function(e){return e.name===r})),d=null!==(n=null!==(t=e.title)&&void 0!==t?t:null==p?void 0:p.title)&&void 0!==n?n:r,f=i.pluginUpdates[e.name];(null==f?void 0:f.packageVersion)===(null==e?void 0:e.version)&&(f=void 0);var y,P=i.pluginsUnderUpdate[e.name];return _.createElement(o.ZP,{container:!0,className:G.pluginItem,key:e.name},_.createElement("div",{className:G.info,style:{opacity:P?.4:1}},_.createElement("div",{className:G.icon,style:{backgroundImage:l?'url("data:image/png;base64,'.concat(l,'")'):""}}),_.createElement(o.ZP,{item:!0},_.createElement("p",{className:G.pluginName},d),_.createElement("p",{className:G.pluginVersion,onClick:i.handleShowUpdate(p,e,f),style:{cursor:f?"pointer":"initial"}},(null!==(y=null==e?void 0:e.version)&&void 0!==y?y:"")+(f?" > "+f.version+" Open info":"")))),_.createElement("div",{className:G.actions},_.createElement(s.Z,{title:"Info"},_.createElement(c.Z,{disabled:P,onClick:function(){return a.setState({openedPlugin:e})}},_.createElement(m.Z,null))),f&&!P&&p&&_.createElement(s.Z,{title:"Update"},_.createElement(c.Z,{onClick:function(){return a.startUpdate(p)}},_.createElement(h.Z,null))),p&&p.isInstalled?p.hasAdminBundle?_.createElement(s.Z,{title:"Settings"},_.createElement(c.Z,{disabled:P,onClick:i.handleOpenPluginPage(r)},_.createElement(v.Z,null))):_.createElement("div",{style:{opacity:.3,padding:"12px"}},_.createElement(v.Z,null)):_.createElement(s.Z,{title:"Install plugin"},_.createElement(c.Z,{disabled:P,onClick:i.handleActivatePlugin(r)},_.createElement(g,null))),_.createElement(s.Z,{title:"Delete plugin"},_.createElement(c.Z,{disabled:P,onClick:i.handleDeletePlugin(e)},_.createElement(x.Z,null)))),P&&_.createElement(u.Z,{className:G.updateProgress}))})),_.createElement(k.Z,{open:!!this.state.updateModalInfo,onClose:function(){return i.setState({updateModalInfo:null})},className:C.Z.center,blurSelector:"#root"},_.createElement($,K({pluginsUnderUpdate:this.pluginsUnderUpdate},null!==(a=null===(e=this.state)||void 0===e?void 0:e.updateModalInfo)&&void 0!==a?a:{},{onStartUpdate:this.startUpdate,onClose:function(){return i.setState({updateModalInfo:null})}}))),_.createElement(k.Z,{open:!!this.state.openedPlugin,blurSelector:"#root",className:C.Z.center,onClose:function(){return i.setState({openedPlugin:void 0})}},(null===(t=this.state)||void 0===t?void 0:t.openedPlugin)&&_.createElement(y.Z,{installedModules:null!==(r=null===(n=this.state)||void 0===n?void 0:n.installedPlugins)&&void 0!==r?r:[],data:this.state.openedPlugin,noInstall:!0})))},p}(_.Component),$=function(e){var t,n=e.update,a=e.plugin,r=e.info,i=(null==a?void 0:a.name)&&e.pluginsUnderUpdate[a.name];return _.createElement(o.ZP,{item:!0,container:!0,xs:12,className:G.updateModal},_.createElement(o.ZP,{item:!0,className:G.updateHeader},_.createElement("h3",{className:G.updateTitle},_.createElement(h.Z,{style:{marginRight:"7px"}}),"Update available"),_.createElement(c.Z,{style:{marginRight:"-10px"},onClick:e.onClose},_.createElement(b.Z,null))),_.createElement("p",null,null!==(t=null==r?void 0:r.version)&&void 0!==t?t:""," ",">"," ",n.version),_.createElement("div",{className:G.changelogList,dangerouslySetInnerHTML:{__html:n.changelog}}),_.createElement(l.Z,{disabled:i,color:"primary",variant:"contained",onClick:function(){return e.onStartUpdate(a)}},"Update"))};const ee=Y},14620:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(8081),r=n.n(a),i=n(23645),l=n.n(i)()(r());l.push([e.id,'.text_WVuET{font-family:"Roboto","sans-serif"}.center_aCwCg{display:flex;align-items:center;justify-content:center}.paper_yK5GH{box-shadow:0 2px 3px 0 rgba(0,0,0,.05),0 0 11px 5px rgba(0,0,0,.05);background-color:#fff;border-radius:5px}.page_krtW0{display:flex;flex-direction:column;height:100%}.pageHeader__wmyT{display:inline-block}.pageContent_C3bNc{display:inline-block;height:100%;overflow:auto}.pageTitle_tKbd1{display:flex;align-items:center;font-weight:500}.pageTitle_tKbd1::before{content:"";width:5px;height:5px;background-color:#333;margin-right:8px;display:block;border-radius:100%}.modeDark .pageTitle_tKbd1::before{background-color:#eee}.PluginList_OcFH0{height:100%;padding:20px;max-width:900px;margin:0 auto;width:100%}.PluginList_OcFH0 .addBtn_HMc4c{margin-bottom:15px}.pluginItem_gkqXv{box-shadow:0 2px 3px 0 rgba(0,0,0,.05),0 0 11px 5px rgba(0,0,0,.05);background-color:#fff;border-radius:5px;width:100%;padding:5px 15px;margin-bottom:10px;display:flex;position:relative;justify-content:space-between;align-items:center;background-color:#fff}.icon_Z0BlR{background-position:center;background-repeat:no-repeat;background-size:contain;width:24px;height:24px;margin-right:15px}.info_Q30eO{display:flex;align-items:center}.pluginName_EGA64{font-size:18px;font-weight:500;margin-bottom:3px}.actions_sZ8Rd{display:flex;align-items:center}.pluginVersion_bhbZj{font-size:12px;color:#666}.PluginList_OcFH0 .updateProgress_XKRhy{position:absolute;bottom:0;left:0;right:0;width:100%;height:3px}.updateModal_d_5eV{display:flex;flex-direction:column;min-width:300px;max-width:90vw;max-height:90vh;overflow:auto;padding:5px 15px 15px 15px;box-shadow:0 2px 3px 0 rgba(0,0,0,.05),0 0 11px 5px rgba(0,0,0,.05);background-color:#fff;border-radius:5px}.updateModal_d_5eV>p{margin:6px 0 5px 0;font-size:13px}.updateHeader_rKHyk{display:flex;justify-content:space-between;align-items:center}.updateTitle_PfP_d{display:flex;align-items:center}.expand_AL3CV{transform:rotate(0deg);margin-left:auto;transition:.3s}.expandOpen_EbGW3{transform:rotate(180deg)}.changelogTitle_aLUwP{display:flex;align-items:center;margin-bottom:10px}.changelogTitle_aLUwP>p{cursor:pointer;font-size:13px}.changelogTitle_aLUwP>svg{cursor:pointer;margin-left:5px}.changelogList_FdGWP{margin:10px 0;padding-bottom:10px}.changelogList_FdGWP p{font-weight:500;margin-bottom:6px}.changelogList_FdGWP br{content:" ";width:100%;height:1px;display:block;border-bottom:1px solid #ccc;margin:10px 0}.changelogList_FdGWP li{margin-bottom:6px;font-size:13px}.modeDark .pluginItem_gkqXv,.modeDark .updateModal_d_5eV{background-color:#333}.modeDark .pluginItem_gkqXv *,.modeDark .updateModal_d_5eV *{color:#eee}',""]),l.locals={text:"text_WVuET",center:"center_aCwCg",paper:"paper_yK5GH",page:"page_krtW0",pageHeader:"pageHeader__wmyT",pageContent:"pageContent_C3bNc",pageTitle:"pageTitle_tKbd1",PluginList:"PluginList_OcFH0",addBtn:"addBtn_HMc4c",pluginItem:"pluginItem_gkqXv",icon:"icon_Z0BlR",info:"info_Q30eO",pluginName:"pluginName_EGA64",actions:"actions_sZ8Rd",pluginVersion:"pluginVersion_bhbZj",updateProgress:"updateProgress_XKRhy",updateModal:"updateModal_d_5eV",updateHeader:"updateHeader_rKHyk",updateTitle:"updateTitle_PfP_d",expand:"expand_AL3CV",expandOpen:"expandOpen_EbGW3",changelogTitle:"changelogTitle_aLUwP",changelogList:"changelogList_FdGWP"};const o=l}}]);