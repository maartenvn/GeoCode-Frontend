(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-689bea0c"],{"0393":function(e,t,n){"use strict";var a=n("5530"),o=(n("0481"),n("210b"),n("604c")),i=n("d9bd");t["a"]=o["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(i["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(i["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),a=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(a)}}})},"210b":function(e,t,n){},"2d61":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"container--small"},[e.reports.isLoading()?[n("v-skeleton-loader",{attrs:{type:"heading"}}),n("v-skeleton-loader",{attrs:{type:"table",dense:""}})]:e.reports.isSuccess()?[n("v-row",{attrs:{"no-gutters":"",justify:"space-between"}},[n("v-col",{attrs:{cols:"auto","align-self":"center"}},[n("h2",[e._v("Reports for "+e._s(e.location.data.name))])]),n("v-col",{attrs:{cols:"auto","align-self":"center"}},[e.location.data.active?n("v-btn",{staticClass:"mx-2",attrs:{color:"warning",dark:"",depressed:""},on:{click:function(t){return e.setLocationActive(!1)}}},[e._v(" make inactive ")]):n("v-btn",{staticClass:"mx-2",attrs:{color:"primary",dark:"",depressed:""},on:{click:function(t){return e.setLocationActive(!0)}}},[e._v(" make active ")]),n("v-btn",{staticClass:"mx-2",attrs:{color:"error",dark:"",depressed:"",loading:e.loading},on:{click:function(t){return e.openConfirmDelete(e.location.data)}}},[e._v(" delete ")])],1)],1),[n("div",[n("v-expansion-panels",{staticClass:"mt-3",attrs:{flat:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v("Description")]),n("v-expansion-panel-content",[n("p",{staticClass:"mt-2 text--secondary",domProps:{innerHTML:e._s(e.location.data.description)}})])],1)],1)],1)],n("v-divider",{staticClass:"mb-3"}),n("div",{staticClass:"section__title"},[e._v("Reports")]),n("v-data-table",{attrs:{headers:e.headers,items:e.reports.data},scopedSlots:e._u([{key:"item.createdAt",fn:function(t){var n=t.item;return[e._v(" "+e._s(e.createdAtFormat(n.createdAt))+" ")]}},{key:"item.action",fn:function(t){var a=t.item;return[n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(t){return e.openReport(a)}}},[e._v(" Show details "),n("v-icon",{attrs:{right:""}},[e._v("mdi-arrow-right")])],1)]}},{key:"item.resolved",fn:function(t){var a=t.item;return[a.resolved?[n("v-chip",{attrs:{color:"success","text-color":"white",small:""}},[e._v(" Resolved ")])]:[n("v-chip",{attrs:{color:"error","text-color":"white",small:""}},[e._v(" Unresolved ")])]]}}])})]:e._e()],2)},o=[],i=n("d4ec"),s=n("bee2"),c=n("262e"),r=n("2caf"),l=(n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("9ab4")),d=n("60a3"),u=n("da05"),p=n("cf57"),v=n("e43f"),h=n("9207"),b=n("8cd5"),f=function(e){Object(c["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.panel=[],e.loading=!1,e.headers=[{text:"Creator",value:"creator.username"},{text:"Created at",value:"createdAt"},{text:"",value:"resolved"},{text:"",value:"action",sortable:!1,align:"end"}],e.location=v["a"].handle(p["a"].get(e.secretId),{id:"location",style:"SECTION",displayFullpage:!0}),e.reports=v["a"].handle(u["a"].getLocationReports(e.secretId),{id:"locationReports",style:"SECTION",displayFullpage:!0}),e}return Object(s["a"])(a,[{key:"createdAtFormat",value:function(e){var t=new Date(e);return t.toLocaleString()}},{key:"setLocationActive",value:function(e){var t=this;p["a"].update(this.secretId,{active:e}).then((function(){return t.location.requireData().active=e})).catch((function(e){b["a"].handle(e,{id:"locationActivate",style:"SNACKBAR"})}))}},{key:"openConfirmDelete",value:function(){var e=this;this.$store.dispatch("modal/open",{component:h["a"],componentPayload:{message:"Are you sure you want to delete '".concat(this.location.requireData().name,"?'"),action:function(t){t.$set(t,"loading",!0),p["a"].delete(e.secretId).then((function(){e.$store.dispatch("modal/close"),e.$router.push({name:"Admin Reports List"}),e.$store.dispatch("snackbar/open",{message:"Location has been deleted",color:"success"})})).catch((function(e){b["a"].handle(e,{style:"SNACKBAR",id:"locationDelete"})})).finally((function(){t.$set(t,"loading",!1)}))}}})}},{key:"openReport",value:function(e){this.$store.dispatch("modal/open",{component:function(){return n.e("chunk-dfaf80b0").then(n.bind(null,"7493"))},componentPayload:{report:e}})}}]),a}(d["e"]);Object(l["a"])([Object(d["c"])()],f.prototype,"secretId",void 0),f=Object(l["a"])([d["a"]],f);var O=f,j=O,x=n("2877"),y=n("6544"),m=n.n(y),g=n("8336"),k=n("cc20"),C=n("62ad"),A=n("a523"),P=n("8fea"),I=n("ce7e"),_=n("cd55"),w=n("49e2"),B=n("c865"),E=n("0393"),S=n("132d"),V=n("0fd9"),R=n("3129"),$=Object(x["a"])(j,a,o,!1,null,null,null);t["default"]=$.exports;m()($,{VBtn:g["a"],VChip:k["a"],VCol:C["a"],VContainer:A["a"],VDataTable:P["a"],VDivider:I["a"],VExpansionPanel:_["a"],VExpansionPanelContent:w["a"],VExpansionPanelHeader:B["a"],VExpansionPanels:E["a"],VIcon:S["a"],VRow:V["a"],VSkeletonLoader:R["a"]})},"49e2":function(e,t,n){"use strict";var a=n("0789"),o=n("9d65"),i=n("a9ad"),s=n("3206"),c=n("80d2"),r=n("58df"),l=Object(r["a"])(o["a"],i["a"],Object(s["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["a"]=l.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(a["a"],this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(c["s"])(t))])]})))}})},9207:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v(" Are you sure? "),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:e.close}},[n("v-icon",[e._v("mdi-close")])],1)],1),n("v-card-text",{domProps:{innerHTML:e._s(e.payload.message)}}),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"error",text:""},on:{click:e.close}},[e._v(" Cancel ")]),n("v-btn",{attrs:{color:"primary",depressed:"",disabled:e.loading,loading:e.loading},on:{click:e.confirm}},[e._v(" Confirm ")])],1)],1)},o=[],i=n("d4ec"),s=n("bee2"),c=n("262e"),r=n("2caf"),l=n("9ab4"),d=n("60a3"),u=function(e){Object(c["a"])(n,e);var t=Object(r["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.loading=!1,e}return Object(s["a"])(n,[{key:"close",value:function(){this.$store.dispatch("modal/close")}},{key:"confirm",value:function(){this.payload.action(this)}}]),n}(d["e"]);Object(l["a"])([Object(d["c"])()],u.prototype,"payload",void 0),u=Object(l["a"])([d["a"]],u);var p=u,v=p,h=n("2877"),b=n("6544"),f=n.n(b),O=n("8336"),j=n("b0af"),x=n("99d9"),y=n("132d"),m=n("2fa4"),g=Object(h["a"])(v,a,o,!1,null,null,null);t["a"]=g.exports;f()(g,{VBtn:O["a"],VCard:j["a"],VCardActions:x["a"],VCardText:x["c"],VCardTitle:x["d"],VIcon:y["a"],VSpacer:m["a"]})},c865:function(e,t,n){"use strict";var a=n("5530"),o=n("0789"),i=n("9d26"),s=n("a9ad"),c=n("3206"),r=n("5607"),l=n("80d2"),d=n("58df"),u=Object(d["a"])(s["a"],Object(c["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["a"]=u.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(l["s"])(this,"actions")||[this.$createElement(i["a"],this.expandIcon)];return this.$createElement(o["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:Object(a["a"])(Object(a["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[Object(l["s"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,t,n){"use strict";var a=n("5530"),o=n("4e82"),i=n("3206"),s=n("80d2"),c=n("58df");t["a"]=Object(c["a"])(Object(o["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(i["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(a["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(s["s"])(this))}})},cf57:function(e,t,n){"use strict";var a=n("d4ec"),o=n("bee2"),i=n("262e"),s=n("2caf"),c=n("9ab4"),r=n("d70b"),l=n("c1c4"),d=n("3dcf"),u=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(o["a"])(n,[{key:"get",value:function(e){return{}}},{key:"getAll",value:function(){return{}}},{key:"getStatistics",value:function(e){return{}}},{key:"getVisits",value:function(e){return{}}},{key:"getLocationByVisitSecret",value:function(e){return{}}},{key:"visitLocation",value:function(e){return{}}},{key:"create",value:function(e){return{}}},{key:"delete",value:function(e){return{}}},{key:"update",value:function(e,t){return{}}}]),n}(l["EchoService"]);Object(c["a"])([Object(l["GET"])("/locations/{secretId}"),Object(c["b"])(0,Object(l["Path"])("secretId"))],u.prototype,"get",null),Object(c["a"])([Object(l["GET"])("/locations")],u.prototype,"getAll",null),Object(c["a"])([Object(l["GET"])("/locations/{secretId}/statistics"),Object(c["b"])(0,Object(l["Path"])("secretId"))],u.prototype,"getStatistics",null),Object(c["a"])([Object(l["GET"])("/locations/{secretId}/visits"),Object(c["b"])(0,Object(l["Path"])("secretId"))],u.prototype,"getVisits",null),Object(c["a"])([Object(l["GET"])("/locations/visits/{visitSecret}"),Object(c["b"])(0,Object(l["Path"])("visitSecret"))],u.prototype,"getLocationByVisitSecret",null),Object(c["a"])([Object(l["POST"])("/locations/visits/{visitSecret}"),Object(c["b"])(0,Object(l["Path"])("visitSecret"))],u.prototype,"visitLocation",null),Object(c["a"])([Object(l["POST"])("/locations"),Object(c["b"])(0,Object(l["Body"])())],u.prototype,"create",null),Object(c["a"])([Object(l["DELETE"])("/locations/{secretId}"),Object(c["b"])(0,Object(l["Path"])("secretId"))],u.prototype,"delete",null),Object(c["a"])([Object(l["PATCH"])("/locations/{secretId}"),Object(c["b"])(0,Object(l["Path"])("secretId")),Object(c["b"])(1,Object(l["Body"])())],u.prototype,"update",null),t["a"]=(new l["EchoServiceBuilder"]).setBaseUrl(r["a"].BACKEND.URL).addInterceptor(new d["a"]).build(u)},da05:function(e,t,n){"use strict";var a=n("d4ec"),o=n("bee2"),i=n("262e"),s=n("2caf"),c=n("9ab4"),r=n("d70b"),l=n("c1c4"),d=n("3dcf"),u=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(o["a"])(n,[{key:"getAll",value:function(){return{}}},{key:"getReport",value:function(e){return{}}},{key:"getLocationReports",value:function(e){return{}}},{key:"getStats",value:function(){return{}}}]),n}(l["EchoService"]);Object(c["a"])([Object(l["GET"])("/reports")],u.prototype,"getAll",null),Object(c["a"])([Object(l["GET"])("/reports/{reportId}"),Object(c["b"])(0,Object(l["Path"])("reportId"))],u.prototype,"getReport",null),Object(c["a"])([Object(l["GET"])("locations/{secretId}/reports"),Object(c["b"])(0,Object(l["Path"])("secretId"))],u.prototype,"getLocationReports",null),Object(c["a"])([Object(l["GET"])("/statistics")],u.prototype,"getStats",null),t["a"]=(new l["EchoServiceBuilder"]).setBaseUrl(r["a"].BACKEND.URL).addInterceptor(new d["a"]).build(u)}}]);
//# sourceMappingURL=chunk-689bea0c.6686d7df.js.map