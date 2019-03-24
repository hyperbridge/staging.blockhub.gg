(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{1005:function(t,e,i){"use strict";var s=i(252);i.n(s).a},1006:function(t,e,i){"use strict";var s=i(253);i.n(s).a},1007:function(t,e,i){"use strict";var s=i(254);i.n(s).a},1697:function(t,e,i){"use strict";i.r(e);var s=i(682),n={name:"business",props:{showLeftPanel:{type:Boolean,default:!0},showRightPanel:{type:Boolean,default:!1},title:String},components:{SidebarMenu:s.SidebarMenu,"c-profile-chooser":function(t){return i.e(35).then(function(){var e=[i(1637)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-page-heading":function(t){return i.e(333).then(function(){var e=[i(1739)];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){return{loadingState:!0,darkMode:!1,minimized:!1,breadcrumbLinksData:[],pageTitle:"",menu:[{title:"Marketplace",icon:"fas fa-home",child:[{title:"Products",child:[{href:"/business/products",title:"All Products",icon:"fas fa-square-full icon-sm"},{href:"/business/product/new",title:"New Product",icon:"fas fa-square-full icon-sm"}]},{title:"Crowdfunds",child:[{href:"/business/projects",title:"All Crowdfunds",icon:"fas fa-square-full icon-sm"},{href:"/business/project/new",title:"New Crowdfunds",icon:"fas fa-square-full icon-sm"}]}]}]}},created:function(){this.updateBreadcrumbLinks(),this.pageTitle=this.$route.meta.title||"Dashboard"},computed:{activeProfile:function(){return this.$store.state.application.account&&this.$store.state.application.activeProfile}},methods:{updateBreadcrumbLinks:function(){this.breadcrumbLinksData=this.$route.meta.breadcrumb}},mounted:function(){var t=this;this.$nextTick(function(){t.loadingState=!1}),document.body.classList.add("light"),this.updateBreadcrumbLinks()},beforeDestroy:function(){document.body.classList.remove("light")},watch:{$route:function(t,e){this.updateBreadcrumbLinks(),this.pageTitle=t.meta.title||"Dashboard"},"$store.state.auth.accessToken":function(){}}},a=(i(1007),i(1006),i(1005),i(0)),o=Object(a.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page page--w-header page--w-container",attrs:{id:"business-app"}},[i("transition",{attrs:{name:"slideDown"}},[i("div",{staticClass:"page-top-bar draggable",class:{invert:t.darkMode}},[i("c-button",{staticClass:"logo-holder undraggable",attrs:{status:"none",to:"/"}},[t.darkMode?i("c-img",{attrs:{src:"/static/img/logo-white.svg",alt:"Logo"}}):i("c-img",{staticStyle:{height:"90%","margin-top":"2%"},attrs:{src:"/static/img/logo.svg",alt:"Logo"}})],1),t._v(" "),i("div",{staticClass:"h2 ml-4 mb-0 pl-4 text-uppercase border-left"},[t._v("\n                Business Manager\n            ")]),t._v(" "),i("div",{staticClass:"page-top-bar__profile mb-0 float-right h5",staticStyle:{"margin-left":"auto"},on:{click:function(e){t.$store.commit("application/showProfileChooser",!0)}}},[i("div",{staticClass:"page-top-bar__profile-avatar"},[i("c-img",{attrs:{src:"https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png"}})],1),t._v(" "),i("div",{staticClass:"page-top-bar__profile-name"},[t._v(t._s(t.activeProfile.name))])])],1)]),t._v(" "),i("transition",{attrs:{name:"slideDown"}},[i("sidebar-menu",{class:{"light-v":!t.darkMode},attrs:{width:"250px",menu:t.menu},on:{collapse:function(e){t.minimized=!t.minimized}}})],1),t._v(" "),i("transition",{attrs:{name:"fade"}},[i("div",{staticClass:"content",class:{"left-sidebar":t.showLeftPanel,"right-sidebar":t.showRightPanel,invert:t.darkMode,"is-minimized":t.minimized},attrs:{id:"content"}},[i("div",{staticClass:"page-heading"},[i("div",{staticClass:"page-heading__container"},[i("div",[i("h3",{staticClass:"page-heading__title p-0 m-0"},[t._v("\n                            "+t._s(t.pageTitle)+"\n                        ")])]),t._v(" "),i("div",[t._t("action")],2)]),t._v(" "),i("nav",{attrs:{"aria-label":"breadcrumb",role:"navigation"}},[t.breadcrumbLinksData.length?i("ul",{staticClass:"breadcrumb"},t._l(t.breadcrumbLinksData,function(e,s){return i("li",{key:s,staticClass:"breadcrumb-item",class:{active:s==t.breadcrumbLinksData.length-1}},[e.to?i("router-link",{attrs:{to:e.to}},[t._v(t._s(e.title))]):[t._v("\n                                "+t._s(e.title)+"\n                            ")]],2)})):t._e()])]),t._v(" "),i("div",{staticClass:"content__wrapper"},[i("div",{staticClass:"container-fluid"},[t._t("default")],2)]),t._v(" "),t.$slots.menu?i("div",{staticClass:"content__bottom-menu"},[t._t("menu")],2):t._e()])]),t._v(" "),i("transition",{attrs:{name:"slideRight"}},[t.showRightPanel?i("div",{staticClass:"page-sidepanel text-right",class:{invert:t.darkMode},attrs:{id:"page-sidepanel"}},[i("div",{staticClass:"page-sidepanel__content"},[t._t("right")],2)]):t._e()]),t._v(" "),t.$store.state.application.profileChooser&&t.$store.state.application.signedIn?i("c-profile-chooser",{attrs:{darkMode:!1}}):t._e()],1)},[],!1,null,"32732c5c",null);e.default=o.exports},252:function(t,e){},253:function(t,e){},254:function(t,e){},682:function(t,e,i){"undefined"!=typeof self&&self,t.exports=function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=8)}([function(t,e){t.exports=function(t,e,i,s,n,a){var o,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,r=t.default);var c,d="function"==typeof r?r.options:r;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),i&&(d.functional=!0),n&&(d._scopeId=n),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):s&&(c=s),c){var m=d.functional,u=m?d.render:d.beforeCreate;m?(d._injectStyles=c,d.render=function(t,e){return c.call(e),u(t,e)}):d.beforeCreate=u?[].concat(u,c):[c]}return{esModule:o,exports:r,options:d}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(5),n=i(16),a=i(0),o=a(s.a,n.a,!1,null,null,null);e.default=o.exports},function(t,e,i){"use strict";var s=i(6),n=i(15),a=i(0),o=a(s.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";i.d(e,"a",function(){return s});var s={data:function(){return{active:!1}},created:function(){this.active=this.isLinkActive()},methods:{toggleDropdown:function(t){t.preventDefault(),this.show=!this.show},closeDropdown:function(){this.show=!1},clickEvent:function(t){this.item.child&&this.toggleDropdown(t)},isLinkActive:function(){if(this.item&&this.item.href)return this.$route?this.item.href==this.$route.path:this.item.href==window.location.pathname}},computed:{isRouterLink:function(){return this.$router&&this.item&&void 0!==this.item.href}},watch:{$route:function(){this.active=this.isLinkActive()}}}},function(t,e,i){"use strict";var s=i(1),n=i(2),a=i(17);e.a={name:"SidebarMenu",components:{Item:s.default,SubItem:n.a,MobileItem:a.a},props:{menu:{type:Array,required:!0},collapsed:{type:Boolean,default:!1},width:{type:String,default:"350px"},widthCollapsed:{type:String,default:"50px"}},data:function(){return{sidebarWidth:this.collapsed?this.widthCollapsed:this.width,isCollapsed:this.collapsed,mobileItem:null,mobileItemPos:0,mobileItemHeight:0}},created:function(){var t=this;this.$on("mouseEnterItem",function(e){t.mobileItem=e.item,t.mobileItemPos=e.pos,t.mobileItemHeight=e.height})},methods:{mouseLeave:function(){this.mobileItem=null},toggleCollapse:function(){this.isCollapsed=!this.isCollapsed,this.sidebarWidth=this.isCollapsed?this.widthCollapsed:this.width,this.$emit("collapse",this.isCollapsed)}}}},function(t,e,i){"use strict";var s=i(2),n=i(3);e.a={data:function(){return{show:!1}},props:{item:{type:Object,required:!0},firstItem:{type:Boolean,default:!1},isCollapsed:{type:Boolean}},components:{SubItem:s.a},mixins:[n.a],created:function(){this.firstItem&&this.$parent.$on("collapse",this.closeDropdown)},methods:{mouseEnter:function(t){this.isCollapsed&&this.firstItem&&this.$parent.$emit("mouseEnterItem",{item:this.item,pos:t.currentTarget.getBoundingClientRect().top-this.$parent.$el.getBoundingClientRect().top,height:this.$el.offsetHeight})}}}},function(t,e,i){"use strict";var s=i(1),n=i(3);e.a={data:function(){return{show:!1}},mixins:[n.a],props:{item:Object},components:{Item:s.default},beforeCreate:function(){this.$options.components.Item=i(1).default}}},function(t,e,i){"use strict";var s=i(2),n=i(3);e.a={props:{item:{type:Object}},components:{SubItem:s.a},mixins:[n.a],watch:{item:function(){this.active=this.isLinkActive()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(9);i.d(e,"SidebarMenu",function(){return s.a}),e.default={install:function(t){t.component("sidebar-menu",s.a)}}},function(t,e,i){"use strict";var s=i(4),n=i(19),a=i(0),o=function(t){i(10)},r=a(s.a,n.a,!1,o,null,null);e.a=r.exports},function(t,e,i){var s=i(11);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals),i(13)("08fa5dc8",s,!0,{})},function(t,e,i){(t.exports=i(12)(!1)).push([t.i,'.v-sidebar-menu,.v-sidebar-menu *{-webkit-box-sizing:border-box;box-sizing:border-box}.v-sidebar-menu{position:fixed;top:0;left:0;background-color:#2a2a2e;width:100%;height:100vh;padding-bottom:50px;-webkit-transition:width .3s;transition:width .3s}.v-sidebar-menu .vsm-item{position:relative;display:block}.v-sidebar-menu .vsm-item .vsm-link{position:relative;display:block;font-size:16px;font-weight:400;color:#fff;padding:10px;line-height:30px;text-decoration:none;z-index:20;-webkit-transition:all .3s;transition:all .3s}.v-sidebar-menu .vsm-item.first-item>.vsm-link:after{content:"";display:block;clear:both}.v-sidebar-menu .vsm-item.first-item>.vsm-link>.vsm-title{display:block;white-space:nowrap}.v-sidebar-menu .vsm-icon{margin-right:10px;color:#fff}.v-sidebar-menu .vsm-item.first-item>.vsm-link>.vsm-icon{float:left;height:30px;line-height:30px;width:30px;text-align:center;background:#1e1e21;border-radius:3px}.v-sidebar-menu .vsm-arrow{width:30px;text-align:center;font-style:normal;font-weight:900;color:#ffff;position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.v-sidebar-menu .vsm-arrow:after{content:"\\F105";font-family:Font Awesome\\ 5 Free}.v-sidebar-menu .vsm-arrow.open-arrow{-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg)}.v-sidebar-menu .vsm-dropdown>.vsm-list{background:#36363b;padding:5px}.show-animation-enter-active{-webkit-animation:show-animation .2s;animation:show-animation .2s}.show-animation-leave-active{animation:show-animation .2s reverse}@-webkit-keyframes show-animation{0%{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes show-animation{0%{opacity:0;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.v-sidebar-menu .vsm-mobile-bg{background-color:#4285f4}.slide-animation-enter-active{-webkit-animation:slide-animation .2s;animation:slide-animation .2s}.slide-animation-leave-active{animation:slide-animation .2s reverse}@-webkit-keyframes slide-animation{0%{width:0}to{width:100%}}@keyframes slide-animation{0%{width:0}to{width:100%}}.v-sidebar-menu.vsm-default .vsm-link:hover,.v-sidebar-menu .vsm-dropdown>.vsm-list .vsm-link:hover{background-color:#1e1e21}.v-sidebar-menu.vsm-default .vsm-item.first-item.open-item>.vsm-link{background:#4285f4}.v-sidebar-menu .vsm-item.first-item.active-item>.vsm-link{-webkit-box-shadow:3px 0 0 0 #4285f4 inset;box-shadow:inset 3px 0 0 0 #4285f4}.v-sidebar-menu .vsm-item.active-item>.vsm-link{font-weight:600}.v-sidebar-menu .vsm-header{color:hsla(0,0%,100%,.7);font-size:14px;font-weight:600;padding:10px;white-space:nowrap;text-transform:uppercase}.v-sidebar-menu .collapse-btn{display:block;color:#fff;background-color:#1e1e21;text-align:center;font-style:normal;font-weight:900;position:absolute;height:50px;left:0;right:0;bottom:0;cursor:pointer;border:none;width:100%}.v-sidebar-menu .collapse-btn:after{content:"\\F337";font-family:Font Awesome\\ 5 Free}',""])},function(t,e){function i(t,e){var i=t[1]||"",s=t[3];if(!s)return i;if(e&&"function"==typeof btoa){var n=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(s);return[i].concat(s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"})).concat([n]).join("\n")}return[i].join("\n")}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var s=i(e,t);return e[2]?"@media "+e[2]+"{"+s+"}":s}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(s[a]=!0)}for(n=0;n<t.length;n++){var o=t[n];"number"==typeof o[0]&&s[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),e.push(o))}},e}},function(t,e,i){function s(t){for(var e=0;e<t.length;e++){var i=t[e],s=c[i.id];if(s){s.refs++;for(var n=0;n<s.parts.length;n++)s.parts[n](i.parts[n]);for(;n<i.parts.length;n++)s.parts.push(a(i.parts[n]));s.parts.length>i.parts.length&&(s.parts.length=i.parts.length)}else{for(var o=[],n=0;n<i.parts.length;n++)o.push(a(i.parts[n]));c[i.id]={id:i.id,refs:1,parts:o}}}}function n(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function a(t){var e,i,s=document.querySelector("style["+v+'~="'+t.id+'"]');if(s){if(f)return p;s.parentNode.removeChild(s)}if(b){var a=u++;s=m||(m=n()),e=o.bind(null,s,a,!1),i=o.bind(null,s,a,!0)}else s=n(),e=function(t,e){var i=e.css,s=e.media,n=e.sourceMap;if(s&&t.setAttribute("media",s),h.ssrId&&t.setAttribute(v,e.id),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,s),i=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else i()}}function o(t,e,i,s){var n=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=g(e,n);else{var a=document.createTextNode(n),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=i(14),c={},d=r&&(document.head||document.getElementsByTagName("head")[0]),m=null,u=0,f=!1,p=function(){},h=null,v="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,i,n){f=i,h=n||{};var a=l(t,e);return s(a),function(e){for(var i=[],n=0;n<a.length;n++){var o=a[n],r=c[o.id];r.refs--,i.push(r)}e?s(a=l(t,e)):a=[];for(var n=0;n<i.length;n++){var r=i[n];if(0===r.refs){for(var d=0;d<r.parts.length;d++)r.parts[d]();delete c[r.id]}}}};var g=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var i=[],s={},n=0;n<e.length;n++){var a=e[n],o=a[0],r=a[1],l=a[2],c=a[3],d={id:t+":"+n,css:r,media:l,sourceMap:c};s[o]?s[o].parts.push(d):i.push(s[o]={id:o,parts:[d]})}return i}},function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsm-item",class:[{"open-item":t.show},{"active-item":t.active}]},[t.isRouterLink?[i("router-link",{staticClass:"vsm-link",attrs:{to:t.item.href},nativeOn:{click:function(e){return t.clickEvent(e)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()])]:[i("a",{staticClass:"vsm-link",class:{active:t.isLinkActive},attrs:{href:t.item.child?"#":t.item.href},on:{click:t.clickEvent}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()])],t._v(" "),t.item.child?i("div",{staticClass:"vsm-dropdown"},[i("transition",{attrs:{name:"show-animation"}},[t.show?i("div",{staticClass:"vsm-list"},t._l(t.item.child,function(t,e){return i("item",{key:e,attrs:{item:t}})})):t._e()])],1):t._e()],2)},staticRenderFns:[]};e.a=s},function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vsm-item",class:[{"first-item":t.firstItem},{"open-item":t.show},{"active-item":t.active}],on:{mouseenter:function(e){t.mouseEnter(e)}}},[t.isRouterLink?[i("router-link",{staticClass:"vsm-link",attrs:{to:t.item.href},nativeOn:{click:function(e){return t.clickEvent(e)}}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)]:[i("a",{staticClass:"vsm-link",attrs:{href:t.item.child?"#":t.item.href},on:{click:t.clickEvent}},[t.item.icon?i("i",{staticClass:"vsm-icon",class:t.item.icon}):t._e(),t._v(" "),t.isCollapsed?t._e():[i("span",{staticClass:"vsm-title"},[t._v(t._s(t.item.title))]),t._v(" "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]],2)],t._v(" "),!t.isCollapsed&&t.item.child?i("div",{staticClass:"vsm-dropdown"},[i("transition",{attrs:{name:"show-animation"}},[t.show?i("div",{staticClass:"vsm-list"},t._l(t.item.child,function(t,e){return i("sub-item",{key:e,attrs:{item:t}})})):t._e()])],1):t._e()],2)},staticRenderFns:[]};e.a=s},function(t,e,i){"use strict";var s=i(7),n=i(18),a=i(0),o=a(s.a,n.a,!1,null,null,null);e.a=o.exports},function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item?i("div",{staticClass:"vsm-item mobile-item",class:[{"open-item":t.item.child},{"active-item":t.active}]},[t.isRouterLink?i("router-link",{staticClass:"vsm-link",attrs:{to:t.item.href}},[t._v("\n        "+t._s(t.item.title)+"\n        "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.show}}):t._e()]):t.item?i("a",{staticClass:"vsm-link",attrs:{href:t.item.child?"#":t.item.href},on:{click:t.clickEvent}},[t._v("\n        "+t._s(t.item.title)+"\n        "),t.item.child?i("i",{staticClass:"vsm-arrow",class:{"open-arrow":t.item.child}}):t._e()]):t._e()],1):t._e()},staticRenderFns:[]};e.a=s},function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-sidebar-menu",class:[t.isCollapsed?"vsm-collapsed":"vsm-default"],style:{width:t.sidebarWidth},on:{mouseleave:t.mouseLeave}},[i("div",{staticClass:"vsm-list",style:[{height:"100%"},{overflow:"hidden auto"}]},[t._l(t.menu,function(e,s){return[e.header?[t.isCollapsed?t._e():i("div",{key:s,staticClass:"vsm-header"},[t._v(t._s(e.title))])]:i("item",{key:s,attrs:{item:e,firstItem:!0,isCollapsed:t.isCollapsed}})]})],2),t._v(" "),t.isCollapsed?i("div",{style:[{position:"absolute"},{top:t.mobileItemPos+"px"},{left:"0px"},{"padding-left":t.sidebarWidth},{width:t.width}]},[i("mobile-item",{attrs:{item:t.mobileItem}}),t._v(" "),i("transition",{attrs:{name:"slide-animation"}},[t.mobileItem?i("div",{staticClass:"vsm-mobile-bg",style:[{position:"absolute"},{left:"0px"},{right:"0px"},{top:"0px"},{height:t.mobileItemHeight+"px"}]}):t._e()]),t._v(" "),i("div",{staticClass:"vsm-dropdown",style:[{position:"absolute"},{top:t.mobileItemHeight+"px"},{left:t.sidebarWidth},{right:"0px"},{"max-height":"calc(100vh - "+(t.mobileItemPos+t.mobileItemHeight)+"px)"},{"overflow-y":"auto"}]},[i("transition",{attrs:{name:"show-animation"}},[t.mobileItem&&t.mobileItem.child?i("div",{staticClass:"vsm-list"},t._l(t.mobileItem.child,function(t,e){return i("sub-item",{key:e,attrs:{item:t}})})):t._e()])],1)],1):t._e(),t._v(" "),i("button",{staticClass:"collapse-btn",on:{click:t.toggleCollapse}})])},staticRenderFns:[]};e.a=s}])}}]);