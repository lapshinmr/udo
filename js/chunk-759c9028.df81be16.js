(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-759c9028"],{1681:function(t,e,n){},"1f4f":function(t,e,n){"use strict";var a=n("5530"),i=(n("a9e3"),n("8b37"),n("80d2")),o=n("7560"),s=n("58df");e["a"]=Object(s["a"])(o["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(a["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},2681:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mb-12"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"8","offset-sm":"2"}},[n("v-btn",{staticClass:"mr-0",attrs:{square:"",to:"/recipes"}},[n("v-icon",[t._v("mdi-chevron-left")])],1)],1),n("page-title",[t.isCreate&&!t.isShared?[t._v(" Новый рецепт ")]:t._e(),t.isCreate&&t.isShared?[n("p",{staticClass:"text-h4"},[t._v(" С вами поделились рецептом! ")]),n("p",{staticClass:"text-h6 font-weight-regular"},[t._v(" Посмотрите рецепт, дайте ему название и напишите примечание. После этого можете сохранить его. ")])]:[t._v(" Рецепт "+t._s(t.name)+" ")]],2),n("v-col",{attrs:{cols:"12",md:"8","offset-md":"2"}},[n("v-form",{ref:"recipeForm"},[n("v-row",[n("v-col",{staticClass:"pt-0 mt-8",attrs:{cols:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:t.formulas,"item-text":"text","item-value":"value",multiple:"",label:"Реагент",hint:"Вы можете выбрать несколько реагентов","persistent-hint":"","hide-details":"auto",rules:t.rulesReagent},model:{value:t.reagents,callback:function(e){t.reagents=e},expression:"reagents"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-select",{attrs:{items:t.recipesExamples,label:"Рецепт",hint:"или выбрать один из рецептов","persistent-hint":"","hide-details":"auto"},model:{value:t.recipeExampleChosen,callback:function(e){t.recipeExampleChosen=e},expression:"recipeExampleChosen"}})],1),n("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[t.reagents.length>0?n("div",{staticClass:"mt-3"},[t._l(t.reagents,(function(e){return[n("div",{key:e.value,staticClass:"d-flex justify-space-between caption"},[n("div",[t._v(t._s(e))]),n("div",[t._v(t._s(t.showComponents(t.countPercent(e))))])])]}))],2):t._e(),t.reagents.length>0?n("div",{staticClass:"mt-3"},[n("small",[t._v(" *Так как аквариумисту удобнее работать с нитратом (NO3), а не с азотом (N), далее азот в любой форме будет приведен к нитрату. ")])]):t._e()]),n("v-expand-transition",[t.reagents.length>0?n("v-col",{attrs:{cols:"12"}},[n("v-radio-group",{attrs:{value:t.isWater,row:"","hide-details":"auto"},on:{change:t.setIsWater}},[n("v-radio",{attrs:{label:"Водный раствор",value:!0}}),n("v-radio",{attrs:{label:"Безводная смесь",value:!1}})],1)],1):t._e()],1),n("v-expand-transition",[t.reagents.length>0&&t.isWater?n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{value:t.volume,type:"number",label:"Введите объем удобрения",suffix:"мл",hint:"Выбирайте объем, который вы сможете использовать в течении 2-3x месяцев.\n                            Обычно это 250-300 мл.","hide-details":"auto",rules:[!t.isWater||t.rulesVolume.isExist()]},on:{input:t.inputVolume}})],1):t._e()],1),n("v-expand-transition",[t.reagents.length>0&&(t.volume||!t.isWater)?n("v-col",{attrs:{cols:"12"}},[n("v-row",[t.isWater?n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"d-flex align-center"},[n("v-divider"),n("span",{staticClass:"mx-3"},[t._v(" Введите массу реагента "),n("v-tooltip",{attrs:{bottom:"","max-width":"400"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-icon",t._g({},a),[t._v("mdi-help-circle-outline")])]}}],null,!1,2575987712)},[t._v(" Введите массу реагента и калькулятор автоматически рассчитает дозы элементов, которые показаны ниже. ")])],1),n("v-divider")],1)]):t._e(),t._l(t.reagents,(function(e){return n("v-col",{key:e,staticClass:"py-0",attrs:{cols:"12"}},[n("v-text-field",{key:e,attrs:{value:t.mass[e],type:"number",label:e,suffix:"г",hint:t.isWater?t.fertilizerMassHint(e):"","hide-details":"auto",rules:[t.rulesMass.isExist()],error:t.mass[e]/t.volume*1e3>t.FORMULAS[e].solubilityLimit,"error-messages":t.mass[e]/t.volume*1e3>t.FORMULAS[e].solubilityLimit?"Достигнута максимальная растворимость -\n                                    "+t.FORMULAS[e].solubilityLimit+" г/л при 20°С!":""},on:{input:function(n){return t.inputMass(n,e)}}})],1)})),t.isWater?n("v-col",{staticClass:"mt-2 pb-0",attrs:{cols:"12"}},[n("v-btn",{staticClass:"px-0",attrs:{center:"",text:""},on:{click:function(e){t.isShowConcentration=!t.isShowConcentration}}},[t._v(" Показать концентрации "),n("v-icon",[t._v(t._s(t.isShowConcentration?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1):t._e(),n("v-expand-transition",[t.isShowConcentration&&t.isWater?n("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[n("elements-table",{attrs:{"total-ion-concentration":t.totalIonConcentration,"fertilizer-mass":t.mass,concentration:t.concentration}})],1):t._e()],1),n("v-expand-transition",[t.isWater?t._e():n("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[n("elements-dry-table",{attrs:{"total-ion-concentration":t.totalIonConcentration,"fertilizer-mass":t.mass,"total-fertilizer-mass":t.totalFertilizerMass}})],1)],1),t.isWater?n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"d-flex align-center"},[n("v-divider"),n("span",{staticClass:"mx-3"},[t._v(" Или введите дозу элемента "),n("v-tooltip",{attrs:{bottom:"","max-width":"400"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-icon",t._g({},a),[t._v("mdi-help-circle-outline")])]}}],null,!1,2575987712)},[t._v(" Калькулятор автоматически рассчитает необходимую массу реагента. Доза - это количество элемента, на которую повысится концентрация элемента в заданном объеме аквариума при внесении 1 мл удобрения. Например, вы хотите сделать макро удобрение с нитратом. И для удобства введения его в аквариум вы бы хотели, чтобы на каждый вводимый 1 мл удобрения, нитрат повышался на 0.5 мг/л. 0.5 - это доза. ")])],1),n("v-divider")],1)]):t._e(),n("v-expand-transition",[t.reagents.length>0&&t.isWater?n("v-col",{attrs:{cols:"12"}},[n("v-combobox",{attrs:{items:t.tanks,type:"Number","item-text":"name","item-value":"volume",label:"Объем аквариума","persistent-hint":"","hide-selected":"",hint:"Выберите аквариум или введите объем",suffix:"л","return-object":!1},model:{value:t.tankVolume,callback:function(e){t.tankVolume=t._n(e)},expression:"tankVolume"}})],1):t._e()],1),t.tankVolume&&t.isWater?n("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[n("v-row",[t._l(t.reagents,(function(e){return[n("v-col",{key:e,staticClass:"py-0",attrs:{cols:"12"}},[n("v-row",{staticClass:"mb-3"},[t._l(t.FORMULAS[e].ions,(function(a,i){return[a.isNeeded?n("v-col",{key:e+i,staticClass:"py-0"},[n("v-text-field",{attrs:{value:t.solute[e][i],type:"number",label:t.convertIonName(i)+", мг/л",hint:"из "+e,"persistent-hint":""},on:{input:function(n){return t.inputIonDose(n,e,i)}}})],1):t._e()]}))],2)],1)]})),t.reagents.length>1?n("v-col",{staticClass:"d-flex justify-space-between pb-0",attrs:{cols:"12"}},[n("div",[t._v(" Общая доза, мг/л ")]),n("div",{staticClass:"d-flex flex-column"},t._l(t.countTotalIonDose(t.solute),(function(e,a){return n("div",{key:a,staticClass:"d-flex justify-space-between"},[n("div",[t._v(t._s(t.convertIonName(a))+":")]),n("div",{staticClass:"ml-3"},[t._v(" "+t._s(e.toFixed(3))+" "),t.countTotalDose(t.solute)?[t._v(" ("+t._s((e/t.countTotalDose(t.solute)*100).toFixed(2))+"%) ")]:t._e()],2)])})),0)]):t._e()],2)],1):t._e()],2)],1):t._e()],1),n("v-expand-transition",[t.reagents.length>0&&(t.volume||!t.isWater)?n("v-col",{attrs:{cols:"12"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Имя рецепта","hide-details":"auto",hint:"Придумайте имя рецепта, чтобы не путать его с другими рецептами",rules:t.rulesName},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{label:"Примечание","hide-details":"auto","auto-grow":"",rows:"1",hint:"Вы можете добавить дополнительные сведения к рецепту"},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1),n("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[t.isCreate?t._e():n("v-btn",{on:{click:t.removeRecipe}},[t._v(" Удалить ")]),t.isCreate?t._e():n("v-btn",{staticClass:"ml-2",attrs:{color:"primary"},on:{click:t.editRecipe}},[t._v(" Сохранить ")]),t.isCreate?n("v-btn",{attrs:{color:"primary"},on:{click:t.addRecipe}},[t._v(" Добавить ")]):t._e()],1)],1)],1):t._e()],1)],1)],1)],1)],1)],1)],1)],1)},i=[],o=n("2909"),s=n("3835"),r=n("5530"),c=(n("159b"),n("4fad"),n("99af"),n("b0c0"),n("4e827"),n("07ac"),n("b64b"),n("d81d"),n("c740"),n("7db0"),n("b680"),n("a15b"),n("2b0e")),l=n("e8d1"),u=[{name:"Kuban Aquariums Нитрат",reagents:{KNO3:49.71,"(NH2)2CO":5.02,NH4NO3:6.71,C6H7KO2:.5},tankVolume:100,volume:1e3,note:"Рецепт взят с youtube канала Kuban Aquariums (https://www.youtube.com/watch?v=Vyq-R0tv384)"},{name:"Kuban Aquariums Фосфат",reagents:{KH2PO4:7.01,C6H7KO2:.5},tankVolume:100,volume:1e3,note:"Рецепт взят с youtube канала Kuban Aquariums (https://www.youtube.com/watch?v=Vyq-R0tv384)"},{name:"Kuban Aquariums Калий",reagents:{K2SO4:84.76,C6H7KO2:.5},tankVolume:100,volume:1e3,note:"Рецепт взят с youtube канала Kuban Aquariums (https://www.youtube.com/watch?v=Vyq-R0tv384)"},{name:"Kuban Aquariums Реминерализатор",reagents:{"CaSO4(H2O)2":1.88,"MgSO4(H2O)7":1.28},note:"Рецепт взят с youtube канала Kuban Aquariums (https://www.youtube.com/watch?v=Vyq-R0tv384)"},{name:"Aqua Botanic Нитрат",reagents:{KNO3:82.88},tankVolume:100,volume:1e3,note:"Чистая калиевая селитра. Рецепт взят с сайта aqua-botanic.ru(https://web.archive.org/web/20131206073940/http://www.aqua-botanic.ru/index.html)"},{name:"Aqua Botanic Нитрат+",reagents:{KNO3:49.71,"(NH2)2CO":5.02,NH4NO3:6.71},tankVolume:100,volume:1e3,note:"Калиевая селитра, разбавленная мочевиной и нитратом аммония. Рецепт взят с сайта aqua-botanic.ru(https://web.archive.org/web/20131206073940/http://www.aqua-botanic.ru/index.html)"},{name:"Aqua Botanic Фосфат",reagents:{KH2PO4:7.01},tankVolume:100,volume:1e3,note:"Чистый монофосфат калия. Рецепт взят с сайта aqua-botanic.ru(https://web.archive.org/web/20131206073940/http://www.aqua-botanic.ru/index.html)"},{name:"Aqua Botanic Калий",reagents:{K2SO4:84.76},tankVolume:100,volume:1e3,note:"Чистый сульфат калия. Рецепт взят с сайта aqua-botanic.ru(https://web.archive.org/web/20131206073940/http://www.aqua-botanic.ru/index.html)"},{name:"NPK Amania.org 1:15",reagents:{KNO3:106.45,KH2PO4:5.77},tankVolume:100,volume:1e3,note:"Макро в соотношении 1 к 15. Рецепт взят с сайта amania.org"},{name:"NPK Amania.org 1:15 + амидный азот",reagents:{KNO3:53.6,"(NH2)2CO":16,KH2PO4:5.77},tankVolume:100,volume:1e3,note:"Макро в соотношении 1 к 15. Калиевая селитра в соотношении 50 на 50 с мочевиной. Рецепт взят с сайта amania.org"},{name:"Удо Ермолаева. МИКРО",reagents:{K2SO4:7.45,"MgSO4(H2O)7":16.4,"Fe2(SO4)3(H2O)9":1.45,"CuSO4(H2O)5":.1,"ZnSO4(H2O)7":.04,H3BO3:.1,"(NH4)2MoO4":.04,"MnSO4(H2O)5":.73,C10H14N2Na2O8:2.5},tankVolume:100,volume:500,note:"Микро. Рецепт - https://aquascape-promotion.com/udobreniya-svoimi-rukami"},{name:"Удо Ермолаева. МИКРО (gh < 7)",reagents:{K2SO4:7.45,"MgSO4(H2O)7":16.4,"Fe2(SO4)3(H2O)9":1.45,"CuSO4(H2O)5":.1,"ZnSO4(H2O)7":.04,H3BO3:.1,"(NH4)2MoO4":.04,"MnSO4(H2O)5":.73,C10H14N2Na2O8:1.75},tankVolume:100,volume:500,note:"Микро. Рецепт - https://aquascape-promotion.com/udobreniya-svoimi-rukami"},{name:"Удо Ермолаева. МИКРО (Железный купорос)",reagents:{K2SO4:7.45,"MgSO4(H2O)7":16.4,"FeSO4(H2O)7":1.44,"CuSO4(H2O)5":.1,"ZnSO4(H2O)7":.04,H3BO3:.1,"(NH4)2MoO4":.04,"MnSO4(H2O)5":.73,C10H14N2Na2O8:1.75,C14H18N3O10Na2Fe:1},tankVolume:100,volume:500,note:"Микро. Рецепт - https://aquascape-promotion.com/udobreniya-svoimi-rukami"}],h=n("da53"),d=n("2f62"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex mt-1",class:{"flex-column":t.$vuetify.breakpoint["xs"],"flex-row":t.$vuetify.breakpoint["smAndUp"]}},[n("v-switch",{staticClass:"mr-4",attrs:{label:"Показать соотношение","hide-details":"auto"},model:{value:t.isConcentrationPercent,callback:function(e){t.isConcentrationPercent=e},expression:"isConcentrationPercent"}}),n("v-switch",{staticClass:"mr-4",attrs:{label:"Показать N и P","hide-details":"auto"},model:{value:t.isConvertion,callback:function(e){t.isConvertion=e},expression:"isConvertion"}})],1),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"pl-0 text-center"},[t._v(" Реагент ")]),t._l(Object.keys(t.totalIonConcentration),(function(e,a){return n("th",{key:e,staticClass:"text-center",class:{"pr-0":a===Object.keys(t.totalIonConcentration).length-1}},[t.isConvertion&&e!==t.convertIonName(e)?[t._v(" "+t._s(e)+" / ")]:t._e(),e!==t.convertIonName(e)?[t._v(" "+t._s(t.convertIonName(e))+", г/л ")]:[t._v(" "+t._s(e)+", г/л ")]],2)}))],2)]),n("tbody",[t._l(Object.keys(t.concentration),(function(e){return n("tr",{key:e},[n("td",{staticClass:"pl-0 text-center"},[t._v(" "+t._s(e)+" ")]),t._l(t.totalIonConcentration,(function(a,i,o){return n("td",{key:e+i,staticClass:"text-center",class:{"pr-0":o===Object.keys(t.concentration).length-1}},[Object.keys(t.concentration[e]).includes(i)?[t.isConvertion&&i!==t.convertIonName(i)?[t._v(" "+t._s(t.concentration[e][i].toFixed(3))+" / ")]:t._e(),i!==t.convertIonName(i)?[t._v(" "+t._s((t.convertIonRatio(i)*t.concentration[e][i]).toFixed(3))+" ")]:[t._v(" "+t._s(t.concentration[e][i].toFixed(3))+" ")],a&&t.isConcentrationPercent?[t._v(" ("+t._s((t.concentration[e][i]/a*100).toFixed(1))+"%) ")]:t._e()]:[t._v(" - ")]],2)}))],2)})),n("tr",{staticClass:"font-weight-bold"},[n("td",{staticClass:"pl-0 text-center"},[t._v(" Сумма ")]),t._l(t.totalIonConcentration,(function(e,a,i){return[a!==t.convertIonName(a)?n("td",{key:a,staticClass:"text-center",class:{"pr-0":i===Object.keys(t.totalIonConcentration).length-1}},[t.isConvertion&&a!==t.convertIonName(a)?[t._v(" "+t._s(e.toFixed(3))+" / ")]:t._e(),t._v(" "+t._s((t.convertIonRatio(a)*e).toFixed(3))+" ")],2):n("td",{key:a,staticClass:"text-center",class:{"pr-0":i===Object.keys(t.totalIonConcentration).length-1}},[t._v(" "+t._s(e.toFixed(3))+" ")])]}))],2)],2)]},proxy:!0}])})],1)},m=[],p={name:"ElementsTable",props:{totalIonConcentration:{type:Object,default:function(){}},fertilizerMass:{type:Object,default:function(){}},concentration:{type:Object,default:function(){}}},data:function(){return{isConcentrationPercent:!1,isConvertion:!1}},methods:{convertIonRatio:h["c"],convertIonName:h["b"],countPercent:h["d"]}},f=p,b=n("2877"),g=n("6544"),C=n.n(g),_=n("1f4f"),O=n("b73d"),x=Object(b["a"])(f,v,m,!1,null,"4d7df51e",null),w=x.exports;C()(x,{VSimpleTable:_["a"],VSwitch:O["a"]});var y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex mt-2 mb-2",class:{"flex-column":t.$vuetify.breakpoint["xs"],"flex-row":t.$vuetify.breakpoint["smAndUp"]}},[n("v-switch",{staticClass:"mr-4",attrs:{label:"Показать соотношение","hide-details":"auto"},model:{value:t.isConcentrationPercent,callback:function(e){t.isConcentrationPercent=e},expression:"isConcentrationPercent"}}),n("v-switch",{staticClass:"mr-4",attrs:{label:"Показать N и P","hide-details":"auto"},model:{value:t.isConvertion,callback:function(e){t.isConvertion=e},expression:"isConvertion"}})],1),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"pl-0 text-center"},[t._v(" Реагент ")]),t._l(Object.keys(t.totalIonConcentration),(function(e,a){return n("th",{key:e,staticClass:"text-center",class:{"pr-0":a===t.totalIonConcentration.length-1}},[t.isConvertion&&e!==t.convertIonName(e)?[t._v(" "+t._s(e)+" / ")]:t._e(),e!==t.convertIonName(e)?[t._v(" "+t._s(t.convertIonName(e))+", г ")]:[t._v(" "+t._s(e)+", г ")]],2)}))],2)]),n("tbody",[t._l(t.fertilizerMass,(function(e,a){return n("tr",{key:a},[n("td",{staticClass:"pl-0 text-center"},[t._v(" "+t._s(a)+" ")]),t._l(t.totalIonConcentration,(function(i,o,s){return n("td",{key:a+o,staticClass:"text-center",class:{"pr-0":s===t.totalIonConcentration.length-1}},[Object.keys(t.countPercent(a)).includes(o)?[t.isConvertion&&o!==t.convertIonName(o)?[t._v(" "+t._s((e*t.countPercent(a)[o]).toFixed(3))+" / ")]:t._e(),o!==t.convertIonName(o)?[t._v(" "+t._s((t.convertIonRatio(o)*e*t.countPercent(a)[o]).toFixed(3))+" ")]:[t._v(" "+t._s((e*t.countPercent(a)[o]).toFixed(3))+" ")],i&&t.isConcentrationPercent?[t._v(" ("+t._s((e*t.countPercent(a)[o]/(i*t.totalFertilizerMass)*100).toFixed(1))+"%) ")]:t._e()]:[t._v(" - ")]],2)}))],2)})),n("tr",{staticClass:"font-weight-bold"},[n("td",{staticClass:"pl-0 text-center"},[t._v(" Сумма ")]),t._l(t.totalIonConcentration,(function(e,a,i){return[a!==t.convertIonName(a)?n("td",{key:a,staticClass:"text-center",class:{"pr-0":i===t.totalIonConcentration.length-1}},[t.isConvertion&&a!==t.convertIonName(a)?[t._v(" "+t._s((e*t.totalFertilizerMass).toFixed(3))+" / ")]:t._e(),t._v(" "+t._s((t.convertIonRatio(a)*e*t.totalFertilizerMass).toFixed(3))+" ")],2):n("td",{key:a,staticClass:"text-center",class:{"pr-0":i===t.totalIonConcentration.length-1}},[t._v(" "+t._s((e*t.totalFertilizerMass).toFixed(3))+" ")])]}))],2)],2)]},proxy:!0}])}),n("div",{staticClass:"subtitle-2 mt-2"},[t._v(" Соотношение элементов "),n("v-tooltip",{attrs:{bottom:"","max-width":"400"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-icon",t._g({},a),[t._v(" mdi-help-circle-outline ")])]}}])},[t._v(" Учитывает соотношение только между интересующими аквариумиста элементами. Такие элементы как сера, хлор, водород, кислород и т.д. в данном соотношении не участвуют. ")]),t._v(": ")],1),n("div",t._l(t.totalIonConcentration,(function(e,a){return n("span",{key:a,staticClass:"mr-2"},[t._v(" "+t._s(t.convertIonName(a))+" ("+t._s(e?(t.convertIonRatio(a)*e/t.totalUsefulConcentration).toFixed(5):"???")+" %) ")])})),0)],1)},I=[],k=(n("a9e3"),{name:"ElementsDryTable",props:{totalIonConcentration:{type:Object,default:function(){}},fertilizerMass:{type:Object,default:function(){}},totalFertilizerMass:{type:Number,default:0}},data:function(){return{isConcentrationPercent:!1,isConvertion:!1}},computed:{totalUsefulConcentration:function(){var t=this,e=0;return Object.entries(this.totalIonConcentration).forEach((function(n){var a=Object(s["a"])(n,2),i=a[0],o=a[1];e+=t.convertIonRatio(i)*o})),e}},methods:{convertIonRatio:h["c"],convertIonName:h["b"],countPercent:h["d"]}}),S=k,j=n("132d"),E=n("3a2f"),N=Object(b["a"])(S,y,I,!1,null,"5eadf262",null),V=N.exports;C()(N,{VIcon:j["a"],VSimpleTable:_["a"],VSwitch:O["a"],VTooltip:E["a"]});var R={name:"Recipe",components:{ElementsTable:w,ElementsDryTable:V},data:function(){var t=this;return{FORMULAS:l["a"],RECIPES:u,OPPOSITE:h["a"],reagents:[],recipeExampleChosen:null,volume:null,tankVolume:null,mass:{},solute:{},name:"",note:null,isShared:!1,isWater:!0,isShowConcentration:!1,rulesReagent:[function(t){return t.length>0||"Выберите реагент"}],rulesMass:{isExist:function(){return function(t){return!!t||"Введите массу"}}},rulesVolume:{isExist:function(){return function(t){return!!t||"Введите объем удобрения"}}},rulesName:[function(t){return!!t||"Введите название"},function(){return!t.isExist||"Рецепт с таким названием уже существует"}]}},mounted:function(){var t=this.$router.currentRoute.query.share;if(t)Object.assign(this.$data,JSON.parse(decodeURIComponent(t))[0]),this.isShared=!0;else if(!this.isCreate){var e=Object(r["a"])({},this.recipes[this.recipeIndex]);Object.assign(this.$data,e),this.isWater=e.volume>0}},computed:Object(r["a"])(Object(r["a"])({},Object(d["d"])(["tanks","recipes"])),{},{isCreate:function(){return"create"===this.$route.params.id},recipeIndex:function(){return this.$route.params.id},formulas:function(){var t=[];return Object.entries(this.FORMULAS).forEach((function(e){var n=Object(s["a"])(e,2),a=n[0],i=n[1];t.push({text:"".concat(i.name," - ").concat(a),name:"".concat(i.name),value:a})})),t.sort((function(t,e){return t.text.localeCompare(e.text)})),t},recipesExamples:function(){var t=[];return this.RECIPES.forEach((function(e){t.push(e.name)})),t.sort((function(t,e){return t.localeCompare(e)})),t},totalFertilizerMass:function(){return Object.values(this.mass).reduce((function(t,e){return t+e}))},concentration:function(){var t=this,e={};return this.reagents.length>0&&Object.keys(this.mass).length>0&&this.reagents.forEach((function(n){e[n]={};var a=l["a"][n].ions;Object.entries(a).forEach((function(a){var i=Object(s["a"])(a,2),o=i[0],r=i[1];if(r.isNeeded){var c=1;t.volume?c=1/(t.volume/1e3):t.volume||(c=1/t.totalFertilizerMass),e[n][o]=t.mass[n]*t.countPercent(n)[o]*c}}))})),e},totalIonConcentration:function(){return this.countTotalIonConcentration(this.concentration)},isExist:function(){var t=this,e=this.recipes.map((function(t){return t.name})),n=e.findIndex((function(e){return e===t.name})),a=-1!==n,i=n===+this.recipeIndex;return a&&!i}}),watch:{reagents:function(){var t=this;if(!this.name&&1===this.reagents.length){var e=this.reagents[0];this.name=this.FORMULAS[e].name}var n={};this.reagents.forEach((function(e){var a=t.FORMULAS[e].ions;n[e]={},Object.entries(a).forEach((function(t){var a=Object(s["a"])(t,2),i=a[0],o=a[1];o.isNeeded&&(n[e][i]=0)}))})),this.solute=Object(r["a"])({},n);var a={};this.reagents.forEach((function(e){e in t.mass?a[e]=t.mass[e]:a[e]=0})),this.mass=Object(r["a"])({},a),this.volume&&this.countDose()},recipeExampleChosen:function(){var t=this,e=this.RECIPES.find((function(e){return e.name===t.recipeExampleChosen}));e&&(this.reagents=Object.keys(e.reagents),this.name=e.name,this.note=e.note,this.volume=e.volume,this.tankVolume=e.tankVolume,Object.entries(e.reagents).forEach((function(e){var n=Object(s["a"])(e,2),a=n[0],i=n[1];t.mass[a]=i})),this.isWater=e.volume>0)},tankVolume:function(){this.volume&&this.countDose()}},methods:Object(r["a"])(Object(r["a"])({},Object(d["c"])(["RECIPE_ADD","RECIPE_REMOVE","RECIPE_EDIT","SNACKBAR_SHOW"])),{},{countTotalIonConcentration:h["f"],countTotalIonDose:h["g"],countTotalDose:h["e"],isConcentration:h["h"],countPercent:h["d"],convertIonName:h["b"],convertIonRatio:h["c"],countDose:function(){var t=this;this.reagents.forEach((function(e){var n=l["a"][e].ions,a={};Object.entries(n).forEach((function(n){var i=Object(s["a"])(n,2),o=i[0],r=i[1];if(r.isNeeded){var l=t.mass[e]/t.volume/t.tankVolume*(t.countPercent(e)[o]*t.convertIonRatio(o)*1e3);l=parseFloat(l.toFixed(5)),a[o]=l,c["a"].set(t.solute,e,a)}}))}))},setIsWater:function(t){this.isWater=t,this.volume=null,this.tankVolume=null},showComponents:function(t){var e=[];return Object.entries(t).forEach((function(t){var n=Object(s["a"])(t,2),a=n[0],i=n[1];e.push("".concat(a,": ").concat((100*i).toFixed(1),"%"))})),e.join(" ")},inputMass:function(t,e){var n=parseFloat(t);c["a"].set(this.mass,e,+n?n:""),this.tankVolume&&+n&&this.countDose()},inputVolume:function(t){this.volume=parseFloat(t),this.tankVolume&&+this.volume&&this.countDose()},inputIonDose:function(t,e,n){var a=this,i={},o={};Object.keys(this.solute[e]).forEach((function(t){o[t]=a.convertIonRatio(t)})),Object.keys(this.solute[e]).forEach((function(s){var r=parseFloat(t);s!==n&&(o[n]>1?r/=o[n]:r*=o[s],r*=a.countPercent(e)[s]/a.countPercent(e)[n]),i[s]=parseFloat(r)?parseFloat(r.toFixed(4)):0,c["a"].set(a.solute,e,i)}));var s,l=Object(r["a"])({},this.mass);s=this.solute[e][n]?this.solute[e][n]*this.tankVolume*this.volume/1e3/this.countPercent(e)[n]/this.convertIonRatio(n):0,l[e]=parseFloat(s.toFixed(3)),this.mass=Object(r["a"])({},l)},fertilizerMassHint:function(t){var e=this,n="";return Object.keys(this.FORMULAS[t].ions).forEach((function(a){var i=e.FORMULAS[t].ions[a];i.isNeeded&&(a!==e.convertIonName(a)?n+="".concat(a,"/").concat(e.convertIonName(a),":\n            ").concat(e.concentration[t][a].toFixed(2),"/").concat((e.convertIonRatio(a)*e.concentration[t][a]).toFixed(2)," г/л"):n+="".concat(a,":  ").concat(e.concentration[t][a].toFixed(3)," г/л "))})),n},addRecipe:function(){this.$refs.recipeForm.validate()&&(this.RECIPE_ADD({name:this.name,note:this.note,volume:this.volume,reagents:Object(o["a"])(this.reagents),mass:Object(r["a"])({},this.mass),concentration:Object(r["a"])({},this.concentration),tankVolume:this.tankVolume}),this.SNACKBAR_SHOW("Рецепт добавлен"),this.$router.push("/recipes"))},editRecipe:function(){this.$refs.recipeForm.validate()&&(this.RECIPE_EDIT({index:this.recipeIndex,recipe:{name:this.name,note:this.note,volume:this.volume,tankVolume:this.tankVolume,reagents:Object(o["a"])(this.reagents),mass:Object(r["a"])({},this.mass),concentration:Object(r["a"])({},this.concentration)}}),this.SNACKBAR_SHOW("Рецепт изменен"),this.$router.push("/recipes"))},removeRecipe:function(){this.RECIPE_REMOVE(this.recipeIndex),this.SNACKBAR_SHOW("Рецепт удален"),this.$router.push("/recipes")}})},F=R,H=(n("6abf"),n("8336")),$=n("62ad"),P=n("2b5d"),A=n("a523"),M=n("ce7e"),B=n("0789"),K=n("4bd4"),D=n("67b6"),T=n("43a6"),q=n("0fd9"),z=n("b974"),W=n("8654"),L=n("a844"),G=Object(b["a"])(F,a,i,!1,null,null,null);e["default"]=G.exports;C()(G,{VBtn:H["a"],VCol:$["a"],VCombobox:P["a"],VContainer:A["a"],VDivider:M["a"],VExpandTransition:B["a"],VForm:K["a"],VIcon:j["a"],VRadio:D["a"],VRadioGroup:T["a"],VRow:q["a"],VSelect:z["a"],VTextField:W["a"],VTextarea:L["a"],VTooltip:E["a"]})},"2c64":function(t,e,n){},"3d86":function(t,e,n){},"43a6":function(t,e,n){"use strict";var a=n("5530"),i=(n("a9e3"),n("ec29"),n("3d86"),n("c37a")),o=n("604c"),s=n("8547"),r=n("58df"),c=Object(r["a"])(s["a"],o["a"],i["a"]);e["a"]=c.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},i["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel:function(){var t=i["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:o["a"].options.methods.onClick}})},"4bd4":function(t,e,n){"use strict";var a=n("5530"),i=(n("caad"),n("2532"),n("07ac"),n("4de4"),n("159b"),n("7db0"),n("58df")),o=n("7e2b"),s=n("3206");e["a"]=Object(i["a"])(o["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},a={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(a.valid=n(t)))})):a.valid=n(t),a},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"67b6":function(t,e,n){"use strict";var a=n("15fd"),i=n("5530"),o=(n("b0c0"),n("2c64"),n("ba87")),s=n("9d26"),r=n("c37a"),c=n("7e2b"),l=n("a9ad"),u=n("4e82"),h=n("5311"),d=n("7560"),v=n("fe09"),m=n("80d2"),p=n("58df"),f=n("d9f7"),b=["title"],g=Object(p["a"])(c["a"],l["a"],h["a"],Object(u["a"])("radioGroup"),d["a"]);e["a"]=g.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return v["a"].options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return r["a"].options.computed.computedId.call(this)},hasLabel:r["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return v["a"].options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(t){return v["a"].options.methods.genInput.call(this,"radio",t)},genLabel:function(){return this.hasLabel?this.$createElement(o["a"],{on:{click:v["b"]},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(m["o"])(this,"label")||this.label):null},genRadio:function(){var t=this.attrs$,e=(t.title,Object(a["a"])(t,b));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(i["a"])({name:this.computedName,value:this.value},e)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(t){var e={staticClass:"v-radio",class:this.classes,on:Object(f["b"])({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",e,[this.genRadio(),this.genLabel()])}})},"6abf":function(t,e,n){"use strict";n("736d")},"736d":function(t,e,n){},"8b37":function(t,e,n){},"9d01":function(t,e,n){},a844:function(t,e,n){"use strict";var a=n("5530"),i=(n("a9e3"),n("1681"),n("8654")),o=n("58df"),s=Object(o["a"])(i["a"]);e["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(a["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b73d:function(t,e,n){"use strict";var a=n("15fd"),i=n("5530"),o=(n("0481"),n("ec29"),n("9d01"),n("fe09")),s=n("c37a"),r=n("c3f0"),c=n("0789"),l=n("490a"),u=n("80d2"),h=["title"];e["a"]=o["a"].extend({name:"v-switch",directives:{Touch:r["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(a["a"])(t,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(c["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(l["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===u["s"].left&&this.isActive||t.keyCode===u["s"].right&&!this.isActive)&&this.onChange()}}})}}]);
//# sourceMappingURL=chunk-759c9028.df81be16.js.map