(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfaf80b0"],{"29ca":function(e,t,a){"use strict";var r=a("d4ec"),c=a("bee2"),o=a("262e"),n=a("2caf"),i=a("9ab4"),l=a("c1c4"),d=a("d70b"),s=a("3dcf"),u=function(e){Object(o["a"])(a,e);var t=Object(n["a"])(a);function a(){return Object(r["a"])(this,a),t.apply(this,arguments)}return Object(c["a"])(a,[{key:"create",value:function(e,t){return{}}},{key:"uploadImage",value:function(e){return{}}},{key:"update",value:function(e,t){return{}}},{key:"getReportedLocations",value:function(){return{}}}]),a}(l["EchoService"]);Object(i["a"])([Object(l["POST"])("/locations/{secretId}/reports"),Object(i["b"])(0,Object(l["Path"])("secretId")),Object(i["b"])(1,Object(l["Body"])())],u.prototype,"create",null),Object(i["a"])([Object(l["FormMultipart"])(),Object(l["POST"])("/reports/image"),Object(i["b"])(0,Object(l["FormField"])("image"))],u.prototype,"uploadImage",null),Object(i["a"])([Object(l["PATCH"])("/reports/{reportId}"),Object(i["b"])(0,Object(l["Path"])("reportId")),Object(i["b"])(1,Object(l["Body"])())],u.prototype,"update",null),Object(i["a"])([Object(l["GET"])("/reports/locations")],u.prototype,"getReportedLocations",null),t["a"]=(new l["EchoServiceBuilder"]).setBaseUrl(d["a"].BACKEND.URL).addInterceptor(new s["a"]).build(u)},"3df8":function(e,t,a){"use strict";var r=a("e33b"),c=a.n(r);c.a},7493:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[[a("v-card-title",[e._v(" Report for "+e._s(e.payload.report.location.name)+" "),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:e.close}},[a("v-icon",[e._v("mdi-close")])],1)],1),a("v-card-text",[a("p",[e._v("Reason: "+e._s(e.payload.report.reason))]),a("p",[e._v(e._s(e.payload.report.message))]),a("img",{attrs:{src:e.getImageURL(e.payload.report)}})]),a("v-card-actions",[a("v-spacer"),e.payload.report.resolved?a("v-btn",{attrs:{dark:"",depressed:"",color:"warning"},on:{click:function(t){return e.resolveReport(!1)}}},[e._v(" Unresolve ")]):a("v-btn",{attrs:{dark:"",depressed:"",color:"primary"},on:{click:function(t){return e.resolveReport(!0)}}},[e._v(" Resolve ")])],1)]],2)},c=[],o=a("d4ec"),n=a("bee2"),i=a("262e"),l=a("2caf"),d=a("9ab4"),s=a("60a3"),u=a("a336"),p=a("29ca"),b=a("8cd5"),v=function(e){Object(i["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(n["a"])(a,[{key:"getImageURL",value:function(e){return null!=e.image?u["a"].getById(e.image.id):""}},{key:"resolveReport",value:function(e){var t=this;p["a"].update(this.payload.report.id,{resolved:e}).then((function(){t.payload.report.resolved=e,t.$store.dispatch("modal/close")})).catch((function(e){b["a"].handle(e,{id:"reportModal",style:"SNACKBAR"})}))}},{key:"close",value:function(){this.$store.dispatch("modal/close")}}]),a}(s["e"]);Object(d["a"])([Object(s["c"])()],v.prototype,"payload",void 0),v=Object(d["a"])([s["a"]],v);var f=v,O=f,j=(a("3df8"),a("2877")),y=a("6544"),h=a.n(y),m=a("8336"),g=a("b0af"),k=a("99d9"),R=a("132d"),I=a("2fa4"),_=Object(j["a"])(O,r,c,!1,null,null,null);t["default"]=_.exports;h()(_,{VBtn:m["a"],VCard:g["a"],VCardActions:k["a"],VCardText:k["c"],VCardTitle:k["d"],VIcon:R["a"],VSpacer:I["a"]})},a336:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("99af");var r=a("d4ec"),c=a("bee2"),o=a("d70b"),n=function(){function e(){Object(r["a"])(this,e)}return Object(c["a"])(e,null,[{key:"getById",value:function(e){return e?"".concat(o["a"].BACKEND.URL,"images/").concat(e):""}}]),e}()},e33b:function(e,t,a){}}]);
//# sourceMappingURL=chunk-dfaf80b0.7c9b0379.js.map