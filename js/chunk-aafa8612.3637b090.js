(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aafa8612"],{"0fd9":function(t,n,a){"use strict";var e=a("ade3"),i=a("5530"),s=(a("caad"),a("2532"),a("99af"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("159b"),a("4b85"),a("2b0e")),r=a("d9f7"),o=a("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function u(t,n){return l.reduce((function(a,e){return a[t+Object(o["z"])(e)]=n(),a}),{})}var d=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),h=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:h}})),k=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},m=u("alignContent",(function(){return{type:String,default:null,validator:k}})),g={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(m)},p={align:"align",justify:"justify",alignContent:"align-content"};function b(t,n,a){var e=p[t];if(null!=a){if(n){var i=n.replace(t,"");e+="-".concat(i)}return e+="-".concat(a),e.toLowerCase()}}var $=new Map;n["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:h}},v),{},{alignContent:{type:String,default:null,validator:k}},m),render:function(t,n){var a=n.props,i=n.data,s=n.children,o="";for(var l in a)o+=String(a[l]);var c=$.get(o);return c||function(){var t,n;for(n in c=[],g)g[n].forEach((function(t){var e=a[t],i=b(n,t,e);i&&c.push(i)}));c.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(e["a"])(t,"align-".concat(a.align),a.align),Object(e["a"])(t,"justify-".concat(a.justify),a.justify),Object(e["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),$.set(o,c)}(),t(a.tag,Object(r["a"])(i,{staticClass:"row",class:c}),s)}})},"4bd4":function(t,n,a){"use strict";var e=a("5530"),i=(a("caad"),a("2532"),a("07ac"),a("4de4"),a("159b"),a("7db0"),a("58df")),s=a("7e2b"),r=a("3206");n["a"]=Object(i["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var n=Object.values(t).includes(!0);this.$emit("input",!n)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var n=this,a=function(t){return t.$watch("hasError",(function(a){n.$set(n.errorBag,t._uid,a)}),{immediate:!0})},e={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?e.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(n.errorBag.hasOwnProperty(t._uid)||(e.valid=a(t)))})):e.valid=a(t),e},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var n=this.inputs.find((function(n){return n._uid===t._uid}));if(n){var a=this.watchers.find((function(t){return t._uid===n._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==n._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==n._uid})),this.$delete(this.errorBag,n._uid)}}},render:function(t){var n=this;return t("form",{staticClass:"v-form",attrs:Object(e["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return n.$emit("submit",t)}}},this.$slots.default)}})},8397:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",{staticClass:"mb-12"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"8","offset-sm":"2"}},[a("v-btn",{staticClass:"mr-0",attrs:{square:"",to:"/tanks"}},[a("v-icon",[t._v("mdi-chevron-left")])],1)],1),a("page-title",[t.isCreate?[t._v(" Новый аквариум ")]:[t._v(" "+t._s(t.tank.name)+" ")]],2),a("v-col",{attrs:{cols:"12",sm:"8","offset-sm":"2"}},[a("v-form",{ref:"tankForm"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:t.$t("tanks.dialog.name"),"hide-details":"auto",clearable:"",hint:t.$t("tanks.dialog.nameHint"),rules:t.nameRules},model:{value:t.tank.name,callback:function(n){t.$set(t.tank,"name",n)},expression:"tank.name"}})],1),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-text-field",{attrs:{type:"Number",label:t.$t("tanks.dialog.volume"),suffix:t.$t("units.l"),"hide-details":"auto",hint:t.$t("tanks.dialog.volumeHint"),rules:t.volumeRules},model:{value:t.tank.volume,callback:function(n){t.$set(t.tank,"volume",t._n(n))},expression:"tank.volume"}})],1),a("v-col",{staticClass:"text-center pb-0",attrs:{cols:"12"}},[a("div",{staticClass:"d-flex align-center my-3"},[a("v-divider"),a("div",{staticClass:"mx-2"},[t._v(" "+t._s(t.$t("tanks.dialog.orSizes"))+" ")]),a("v-divider")],1)]),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-text-field",{attrs:{type:"number",label:t.$t("tanks.dialog.length"),suffix:t.$t("units.cm"),"hide-details":"auto"},model:{value:t.tank.length,callback:function(n){t.$set(t.tank,"length",t._n(n))},expression:"tank.length"}}),a("v-text-field",{attrs:{type:"number",label:t.$t("tanks.dialog.width"),suffix:t.$t("units.cm"),"hide-details":"auto"},model:{value:t.tank.width,callback:function(n){t.$set(t.tank,"width",t._n(n))},expression:"tank.width"}}),a("v-text-field",{attrs:{type:"number",label:t.$t("tanks.dialog.height"),suffix:t.$t("units.cm"),hint:t.$t("tanks.dialog.heightHint"),"hide-details":"auto"},model:{value:t.tank.height,callback:function(n){t.$set(t.tank,"height",t._n(n))},expression:"tank.height"}}),a("v-text-field",{attrs:{type:"number",label:t.$t("tanks.dialog.glassThickness"),suffix:t.$t("units.mm"),"hide-details":"auto"},model:{value:t.tank.glassThickness,callback:function(n){t.$set(t.tank,"glassThickness",t._n(n))},expression:"tank.glassThickness"}})],1),a("v-col",{staticClass:"text-center pb-0",attrs:{cols:"12"}},[a("div",{staticClass:"d-flex align-center my-3"},[a("v-divider"),a("div",{staticClass:"mx-2"},[t._v(" Дополнительные объемы ")]),a("v-divider")],1)]),a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-text-field",{attrs:{type:"number",label:t.$t("tanks.dialog.filter"),suffix:t.$t("units.l"),hint:t.$t("tanks.dialog.filterHint"),"hide-details":"auto"},model:{value:t.tank.filter,callback:function(n){t.$set(t.tank,"filter",t._n(n))},expression:"tank.filter"}}),a("v-text-field",{attrs:{type:"number",label:t.$t("tanks.dialog.soil"),suffix:t.$t("units.l"),hint:t.$t("tanks.dialog.soilHint"),"hide-details":"auto"},model:{value:t.tank.soil,callback:function(n){t.$set(t.tank,"soil",t._n(n))},expression:"tank.soil"}})],1),a("v-expand-transition",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t.isCreate?t._e():a("v-btn",{on:{click:t.removeTank}},[t._v(" "+t._s(t.$t("buttons.remove"))+" ")]),t.isCreate?t._e():a("v-btn",{staticClass:"ml-2",attrs:{color:"primary"},on:{click:t.editTank}},[t._v(" "+t._s(t.$t("buttons.save"))+" ")]),t.isCreate?a("v-btn",{attrs:{color:"primary"},on:{click:t.addTank}},[t._v(" "+t._s(t.$t("buttons.add"))+" ")]):t._e()],1)],1)],1)],1)],1)],1)],1)},i=[],s=a("5530"),r=(a("99af"),a("4de4"),a("d81d"),a("b0c0"),a("c740"),a("2f62")),o={name:"Tank",data:function(){var t=this;return{tank:{name:null,volume:null,length:null,height:null,width:null,glassThickness:null,filter:0,soil:0},nameRules:[function(n){return!!n||t.$t("tanks.dialog.nameRules.require")},function(){return!t.isExist||t.$t("tanks.dialog.nameRules.exists")}],volumeRules:[function(n){return!!n||t.$t("tanks.dialog.volumeRules.require")}]}},mounted:function(){this.isCreate||(this.tank=Object(s["a"])({},this.tanks[this.tankIndex]))},computed:Object(s["a"])(Object(s["a"])({},Object(r["d"])(["tanks"])),{},{isCreate:function(){return"create"===this.$route.params.id},tankIndex:function(){return this.$route.params.id},dimensions:function(){return"\n        ".concat(this.tank.length,"\n        ").concat(this.tank.height,"\n        ").concat(this.tank.width,"\n        ").concat(this.tank.glassThickness,"\n        ").concat(this.tank.filter,"\n        ").concat(this.tank.soil,"\n      ")},isExist:function(){var t=this,n=this.tanks.map((function(t){return t.name})),a=n.findIndex((function(n){return n===t.name})),e=-1!==a,i=a===+this.tankIndex;return e&&!i}}),watch:{dimensions:function(){var t=0;this.tank.length&&this.tank.height&&this.tank.width&&(t+=Math.round((this.tank.length-2*this.tank.glassThickness/10)*this.tank.height*(this.tank.width-2*this.tank.glassThickness/10)/1e3*100)/100),this.tank.soil&&(t+=this.tank.soil),this.tank.filter&&(t+=this.tank.filter),t&&(this.tank.volume=t)}},methods:Object(s["a"])(Object(s["a"])({},Object(r["c"])(["TANK_ADD","TANK_REMOVE","TANK_EDIT","SNACKBAR_SHOW"])),{},{addTank:function(){this.$refs.tankForm.validate()&&(this.TANK_ADD(Object(s["a"])({},this.tank)),this.SNACKBAR_SHOW(this.$t("tanks.dialog.messageTankAdd")),this.$router.push("/tanks"))},editTank:function(){this.$refs.tankForm.validate()&&(this.TANK_EDIT({index:this.tankIndex,tank:Object(s["a"])({},this.tank)}),this.SNACKBAR_SHOW(this.$t("tanks.dialog.messageTankEdit")),this.$router.push("/tanks"))},removeTank:function(){this.TANK_REMOVE(this.tankIndex),this.$router.push("/tanks"),this.SNACKBAR_SHOW(this.$t("tanks.dialog.messageTankRemove"))}})},l=o,c=(a("addbf"),a("2877")),u=a("6544"),d=a.n(u),f=a("8336"),h=a("62ad"),v=a("a523"),k=a("ce7e"),m=a("0789"),g=a("4bd4"),p=a("132d"),b=a("0fd9"),$=a("8654"),x=Object(c["a"])(l,e,i,!1,null,"2016d1e4",null);n["default"]=x.exports;d()(x,{VBtn:f["a"],VCol:h["a"],VContainer:v["a"],VDivider:k["a"],VExpandTransition:m["a"],VForm:g["a"],VIcon:p["a"],VRow:b["a"],VTextField:$["a"]})},"8ce9":function(t,n,a){},a523:function(t,n,a){"use strict";a("4de4"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var e=a("2b0e");function i(t){return e["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,a){var e=a.props,i=a.data,s=a.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var r=i.attrs;if(r){i.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var n=r[t];return t.startsWith("data-")?(i.attrs[t]=n,!1):n||"string"===typeof n}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),n(e.tag,i,s)}})}var s=a("d9f7");n["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var a,e=n.props,i=n.data,r=n.children,o=i.attrs;return o&&(i.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var n=o[t];return t.startsWith("data-")?(i.attrs[t]=n,!1):n||"string"===typeof n}))),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(s["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),r)}})},addbf:function(t,n,a){"use strict";a("e138")},ce7e:function(t,n,a){"use strict";var e=a("5530"),i=(a("8ce9"),a("7560"));n["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var n;return this.$attrs.role&&"separator"!==this.$attrs.role||(n=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(e["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(e["a"])({role:"separator","aria-orientation":n},this.$attrs),on:this.$listeners})}})},e138:function(t,n,a){}}]);
//# sourceMappingURL=chunk-aafa8612.3637b090.js.map