(function(e){function t(t){for(var a,s,r=t[0],o=t[1],u=t[2],l=0,d=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&d.push(c[s][0]),c[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==c[r]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},c={app:0},i=[];function r(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-11da6bec":"843a081a","chunk-2d0a4ef1":"b583f40b","chunk-3a948fd6":"a6e7c701","chunk-3ab69a3a":"e8f96100","chunk-65f0ddeb":"843722fd","chunk-51895f66":"01b400f1","chunk-e7e3ca46":"3e4aec32","chunk-fbb6e368":"6422a5b2","chunk-6a736b16":"e31dc539","chunk-6ee2f1eb":"c494e22b","chunk-c543d21a":"1311d02e","chunk-27a078ba":"475860b7","chunk-7935b200":"0808dc75","chunk-8b09016e":"4d1f0942","chunk-3a9657d5":"3858fa90","chunk-651aea20":"5056dab7","chunk-82b3de2c":"4b04234b"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n={"chunk-11da6bec":1,"chunk-3a948fd6":1,"chunk-3ab69a3a":1,"chunk-65f0ddeb":1,"chunk-51895f66":1,"chunk-e7e3ca46":1,"chunk-fbb6e368":1,"chunk-6a736b16":1,"chunk-6ee2f1eb":1,"chunk-c543d21a":1,"chunk-27a078ba":1,"chunk-7935b200":1,"chunk-8b09016e":1,"chunk-3a9657d5":1,"chunk-651aea20":1,"chunk-82b3de2c":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-11da6bec":"675fe082","chunk-2d0a4ef1":"31d6cfe0","chunk-3a948fd6":"33d6148b","chunk-3ab69a3a":"33d6148b","chunk-65f0ddeb":"b6b92317","chunk-51895f66":"89435596","chunk-e7e3ca46":"13f93d73","chunk-fbb6e368":"92f94545","chunk-6a736b16":"2b04903c","chunk-6ee2f1eb":"9ecd7590","chunk-c543d21a":"5b88b5cf","chunk-27a078ba":"6f83c177","chunk-7935b200":"aaa77229","chunk-8b09016e":"d31242bc","chunk-3a9657d5":"808f0073","chunk-651aea20":"4fc116ed","chunk-82b3de2c":"765d0416"}[e]+".css",c=o.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var u=i[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===a||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[e],f.parentNode.removeChild(f),n(i)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){s[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a5d":function(e,t,n){var a={"./about.vue":["754b","chunk-3a948fd6"],"./dynamics.vue":["a76a","chunk-6a736b16","chunk-c543d21a","chunk-27a078ba","chunk-8b09016e"],"./fertilizer.vue":["06c58","chunk-6a736b16","chunk-c543d21a","chunk-82b3de2c"],"./fertilizers.vue":["f680","chunk-65f0ddeb","chunk-51895f66"],"./recipe.vue":["2681","chunk-6a736b16","chunk-c543d21a","chunk-3a9657d5"],"./recipes.vue":["e084","chunk-65f0ddeb","chunk-fbb6e368"],"./remineralization.vue":["0985","chunk-6a736b16","chunk-c543d21a","chunk-651aea20"],"./schedule.vue":["6bf2","chunk-6a736b16","chunk-c543d21a","chunk-27a078ba","chunk-7935b200"],"./schedules.vue":["1648","chunk-6a736b16","chunk-6ee2f1eb"],"./settings.vue":["8a21","chunk-3ab69a3a"],"./tank.vue":["8397","chunk-11da6bec"],"./tanks.vue":["5967","chunk-65f0ddeb","chunk-e7e3ca46"]};function s(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(a)},s.id="1a5d",e.exports=s},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=c,e.exports=s,s.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=(n("d3b7"),n("caad"),n("3ca3"),n("ddb0"),n("a925")),c="ru",i={ru:"Ru",en:"En"},r=n("b9ee");a["a"].use(s["a"]);var o=new s["a"]({locale:c,messages:r["default"]}),u=["ru"];function l(e){return o.locale=e,e}function d(e){return o.locale===e||u.includes(e)?Promise.resolve(l(e)):n("d089")("./".concat(e,".js")).then((function(t){return o.setLocaleMessage(e,t.default[e]),u.push(e),l(e)}))}n("b0c0");var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-col",{attrs:{cols:"12",sm:"8","offset-sm":"2"}},[n("div",{staticClass:"d-none d-sm-block text-h4"},[e._t("default")],2)])},b=[],h={name:"PageTitle"},m=h,p=n("2877"),v=n("6544"),k=n.n(v),j=n("62ad"),g=Object(p["a"])(m,f,b,!1,null,"b57c6f34",null),E=g.exports;k()(g,{VCol:j["a"]});var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.guideIsClosed[e.dst]?e._e():n("v-col",{attrs:{cols:"12",md:"8","offset-md":"2"}},[n("v-card",[n("v-card-text",[n("div",{staticClass:"guide"},[n("span",{staticClass:"guide__close"},[n("v-tooltip",{attrs:{bottom:"","max-width":"400"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("a",e._g({staticClass:"ml-3 font-weight-light",on:{click:function(t){return e.GUIDE_CLOSE(e.dst)}}},a),[n("v-icon",[e._v("mdi-close")])],1)]}}],null,!1,623180947)},[e._v(" Закрыть подсказку ")])],1),n("p",{staticClass:"guide__text",class:{"text-subtitle-2":e.$vuetify.breakpoint["xs"],"text-subtitle-1":e.$vuetify.breakpoint["smAndUp"]}},[e._t("default")],2)])])],1)],1)},y=[],S=n("5530"),w=n("2f62"),O={name:"Guide",computed:Object(S["a"])(Object(S["a"])({},Object(w["d"])(["guideIsClosed"])),{},{dst:function(){return this.$route.name}}),methods:Object(S["a"])({},Object(w["c"])(["GUIDE_CLOSE"]))},T=O,I=(n("7a29"),n("b0af")),R=n("99d9"),z=n("132d"),C=n("3a2f"),x=Object(p["a"])(T,_,y,!1,null,"0744252c",null),A=x.exports;k()(x,{VCard:I["a"],VCardText:R["c"],VCol:j["a"],VIcon:z["a"],VTooltip:C["a"]});var L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({class:{drawer:e.drawer&&e.$vuetify.breakpoint["smAndUp"]},staticStyle:{transition:"all 0.2s"},attrs:{color:"primary",dark:"",fab:"",fixed:"",bottom:"",right:""},on:{click:e.action}},a),[n("v-icon",[e._v("mdi-plus")])],1)]}}])},[n("span",[e._t("default")],2)])},D=[],V={name:"AddButton",props:{action:{type:Function,default:null}},computed:Object(S["a"])({},Object(w["d"])(["drawer"]))},N=V,M=n("8336"),P=Object(p["a"])(N,L,D,!1,null,"7c4572a7",null),U=P.exports;k()(P,{VBtn:M["a"],VIcon:z["a"],VTooltip:C["a"]});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-text-field",e._g(e._b({attrs:{value:e.countValue(e.$attrs.value)},on:{input:function(t){return e.$emit("input",t)},focus:function(t){return e.toggleFocus(!0)},blur:function(t){return e.toggleFocus(!1)}}},"v-text-field",e.$attrs,!1),e.$listeners))},F=[],$=(n("a9e3"),n("b680"),{name:"BaseTextField",inheritAttrs:!1,props:{precision:{type:Number,default:2}},data:function(){return{isFocused:!1}},methods:{toggleFocus:function(e){this.isFocused=e},countValue:function(e){return"string"===typeof e||void 0===e||null===e?"":this.isFocused?e:e.toFixed(this.precision)}}}),G=$,B=n("8654"),q=Object(p["a"])(G,H,F,!1,null,"b8768bb2",null),K=q.exports;k()(q,{VTextField:B["a"]}),a["a"].component(E.name,E),a["a"].component(A.name,A),a["a"].component(U.name,U),a["a"].component(K.name,K);var Z={},W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"",right:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"pt-0"},[e.$vuetify.breakpoint["xs"]?n("v-list-item",{on:{click:function(t){t.stopPropagation(),e.drawer=!1}}},[n("v-list-item-action"),n("v-list-item-content",[n("v-list-item-title",{staticClass:"d-flex justify-end"},[n("v-icon",[e._v("mdi-close")])],1)],1)],1):e._e(),e._l(e.links,(function(t){return n("v-list-item",{key:t.icon,attrs:{to:{name:t.name},link:""}},[n("v-list-item-action",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.$t("routes."+t.name)))])],1)],1)})),n("v-list-item",{attrs:{href:"https://vk.com/samomes"}},[n("v-list-item-action",[n("v-icon",[e._v("fab fa-vk")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Вконтакте")])],1)],1),n("v-list-item",{attrs:{href:"https://github.com/lapshinmr/samomes"}},[n("v-list-item-action",[n("v-icon",[e._v("fab fa-github")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("GitHub")])],1)],1)],2)],1),n("v-app-bar",{attrs:{app:"",color:"primary",dark:"",dense:""}},[n("v-toolbar-title",[n("div",{staticClass:"d-flex align-content-center text-uppercase"},[n("span",[e._v(e._s(e.breadcrumbs[e.$router.currentRoute.name]))])])]),n("v-spacer"),n("div",{staticClass:"d-flex justify-end"},[n("LanguageSwitcher")],1),n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}})],1),n("v-main",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1),n("v-snackbar",{model:{value:e.isSnackbar,callback:function(t){e.isSnackbar=t},expression:"isSnackbar"}},[n("div",[e._v(" "+e._s(e.snackbarMessage)+" ")])])],1)],1)},Y=[],J=(n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"offset-y":"",transition:"slide-y-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{text:""}},a),[e._v(" "+e._s(e.curLang)+" ")])]}}])},[n("v-list",e._l(e.LANGUAGES,(function(t,a,s){return n("v-list-item",{key:s,on:{click:function(t){return e.langSet(a)}}},[n("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1)}),Q=[],X={name:"LanguageSwitcher",data:function(){return{LANGUAGES:i}},computed:Object(S["a"])(Object(S["a"])({},Object(w["d"])(["lang"])),{},{curLang:function(){return this.LANGUAGES[this.lang]}}),methods:Object(S["a"])({},Object(w["b"])(["langSet"]))},ee=X,te=n("8860"),ne=n("da13"),ae=n("5d23"),se=n("e449"),ce=Object(p["a"])(ee,J,Q,!1,null,null,null),ie=ce.exports;k()(ce,{VBtn:M["a"],VList:te["a"],VListItem:ne["a"],VListItemTitle:ae["b"],VMenu:se["a"]});var re={name:"App",components:{LanguageSwitcher:ie},data:function(){return{links:[{name:"tanks",icon:"mdi-fishbowl-outline"},{name:"recipes",icon:"mdi-clipboard-text-multiple-outline"},{name:"fertilizers",icon:"mdi-flask"},{name:"schedules",icon:"mdi-calendar-blank-multiple"},{name:"remineralization",icon:"fas fa-cubes"},{name:"dynamics",icon:"far fa-chart-bar"},{name:"settings",icon:"fas fa-cog"},{name:"about",icon:"mdi-information-outline"}]}},created:function(){this.initLang()},computed:Object(S["a"])(Object(S["a"])({},Object(w["d"])(["isSnackbar","snackbarMessage","lang","recipes","guideIsClosed"])),{},{breadcrumbs:function(){var e=this,t={};return this.links.forEach((function(n){t[n.name]=e.$t("routes.".concat(n.name))})),t},isSnackbar:{get:function(){return this.$store.state.isSnackbar},set:function(){this.SNACKBAR_HIDE()}},drawer:{get:function(){return this.$store.state.drawer},set:function(e){this.DRAWER_SET(e)}}}),mounted:function(){var e=this;if(this.recipes.forEach((function(t,n){"Готовое"===t.type&&(e.FERTILIZER_ADD(t),e.RECIPE_REMOVE(n))})),"boolean"===typeof this.guideIsClosed&&this.GUIDE_RESET(),!this.$router.currentRoute.query.share){var t=localStorage.getItem("path");t&&(localStorage.removeItem("path"),this.$router.push(t))}},methods:Object(S["a"])(Object(S["a"])(Object(S["a"])({},Object(w["c"])(["DRAWER_SET","SNACKBAR_HIDE","FERTILIZER_ADD","RECIPE_REMOVE","GUIDE_RESET"])),Object(w["b"])(["langSet"])),{},{initLang:function(){var e=window.navigator.userLanguage||window.navigator.language;e="ru-RU"===e?"ru":"en",this.langSet(this.lang||e)}})},oe=re,ue=(n("cf25"),n("7496")),le=n("40dc"),de=n("5bc1"),fe=n("1800"),be=n("f6c4"),he=n("f774"),me=n("2db4"),pe=n("2fa4"),ve=n("2a7f"),ke=Object(p["a"])(oe,W,Y,!1,null,null,null),je=ke.exports;k()(ke,{VApp:ue["a"],VAppBar:le["a"],VAppBarNavIcon:de["a"],VIcon:z["a"],VList:te["a"],VListItem:ne["a"],VListItemAction:fe["a"],VListItemContent:ae["a"],VListItemTitle:ae["b"],VMain:be["a"],VNavigationDrawer:he["a"],VSnackbar:me["a"],VSpacer:pe["a"],VToolbarTitle:ve["a"]});var ge=n("8c4f");function Ee(e){return function(){return n("1a5d")("./".concat(e,".vue"))}}a["a"].use(ge["a"]);var _e=new ge["a"]({mode:"history",base:"/",routes:[{path:"/tanks",component:Ee("tanks"),alias:[""],name:"tanks"},{path:"/tanks/:id",component:Ee("tank"),alias:[""],name:"tank"},{path:"/recipes",component:Ee("recipes"),name:"recipes"},{path:"/recipes/:id",component:Ee("recipe"),name:"recipe"},{path:"/fertilizers",component:Ee("fertilizers"),name:"fertilizers"},{path:"/fertilizers/:id",component:Ee("fertilizer"),name:"fertilizer"},{path:"/schedules",component:Ee("schedules"),name:"schedules"},{path:"/schedules/:id",component:Ee("schedule"),name:"schedule"},{path:"/remineralization",component:Ee("remineralization"),name:"remineralization"},{path:"/dynamics",component:Ee("dynamics"),name:"dynamics"},{path:"/about",component:Ee("about"),name:"about"},{path:"/settings",component:Ee("settings"),name:"settings"}]}),ye=n("0e44"),Se={lang:c,drawer:!1,isSnackbar:!1,snackbarMessage:"",guideIsClosed:{tanks:!1,recipes:!1,fertilizers:!1,schedules:!1,dynamics:!1,remineralization:!1},tanks:[],recipes:[],fertilizers:[],schedules:[]},we={},Oe=(n("a434"),{DRAWER_SET:function(e,t){e.drawer=t},GUIDE_CLOSE:function(e,t){e.guideIsClosed[t]=!0},GUIDE_RESET:function(e){e.guideIsClosed={tanks:!1,recipes:!1,fertilizers:!1,schedules:!1}},LANG_SET:function(e,t){e.lang=t},TANK_ADD:function(e,t){e.tanks.push(t)},TANK_REMOVE:function(e,t){e.tanks.splice(t,1)},TANK_EDIT:function(e,t){a["a"].set(e.tanks,t.index,t.tank)},TANK_MOVE:function(e,t){e.tanks=t},TANKS_SET:function(e,t){e.tanks=t},TANKS_REMOVE:function(e){e.tanks=[]},RECIPE_ADD:function(e,t){e.recipes.push(t)},RECIPE_REMOVE:function(e,t){e.recipes.splice(t,1)},RECIPE_EDIT:function(e,t){a["a"].set(e.recipes,t.index,t.recipe)},RECIPE_MOVE:function(e,t){e.recipes=t},RECIPES_SET:function(e,t){e.recipes=t},RECIPES_REMOVE:function(e){e.recipes=[]},FERTILIZER_ADD:function(e,t){e.fertilizers.push(t)},FERTILIZER_REMOVE:function(e,t){e.fertilizers.splice(t,1)},FERTILIZER_EDIT:function(e,t){a["a"].set(e.fertilizers,t.index,t.fertilizer)},FERTILIZER_MOVE:function(e,t){e.fertilizers=t},FERTILIZERS_SET:function(e,t){e.fertilizers=t},FERTILIZERS_REMOVE:function(e){e.fertilizers=[]},SCHEDULE_ADD:function(e,t){e.schedules.push(t)},SCHEDULE_EDIT:function(e,t){a["a"].set(e.schedules,t.index,t.schedule)},SCHEDULE_REMOVE:function(e,t){e.schedules.splice(t,1)},SCHEDULE_COMPLETE:function(e,t){var n=e.schedules[t.scheduleIndex],s=n.completed[t.recipeName][t.dayIndex];n.completed[t.recipeName][t.dayIndex]=(s+1)%3,a["a"].set(e.schedules,t.scheduleIndex,n)},SCHEDULE_COMPLETE_WATER_CHANGE:function(e,t){var n=e.schedules[t.scheduleIndex],s=n.completedWaterChange[t.recipeName];n.completedWaterChange[t.recipeName]=(s+1)%2,a["a"].set(e.schedules,t.scheduleIndex,n)},SCHEDULES_SET:function(e,t){e.schedules=t},SCHEDULES_REMOVE:function(e){e.schedules=[]},SNACKBAR_SHOW:function(e,t){e.snackbarMessage=t,e.isSnackbar=!0},SNACKBAR_HIDE:function(e){e.snackbarMessage="",e.isSnackbar=!1}}),Te={langSet:function(e,t){var n=e.commit;d(t).then((function(){n("LANG_SET",t)}))}};a["a"].use(w["a"]);var Ie=new w["a"].Store({plugins:[Object(ye["a"])({key:"udata"})],state:Se,getters:we,mutations:Oe,actions:Te}),Re=n("f309");a["a"].use(Re["a"]);var ze=new Re["a"]({}),Ce=n("9483");Object(Ce["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("4de4");var xe=n("c1df"),Ae=n.n(xe);a["a"].filter("format",(function(e,t){return Ae()(e,"YYYY-MM-DD").locale("ru").format(t)})),a["a"].config.productionTip=!1,new a["a"]({router:_e,store:Ie,vuetify:ze,base:Z,i18n:o,render:function(e){return e(je)}}).$mount("#app")},"7a29":function(e,t,n){"use strict";n("e7bf")},b9ee:function(e,t,n){"use strict";n.r(t),t["default"]={ru:{routes:{tanks:"Аквариумы",recipes:"Рецепты",fertilizers:"Удобрения",schedules:"Расписание",remineralization:"Реминерализация",dynamics:"Динамика",about:"О проекте",settings:"Настройки",Github:"Github"},units:{mm:"мм",cm:"см",l:"л",ml:"мл"},buttons:{open:"Открыть",save:"Сохранить",edit:"Изменить",add:"Добавить",remove:"Удалить"},guid:{start:"Начните с этого",add_tank:"Добавить аквариум",add_recipe:"Создать рецепт",add_schedule:"Составить расписание",where_am_i:"Где я оказался?"},tanks:{alert:{title:"У вас еще нет аквариума",todo:{action:"Добавьте аквариум",text:", чтобы вы могли создавать рецепты удобрений и составлять расписание по внесению удобрений."}},addButton:"Добавить аквариум",panels:{header:{pull:"Потяните, чтобы отсортировать аквариумы"},body:{noSizes:"Размеры не указаны"}},dialog:{tankNew:"Новый аквариум",tankEdit:"Редактирование аквариума",name:"Название",nameHint:'Придумайте простое название, например "Аквариум 1" или "Большой аквариум"',volume:"Объем",volumeHint:"Вы можете воспользоваться калькулятором объема ниже",waterChange:"Объем подмены",length:"Длина",width:"Ширина",height:"Высота",filter:"Внешний фильтр",filterHint:"Добавьте объем фильтра по спецификации. Или замерьте объем при наполнении.",soil:"Грунт",soilHint:"Объем воды, который находится в грунте.",heightHint:"Введите высоту чистого столба воды",glassThickness:"Толщина стекла",orSizes:"Или используйте размеры",messageTankAdd:"Аквариум добавлен",messageTankEdit:"Аквариум изменен",messageTankRemove:"Аквариум удален",nameRules:{require:"Введите название",exists:"Аквариум с таким названием уже существует"},volumeRules:{require:"Введите объем в литрах"}}},recipes:{alert:{title:"У вас еще нет рецептов",todo:{action:"Добавьте рецепты",text:", чтобы вы могли использовать их для составления расписания по внесению удобрений."}},addButton:"Добавить рецепт",panels:{header:{pull:"Потяните, чтобы отсортировать рецепты"},body:{noSizes:"Размеры не указаны"}},dialog:{recipeNew:"Новый рецепт",recipeEdit:"Редактирование рецепта",name:"Название",nameHint:'Придумайте простое название, например "Аквариум 1" или "Большой аквариум"',volume:"Объем",volumeHint:"Вы можете воспользоваться калькулятором объема ниже",length:"Длина",width:"Ширина",height:"Высота",heightHint:"Введите высоту чистого столба воды",glassThickness:"Толщина стекла",orSizes:"Или используйте размеры",messageTankAdd:"Аквариум добавлен",messageTankEdit:"Аквариум изменен",messageTankRemove:"Аквариум удален",nameRules:{require:"Введите название",exists:"Аквариум с таким названием уже существует"},volumeRules:{require:"Введите объем в литрах"}}},fertilizers:{addButton:"Добавить удобрение",panels:{header:{pull:"Потяните, чтобы отсортировать рецепты"},body:{noSizes:"Размеры не указаны"}},dialog:{fertilizerNew:"Новое удобрение",fertilizerEdit:"Редактирование удобрения",name:"Название",nameHint:'Придумайте простое название, например "Аквариум 1" или "Большой аквариум"',volume:"Объем",volumeHint:"Вы можете воспользоваться калькулятором объема ниже",length:"Длина",width:"Ширина",height:"Высота",heightHint:"Введите высоту чистого столба воды",glassThickness:"Толщина стекла",orSizes:"Или используйте размеры",messageTankAdd:"Аквариум добавлен",messageTankEdit:"Аквариум изменен",messageTankRemove:"Аквариум удален",nameRules:{require:"Введите название",exists:"Аквариум с таким названием уже существует"},volumeRules:{require:"Введите объем в литрах"}}},schedules:{alert:{title:"У вас еще нет рецептов",todo:{action:"Добавьте рецепты",text:", чтобы вы могли использовать их для составления расписания по внесению удобрений."}},addButton:"Добавить аквариум"}}}},cf25:function(e,t,n){"use strict";n("fea6")},d089:function(e,t,n){var a={"./en.js":["090b","chunk-2d0a4ef1"],"./ru.js":["b9ee"]};function s(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(a)},s.id="d089",e.exports=s},e7bf:function(e,t,n){},fea6:function(e,t,n){}});
//# sourceMappingURL=app.ccfff151.js.map