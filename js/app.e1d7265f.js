(function(e){function t(t){for(var a,r,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-08ea1871":"63c58afe","chunk-234af2bd":"115ebd13","chunk-2c3c92b1":"1eeba772","chunk-2d0c1517":"61917a49","chunk-2d0e95df":"5c59c888","chunk-579e1ea3":"d6fb5d0c","chunk-0e4d91bb":"f6acd9fb","chunk-20a6f7c1":"c03e8f68","chunk-a4cc3092":"0860ab36","chunk-c4c39c8a":"ecc0aae8","chunk-2d0d6d35":"7e7a91ed","chunk-4ee74096":"19a04709","chunk-5942a10f":"14d230e5","chunk-5b589e40":"4bf2b003","chunk-65b91a78":"6349542a","chunk-5be891c4":"062af90d","chunk-9f45d340":"8f20219e","chunk-66fea624":"f018229b","chunk-3b2be2f1":"b89f9b6a","chunk-56def478":"b14a8051","chunk-72a8e734":"db6ce3bc","chunk-60f3eee6":"aa38a621","chunk-6509c778":"5365bf10","chunk-689bea0c":"b566e75e","chunk-891dd1ce":"913cf3c3","chunk-8943eb34":"7af87b69","chunk-586a2764":"920c392a","chunk-6363daba":"e43fd41e","chunk-683ca04c":"bf0b5902","chunk-74160b0e":"b40448d7","chunk-2d20780f":"53ec74e0","chunk-3c573208":"e64cebd9","chunk-7cec210e":"9dbfd401","chunk-7cece081":"d232ce35","chunk-f5bcabf0":"b7753f69","chunk-69e658d1":"de2b596d","chunk-c952e120":"5e9c2ba7","chunk-4371b888":"86f0141f","chunk-d5a42054":"c4d026e2","chunk-23dec377":"5e7c6c26"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-08ea1871":1,"chunk-234af2bd":1,"chunk-2c3c92b1":1,"chunk-579e1ea3":1,"chunk-0e4d91bb":1,"chunk-20a6f7c1":1,"chunk-a4cc3092":1,"chunk-c4c39c8a":1,"chunk-5942a10f":1,"chunk-5b589e40":1,"chunk-65b91a78":1,"chunk-5be891c4":1,"chunk-9f45d340":1,"chunk-66fea624":1,"chunk-3b2be2f1":1,"chunk-72a8e734":1,"chunk-689bea0c":1,"chunk-586a2764":1,"chunk-6363daba":1,"chunk-683ca04c":1,"chunk-3c573208":1,"chunk-7cec210e":1,"chunk-7cece081":1,"chunk-f5bcabf0":1,"chunk-c952e120":1,"chunk-4371b888":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-08ea1871":"869cd909","chunk-234af2bd":"29911086","chunk-2c3c92b1":"007ae2f5","chunk-2d0c1517":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-579e1ea3":"976b6bb8","chunk-0e4d91bb":"06aa44e1","chunk-20a6f7c1":"21fe44c6","chunk-a4cc3092":"51ad7933","chunk-c4c39c8a":"72483aa7","chunk-2d0d6d35":"31d6cfe0","chunk-4ee74096":"31d6cfe0","chunk-5942a10f":"17e432c6","chunk-5b589e40":"076ea886","chunk-65b91a78":"e3455783","chunk-5be891c4":"c3543d9d","chunk-9f45d340":"468699d1","chunk-66fea624":"fb74a899","chunk-3b2be2f1":"bed3c0ca","chunk-56def478":"31d6cfe0","chunk-72a8e734":"1341eb4b","chunk-60f3eee6":"31d6cfe0","chunk-6509c778":"31d6cfe0","chunk-689bea0c":"b6b92317","chunk-891dd1ce":"31d6cfe0","chunk-8943eb34":"31d6cfe0","chunk-586a2764":"70db6485","chunk-6363daba":"f905bb39","chunk-683ca04c":"f9902281","chunk-74160b0e":"31d6cfe0","chunk-2d20780f":"31d6cfe0","chunk-3c573208":"eac8c71b","chunk-7cec210e":"ca6df252","chunk-7cece081":"ca6df252","chunk-f5bcabf0":"6ad0b887","chunk-69e658d1":"31d6cfe0","chunk-c952e120":"f48fecd9","chunk-4371b888":"a66b6c7a","chunk-d5a42054":"31d6cfe0","chunk-23dec377":"31d6cfe0"}[e]+".css",c=s.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"07e8":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("2fe1");function r(e){return Object(a["a"])((function(t,n){void 0===t.computed&&(t.computed={}),t.computed[n]=function(){return this.$store.getters[e]}}))}},"0905":function(e,t,n){"use strict";var a=n("2a6d"),r=n.n(a);r.a},"1cec":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.displayFullPage&&e.renderError?n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[e.renderError?n(e.errorComponent,{tag:"component",attrs:{payload:e.errorComponentPayload}}):e._e()],1)],1)],1):n("div",[e.renderError?n(e.errorComponent,{tag:"component",attrs:{payload:e.errorComponentPayload}}):e._e()],1)],1)},r=[],c=n("d4ec"),o=n("bee2"),i=n("262e"),s=n("2caf"),u=n("9ab4"),l=n("60a3"),d=n("44d1"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{class:"error-card "+(e.payload.options.displayFullpage?"text-center":"")},[e.payload.options.displayFullpage?a("div",{staticClass:"error-card__image"},[a("v-img",{attrs:{height:"100%",src:n("6dac"),contain:""}})],1):e._e(),a("v-card-title",{staticClass:"error-card__message"},[e._v(" "+e._s(e.payload.error.message)+" ")]),a("v-card-text",{staticClass:"error-card__description"},[e._v(" "+e._s(e.payload.description)+" ")]),a("v-card-actions",{staticClass:"error-card__actions"},[a("v-btn",{attrs:{color:"primary",depressed:"",to:"/"}},[e._v(" Home Page "),a("v-icon",{attrs:{right:""}},[e._v("mdi-home")])],1),a("v-btn",{attrs:{depressed:""},on:{click:function(t){return e.reloadRoute(e.$router)}}},[e._v(" Refresh "),a("v-icon",{attrs:{right:""}},[e._v("mdi-refresh")])],1)],1)],1)},b=[],h=n("da70"),p=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(o["a"])(n,[{key:"reloadRoute",value:function(){h["a"].reload(this.$router)}}]),n}(l["e"]);Object(u["a"])([Object(l["c"])()],p.prototype,"payload",void 0),p=Object(u["a"])([l["a"]],p);var m=p,v=m,k=(n("0905"),n("2877")),g=n("6544"),O=n.n(g),y=n("8336"),j=n("b0af"),_=n("99d9"),E=n("132d"),w=n("adda"),C=Object(k["a"])(v,f,b,!1,null,"38e1b9ec",null),T=C.exports;O()(C,{VBtn:y["a"],VCard:j["a"],VCardActions:_["a"],VCardText:_["c"],VCardTitle:_["d"],VIcon:E["a"],VImg:w["a"]});var P=n("7149"),V=n("8cd5"),L=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.renderError=!1,e}return Object(o["a"])(n,[{key:"created",value:function(){var e=this;d["a"].$on("error",(function(t,n){(n.id===e.errorId||e.displayFullPage&&n.displayFullpage)&&("CARD"===n.style?e.errorComponent=T:"SECTION"===n.style&&(e.errorComponent=P["a"]),t.message=V["a"].getCustomMessage(t,n),e.errorComponentPayload={error:t,description:V["a"].getCustomDescription(t,n),options:n},e.renderError=!0)})),d["a"].$on("error-clear",(function(){e.renderError=!1}))}}]),n}(l["e"]);Object(u["a"])([Object(l["c"])()],L.prototype,"errorId",void 0),Object(u["a"])([Object(l["c"])({default:!1})],L.prototype,"displayFullPage",void 0),L=Object(u["a"])([l["a"]],L);var x=L,S=x,A=n("62ad"),$=n("a523"),I=n("0fd9"),D=Object(k["a"])(S,a,r,!1,null,null,null);t["a"]=D.exports;O()(D,{VCol:A["a"],VContainer:$["a"],VRow:I["a"]})},"2a6d":function(e,t,n){},"38ed":function(e,t,n){},"3dcf":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("caad"),n("2532");var a=n("d4ec"),r=n("bee2"),c=n("6f0d");function o(){return Object(c["setupCache"])({maxAge:9e5})}var i=o(),s=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"onRequest",value:function(e){var t,n,a,r;return e.withCredentials=!0,((null===(t=e.url)||void 0===t?void 0:t.includes("logout"))||"DELETE"===(null===(n=e.method)||void 0===n?void 0:n.toLowerCase())||"POST"===(null===(a=e.method)||void 0===a?void 0:a.toLowerCase())||"PATCH"===(null===(r=e.method)||void 0===r?void 0:r.toLowerCase()))&&(i=o()),e.adapter=i.adapter,e}},{key:"onResponse",value:function(e){return e}},{key:"onError",value:function(e){return e}}]),e}()},"44d1":function(e,t,n){"use strict";var a=n("2b0e");t["a"]=new a["default"]},"46b7":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("7694"),r=n.n(a);r.a},"640e":function(e,t,n){"use strict";var a=n("b9b7"),r=n.n(a);r.a},"6dac":function(e,t,n){e.exports=n.p+"img/error.55603d7a.svg"},7149:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"error-section "+(e.payload.options.displayFullpage?"text-center":"")},[e.payload.options.displayFullpage?a("div",{staticClass:"error-section__image"},[a("v-img",{attrs:{height:"100%",src:n("6dac"),contain:""}})],1):e._e(),a("div",{staticClass:"error-section__message"},[e._v(" "+e._s(e.payload.error.message)+" ")]),a("div",{staticClass:"error-section__description"},[e._v(" "+e._s(e.payload.description)+" ")]),a("div",{staticClass:"error-section__actions"},[a("v-btn",{attrs:{color:"primary",depressed:"",to:"/"}},[e._v(" Home Page "),a("v-icon",{attrs:{right:""}},[e._v("mdi-home")])],1),a("v-btn",{attrs:{depressed:""},on:{click:function(t){return e.reloadRoute()}}},[e._v(" Refresh "),a("v-icon",{attrs:{right:""}},[e._v("mdi-refresh")])],1)],1)])},r=[],c=n("d4ec"),o=n("bee2"),i=n("262e"),s=n("2caf"),u=n("9ab4"),l=n("60a3"),d=n("da70"),f=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(o["a"])(n,[{key:"reloadRoute",value:function(){d["a"].reload(this.$router)}}]),n}(l["e"]);Object(u["a"])([Object(l["c"])()],f.prototype,"payload",void 0),f=Object(u["a"])([l["a"]],f);var b=f,h=b,p=(n("dce5"),n("2877")),m=n("6544"),v=n.n(m),k=n("8336"),g=n("132d"),O=n("adda"),y=Object(p["a"])(h,a,r,!1,null,null,null);t["a"]=y.exports;v()(y,{VBtn:k["a"],VIcon:g["a"],VImg:O["a"]})},7694:function(e,t,n){},"8cd5":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("a4d3"),n("e01a"),n("99af"),n("7db0"),n("b64b"),n("d3b7"),n("25f0");var a=n("2909"),r=n("d4ec"),c=n("bee2"),o=n("44d1"),i=n("b909"),s=[{code:"401",message:"You are not logged in",description:"You are currently nog logged in. Please login and try again!"},{code:"404",message:"Page not found",description:"We cannot find the page you are looking for. The page is no longer available or was moved to a different location."},{code:"500",message:"Internal server error.",description:"We are having issues with the server. Please try again later."},{code:"502",message:"Server is currently offline.",description:"We are having issues with the server. Please try again later."},{code:"network_error",message:"Unable to connect to server",description:"We are unable to connect to the server to retrieve information. Please check if you have a valid internet connection & try again later."}],u=function(){function e(){Object(r["a"])(this,e)}return Object(c["a"])(e,null,[{key:"handle",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.handleInputFields(e,n),this.handleGeneral(e),o["a"].$emit("error",e,t),i["a"].afterEach((function(){o["a"].$emit("error-clear")}))}},{key:"handleInputFields",value:function(e,t){if(e&&e.response&&e.response.data&&e.response.data.inputErrors)for(var n=e.response.data.inputErrors,a=function(){var e=c[r],a=t[e],o=n.find((function(t){return t.field===e}));a.error=o?o.message:""},r=0,c=Object.keys(t);r<c.length;r++)a()}},{key:"handleGeneral",value:function(e){if(e&&e.response&&e.response.data&&e.response.data.generalErrors){var t=e.response.data.generalErrors;t.length>0&&(e.message=t[0].message)}}},{key:"getCustomMessage",value:function(e,t){var n=this.getCustomError(e,t);return n?n.message:e.message}},{key:"getCustomDescription",value:function(e,t){var n=this.getCustomError(e,t);return n?n.description:""}},{key:"getCustomError",value:function(e,t){if(e){var n=this.getCustomErrors(t).find((function(t){var n;return e.response&&t.code===(null===(n=e.response)||void 0===n?void 0:n.status.toString())||t.code===e.code}));return n}}},{key:"getCustomErrors",value:function(e){return void 0!==e.customMessages?[].concat(s,Object(a["a"])(e.customMessages)):s}}]),e}()},"9cd0":function(e,t,n){"use strict";var a=n("d4ec"),r=n("bee2"),c=n("262e"),o=n("2caf"),i=n("9ab4"),s=n("c1c4"),u=n("d70b"),l=n("3dcf"),d=function(e){Object(c["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(r["a"])(n,[{key:"get",value:function(){return{}}},{key:"getLocations",value:function(){return{}}},{key:"getTours",value:function(){return{}}},{key:"getVisits",value:function(){return{}}},{key:"getVisitsByLocation",value:function(e){return{}}},{key:"getStatistics",value:function(){return{}}},{key:"getAchievements",value:function(){return{}}},{key:"update",value:function(e){return{}}},{key:"updateAvatar",value:function(e){return{}}},{key:"delete",value:function(){return{}}},{key:"deleteData",value:function(e){return{}}}]),n}(s["EchoService"]);Object(i["a"])([Object(s["GET"])("/user")],d.prototype,"get",null),Object(i["a"])([Object(s["GET"])("/user/locations")],d.prototype,"getLocations",null),Object(i["a"])([Object(s["GET"])("/user/tours")],d.prototype,"getTours",null),Object(i["a"])([Object(s["GET"])("/user/visits")],d.prototype,"getVisits",null),Object(i["a"])([Object(s["GET"])("/user/visits/{secretId}"),Object(i["b"])(0,Object(s["Path"])("secretId"))],d.prototype,"getVisitsByLocation",null),Object(i["a"])([Object(s["GET"])("/user/statistics")],d.prototype,"getStatistics",null),Object(i["a"])([Object(s["GET"])("/user/achievements")],d.prototype,"getAchievements",null),Object(i["a"])([Object(s["PATCH"])("/user"),Object(i["b"])(0,Object(s["Body"])())],d.prototype,"update",null),Object(i["a"])([Object(s["FormMultipart"])(),Object(s["POST"])("/user/avatar"),Object(i["b"])(0,Object(s["FormField"])("image"))],d.prototype,"updateAvatar",null),Object(i["a"])([Object(s["DELETE"])("/user")],d.prototype,"delete",null),Object(i["a"])([Object(s["DELETE"])("user/data"),Object(i["b"])(0,Object(s["Body"])())],d.prototype,"deleteData",null),t["a"]=(new s["EchoServiceBuilder"]).setBaseUrl(u["a"].BACKEND.URL).addInterceptor(new l["a"]).build(d)},b850:function(e,t,n){"use strict";var a=n("2b0e"),r=n("2f62"),c=n("5530"),o=n("d4ec"),i=function e(){Object(o["a"])(this,e),this.message="",this.x="right",this.y="bottom",this.color="info",this.timeout=6e3},s={namespaced:!0,state:{open:!1,data:{}},mutations:{SET_OPEN:function(e,t){e.open=t},SET_DATA:function(e,t){e.data=Object(c["a"])(Object(c["a"])({},new i),t)}},actions:{open:function(e,t){e.commit("SET_OPEN",!1),e.commit("SET_DATA",t),e.commit("SET_OPEN",!0)},close:function(e){e.commit("SET_OPEN",!1)}}},u=function e(){Object(o["a"])(this,e),this.component="",this.width=600,this.fullscreen=!1},l={namespaced:!0,state:{open:!1,data:{}},mutations:{SET_OPEN:function(e,t){e.open=t},SET_DATA:function(e,t){e.data=Object(c["a"])(Object(c["a"])({},new u),t)}},actions:{open:function(e,t){e.commit("SET_OPEN",!1),e.commit("SET_DATA",t),e.commit("SET_OPEN",!0)},close:function(e){e.commit("SET_OPEN",!1)}}},d=n("9cd0"),f={namespaced:!0,state:{currentUser:null},mutations:{SET_CURRENTUSER:function(e,t){e.currentUser=t}},actions:{fetch:function(e){e.commit("SET_CURRENTUSER",d["a"].get())}},getters:{currentUser:function(e){return e.currentUser},isAuthenticated:function(e){return e.currentUser.isSuccess()},isAdmin:function(e){return e.currentUser.isSuccess()&&e.currentUser.requireData().admin}}};a["default"].use(r["a"]);t["a"]=new r["a"].Store({modules:{snackbar:s,modal:l,session:f}})},b909:function(e,t,n){"use strict";n("d3b7");var a=n("2b0e"),r=n("8c4f");a["default"].use(r["a"]);var c=[{path:"*",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}},{path:"/",name:"Home",component:function(){return n.e("chunk-683ca04c").then(n.bind(null,"bb51"))}},{path:"/locations",name:"Locations",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-5942a10f"),n.e("chunk-9f45d340"),n.e("chunk-5b589e40"),n.e("chunk-72a8e734")]).then(n.bind(null,"7dee"))}},{path:"/locations/:secretId",name:"Location",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-5942a10f"),n.e("chunk-5b589e40"),n.e("chunk-0e4d91bb"),n.e("chunk-65b91a78")]).then(n.bind(null,"2c6a"))},props:!0},{path:"/locations/visit/:visitSecret",name:"Visit Location",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-0e4d91bb"),n.e("chunk-20a6f7c1"),n.e("chunk-a4cc3092")]).then(n.bind(null,"30ea"))},props:!0},{path:"/achievements",name:"Achievements",component:function(){return n.e("chunk-2c3c92b1").then(n.bind(null,"4e79"))}},{path:"/leaderboards",name:"Leaderboards",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-5942a10f"),n.e("chunk-9f45d340"),n.e("chunk-0e4d91bb"),n.e("chunk-66fea624")]).then(n.bind(null,"7700"))}},{path:"/tours",name:"Tours",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-5942a10f"),n.e("chunk-9f45d340"),n.e("chunk-891dd1ce")]).then(n.bind(null,"cc44"))}},{path:"/tours/:secretId",name:"Tour",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-5942a10f"),n.e("chunk-5b589e40"),n.e("chunk-5be891c4")]).then(n.bind(null,"0e11"))},props:!0},{path:"/privacypolicy",name:"Privacy Policy",component:function(){return n.e("chunk-74160b0e").then(n.bind(null,"729e"))}},{path:"/licenses",name:"Licenses.vue",component:function(){return n.e("chunk-2d0c1517").then(n.bind(null,"4610"))}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-4ee74096")]).then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-20a6f7c1"),n.e("chunk-2d0d6d35")]).then(n.bind(null,"73cf"))}},{path:"/logout",name:"Logout",component:function(){return n.e("chunk-586a2764").then(n.bind(null,"c100"))}},{path:"/profile",name:"Profile",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-0e4d91bb"),n.e("chunk-c4c39c8a")]).then(n.bind(null,"3b42"))}},{path:"/profile/achievements/",name:"Your achievements",component:function(){return n.e("chunk-6363daba").then(n.bind(null,"b53b"))}},{path:"/profile/locations/",name:"Your location",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-5942a10f"),n.e("chunk-9f45d340"),n.e("chunk-6509c778")]).then(n.bind(null,"c1d6"))}},{path:"/profile/tours/",name:"Your tours",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-5942a10f"),n.e("chunk-9f45d340"),n.e("chunk-8943eb34")]).then(n.bind(null,"9f11"))}},{path:"/profile/visits/",name:"Your visits",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-5942a10f"),n.e("chunk-9f45d340"),n.e("chunk-3b2be2f1")]).then(n.bind(null,"7d3f"))}},{path:"/admin/",name:"Admin Home Page",component:function(){return n.e("chunk-08ea1871").then(n.bind(null,"3c19"))}},{path:"/admin/reports",name:"Admin Reports List",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-5942a10f"),n.e("chunk-9f45d340"),n.e("chunk-56def478")]).then(n.bind(null,"ae62"))}},{path:"/admin/reports/:secretId",name:"Admin Location Reports",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-5942a10f"),n.e("chunk-9f45d340"),n.e("chunk-689bea0c")]).then(n.bind(null,"2d61"))},props:!0},{path:"/admin/users",name:"Admin User List",component:function(){return Promise.all([n.e("chunk-579e1ea3"),n.e("chunk-5942a10f"),n.e("chunk-9f45d340"),n.e("chunk-60f3eee6")]).then(n.bind(null,"c785"))}}],o=new r["a"]({mode:"history",base:"/",routes:c});t["a"]=o},b9b7:function(e,t,n){},c67f:function(e,t,n){"use strict";var a=n("c9f3"),r=n.n(a);r.a},c9f3:function(e,t,n){},cbe1:function(e,t,n){"use strict";var a=n("46b7"),r=n.n(a);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[e.$route.fullPath.startsWith("/admin")?n("admin-navigation"):n("navigation"),n("router-view-wrapper",{staticClass:"content"}),e.$route.fullPath.startsWith("/admin")?e._e():n("Footer"),n("snackbar"),n("modal")],1)],1)},c=[],o=(n("d3b7"),n("d4ec")),i=n("bee2"),s=n("262e"),u=n("2caf"),l=n("9ab4"),d=n("60a3"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("navigation-bar",{attrs:{drawer:e.drawer,links:e.links,"user-links":e.userLinks},on:{"update:drawer":function(t){e.drawer=t}}}),n("navigation-drawer",{attrs:{drawer:e.drawer,links:e.links,"user-links":e.userLinks},on:{"update:drawer":function(t){e.drawer=t}}})],1)},b=[],h=n("07e8"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{color:"primary","elevate-on-scroll":"",flat:"Home"===e.$route.name,dark:"",fixed:""}},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){return t.stopPropagation(),e.toggleDrawer(t)}}}),n("v-toolbar-title",{staticClass:"navbar__title",on:{click:function(t){return e.$router.push("/")}}},[e._v(" GeoCode ")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[e._l(e.links,(function(t,a){return n("v-btn",{key:a,attrs:{to:t.to,exact:"",text:""}},[e._v(" "+e._s(t.title)+" ")])})),e.currentUser.isLoading()?[n("v-btn",{attrs:{text:""}},[n("v-skeleton-loader",{staticClass:"skeleton__user",attrs:{width:"100px",type:"text"}})],1)]:e.currentUser.isSuccess()?[n("v-menu",{attrs:{transition:"slide-y-transition","offset-y":"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.attrs,r=t.on;return[n("v-btn",e._g(e._b({attrs:{text:""}},"v-btn",a,!1),r),[e._v(" "+e._s(e.currentUser.data.username)+" "),n("v-icon",{attrs:{right:""}},[e._v("mdi-menu-down")])],1)]}}])},[n("v-list",{attrs:{dense:"",nav:""}},[e._l(e.userLinks,(function(t,a){return[!t.admin||e.isAdmin?n("v-list-item",{key:a,attrs:{to:t.to,exact:""}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(t.title)+" ")])],1)],1):e._e()]}))],2)],1)]:[n("v-btn",{attrs:{to:"/login",text:""}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-login")]),e._v(" Login ")],1),n("v-btn",{attrs:{to:"/register",text:""}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-account-plus")]),e._v(" Register ")],1)]],2)],1)},m=[],v=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"toggleDrawer",value:function(){this._drawer=!this._drawer}}]),n}(d["e"]);Object(l["a"])([Object(d["d"])("drawer")],v.prototype,"_drawer",void 0),Object(l["a"])([Object(d["c"])()],v.prototype,"links",void 0),Object(l["a"])([Object(d["c"])()],v.prototype,"userLinks",void 0),Object(l["a"])([Object(h["a"])("session/currentUser")],v.prototype,"currentUser",void 0),Object(l["a"])([Object(h["a"])("session/isAdmin")],v.prototype,"isAdmin",void 0),v=Object(l["a"])([d["a"]],v);var k=v,g=k,O=(n("c67f"),n("2877")),y=n("6544"),j=n.n(y),_=n("5bc1"),E=n("8336"),w=n("132d"),C=n("8860"),T=n("da13"),P=n("5d23"),V=n("34c3"),L=n("e449"),x=n("3129"),S=n("2fa4"),A=n("71d9"),$=n("2a7f"),I=Object(O["a"])(g,p,m,!1,null,null,null),D=I.exports;j()(I,{VAppBarNavIcon:_["a"],VBtn:E["a"],VIcon:w["a"],VList:C["a"],VListItem:T["a"],VListItemContent:P["a"],VListItemIcon:V["a"],VListItemTitle:P["b"],VMenu:L["a"],VSkeletonLoader:x["a"],VSpacer:S["a"],VToolbar:A["a"],VToolbarItems:$["a"],VToolbarTitle:$["b"]});var U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:e._drawer,callback:function(t){e._drawer=t},expression:"_drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[e._l(e.links,(function(t,a){return n("v-list-item",{key:a,attrs:{to:t.to}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),e.currentUser.isLoading()?e._e():[e.currentUser.data?[n("v-list-group",{attrs:{"prepend-icon":"mdi-account","no-action":""},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-list-item-title",[e._v(" "+e._s(e.currentUser.data.username)+" ")])]},proxy:!0}],null,!1,1198917140)},[n("v-list",{attrs:{dense:"",nav:""}},[e._l(e.userLinks,(function(t,a){return[!t.admin||e.isAdmin?n("v-list-item",{key:a,attrs:{to:t.to,exact:""}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(t.title)+" ")])],1)],1):e._e()]}))],2)],1)]:[n("v-list-item",{attrs:{to:"/login"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-login")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(" Login ")])],1)],1),n("v-list-item",{attrs:{to:"/register"}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-account-plus")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(" Register ")])],1)],1)]]],2)],1)},R=[],N=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(d["e"]);Object(l["a"])([Object(d["d"])("drawer")],N.prototype,"_drawer",void 0),Object(l["a"])([Object(d["c"])()],N.prototype,"links",void 0),Object(l["a"])([Object(d["c"])()],N.prototype,"userLinks",void 0),Object(l["a"])([Object(h["a"])("session/currentUser")],N.prototype,"currentUser",void 0),Object(l["a"])([Object(h["a"])("session/isAdmin")],N.prototype,"isAdmin",void 0),N=Object(l["a"])([d["a"]],N);var F=N,B=F,M=n("56b0"),G=n("f774"),H=Object(O["a"])(B,U,R,!1,null,null,null),W=H.exports;j()(H,{VIcon:w["a"],VList:C["a"],VListGroup:M["a"],VListItem:T["a"],VListItemContent:P["a"],VListItemIcon:V["a"],VListItemTitle:P["b"],VNavigationDrawer:G["a"]});var Y=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.drawer=!1,e.links=[{title:"Home",to:"/",icon:"mdi-home"},{title:"Locations",to:"/locations",icon:"mdi-map-marker"},{title:"Tours",to:"/tours",icon:"mdi-routes"},{title:"Achievements",to:"/achievements",icon:"mdi-trophy"},{title:"Leaderboards",to:"/leaderboards",icon:"mdi-arrow-up-bold-circle-outline"}],e.userLinks=[{title:"My profile",to:"/profile",icon:"mdi-account-box"},{title:"My Achievements",to:"/profile/achievements",icon:"mdi-trophy"},{title:"My Locations",to:"/profile/locations",icon:"mdi-database-marker"},{title:"My Tours",to:"/profile/tours",icon:"mdi-routes"},{title:"My Visits",to:"/profile/visits",icon:"mdi-map-marker-check"},{title:"Admin panel",to:"/admin",icon:"mdi-monitor-dashboard",admin:!0},{title:"Logout",to:"/logout",icon:"mdi-logout"}],e}return n}(d["e"]);Object(l["a"])([Object(h["a"])("session/currentUser")],Y.prototype,"currentUser",void 0),Y=Object(l["a"])([Object(d["a"])({components:{NavigationDrawer:W,NavigationBar:D}})],Y);var q=Y,K=q,z=(n("cbe1"),Object(O["a"])(K,f,b,!1,null,null,null)),J=z.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("error-placeholder",{attrs:{"display-full-page":!0}}),e.hasError?e._e():n("router-view")],1)},X=[],Z=n("1cec"),ee=n("44d1"),te=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.hasError=!1,e}return Object(i["a"])(n,[{key:"created",value:function(){var e=this;ee["a"].$on("error",(function(t,n){n.displayFullpage&&(e.hasError=!0)})),ee["a"].$on("error-clear",(function(){e.hasError=!1}))}}]),n}(d["e"]);te=Object(l["a"])([Object(d["a"])({components:{ErrorPlaceholder:Z["a"]}})],te);var ne=te,ae=ne,re=Object(O["a"])(ae,Q,X,!1,null,null,null),ce=re.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{bottom:"bottom"===e.data.y,left:"left"===e.data.x,"multi-line":"multi-line"===e.data.mode,right:"right"===e.data.x,timeout:e.data.timeout,top:"top"===e.data.y,vertical:"vertical"===e.data.mode,color:e.data.color},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[e._v(" "+e._s(e.data.message)+" "),n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:e.close}},[e._v(" close ")])],1)},ie=[],se=n("5530"),ue=n("2f62"),le=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"open",get:function(){return this.$store.state.snackbar.open},set:function(e){this.$store.commit("snackbar/SET_OPEN",e)}}]),n}(d["e"]);le=Object(l["a"])([Object(d["a"])({computed:Object(se["a"])({},Object(ue["c"])("snackbar",["data"])),methods:Object(se["a"])({},Object(ue["b"])("snackbar",["close"]))})],le);var de=le,fe=de,be=n("2db4"),he=Object(O["a"])(fe,oe,ie,!1,null,null,null),pe=he.exports;j()(he,{VBtn:E["a"],VSnackbar:be["a"],VSpacer:S["a"]});var me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{"max-width":e.modalData.width,fullscreen:e.modalData.fullscreen,transition:e.modalData.fullscreen?"dialog-bottom-transition":"dialog-transition"},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[n("v-card",[e.modalData.component?n(e.component,{tag:"component",attrs:{action:e.modalData.action,payload:e.modalData.componentPayload}}):e._e()],1)],1)},ve=[],ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"loading-modal",attrs:{flat:""}},[n("v-card-title",[e._v(" Loading... "),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:e.close}},[n("v-icon",[e._v("mdi-close")])],1)],1),n("v-card-text",{staticClass:"loading-modal__content"},[n("v-progress-circular",{attrs:{size:100,color:"primary",indeterminate:""}})],1)],1)},ge=[],Oe=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"close",value:function(){this.$store.dispatch("modal/close")}}]),n}(d["e"]);Oe=Object(l["a"])([d["a"]],Oe);var ye=Oe,je=ye,_e=(n("640e"),n("b0af")),Ee=n("99d9"),we=n("490a"),Ce=Object(O["a"])(je,ke,ge,!1,null,"4f61db4f",null),Te=Ce.exports;j()(Ce,{VBtn:E["a"],VCard:_e["a"],VCardText:Ee["c"],VCardTitle:Ee["d"],VIcon:w["a"],VProgressCircular:we["a"],VSpacer:S["a"]});var Pe=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"modalData",get:function(){return Object.assign({},this.$store.state.modal.data)},set:function(e){this.$store.commit("modal/SET_DATA",e)}},{key:"open",get:function(){return this.$store.state.modal.open},set:function(e){this.$store.commit("modal/SET_OPEN",e)}},{key:"component",get:function(){var e=this;return this.$store.state.modal.data.component instanceof Promise?function(){return{component:e.$store.state.modal.data.component(),loading:Te}}:this.$store.state.modal.data.component}}]),n}(d["e"]);Pe=Object(l["a"])([Object(d["a"])({computed:Object(se["a"])({},Object(ue["c"])("modal",["data"])),methods:Object(se["a"])({},Object(ue["b"])("modal",["close"]))})],Pe);var Ve=Pe,Le=Ve,xe=n("169a"),Se=Object(O["a"])(Le,me,ve,!1,null,null,null),Ae=Se.exports;j()(Se,{VCard:_e["a"],VDialog:xe["a"]});var $e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{color:"primary",padless:"",absolute:""}},[n("v-card",{staticClass:"primary white--text text-center",staticStyle:{width:"100%"},attrs:{flat:"",tile:"",dense:""}},[n("v-card-text",e._l(e.links,(function(t,a){return n("v-btn",{key:a,staticClass:"mx-1",attrs:{to:t.to,color:"white",text:"",rounded:""}},[e._v(" "+e._s(t.title)+" ")])})),1),n("v-divider"),n("v-card-text",{staticClass:"white--text"},[e._v(" "+e._s((new Date).getFullYear())+" — "),n("strong",[e._v("GeoCode")])])],1)],1)},Ie=[],De=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.links=[{title:"Privacy Policy",to:"/privacypolicy",icon:"mdi-newspaper-variant-outline"},{title:"Licenses",to:"/licenses",icon:"mdi-license"}],e}return n}(d["e"]);De=Object(l["a"])([d["a"]],De);var Ue=De,Re=Ue,Ne=n("ce7e"),Fe=n("553a"),Be=Object(O["a"])(Re,$e,Ie,!1,null,null,null),Me=Be.exports;j()(Be,{VBtn:E["a"],VCard:_e["a"],VCardText:Ee["c"],VDivider:Ne["a"],VFooter:Fe["a"]});var Ge=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"created",value:function(){var e=this;this.$store.dispatch("session/fetch"),ee["a"].$on("error",(function(t,n){"SNACKBAR"===n.style&&e.$store.dispatch("snackbar/open",{message:t.message,color:"error"})}))}}]),n}(d["e"]);Ge=Object(l["a"])([Object(d["a"])({components:{Navigation:J,AdminNavigation:function(){return n.e("chunk-234af2bd").then(n.bind(null,"fc71"))},RouterViewWrapper:ce,Footer:Me,Snackbar:pe,Modal:Ae}})],Ge);var He=Ge,We=He,Ye=(n("5c0b"),n("7496")),qe=n("a75b"),Ke=Object(O["a"])(We,r,c,!1,null,null,null),ze=Ke.exports;j()(Ke,{VApp:Ye["a"],VContent:qe["a"]});var Je=n("b909"),Qe=n("b850"),Xe=n("f309");n("5363"),n("d4b8");a["default"].use(Xe["a"]);var Ze=new Xe["a"]({icons:{iconfont:"mdi"},theme:{options:{customProperties:!0},themes:{light:{primary:"#4CAF50",secondary:"#FF9800"}}}}),et=n("e11e"),tt=(n("6cc5"),n("9eb3"),n("fb66")),nt=n.n(tt);delete et["Icon"].Default.prototype._getIconUrl,et["Icon"].Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")}),et["Map"].addInitHook("addHandler","gestureHandling",nt.a),a["default"].config.productionTip=!1,new a["default"]({router:Je["a"],store:Qe["a"],vuetify:Ze,render:function(e){return e(ze)}}).$mount("#app")},d70b:function(e,t,n){"use strict";t["a"]={FRONTEND:{URL:"https://geocode.ga/"},BACKEND:{URL:"https://api.geocode.ga/"},LEAFLET:{TILE_SERVER:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}}},da70:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("ac1f"),n("5319");var a=n("d4ec"),r=n("bee2"),c=n("2b0e"),o=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,null,[{key:"reload",value:function(e){var t=e.currentRoute.path;e.replace("/"),c["default"].nextTick((function(){return e.push(t)}))}}]),e}()},dce5:function(e,t,n){"use strict";var a=n("38ed"),r=n.n(a);r.a}});
//# sourceMappingURL=app.e1d7265f.js.map