"use strict";(self.webpackChunk_cromwell_admin_panel=self.webpackChunk_cromwell_admin_panel||[]).push([[439],{57268:(e,t,n)=>{n.d(t,{Z:()=>te});var r=n(63761),a=n(30927),o=n(23107),i=n(20578),l=n(85014),s=n(28187),u=n(52946),c=n(98141),d=n(50765),p=n(25120),f=n(81810),h=n(88984),m=n(80659),g=n(12647),v=n(27121),b=n(86544),x=n(575),y=n(11106),P=n(10194),k=n(97852),w=n(13555),_=n(99994),Z=n(33963),E=n(81914),D=n(12857),S=n(63063),M=n(46326),N=n(82276),T=n(31794),O=n(53009),C=n(26968),B=n(4478),I=n(20305),A=n(63673),H=n(99791),Q=n(10520),L=n(98465),F=n(59799),R=n(8868),j=n(42019),z=n(10405),W=n(12414),Y=n(8548),U=n(49122),V=n(81290),G=n(31807),J=n(46102),K=n(1713),X=n(13360),$=n.n(X),q=n(22081),ee={dayOfMonth:"d",fullDate:"PP",fullDateWithWeekday:"PPPP",fullDateTime:"PP p",fullDateTime12h:"PP hh:mm aaa",fullDateTime24h:"PP HH:mm",fullTime:"p",fullTime12h:"hh:mm aaa",fullTime24h:"HH:mm",hours12h:"hh",hours24h:"HH",keyboardDate:"P",keyboardDateTime:"P p",keyboardDateTime12h:"P hh:mm aaa",keyboardDateTime24h:"P HH:mm",minutes:"mm",month:"LLLL",monthAndDate:"MMMM d",monthAndYear:"LLLL yyyy",monthShort:"MMM",weekday:"EEEE",weekdayShort:"EEE",normalDate:"d MMMM",normalDateWithWeekday:"EEE, MMM d",seconds:"ss",shortDate:"MMM d",year:"yyyy"},te=function(e){var t=this,n=void 0===e?{}:e,X=n.locale,te=n.formats;this.lib="date-fns",this.is12HourCycleInCurrentLocale=function(){return!t.locale||/a/.test(t.locale.formatLong.time())},this.getFormatHelperText=function(e){var n=t.locale||q.Z;return e.match(/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,$()[t])(e,n.formatLong,{}):e})).join("").replace(/(aaa|aa|a)/g,"(a|p)m").toLocaleLowerCase()},this.parseISO=function(e){return(0,G.Z)(e)},this.toISO=function(e){return(0,J.Z)(e,{format:"extended"})},this.getCurrentLocaleCode=function(){var e;return(null===(e=t.locale)||void 0===e?void 0:e.code)||"en-US"},this.addSeconds=function(e,t){return(0,a.Z)(e,t)},this.addMinutes=function(e,t){return(0,o.Z)(e,t)},this.addHours=function(e,t){return(0,i.Z)(e,t)},this.addDays=function(e,t){return(0,r.Z)(e,t)},this.addWeeks=function(e,t){return(0,l.Z)(e,t)},this.addMonths=function(e,t){return(0,s.Z)(e,t)},this.isValid=function(e){return(0,B.Z)(t.date(e))},this.getDiff=function(e,n,r){switch(r){case"years":return(0,c.Z)(e,t.date(n));case"quarters":return(0,d.Z)(e,t.date(n));case"months":return(0,p.Z)(e,t.date(n));case"weeks":return(0,f.Z)(e,t.date(n));case"days":return(0,h.Z)(e,t.date(n));case"hours":return(0,m.Z)(e,t.date(n));case"minutes":return(0,g.Z)(e,t.date(n));case"seconds":return(0,v.Z)(e,t.date(n));default:return(0,b.Z)(e,t.date(n))}},this.isAfter=function(e,t){return(0,D.Z)(e,t)},this.isBefore=function(e,t){return(0,S.Z)(e,t)},this.startOfDay=function(e){return(0,z.Z)(e)},this.endOfDay=function(e){return(0,y.Z)(e)},this.getHours=function(e){return(0,_.Z)(e)},this.setHours=function(e,t){return(0,A.Z)(e,t)},this.setMinutes=function(e,t){return(0,H.Z)(e,t)},this.getSeconds=function(e){return(0,Z.Z)(e)},this.setSeconds=function(e,t){return(0,R.Z)(e,t)},this.isSameDay=function(e,t){return(0,N.Z)(e,t)},this.isSameMonth=function(e,t){return(0,O.Z)(e,t)},this.isSameYear=function(e,t){return(0,T.Z)(e,t)},this.isSameHour=function(e,t){return(0,C.Z)(e,t)},this.startOfMonth=function(e){return(0,W.Z)(e)},this.endOfMonth=function(e){return(0,Y.Z)(e)},this.startOfWeek=function(e){return(0,U.Z)(e,{locale:t.locale})},this.endOfWeek=function(e){return(0,P.Z)(e,{locale:t.locale})},this.getYear=function(e){return(0,E.Z)(e)},this.setYear=function(e,t){return(0,j.Z)(e,t)},this.date=function(e){return void 0===e?new Date:null===e?null:new Date(e)},this.toJsDate=function(e){return e},this.parse=function(e,n){return""===e?null:(0,I.Z)(e,n,new Date,{locale:t.locale})},this.format=function(e,n){return t.formatByString(e,t.formats[n])},this.formatByString=function(e,n){return(0,w.Z)(e,n,{locale:t.locale})},this.isEqual=function(e,t){return null===e&&null===t||(0,M.Z)(e,t)},this.isNull=function(e){return null===e},this.isAfterDay=function(e,t){return(0,D.Z)(e,(0,y.Z)(t))},this.isBeforeDay=function(e,t){return(0,S.Z)(e,(0,z.Z)(t))},this.isBeforeYear=function(e,t){return(0,S.Z)(e,(0,V.Z)(t))},this.isAfterYear=function(e,t){return(0,D.Z)(e,(0,k.Z)(t))},this.isWithinRange=function(e,t){var n=t[0],r=t[1];return(0,K.Z)(e,{start:n,end:r})},this.formatNumber=function(e){return e},this.getMinutes=function(e){return e.getMinutes()},this.getMonth=function(e){return e.getMonth()},this.getDaysInMonth=function(e){return(0,F.Z)(e)},this.setMonth=function(e,t){return(0,Q.Z)(e,t)},this.getMeridiemText=function(e){return"am"===e?"AM":"PM"},this.getNextMonth=function(e){return(0,s.Z)(e,1)},this.getPreviousMonth=function(e){return(0,s.Z)(e,-1)},this.getMonthArray=function(e){for(var n=[(0,V.Z)(e)];n.length<12;){var r=n[n.length-1];n.push(t.getNextMonth(r))}return n},this.mergeDateAndTime=function(e,n){return t.setSeconds(t.setMinutes(t.setHours(e,t.getHours(n)),t.getMinutes(n)),t.getSeconds(n))},this.getWeekdays=function(){var e=new Date;return(0,x.Z)({start:(0,U.Z)(e,{locale:t.locale}),end:(0,P.Z)(e,{locale:t.locale})}).map((function(e){return t.formatByString(e,"EEEEEE")}))},this.getWeekArray=function(e){for(var n=(0,U.Z)((0,W.Z)(e),{locale:t.locale}),a=(0,P.Z)((0,Y.Z)(e),{locale:t.locale}),o=0,i=n,l=[],s=null;(0,S.Z)(i,a);){var u=Math.floor(o/7);l[u]=l[u]||[];var c=(0,L.Z)(i);s!==c&&(s=c,l[u].push(i),o+=1),i=(0,r.Z)(i,1)}return l},this.getYearRange=function(e,t){for(var n=(0,V.Z)(e),r=(0,k.Z)(t),a=[],o=n;(0,S.Z)(o,r);)a.push(o),o=(0,u.Z)(o,1);return a},this.locale=X,this.formats=Object.assign({},ee,te)}},13360:(e,t)=>{function n(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function r(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={p:r,P:function(e,t){var a,o=e.match(/(P+)(p+)?/),i=o[1],l=o[2];if(!l)return n(e,t);switch(i){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",n(i,t)).replace("{{time}}",r(l,t))}};t.default=a,e.exports=t.default},54439:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var r=n(25047),a=n.n(r),o=n(65040),i=n(63756),l=n(76082),s=n(6620),u=n(52322);const c=(0,s.Z)((0,u.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var d=n(58568),p=n(31117),f=n(87037),h=n(23883),m=n(38677),g=n(2784),v=n(73727),b=n(63884),x=n(65479),y=n(28743),P=n(53111),k=n(52820),w=n(47005),_=n(46062),Z=n.n(_),E=n(44036),D=n.n(E),S=n(96793),M=n.n(S),N=n(9978),T=n.n(N),O=n(11173),C=n.n(O),B=n(42464),I=n.n(B),A=n(72290),H={attributes:{"data-meta":"crw-admin-style"}};H.styleTagTransform=I(),H.setAttributes=T(),H.insert=M().bind(null,"head"),H.domAPI=D(),H.insertStyleElement=C(),Z()(A.Z,H);const Q=A.Z&&A.Z.locals?A.Z.locals:void 0;var L=n(36269),F=n(57268),R=n(17407),j=n(91234),z=n(47019),W=n(53242),Y=n(92768),U=n(30721),V=n(80852),G=n(75232),J=n(18218),K={attributes:{"data-meta":"crw-admin-style"}};K.styleTagTransform=I(),K.setAttributes=T(),K.insert=M().bind(null,"head"),K.domAPI=D(),K.insertStyleElement=C(),Z()(J.Z,K);const X=J.Z&&J.Z.locals?J.Z.locals:void 0;function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function q(e,t,n,r,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,a)}function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const ne=function(e){var t,n,r,o,l,s,u,c,d,p,v,b,x,y,k,w,_=e.postData,Z=e.refetchMeta,E=te((0,g.useState)(null!==(n=null==_?void 0:_.title)&&void 0!==n?n:null),2),D=E[0],S=E[1],M=te((0,g.useState)(null!==(r=null==_?void 0:_.mainImage)&&void 0!==r?r:null),2),N=M[0],T=M[1],O=te((0,g.useState)(null!==(o=null==_?void 0:_.pageDescription)&&void 0!==o?o:null),2),C=O[0],B=O[1],I=te((0,g.useState)(null!==(l=null==_||null===(t=_.meta)||void 0===t?void 0:t.keywords)&&void 0!==l?l:null),2),A=I[0],H=I[1],Q=te((0,g.useState)(null!==(s=null==_?void 0:_.pageTitle)&&void 0!==s?s:null),2),J=Q[0],K=Q[1],$=te((0,g.useState)(null!==(u=null==_?void 0:_.slug)&&void 0!==u?u:null),2),ne=$[0],re=$[1],ae=te((0,g.useState)(null!==(c=null==_?void 0:_.tags)&&void 0!==c?c:[]),2),oe=ae[0],ie=ae[1],le=te((0,g.useState)(null!==(d=null==_?void 0:_.publishDate)&&void 0!==d?d:null),2),se=le[0],ue=le[1],ce=te((0,g.useState)(null!==(p=null==_?void 0:_.featured)&&void 0!==p?p:null),2),de=ce[0],pe=ce[1],fe=(v=a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=Object.assign({},_)).title=D,n.mainImage=N,n.pageDescription=C,n.pageTitle=J,n.slug=ne,n.tags=oe,n.publishDate=se,n.featured=de,A&&(n.meta||(n.meta={}),n.meta.keywords=A),t.t0=Object,t.t1={},t.t2=_.customMeta,t.next=15,(0,P.Q7)(i.EDBEntity.Post);case 15:t.t3=t.sent,n.customMeta=t.t0.assign.call(t.t0,t.t1,t.t2,t.t3),e.onClose(n);case 18:case"end":return t.stop()}}),t)})),b=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=v.apply(e,t);function o(e){q(a,n,r,o,i,"next",e)}function i(e){q(a,n,r,o,i,"throw",e)}o(void 0)}))},function(){return b.apply(this,arguments)});return ne&&(x=i.serviceLocator.getFrontendUrl()+(0,i.resolvePageRoute)("post",{slug:null!=ne?ne:_.id+""})),g.createElement(z.ZP,{disableEnforceFocus:!0,open:e.isSettingsOpen,elevation:0,anchorEl:e.anchorEl,onClose:fe,anchorOrigin:{vertical:"bottom",horizontal:"center"},classes:{paper:X.popover},transformOrigin:{vertical:"top",horizontal:"center"}},g.createElement("div",{className:X.PostSettings},g.createElement("p",{className:X.headerText},"Post meta"),g.createElement(f.Z,{className:X.closeBtn,id:"post-settings-close-btn",onClick:fe},g.createElement(L.Z,null)),g.createElement(W.Z,{label:"Title",value:null!=D?D:"",fullWidth:!0,className:X.settingItem,variant:"standard",onChange:function(e){return S(e.target.value)}}),g.createElement(W.Z,{label:"Page URL",className:X.settingItem,fullWidth:!0,value:null!=ne?ne:"",onChange:function(e){return re(e.target.value)},variant:"standard",helperText:x}),g.createElement(G.u,{label:"Main image",onChange:function(e){return T(e)},value:N,className:X.imageBox,backgroundSize:"cover",showRemove:!0}),g.createElement(Y.Z,{multiple:!0,options:null!==(y=e.allTags)&&void 0!==y?y:[],defaultValue:null!==(w=null==oe?void 0:oe.map((function(t){return(null!==(k=e.allTags)&&void 0!==k?k:[]).find((function(e){return e.name===t.name}))})))&&void 0!==w?w:[],getOptionLabel:function(e){return e.name},onChange:function(e,t){ie(t)},renderInput:function(e){return g.createElement(W.Z,ee({},e,{className:X.settingItem,variant:"standard",label:"Tags"}))}}),g.createElement(j.Z,{dateAdapter:F.Z},g.createElement(R.Z,{label:"Publish date",value:se,onChange:function(e){if(e){var t=new Date(e);isNaN(t.getTime())?ue(null):ue(t)}else ue(null)},renderInput:function(e){return g.createElement(W.Z,ee({variant:"standard",fullWidth:!0},e))}})),g.createElement(U.Z,{control:g.createElement(V.Z,{checked:de,onChange:function(){return pe(!de)},color:"primary"}),style:{margin:"10px 0"},className:X.settingItem,label:"Featured post"}),g.createElement(W.Z,{label:"Meta title",className:X.settingItem,fullWidth:!0,variant:"standard",value:null!=J?J:"",onChange:function(e){return K(e.target.value)}}),g.createElement(W.Z,{label:"Meta description",className:X.settingItem,fullWidth:!0,variant:"standard",value:null!=C?C:"",onChange:function(e){return B(e.target.value)}}),g.createElement(Y.Z,{multiple:!0,freeSolo:!0,options:[],value:null!=A?A:[],getOptionLabel:function(e){return e},onChange:function(e,t){H(t)},renderInput:function(e){return g.createElement(h.Z,{title:"Press ENTER to add"},g.createElement(W.Z,ee({},e,{className:X.settingItem,variant:"standard",label:"Meta keywords"})))}}),(null==_?void 0:_.published)&&g.createElement(h.Z,{title:"Remove post from publication"},g.createElement(m.Z,{variant:"contained",color:"primary",className:X.publishBtn,size:"small",disabled:e.isSaving,onClick:e.handleUnpublish},"Unpublish")),g.createElement("div",{style:{marginBottom:"15px"}}),_&&g.createElement(P._i,{entityType:i.EDBEntity.Post,entityData:_,refetchMeta:Z})))};function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ae(e,t,n,r,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,a)}function oe(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){ae(o,r,a,i,l,"next",e)}function l(e){ae(o,r,a,i,l,"throw",e)}i(void 0)}))}}function ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(){var e,t,n=(e=["\n                fragment AdminPanelPostFragment on Post {\n                    id\n                    slug\n                    pageTitle\n                    pageDescription\n                    meta {\n                        keywords\n                    }\n                    createDate\n                    updateDate\n                    isEnabled\n                    title\n                    author {\n                        id\n                        fullName\n                        email\n                        avatar\n                    }\n                    mainImage\n                    publishDate\n                    featured\n                    tags {\n                        id\n                        slug\n                        name\n                        color\n                    }\n                    content\n                    delta\n                    published \n                    customMeta (keys: ",")\n                }"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return le=function(){return n},n}for(var se=g.createElement("svg",{style:{fontSize:"18px"},width:"1em",height:"1em",focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},g.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),ue=[],ce=0;ce<30;ce++)ue.push(g.createElement(p.Z,{variant:"text",height:"10px",style:{margin:"3px 0"},key:ce}));const de=function(e){var t,n,r=(0,b.UO)().id,s=ie((0,g.useState)(void 0),2),u=s[0],_=s[1],Z=(0,i.getStoreItem)("userInfo"),E=(0,l.getGraphQLClient)(),D=ie((0,g.useState)(null),2),S=D[0],M=D[1],N=ie((0,g.useState)(!1),2),T=N[0],O=N[1],C=ie((0,g.useState)(!1),2),B=C[0],I=C[1],A=ie((0,g.useState)(!1),2),H=A[0],L=A[1],F=ie((0,g.useState)(!1),2),R=F[0],j=F[1],z=(0,g.useRef)(null),W=(0,g.useRef)(!1),Y=(0,b.k6)(),U=(0,w.N)(),V="post-text-editor",G=(0,g.useRef)(null),J=(t=oe(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,null==E?void 0:E.getPostById(t,(0,o.gql)(le(),JSON.stringify((0,P.He)(i.EDBEntity.Post))),"AdminPanelPostFragment");case 4:(n=e.sent)&&_(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,null,[[1,8]])}))),function(e){return t.apply(this,arguments)}),K=function(){var e=oe(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,null==E?void 0:E.getTags({pageSize:99999});case 4:if(e.t1=t=e.sent,e.t0=null===e.t1,e.t0){e.next=8;break}e.t0=void 0===t;case 8:if(!e.t0){e.next=12;break}e.t2=void 0,e.next=13;break;case 12:e.t2=t.elements;case 13:(n=e.t2)&&Array.isArray(n)&&M(n.sort((function(e,t){return e.name<t.name?-1:1}))),e.next=20;break;case 17:e.prev=17,e.t3=e.catch(0),console.error(e.t3);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=oe(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,k.V$)({htmlId:V,data:t,autofocus:!0,onChange:function(){W.current||(W.current=!0,U())}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var t=oe(a().mark((function t(){var n,o,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(G.current=null===(n=e.history)||void 0===n?void 0:n.block((function(){if(W.current)return"Your unsaved changes will be lost. Do you want to discard and leave this page?"})),K(),!r||"new"===r){t.next=24;break}return o=null,O(!0),t.prev=7,t.next=10,J(parseInt(r));case 10:(null==(i=t.sent)?void 0:i.delta)&&(o=JSON.parse(null==i?void 0:i.delta)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(7),console.error(t.t0);case 17:if(O(!1),!i){t.next=23;break}return t.next=21,X(o);case 21:t.next=24;break;case 23:L(!0);case 24:if("new"!==r){t.next=28;break}return _({title:"Untitled",published:!1}),t.next=28,X();case 28:case"end":return t.stop()}}),t,null,[[7,14]])})));return function(){return t.apply(this,arguments)}}();(0,g.useEffect)((function(){return $(),(0,i.onStoreChange)("userInfo",(function(){U()})),function(){var e;null===(e=G.current)||void 0===e||e.call(G)}}),[]);var q,ee,te,re=function(){var e=oe(a().mark((function e(){var t,r,o,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u.slug,e.t1=u.pageTitle,e.t2=u.pageDescription,e.t3=u.title,e.t4=u.mainImage,e.t5=u.publishDate,e.t6=u.published,e.t7=u.featured,e.t8=u.isEnabled,e.t9={keywords:null===(t=u.meta)||void 0===t?void 0:t.keywords},e.t10=null===(o=null===(r=u.tags)||void 0===r?void 0:r.map((function(e){return e.id})))||void 0===o?void 0:o.filter(Boolean),e.t11=null!==(n=null==u||null===(i=u.author)||void 0===i?void 0:i.id)&&void 0!==n?n:null==Z?void 0:Z.id,e.t12=JSON,e.next=16,(0,k.Hd)(V);case 16:return e.t13=e.sent,e.t14=e.t12.stringify.call(e.t12,e.t13),e.next=20,(0,k.eZ)(V);case 20:return e.t15=e.sent,e.t16=u.customMeta,e.abrupt("return",{slug:e.t0,pageTitle:e.t1,pageDescription:e.t2,title:e.t3,mainImage:e.t4,publishDate:e.t5,published:e.t6,featured:e.t7,isEnabled:e.t8,meta:e.t9,tagIds:e.t10,authorId:e.t11,delta:e.t14,content:e.t15,customMeta:e.t16});case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=oe(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==r){e.next=20;break}return e.prev=1,t.authorId=null==Z?void 0:Z.id,e.next=5,null==E?void 0:E.createPost(t);case 5:return n=e.sent,_(n),x.A.success("Created post!"),W.current=!1,Y.replace("".concat(y.QW.baseRoute,"/").concat(n.id)),e.next=12,J(n.id);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),x.A.error("Failed to create post"),console.error(e.t0);case 18:e.next=34;break;case 20:if(!(null==u?void 0:u.id)){e.next=34;break}return e.prev=21,e.next=24,null==E?void 0:E.updatePost(u.id,t);case 24:return W.current=!1,e.next=27,J(u.id);case 27:x.A.success("Saved!"),e.next=34;break;case 30:e.prev=30,e.t1=e.catch(21),x.A.error("Failed to save"),console.error(e.t1);case 34:case"end":return e.stop()}}),e,null,[[1,14],[21,30]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=oe(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,J(parseInt(r));case 4:return t=e.sent,e.abrupt("return",null==t?void 0:t.customMeta);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=oe(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,re();case 3:return(t=e.sent).published=!0,t.publishDate||(t.publishDate=new Date(Date.now())),e.next=8,ae(t);case 8:I(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=oe(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,re();case 3:return(t=e.sent).published=!1,e.next=7,ae(t);case 7:I(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=oe(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.t0=ae,e.next=4,re();case 4:return e.t1=e.sent,e.next=7,(0,e.t0)(e.t1);case 7:I(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){j(!0)};return H?g.createElement("div",{className:Q.Post},g.createElement("div",{className:Q.notFoundPage},g.createElement("p",{className:Q.notFoundText},"Post not found"))):(u&&(q=i.serviceLocator.getFrontendUrl()+(0,i.resolvePageRoute)("post",{slug:null!==(ee=u.slug)&&void 0!==ee?ee:u.id+""})),g.createElement("div",{className:Q.Post},g.createElement("div",{className:Q.postHeader},g.createElement("div",{className:Q.headerLeft},g.createElement(v.Link,{to:y.pv.route},g.createElement(f.Z,null,se)),g.createElement(h.Z,{title:"Edit title in meta"},g.createElement("p",{className:Q.title,onClick:he},null!==(te=null==u?void 0:u.title)&&void 0!==te?te:""))),g.createElement("div",{ref:z},g.createElement(h.Z,{title:"Post meta info"},g.createElement(f.Z,{onClick:he,style:{marginRight:"10px"},id:"more-button"},g.createElement(c,null))),R&&g.createElement(ne,{allTags:S,postData:u,isSettingsOpen:R,onClose:function(e){j(!1),W.current=!0,_(e)},anchorEl:z.current,isSaving:B,handleUnpublish:pe,refetchMeta:ce}),q&&(null==u?void 0:u.published)&&g.createElement(h.Z,{title:"Open post in the new tab"},g.createElement(f.Z,{style:{marginRight:"10px"},className:Q.openPageBtn,"aria-label":"open",onClick:function(){window.open(q,"_blank")}},g.createElement(d.Z,null))),!(null==u?void 0:u.published)&&g.createElement(m.Z,{variant:"contained",color:"primary",className:Q.publishBtn,size:"small",disabled:B,onClick:de},"Publish"),g.createElement(m.Z,{variant:"contained",color:"primary",className:Q.saveBtn,size:"small",disabled:!W.current||B,onClick:fe},"Save"))),T&&g.createElement(g.Fragment,null,g.createElement(p.Z,{width:"100%",height:"100px",style:{margin:"0 0 20px 0"}}),ue),g.createElement("div",{className:Q.editor,id:V}),g.createElement("div",null)))}},72290:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(8081),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,'.text_T1XB4{font-family:"Roboto","sans-serif"}.center_gLDJr{display:flex;align-items:center;justify-content:center}.paper_PwphB{box-shadow:0 2px 3px 0 rgba(0,0,0,.05),0 0 11px 5px rgba(0,0,0,.05);background-color:#fff;border-radius:5px}.page_LxYw7{display:flex;flex-direction:column;height:100%}.pageHeader_Rtt8U{display:inline-block}.pageContent_PucBv{display:inline-block;height:100%;overflow:auto}.pageTitle_vBoKM{display:flex;align-items:center;font-weight:500}.pageTitle_vBoKM::before{content:"";width:5px;height:5px;background-color:#333;margin-right:8px;display:block;border-radius:100%}.modeDark .pageTitle_vBoKM::before{background-color:#eee}.Post_PlQNf{box-shadow:0 2px 3px 0 rgba(0,0,0,.05),0 0 11px 5px rgba(0,0,0,.05);background-color:#fff;border-radius:5px;width:100%;height:100%;position:relative;padding-top:0;display:flex;flex-direction:column;max-width:900px;margin:0 auto;min-height:300px}.Post_PlQNf div.editor_mCODg{width:100%;height:100%;border:0;display:inline-block;overflow-y:auto;padding:15px 40px 30px 40px}.Post_PlQNf div.editor_mCODg::-webkit-scrollbar{width:.5em;height:.5em}.Post_PlQNf div.editor_mCODg::-webkit-scrollbar-track{border-radius:30px;background-color:rgba(0,0,0,.1)}.Post_PlQNf div.editor_mCODg::-webkit-scrollbar-thumb{background-color:#888;outline:none;border-radius:30px}.Post_PlQNf div.editor_mCODg::-webkit-scrollbar-thumb:hover{background-color:#666}.Post_PlQNf div.editor_mCODg::-webkit-scrollbar-thumb:active{background-color:#444}.Post_PlQNf div.editor_mCODg::-webkit-scrollbar-track{margin-top:15px;margin-bottom:15px}.Post_PlQNf .postHeader_MmZdp{box-shadow:0 2px 3px 0 rgba(0,0,0,.05),0 0 11px 5px rgba(0,0,0,.05);background-color:#fff;border-radius:5px;display:flex;align-items:center;justify-content:space-between;padding:0 20px}.Post_PlQNf .headerLeft_BcCyQ{display:flex;align-items:center}.Post_PlQNf .title_l0NNR{font-weight:500;font-size:18px;margin-left:15px;margin-right:5px;cursor:pointer}.Post_PlQNf .backIcon_B5kHQ{display:flex;align-items:center;border-radius:5px}.Post_PlQNf .notFoundPage_XutcH{display:flex;justify-content:center;align-items:center;height:100%}.Post_PlQNf .notFoundText_hEkHn{font-size:25px;font-weight:500}.Post_PlQNf .publishBtn_odulA{margin-right:10px}.modeDark .Post_PlQNf{background-color:#333}.modeDark .Post_PlQNf *{color:#eee}.modeDark .Post_PlQNf *::selection{background-color:#777}.modeDark .Post_PlQNf .postHeader_MmZdp{background-color:#2b2b2b}.modeDark .Post_PlQNf .postHeader_MmZdp svg{fill:#eee}.modeDark .Post_PlQNf .postHeader_MmZdp *{color:#eee}',""]),i.locals={text:"text_T1XB4",center:"center_gLDJr",paper:"paper_PwphB",page:"page_LxYw7",pageHeader:"pageHeader_Rtt8U",pageContent:"pageContent_PucBv",pageTitle:"pageTitle_vBoKM",Post:"Post_PlQNf",editor:"editor_mCODg",postHeader:"postHeader_MmZdp",headerLeft:"headerLeft_BcCyQ",title:"title_l0NNR",backIcon:"backIcon_B5kHQ",notFoundPage:"notFoundPage_XutcH",notFoundText:"notFoundText_hEkHn",publishBtn:"publishBtn_odulA"};const l=i},18218:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(8081),a=n.n(r),o=n(23645),i=n.n(o)()(a());i.push([e.id,'.text_gD7Yp{font-family:"Roboto","sans-serif"}.center_ssBT7{display:flex;align-items:center;justify-content:center}.paper_OxSI9{box-shadow:0 2px 3px 0 rgba(0,0,0,.05),0 0 11px 5px rgba(0,0,0,.05);background-color:#fff;border-radius:5px}.page_YsRr1{display:flex;flex-direction:column;height:100%}.pageHeader_n4IWE{display:inline-block}.pageContent_ztYzj{display:inline-block;height:100%;overflow:auto}.pageTitle_xAR_5{display:flex;align-items:center;font-weight:500}.pageTitle_xAR_5::before{content:"";width:5px;height:5px;background-color:#333;margin-right:8px;display:block;border-radius:100%}.modeDark .pageTitle_xAR_5::before{background-color:#eee}div.popover_dVwov{box-shadow:0 2px 3px 0 rgba(0,0,0,.05),0 0 11px 5px rgba(0,0,0,.05);background-color:#fff;border-radius:5px}.PostSettings_hFO5t{padding:20px;width:400px;max-height:93vh;max-width:100vw;overflow:auto;display:inline-block;position:relative}.PostSettings_hFO5t::-webkit-scrollbar{width:.5em;height:.5em}.PostSettings_hFO5t::-webkit-scrollbar-track{border-radius:30px;background-color:rgba(0,0,0,.1)}.PostSettings_hFO5t::-webkit-scrollbar-thumb{background-color:#888;outline:none;border-radius:30px}.PostSettings_hFO5t::-webkit-scrollbar-thumb:hover{background-color:#666}.PostSettings_hFO5t::-webkit-scrollbar-thumb:active{background-color:#444}.PostSettings_hFO5t .settingItem_G156a,.PostSettings_hFO5t .headerText_BQm_G,.PostSettings_hFO5t .imageBox_nhb44{margin-bottom:20px}.PostSettings_hFO5t .closeBtn_ufjd6{position:absolute;top:5px;right:5px;z-index:3}.PostSettings_hFO5t .headerText_BQm_G{font-size:20px;font-weight:500}.MuiPickersDay-daySelected p{color:#fff}.modeDark div.popover_dVwov{background-color:#222}.modeDark div.popover_dVwov *{color:#eee}.modeDark .MuiChip-root.MuiAutocomplete-tag{background-color:#444}.modeDark .MuiChip-root.MuiAutocomplete-tag *{color:#eee}',""]),i.locals={text:"text_gD7Yp",center:"center_ssBT7",paper:"paper_OxSI9",page:"page_YsRr1",pageHeader:"pageHeader_n4IWE",pageContent:"pageContent_ztYzj",pageTitle:"pageTitle_xAR_5",popover:"popover_dVwov",PostSettings:"PostSettings_hFO5t",settingItem:"settingItem_G156a",headerText:"headerText_BQm_G",imageBox:"imageBox_nhb44",closeBtn:"closeBtn_ufjd6"};const l=i}}]);