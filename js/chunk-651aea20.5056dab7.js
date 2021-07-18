(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-651aea20"],{"0985":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"mb-10"},[i("v-row",[i("page-title",[e._v(" Реминерализация ")]),i("guide",[e._v(" На этой странице можно рассчитать Gh/Kh в аквариуме в зависимости от исходной воды, разбавления осмосом, реминерализатора и дозировок удобрений. ")]),e.recipes.length>0?i("v-col",{attrs:{cols:"12",sm:"8","offset-sm":"2"}},[i("v-combobox",{attrs:{items:e.tanks,value:e.tankVolume,"item-text":"name","item-value":"volume",label:"Объем аквариума","hide-selected":"","hide-details":"auto",hint:"Выберите аквариум или введите объем (это может быть объем подмены)","persistent-hint":"",suffix:"л","return-object":!1},on:{input:e.inputTankVolume}}),i("v-expand-transition",[e.tankVolume?i("div",[i("div",{staticClass:"text-subtitle-1 mt-4 mt-sm-8"},[e._v(" Подмена ")]),i("div",{staticClass:"d-flex flex-column flex-sm-row align-sm-center"},[i("base-text-field",{staticClass:"pt-0 mt-0",attrs:{value:e.waterChangeVolume,type:"number",label:"Объем",hint:"Введите объем подмены","persistent-hint":"","single-line":"",suffix:"л",precision:1,"append-icon":"mdi-arrow-up-bold-circle-outline"},on:{input:e.inputWaterChangeVolume,"click:append":function(t){return e.inputWaterChangeVolume(e.tankVolume)}}}),i("base-text-field",{staticClass:"pt-0 mt-0 ml-sm-3",attrs:{value:e.waterChange,type:"number",label:"Процент",hint:"или процент подмены от общего объема","persistent-hint":"","single-line":"",suffix:"%",precision:1,"append-icon":"mdi-arrow-up-bold-circle-outline"},on:{input:e.inputWaterChange,"click:append":function(t){return e.inputWaterChange(100)}}}),i("base-text-field",{staticClass:"mt-0 pt-0 ml-sm-3",attrs:{value:e.osmosisChange,type:"number",label:"Процент",hint:"\n                Осмос: "+e.osmosisChangeVolume.toFixed(1)+" л.\n                Водопровод: "+(e.waterChangeVolume-e.osmosisChangeVolume).toFixed(1)+" л.\n              ","persistent-hint":"","single-line":"",suffix:"%",precision:0,"append-icon":"mdi-arrow-up-bold-circle-outline"},on:{input:e.inputOsmosisChange,"click:append":function(t){return e.inputOsmosisChange(100)}}})],1),i("div",{staticClass:"text-headline mt-8"},[e._v(" Значения жесткости ")]),i("div",{staticClass:"d-flex"},[i("v-text-field",{attrs:{type:"number",label:"Gh в аквариуме",suffix:"dGh","hide-details":"auto"},model:{value:e.ghInit,callback:function(t){e.ghInit=e._n(t)},expression:"ghInit"}}),i("v-text-field",{staticClass:"ml-3",attrs:{type:"number",label:"Gh водопровода",suffix:"dGh","hide-details":"auto"},model:{value:e.ghWaterChange,callback:function(t){e.ghWaterChange=e._n(t)},expression:"ghWaterChange"}})],1),i("div",{staticClass:"d-flex"},[i("v-text-field",{attrs:{type:"number",label:"Kh в аквариуме",suffix:"dKh","hide-details":"auto"},model:{value:e.khInit,callback:function(t){e.khInit=e._n(t)},expression:"khInit"}}),i("v-text-field",{staticClass:"ml-3",attrs:{type:"number",label:"Kh водопровода",suffix:"dKh","hide-details":"auto"},model:{value:e.khWaterChange,callback:function(t){e.khWaterChange=e._n(t)},expression:"khWaterChange"}})],1)]):e._e()]),i("v-expand-transition",[null!==e.ghInit?i("div",[i("div",{staticClass:"text-subtitle-1 mt-8"},[e._v(" Реминерализатор и удобрения ")]),i("div",{staticClass:"d-flex flex-column flex-sm-row mb-8"},[i("v-combobox",{attrs:{items:e.REMINERALS,label:"Реминерализатор",hint:"Выберите готовый реминерализатор","item-text":"name","return-object":!0,"persistent-hint":"",multiple:""},model:{value:e.remineralsSelected,callback:function(t){e.remineralsSelected=t},expression:"remineralsSelected"}}),i("v-combobox",{staticClass:"ml-sm-3",attrs:{items:e.items,label:"Удобрение",hint:"и/или удобрение из списка","item-text":"name","return-object":!0,"persistent-hint":"",multiple:""},model:{value:e.recipesSelected,callback:function(t){e.recipesSelected=t},expression:"recipesSelected"}})],1),i("div",{staticClass:"mb-8"},[i("div",{staticClass:"d-flex align-center mb-2"},[i("v-divider"),i("v-btn",{staticClass:"px-4",attrs:{center:"",text:""},on:{click:function(t){e.isOwnRemineral=!e.isOwnRemineral}}},[e._v(" Свой состав "),i("v-icon",[e._v(e._s(e.isOwnRemineral?"mdi-chevron-up":"mdi-chevron-down"))])],1),i("v-divider")],1),i("v-expand-transition",[e.isOwnRemineral?i("div",[i("div",{staticClass:"d-flex flex-wrap mb-2"},[i("v-text-field",{staticStyle:{"min-width":"40%"},attrs:{label:"Gh",suffix:"dGh","hide-details":"auto"},model:{value:e.ownRemineral.gh,callback:function(t){e.$set(e.ownRemineral,"gh",e._n(t))},expression:"ownRemineral.gh"}}),i("v-text-field",{staticClass:"ml-sm-3",staticStyle:{"min-width":"40%"},attrs:{label:"Kh",suffix:"dKh","hide-details":"auto"},model:{value:e.ownRemineral.kh,callback:function(t){e.$set(e.ownRemineral,"kh",e._n(t))},expression:"ownRemineral.kh"}}),i("v-text-field",{staticStyle:{"min-width":"40%"},attrs:{label:"Масса",hint:"Масса, которая повышает Gh и Кh в n объеме на m градусов",suffix:"г","hide-details":"auto"},model:{value:e.ownRemineral.mass,callback:function(t){e.$set(e.ownRemineral,"mass",e._n(t))},expression:"ownRemineral.mass"}}),i("v-text-field",{staticClass:"ml-sm-3",staticStyle:{"min-width":"40%"},attrs:{label:"Объем",hint:"Объем, на который рассчитан состав",suffix:"л","hide-details":"auto"},model:{value:e.ownRemineral.volume,callback:function(t){e.$set(e.ownRemineral,"volume",e._n(t))},expression:"ownRemineral.volume"}})],1),i("div",{staticClass:"d-flex justify-end"},[i("v-btn",{attrs:{color:"primary"},on:{click:e.addOwnRemineral}},[e._v(" Добавить ")])],1)]):e._e()])],1)]):e._e()]),e._l(e.remineralsSelected,(function(t,a){return i("v-text-field",{key:"rem_"+a,attrs:{type:"number",label:t.name,hint:"Введите массу реминерализатора",suffix:"г","hide-details":"auto"},model:{value:t.amount,callback:function(i){e.$set(t,"amount",e._n(i))},expression:"remineral.amount"}})})),e.recipesSelected.length>0?i("fertilizers-dose-table",{attrs:{"fertilization-type":e.FERTILIZATION_IN_TAP_WATER,"is-fertilization-types":!1,"is-water-change":!1,"recipes-selected":e.recipesSelected,days:7},on:{input:e.inputDose}}):e._e(),i("v-expand-transition",[null!==e.ghInit?i("div",{staticClass:"mt-8"},[i("div",{staticClass:"text-subtitle-1 mb-2"},[e._v(" "+e._s(e.hardnessHint("Kh"))+" ")]),i("div",{staticClass:"d-flex"},[i("v-text-field",{attrs:{value:e.totalGh.toFixed(2),label:"Общая жесткость",suffix:"dGh","hide-details":"auto",readonly:"",outlined:"","persistent-hint":""}}),i("v-text-field",{staticClass:"ml-3",attrs:{value:e.totalKh.toFixed(2),label:"Карбонатная жесткость",suffix:"dKh","hide-details":"auto",readonly:"",outlined:"","persistent-hint":""}})],1)]):e._e()])],2):e._e()],1)],1)},n=[],s=i("2909"),l=i("5530"),o=(i("99af"),i("159b"),i("b64b"),i("2b0e")),r=i("2f62"),u=i("b0a2"),c=i("e8d1"),h=i("2a18"),m=[{name:"Аквапозитив GH+",kh:0,gh:6,mass:2,volume:10,ca:14,mg:3.5,note:"Это заводское удобрение. Все данные взяты с этикетки."},{name:"Аквапозитив GH/KH+",kh:3,gh:8,mass:3,volume:10,ca:13.8,mg:3.4,note:"Это заводское удобрение. Все данные взяты с этикетки."},{name:"Aquayer Remineral GH/KH+",kh:2,gh:3,mass:4,volume:50,ca:17.7,mg:5.5,note:"Это заводское удобрение. Все данные взяты с этикетки."},{name:"Aquabalance GH-бустер",kh:0,gh:3.5,mass:14,volume:100,note:"Это заводское удобрение. Все данные взяты с этикетки."},{name:"Aquabalance Aqua-бустер",kh:2.25,gh:4.5,mass:7,volume:50,ca:15,mg:4.3,note:"Это заводское удобрение. Все данные взяты с этикетки."},{name:"Dennerle Osmose ReMineral+",kh:1.3,gh:2,mass:10,volume:100,ca:45.5,mg:9.5,note:"Это заводское удобрение. Все данные взяты с этикетки."}],d=i("da53"),f=i("da09"),p={name:"Remineralization",components:{FertilizersDoseTable:f["d"]},data:function(){return{FORMULAS:c["a"],ELEMENTS:u["a"],HARDNESS:h["a"],REMINERALS:m,FERTILIZATION_IN_TAP_WATER:f["b"],dialog:!0,tankVolume:null,tank:null,waterChange:0,waterChangeVolume:0,osmosisChange:0,ghInit:null,khInit:null,ghWaterChange:0,khWaterChange:0,recipesSelected:[],remineralsSelected:[],isOwnRemineral:!1,ownRemineral:{kh:0,gh:0,mass:0,volume:0}}},computed:Object(l["a"])(Object(l["a"])({},Object(r["d"])(["tanks","recipes","fertilizers"])),{},{items:function(){return[].concat(Object(s["a"])(this.recipes),Object(s["a"])(this.fertilizers))},osmosisChangeVolume:function(){return this.tankVolume*this.waterChange*this.osmosisChange/1e4},totalElements:function(){var e=this,t={};return this.recipesSelected.forEach((function(i){Object.keys(i.concentration).forEach((function(a){Object.keys(i.concentration[a]).forEach((function(n){n in t||(t[n]=0),i.amount&&(t[n]+=i.amount*i.concentration[a][n]/e.tankVolume,!i.volume&&Object(d["j"])(i)&&(t[n]*=1e3))}))}))})),t},totalGh:function(){var e=this,t=this.totalElements.Ca,i=this.totalElements.Mg,a=this.ghInit*(1-this.waterChange/100),n=0;t&&(n+=t/this.HARDNESS.Ca),i&&(n+=i/this.HARDNESS.Mg),this.remineralsSelected.forEach((function(t){t.amount&&(n+=t.gh*t.amount*t.volume/(e.waterChange/100*e.tankVolume*t.mass)*(e.waterChange/100))}));var s=this.ghWaterChange*(1-this.osmosisChange/100)*this.waterChange/100;return a+s+n},totalKh:function(){var e=this,t=this.khInit*(1-this.waterChange/100),i=0;this.remineralsSelected.forEach((function(t){t.amount&&(i+=t.kh*t.amount*t.volume/(e.waterChange/100*e.tankVolume*t.mass)*(e.waterChange/100))}));var a=this.khWaterChange*(1-this.osmosisChange/100)*this.waterChange/100;return t+a+i}}),watch:{recipesSelected:function(){this.recipesSelected.forEach((function(e){e.amount||(e.amount=""),e.amountDay||(e.amountDay="")}))}},methods:{isRecipe:d["j"],isFertilizer:d["i"],convertIonName:d["b"],convertIonRatio:d["c"],countPercent:d["d"],countTotalIonConcentration:d["f"],inputDose:function(e,t){o["a"].set(this.recipesSelected,e,t)},inputTankVolume:function(e){this.tankVolume=+e,this.waterChangeVolume>+e&&(this.waterChangeVolume=+e),this.waterChange=this.waterChangeVolume/e*100},inputWaterChange:function(e){e<=100&&(this.waterChange=+e,this.waterChangeVolume=this.tankVolume*e/100)},inputWaterChangeVolume:function(e){e<=this.tankVolume&&(this.waterChangeVolume=+e,this.waterChange=e/this.tankVolume*100)},inputOsmosisChange:function(e){e<=100&&(this.osmosisChange=+e)},hardnessHint:function(){var e="Жесткость после подмены воды";return(this.totalElements.Ca||this.totalElements.Mg||this.remineralsSelected.length>0)&&(e+=", внесения удобрений и реминерализатора"),e},addOwnRemineral:function(){this.remineralsSelected.push(Object(l["a"])({name:"Свой"},this.ownRemineral)),this.ownRemineral={kh:0,gh:0,mass:0,volume:0}}}},v=p,b=i("2877"),g=i("6544"),C=i.n(g),T=i("8336"),w=i("62ad"),I=i("2b5d"),x=i("a523"),_=i("ce7e"),y=i("0789"),R=i("132d"),E=i("0fd9"),k=i("8654"),A=Object(b["a"])(v,a,n,!1,null,null,null);t["default"]=A.exports;C()(A,{VBtn:T["a"],VCol:w["a"],VCombobox:I["a"],VContainer:x["a"],VDivider:_["a"],VExpandTransition:y["a"],VIcon:R["a"],VRow:E["a"],VTextField:k["a"]})},"2a18":function(e,t,i){"use strict";t["a"]={Mg:4.346,Ca:7.144}},"6f19":function(e,t,i){"use strict";i("da1b")},"9d01":function(e,t,i){},b73d:function(e,t,i){"use strict";var a=i("15fd"),n=i("5530"),s=(i("0481"),i("ec29"),i("9d01"),i("fe09")),l=i("c37a"),o=i("c3f0"),r=i("0789"),u=i("490a"),c=i("80d2"),h=["title"];t["a"]=s["a"].extend({name:"v-switch",directives:{Touch:o["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},l["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var e=this.attrs$,t=(e.title,Object(a["a"])(e,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs),t)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(r["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(u["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===c["s"].left&&this.isActive||e.keyCode===c["s"].right&&!this.isActive)&&this.onChange()}}})},da09:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return u}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.isFertilizationTypes?i("v-radio-group",{staticClass:"my-2",attrs:{value:e.fertilizationType,row:"","hide-details":"auto"},on:{change:function(t){return e.$emit("change",t)}}},[i("v-radio",{attrs:{label:"Каждый день",value:0}}),i("v-radio",{attrs:{label:"В подменную воду",value:1}}),i("v-radio",{attrs:{label:"Комбинированная подача",value:2}})],1):e._e(),[e.FERTILIZATION_IN_TAP_WATER,e.FERTILIZATION_MIX].includes(e.fertilizationType)&&e.isWaterChange?i("v-text-field",{staticClass:"mt-4",attrs:{value:e.waterChangeVolume,type:"Number",label:"Введите объем подмены",hint:"Это нужно для подсчета дозы на подмену"},on:{input:function(t){return e.$emit("water-change",+t)}}}):e._e(),i("div",{staticClass:"d-flex mt-4"},[[e.FERTILIZATION_IN_TAP_WATER,e.FERTILIZATION_MIX].includes(e.fertilizationType)&&e.isFertilizationTypes?i("div",{staticClass:"text-subtitle-1 font-weight-medium w-50 pr-2",class:{"w-100":e.fertilizationType===e.FERTILIZATION_IN_TAP_WATER}},[e.FERTILIZATION_IN_TAP_WATER===e.fertilizationType?[e._v(" Весь объем удобрений ")]:[e._v(" Подмена ")],i("v-divider")],2):e._e(),[e.FERTILIZATION_EVERY_DAY,e.FERTILIZATION_MIX].includes(e.fertilizationType)?i("div",{staticClass:"text-subtitle-1 w-50 font-weight-medium pr-2",class:{"w-100":e.fertilizationType===e.FERTILIZATION_EVERY_DAY}},[i("div",{staticClass:"d-flex justify-space-between align-center"},[i("v-switch",{staticClass:"mt-0 mb-0 mb-sm-0",attrs:{label:e.isTotal?"Всего":"Ежедневно","hide-details":"auto"},model:{value:e.isTotal,callback:function(t){e.isTotal=t},expression:"isTotal"}})],1),i("v-divider")],1):e._e()]),e._l(e.recipesSelected,(function(t,a){return i("div",{key:a,staticClass:"d-flex justify-space-between align-center"},[[e.FERTILIZATION_IN_TAP_WATER,e.FERTILIZATION_MIX].includes(e.fertilizationType)?i("base-text-field",{staticClass:"pr-2",class:{"w-50":e.fertilizationType===e.FERTILIZATION_MIX},attrs:{value:t.amount,type:"number",label:t.name,suffix:t.volume>0||e.isFertilizer(t)?"мл":"г","hide-details":"auto"},on:{input:function(t){return e.inputRecipeAmount(t,a)}}}):e._e(),[e.FERTILIZATION_EVERY_DAY,e.FERTILIZATION_MIX].includes(e.fertilizationType)?i("div",{staticClass:"d-flex",class:{"w-100":e.fertilizationType===e.FERTILIZATION_EVERY_DAY,"w-50":e.FERTILIZATION_MIX||e.isTotal}},[e.isTotal?e._e():i("base-text-field",{staticClass:"pr-2",attrs:{value:t.amountDay,type:"number",label:t.name,suffix:t.volume>0||e.isFertilizer(t)?"мл/день":"г/день","hide-details":"auto"},on:{input:function(t){return e.inputRecipeAmountDay(t,a)}}}),e.isTotal?i("base-text-field",{staticClass:"pr-2",attrs:{value:e.amountDayTotal[a],type:"number",label:t.name,suffix:t.volume>0||e.isFertilizer(t)?"мл":"г","hide-details":"auto"},on:{input:function(t){return e.inputRecipeAmountDayTotal(t,a)}}}):e._e()],1):e._e()],1)}))],2)},n=[],s=i("5530"),l=(i("a9e3"),i("159b"),i("da53")),o=0,r=1,u=2,c={name:"FertilizersDoseTable",props:{fertilizationType:{type:Number,default:o},recipesSelected:{type:Array,default:function(){return[]}},days:{type:Number,default:1},waterChangeVolume:{type:Number,default:0},isFertilizationTypes:{type:Boolean,default:!0},isWaterChange:{type:Boolean,default:!0}},data:function(){return{FERTILIZATION_IN_TAP_WATER:r,FERTILIZATION_EVERY_DAY:o,FERTILIZATION_MIX:u,isTotal:!1,amountDayTotal:[]}},watch:{isTotal:function(e){var t=this;e&&this.recipesSelected.forEach((function(e,i){e.amountDay&&(t.amountDayTotal[i]=e.amountDay*t.days)}))}},methods:{isFertilizer:l["i"],inputRecipeAmount:function(e,t){var i=this.recipesSelected[t],a=""!==e?+e:"";if(this.fertilizationType===r){var n=a/this.days;this.$emit("input",t,Object(s["a"])(Object(s["a"])({},i),{},{amount:a,amountDay:n}))}else this.fertilizationType===u&&this.$emit("input",t,Object(s["a"])(Object(s["a"])({},i),{},{amount:a}))},inputRecipeAmountDay:function(e,t){var i=this.recipesSelected[t],a=""!==e?+e:"";if(this.fertilizationType===o){var n=a*this.days;this.$emit("input",t,Object(s["a"])(Object(s["a"])({},i),{},{amount:n,amountDay:a}))}else this.fertilizationType===u&&this.$emit("input",t,Object(s["a"])(Object(s["a"])({},i),{},{amountDay:a}))},inputRecipeAmountDayTotal:function(e,t){var i=this.recipesSelected[t],a=""!==e?+e:"";this.amountDayTotal[t]=a;var n=a/this.days;if(this.fertilizationType===o){var l=a;this.$emit("input",t,Object(s["a"])(Object(s["a"])({},i),{},{amount:l,amountDay:n}))}else this.fertilizationType===u&&this.$emit("input",t,Object(s["a"])(Object(s["a"])({},i),{},{amountDay:n}))}}},h=c,m=(i("6f19"),i("2877")),d=i("6544"),f=i.n(d),p=i("ce7e"),v=i("67b6"),b=i("43a6"),g=i("b73d"),C=i("8654"),T=Object(m["a"])(h,a,n,!1,null,"2fbac831",null);t["d"]=T.exports;f()(T,{VDivider:p["a"],VRadio:v["a"],VRadioGroup:b["a"],VSwitch:g["a"],VTextField:C["a"]})},da1b:function(e,t,i){}}]);
//# sourceMappingURL=chunk-651aea20.5056dab7.js.map