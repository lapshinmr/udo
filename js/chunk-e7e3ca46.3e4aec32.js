(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7e3ca46"],{"3cc4":function(t,s,a){},5967:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-container",{staticClass:"mb-12"},[a("v-row",[a("page-title",[t._v(" Аквариумы ")]),a("guide",[t._v(" На этой странице можно рассчитать объем аквариума по линейным размерам и добавить аквариум в список. "),a("br"),a("br"),t._v(" Список аквариумов упрощает выбор объема при составлении "),a("router-link",{attrs:{to:"/recipes"}},[t._v(" рецепта ")]),t._v(" или "),a("router-link",{attrs:{to:"/schedules"}},[t._v(" расписания ")]),t._v(" внесения удобрений. ")],1),0===t.tanks.length?a("v-col",{attrs:{cols:"12",md:"8","offset-md":"2"}},[a("p",{staticClass:"mb-8",class:{"text-h6":t.$vuetify.breakpoint["xs"],"text-h5":t.$vuetify.breakpoint["smAndUp"]}},[t._v(" У вас нет ни одного аквариума ")])]):t._e(),a("v-col",{attrs:{cols:"12",sm:"8","offset-sm":"2"}},[a("v-expansion-panels",{attrs:{multiple:""}},[a("draggable",t._b({staticStyle:{width:"100%"},attrs:{handle:".handle"},on:{start:function(s){t.drag=!0},end:function(s){t.drag=!1}},model:{value:t.tanks,callback:function(s){t.tanks=s},expression:"tanks"}},"draggable",t.dragOptions,!1),[a("transition-group",{attrs:{type:"transition",name:t.drag?null:"flip-list"}},t._l(t.tanks,(function(s,e){return a("v-expansion-panel",{key:s.name},[a("v-expansion-panel-header",{staticClass:"pa-3 py-sm-4 px-sm-6"},[a("div",{staticClass:"d-flex align-center",staticStyle:{width:"100%"}},[a("div",{staticClass:"no-break font-weight-regular mr-auto",class:{"subtitle-1":t.$vuetify.breakpoint["xs"],title:t.$vuetify.breakpoint["smAndUp"]}},[t._v(" "+t._s(s.name)+" ")]),a("div",{staticClass:"mr-1 mx-sm-4",staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(s.volume.toFixed(1))+" "+t._s(t.$t("units.l"))+" ")]),a("div",[a("v-tooltip",{attrs:{bottom:"","max-width":"400"},scopedSlots:t._u([{key:"activator",fn:function(s){var e=s.on;return[a("v-icon",t._g({staticClass:"handle"},e),[t._v(" mdi mdi-drag ")])]}}],null,!0)},[t._v(" "+t._s(t.$t("tanks.panels.header.pull"))+" ")])],1)])]),a("v-expansion-panel-content",[s.length?a("div",{staticClass:"body-2"},[a("div",{staticClass:"d-flex justify-space-between"},[a("div",[t._v(t._s(t.$t("tanks.dialog.length")))]),a("div",[t._v(t._s(s.length)+" "+t._s(t.$t("units.cm")))])]),a("div",{staticClass:"d-flex justify-space-between"},[a("div",[t._v(t._s(t.$t("tanks.dialog.width")))]),a("div",[t._v(t._s(s.width)+" "+t._s(t.$t("units.cm")))])]),a("div",{staticClass:"d-flex justify-space-between"},[a("div",[t._v(t._s(t.$t("tanks.dialog.height")))]),a("div",[t._v(t._s(s.height)+" "+t._s(t.$t("units.cm")))])]),a("div",{staticClass:"d-flex justify-space-between"},[a("div",[t._v(t._s(t.$t("tanks.dialog.glassThickness")))]),a("div",[t._v(t._s(s.glassThickness)+" "+t._s(t.$t("units.mm")))])]),s.filter?a("div",{staticClass:"d-flex justify-space-between"},[a("div",[t._v(t._s(t.$t("tanks.dialog.filter")))]),a("div",[t._v(t._s(s.filter)+" "+t._s(t.$t("units.l")))])]):t._e(),s.soil?a("div",{staticClass:"d-flex justify-space-between"},[a("div",[t._v(t._s(t.$t("tanks.dialog.soil")))]),a("div",[t._v(t._s(s.soil)+" "+t._s(t.$t("units.l")))])]):t._e(),s.waterChangeVolume?a("div",{staticClass:"d-flex justify-space-between"},[a("div",[t._v(t._s(t.$t("tanks.dialog.waterChange")))]),a("div",[t._v(t._s(s.waterChangeVolume)+" "+t._s(t.$t("units.l")))])]):t._e()]):a("div",{staticClass:"body-2"},[t._v(" "+t._s(t.$t("tanks.panels.body.noSizes"))+" ")]),a("div",{staticClass:"d-flex justify-end mt-4"},[a("v-btn",{staticClass:"mr-n4",attrs:{text:"",right:"",to:"/tanks/"+e}},[t._v(" "+t._s(t.$t("buttons.open"))+" ")])],1)])],1)})),1)],1)],1)],1)],1),a("add-button",{attrs:{action:t.addTank}},[t._v(" "+t._s(t.$t("tanks.addButton"))+" ")])],1)},n=[],i=a("5530"),l=a("2f62"),o=a("b76a"),d=a.n(o),c={name:"Tank",components:{draggable:d.a},data:function(){return{drag:!1}},computed:{dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}},tanks:{get:function(){return this.$store.state.tanks},set:function(t){this.TANK_MOVE(t)}}},methods:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["TANK_MOVE"])),{},{addTank:function(){return this.$router.push("/tanks/create")}})},r=c,v=(a("c06a"),a("2877")),u=a("6544"),_=a.n(u),p=a("8336"),f=a("62ad"),g=a("a523"),h=a("cd55"),m=a("49e2"),b=a("c865"),k=a("0393"),x=a("132d"),w=a("0fd9"),$=a("3a2f"),C=Object(v["a"])(r,e,n,!1,null,"09aeaa58",null);s["default"]=C.exports;_()(C,{VBtn:p["a"],VCol:f["a"],VContainer:g["a"],VExpansionPanel:h["a"],VExpansionPanelContent:m["a"],VExpansionPanelHeader:b["a"],VExpansionPanels:k["a"],VIcon:x["a"],VRow:w["a"],VTooltip:$["a"]})},c06a:function(t,s,a){"use strict";a("3cc4")}}]);
//# sourceMappingURL=chunk-e7e3ca46.3e4aec32.js.map