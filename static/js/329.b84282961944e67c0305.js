(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{1010:function(t,a,e){"use strict";var n=e(257);e.n(n).a},1700:function(t,a,e){"use strict";e.r(a);var n={props:{bgImage:String,overlay:{type:Boolean,default:!0},overlayOpacity:{type:[String,Number],default:.4},overlayColor:{type:String,default:"#000"}},components:{"c-loading-logo":function(t){return e.e(279).then(function(){var a=[e(1668)];t.apply(null,a)}.bind(this)).catch(e.oe)},"c-quick-launch":function(t){return e.e(278).then(function(){var a=[e(1667)];t.apply(null,a)}.bind(this)).catch(e.oe)},"c-dropdown":function(t){return e.e(245).then(function(){var a=[e(1666)];t.apply(null,a)}.bind(this)).catch(e.oe)}},data:function(){return{gamesShortcuts:[{image:"http://www.transparentpng.com/download/doom/tml22U-doom-game-free-cut-out.png"},{image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/46b63d3c-ae67-464c-9a37-670829b2a157/datt5yp-68d54e82-58e1-44f4-92e9-9a615ff30c63.png"},{image:"http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Silent-Hunter-5-Battle-of-the-Atlantic-1-icon.png"},{image:"http://bestgames4all.ru/uploads/images/e/a/_/ea_metro_2033_redux.jpg"},{image:"https://steamuserimages-a.akamaihd.net/ugc/862861700716666132/4906F3679ACA4FAA7BAFBE194B6EBEE00D8ACA90/"},{image:"http://pluspng.com/img-png/tom-clancys-ghost-recon-png-tom-clancys-ghost-recon-logo-png-picture-512.png"},{image:"https://cdn.wccftech.com/wp-content/uploads/2014/05/Watch-Dogs-Logo4.png"},{image:"https://www.digiseller.ru/preview/403777/p1_2208863_988b90bd.png"},{image:"https://www.digiseller.ru/preview/403777/p1_2208863_35bf7488.png"},{image:"https://www.digiseller.ru/preview/403777/p1_2208863_02419b9c.png"},{image:"http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-28/256/Rogue-Trooper-1-icon.png"},{image:"http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-38/256/Sniper-Ghost-Worrior-3-icon.png"}]}},computed:{isLocked:function(){return this.$store.state.application.locked},isLoading:function(){return this.$store.state.application.loading},isViewing:function(){return"viewing"===this.$store.state.application.editorMode},editorMode:function(){return this.$store.state.application.editorMode},developerMode:function(){return this.$store.state.application.developerMode},signedIn:function(){return this.$store.state.application.signedIn},desktopMode:function(){return this.$store.state.application.desktopMode},operatingSystem:function(){return this.$store.state.application.operatingSystem}},mounted:function(){document.getElementById("startup-loader").style.display="none"}},i=(e(1010),e(0)),s=Object(i.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"launcher",style:"background-image: url("+t.bgImage+")"},[t.overlay?e("div",{staticClass:"launcher__overlay",style:"opacity: "+t.overlayOpacity+"; background-color: "+t.overlayColor}):t._e(),t._v(" "),e("div",{staticClass:"launcher__top-bar"},[e("router-link",{staticClass:"app-header__bar-center margin-right-50",attrs:{to:t.isLocked?"#":"/"}},[e("c-loading-logo",{attrs:{isLoading:t.isLoader}})],1),t._v(" "),e("nav",{staticClass:"launcher__top-bar-left"},[e("ul",[!t.desktopMode||t.signedIn||t.isLocked?t._e():e("li",{staticClass:"app-header__create-account-btn"},[e("router-link",{attrs:{to:"/account/signup"}},[t._v("\n                        CREATE ACCOUNT\n                    ")])],1),t._v(" "),t.desktopMode?t._e():e("li",{staticClass:"app-header__download-btn"},[e("router-link",{attrs:{to:"/download"}},[t._v("\n                        DOWNLOAD\n                    ")])],1),t._v(" "),t.signedIn?e("li",[e("router-link",{attrs:{to:"/"}},[t._v("\n                        Store\n                    ")])],1):t._e()])]),t._v(" "),t._t("header"),t._v(" "),e("div",{staticClass:"launcher__top-bar-right ml-auto"},[e("nav",[e("ul",[t.isLocked?t._e():e("li",{attrs:{hidden:""}},[e("c-quick-launch",{staticClass:"quick-launch",staticStyle:{"margin-top":"-7px"}})],1),t._v(" "),t.signedIn?e("li",{staticClass:"token"},[e("router-link",{staticClass:"mt-1",attrs:{to:"/token"}},[null===t.tokenCount?e("span",{staticClass:"token__count token__count--loading"},[e("c-loading",{attrs:{enabled:!0}})],1):t._e(),t._v(" "),null!==t.tokenCount?e("span",{staticClass:"token__count"},[t._v("\n                                "+t._s(t.tokenCount)+" "),e("span",{staticClass:"icon fa fa-coins"})]):t._e(),t._v(" "),e("span",{staticClass:"text"},[t._v("Tokens")])])],1):t._e(),t._v(" "),t.signedIn?e("li",[e("c-dropdown",{staticClass:"ml-4 account-menu mt-1",staticStyle:{"z-index":"12"},on:{show:t.onShowMenu,hide:t.onHideMenu}},[e("template",{slot:"title"},[e("div",{staticClass:"__title"},[e("i",{staticClass:"fa fa-user"}),t._v("\n                                    "+t._s(t.activeProfile&&t.activeProfile.name)+"\n                                ")])]),t._v(" "),e("ul",{staticClass:"item-dropdown"},[e("li",[e("c-button",{attrs:{status:"none",to:"/account"}},[e("i",{staticClass:"fas fa-user"}),t._v("\n                                        Account Info\n                                    ")])],1),t._v(" "),e("li",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"WALLETS",expression:"'WALLETS'"}]},[e("c-button",{attrs:{status:"none",to:"/account/wallets"}},[e("i",{staticClass:"fas fa-credit-card"}),t._v("\n                                        My Wallets\n                                    ")])],1),t._v(" "),t.activeProfile?e("li",[e("c-button",{attrs:{status:"none",to:"/profile/"+t.activeProfile.id}},[e("i",{staticClass:"fas fa-user"}),t._v("\n                                        View Public Profile\n                                    ")])],1):t._e(),t._v(" "),t.signedIn&&t.activeProfile?e("li",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"CONTACTS",expression:"'CONTACTS'"}]},[e("c-button",{attrs:{status:"none",to:"/profile/"+t.activeProfile.id+"/contacts"}},[e("i",{staticClass:"fas fa-users"}),t._v("\n                                        Contacts\n                                    ")])],1):t._e(),t._v(" "),e("li",[e("c-button",{attrs:{status:"none",to:"/account/profiles"}},[e("i",{staticClass:"fas fa-users-cog"}),t._v("\n                                        Profile Manager\n                                    ")])],1),t._v(" "),e("li",[e("c-button",{attrs:{status:"none"},on:{click:function(a){t.$store.commit("application/showProfileChooser",!0)}}},[e("i",{staticClass:"fas fa-user-edit"}),t._v("\n                                        Switch Profile\n                                    ")])],1),t._v(" "),e("li",[e("c-button",{attrs:{status:"none",to:"/account/signout"}},[e("i",{staticClass:"fa fa-sign-out-alt"}),t._v("\n                                        Sign Out\n                                    ")])],1),t._v(" "),e("hr"),t._v(" "),e("li",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"CHAT",expression:"'CHAT'"}]},[e("c-button",{attrs:{status:"none",to:"/settings/chat"}},[e("i",{staticClass:"fas fa-comments"}),t._v("\n                                        Chat Settings\n                                    ")])],1),t._v(" "),e("li",[e("c-button",{attrs:{status:"none",to:"/help"}},[e("i",{staticClass:"fas fa-info-circle"}),t._v("\n                                        FAQ\n                                    ")])],1)])],2)],1):t._e(),t._v(" "),t.signedIn||t.isLocked?t._e():e("li",[e("router-link",{on:{click:function(a){t.$store.commit("application/activateModal","login")}}},[t._v("\n                            Sign In\n                        ")])],1),t._v(" "),t.isLocked?t._e():e("li",[e("router-link",{attrs:{to:"/help"}},[t._v("\n                            Help\n                        ")])],1)])])])],2),t._v(" "),e("div",{staticClass:"game-shortcuts"},[e("div",{staticClass:"game-shortcuts__wrapper"},t._l(t.gamesShortcuts,function(t){return e("div",{staticClass:"game-shortcuts__item"},[e("img",{attrs:{src:t.image}})])}))]),t._v(" "),e("div",{staticClass:"launcher__main-content"},[t._t("default")],2)])},[],!1,null,"325db205",null);a.default=s.exports},257:function(t,a){}}]);