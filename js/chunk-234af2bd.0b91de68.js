(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-234af2bd"],{"8b0d":function(t,e,i){},fc71:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{attrs:{color:"primary",app:"",dark:"",fixed:"","clipped-left":""}},[i("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}}),i("v-toolbar-title",{on:{click:function(e){return t.$router.push("/admin")}}},[t._v(" Admin Panel ")]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{to:"/",exact:"",text:""}},[t._v(" Back to website "),i("v-icon",{attrs:{right:""}},[t._v(" mdi-chevron-right ")])],1)],1)],1),i("v-navigation-drawer",{attrs:{app:"",clipped:"","expand-on-hover":t.$vuetify.breakpoint.mdAndUp,permanent:t.$vuetify.breakpoint.mdAndUp,fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",{attrs:{nav:"",dense:""}},t._l(t.links,(function(e,r){return i("v-list-item",{key:r,attrs:{to:e.to,exact:""}},[i("v-list-item-icon",[i("v-icon",[t._v(t._s(e.icon))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},o=[],n=i("d4ec"),l=i("bee2"),c=i("262e"),s=i("2caf"),a=i("9ab4"),h=i("60a3"),d=i("07e8"),u=function(t){Object(c["a"])(i,t);var e=Object(s["a"])(i);function i(){var t;return Object(n["a"])(this,i),t=e.apply(this,arguments),t.drawer=!1,t.links=[{title:"Home",to:"/admin",icon:"mdi-home"},{title:"Reports",to:"/admin/reports",icon:"mdi-alert-octagon"},{title:"Users",to:"/admin/users",icon:"mdi-account"}],t}return Object(l["a"])(i,[{key:"checkAdmin",value:function(){(this.currentUser.isSuccess()||this.currentUser.isError())&&(this.isAuthenticated||(this.$router.push("/"),this.$store.dispatch("snackbar/open",{message:"You are not logged in!",color:"error"})),this.isAdmin||(this.$router.push("/"),this.$store.dispatch("snackbar/open",{message:"You are not an admin!",color:"error"})))}},{key:"toggleDrawer",value:function(){this.drawer=!this.drawer}}]),i}(h["e"]);Object(a["a"])([Object(d["a"])("session/currentUser")],u.prototype,"currentUser",void 0),Object(a["a"])([Object(d["a"])("session/isAuthenticated")],u.prototype,"isAuthenticated",void 0),Object(a["a"])([Object(d["a"])("session/isAdmin")],u.prototype,"isAdmin",void 0),Object(a["a"])([Object(h["f"])("currentUser",{immediate:!0})],u.prototype,"checkAdmin",null),u=Object(a["a"])([h["a"]],u);var p=u,m=p,v=i("2877"),f=i("6544"),S=i.n(f),b=(i("a9e3"),i("b680"),i("c7cd"),i("5530")),g=(i("8b0d"),i("71d9")),O=i("53ca");function T(t,e){var i=e.modifiers||{},r=i.self,o=void 0!==r&&r,n=e.value,l="object"===Object(O["a"])(n)&&n.options||{passive:!0},c="function"===typeof n||"handleEvent"in n?n:n.handler,s=o?t:e.arg?document.querySelector(e.arg):window;s&&(s.addEventListener("scroll",c,l),t._onScroll={handler:c,options:l,target:o?void 0:s})}function w(t){if(t._onScroll){var e=t._onScroll,i=e.handler,r=e.options,o=e.target,n=void 0===o?t:o;n.removeEventListener("scroll",i,r),delete t._onScroll}}var j={inserted:T,unbind:w},k=j,y=i("3a66"),A=i("d9bd"),x=i("2b0e"),B=x["default"].extend({name:"scrollable",directives:{Scroll:j},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(A["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),_=i("d10f"),L=i("f2e7"),U=i("80d2"),H=i("58df"),V=Object(H["a"])(g["a"],B,_["a"],L["a"],Object(y["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),I=V.extend({name:"v-app-bar",directives:{Scroll:k},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return B.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(b["a"])(Object(b["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return g["a"].options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,i=t,r=i-e,o=r/this.computedScrollThreshold,n=this.currentScroll*o;return Math.max(e,i-n)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=g["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:g["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return g["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(b["a"])(Object(b["a"])({},g["a"].options.computed.styles.call(this)),{},{fontSize:Object(U["g"])(this.computedFontSize,"rem"),marginTop:Object(U["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(U["g"])(this.computedTransform),")"),left:Object(U["g"])(this.computedLeft),right:Object(U["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=g["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=g["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),$=i("5bc1"),C=i("8336"),E=i("132d"),M=i("8860"),R=i("da13"),N=i("5d23"),P=i("34c3"),F=i("f774"),Y=i("2fa4"),z=i("2a7f"),D=Object(v["a"])(m,r,o,!1,null,null,null);e["default"]=D.exports;S()(D,{VAppBar:I,VAppBarNavIcon:$["a"],VBtn:C["a"],VIcon:E["a"],VList:M["a"],VListItem:R["a"],VListItemContent:N["a"],VListItemIcon:P["a"],VListItemTitle:N["b"],VNavigationDrawer:F["a"],VSpacer:Y["a"],VToolbarItems:z["a"],VToolbarTitle:z["b"]})}}]);
//# sourceMappingURL=chunk-234af2bd.0b91de68.js.map