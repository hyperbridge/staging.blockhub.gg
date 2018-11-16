(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1444:function(t,s,a){"use strict";a.r(s);var i=a(2),n=a.n(i),c=a(19),e=a.n(c),o=a(9),l={components:{"c-layout":function(t){return Promise.resolve().then(function(){var s=[a(1434)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-block":function(t){return Promise.resolve().then(function(){var s=[a(1398)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var s=[a(1387)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-custom-modal":function(t){return a.e(181).then(function(){var s=[a(1315)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-tabs":function(t){return a.e(164).then(function(){var s=[a(1247)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-tab":function(t){return a.e(163).then(function(){var s=[a(1248)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-game-includes-item":function(t){return a.e(195).then(function(){var s=[a(1333)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-btn-fav":function(t){return a.e(186).then(function(){var s=[a(1338)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-project-card":function(t){return a.e(22).then(function(){var s=[a(1306)];t.apply(null,s)}.bind(this)).catch(a.oe)}},data:function(){return{wallets:[],expert_mode:!1}},methods:{exportAccountFile:function(){o.sendCommand("exportAccountFileRequest")},importAccountFile:function(){o.sendCommand("importAccountFileRequest")},deleteAccount:function(){o.sendCommand("deleteAccountRequest")}},computed:{identityCount:function(){return e()(this.$store.state.application.identities).length},account:function(){return this.$store.state.application.account},identity:function(){var t=this.$store.state.marketplace.products,s=this.$store.state.funding.projects,a=this.$store.getters["application/identity"];return n()({},a,{product_wishlist:e()(a.product_wishlist).map(function(s){return t[s]}),project_wishlist:e()(a.project_wishlist).map(function(t){return s[t]})})}}},r=(a(856),a(855),a(0)),d=Object(r.a)(l,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("c-layout",{attrs:{navigationKey:"account"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("c-block",{attrs:{title:"Account Information",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Email Address")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Email",readonly:""},domProps:{value:t.account.email}}),t._v(" "),a("span",{staticClass:"form-text"},[t._v("This field cannot be changed at this time.")])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Given Name")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Given name",readonly:""},domProps:{value:t.account.first_name}}),t._v(" "),a("span",{staticClass:"form-text"},[t._v("This field cannot be changed at this time.")])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Family Name")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Family name",readonly:""},domProps:{value:t.account.last_name}}),t._v(" "),a("span",{staticClass:"form-text"},[t._v("This field cannot be changed at this time.")])])]),t._v(" "),a("div",{staticClass:"form-group row",attrs:{hidden:""}},[a("label",{staticClass:"switch switch-sm col-sm-3"},[a("label",[t._v("Public Address")])]),t._v(" "),a("div",{staticClass:"col-sm-9"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Public address",readonly:""},domProps:{value:t.account.public_address}}),t._v(" "),a("span",{staticClass:"form-text"},[t._v("Your account is an Ethereum wallet, and can be "),a("a",{attrs:{href:"https://etherscan.io/address/"+t.account.public_address}},[t._v("found on the blockchain using the Public Address")])])])])]),t._v(" "),a("div",{staticClass:"col-12"},[a("c-button",{attrs:{hidden:""},on:{click:t.importAccountFile}},[t._v("Import Account")]),t._v(" "),a("c-button",{attrs:{hidden:""},on:{click:t.exportAccountFile}},[t._v("Export Saved Account")]),t._v(" "),a("c-button",{staticClass:"outline-danger",on:{click:t.deleteAccount}},[t._v("Clear Saved Account")])],1)])])]),t._v(" "),a("c-block",{attrs:{title:"Overview",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[a("div",{staticClass:"stat-card-container"},[a("div",{staticClass:"stat-card-list"},[a("router-link",{staticClass:"route stat-card",attrs:{tag:"div",to:"/account/identities"}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-id-card"})]),t._v(" "),a("div",{staticClass:"info"},[a("h4",[t._v("Profiles")]),t._v(" "),a("div",{staticClass:"stat"},[a("div",[t._v("\n                                        "+t._s(t.account.identities.length)+" owned by your account\n                                    ")])]),t._v(" "),a("p",[t._v("\n                                    View and manage profiles on this account.\n                                ")])])]),t._v(" "),a("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"TICKETS",expression:"'TICKETS'"}],staticClass:"stat-card"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-question-circle"})]),t._v(" "),a("div",{staticClass:"info"},[a("h4",[t._v("Support Tickets")]),t._v(" "),a("div",{staticClass:"stat"},[a("div",[a("i",{staticClass:"fa fa-clock"}),t._v("\n                                        35\n                                    ")]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-exclamation-triangle",staticStyle:{color:"#FADC72"}}),t._v("\n                                        12\n                                    ")]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-check",staticStyle:{color:"#43C981"}}),t._v("\n                                        5\n                                    ")])]),t._v(" "),a("p",[t._v("\n                                    Viev and Manage Profiles on this account.\n                                ")])])]),t._v(" "),a("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"PAYMENTS",expression:"'PAYMENTS'"}],staticClass:"stat-card"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-dollar-sign"})]),t._v(" "),a("div",{staticClass:"info"},[a("h4",[t._v("Open Payments")]),t._v(" "),a("div",{staticClass:"stat"},[a("div",[t._v("\n                                        $ 2,345,00 om 6 Payments\n                                    ")])]),t._v(" "),a("p",[t._v("\n                                    Viev and Manage Profiles on this account.\n                                ")])])]),t._v(" "),a("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"USER_ACTIVITY",expression:"'USER_ACTIVITY'"}],staticClass:"stat-card"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-users"})]),t._v(" "),a("div",{staticClass:"info"},[a("h4",[t._v("User Activity")]),t._v(" "),a("div",{staticClass:"stat"},[a("div",[a("i",{staticClass:"fas fa-circle",staticStyle:{color:"#43C981"}}),t._v("\n                                        3\n                                    ")]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-circle",staticStyle:{color:"#FADC72"}}),t._v("\n                                        1\n                                    ")]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-circle",staticStyle:{color:"#F75D5D"}}),t._v("\n                                        0\n                                    ")]),t._v(" "),a("div",[a("i",{staticClass:"fas fa-circle",staticStyle:{color:"#A2A3BE"}}),t._v("\n                                        5\n                                    ")])]),t._v(" "),a("p",[t._v("\n                                    Viev and Manage Profiles on this account.\n                                ")])])])],1)])]),t._v(" "),a("c-block",{attrs:{title:"Wishlists",noGutter:"",bgGradient:"",onlyContentBg:""}},[a("c-tabs",{attrs:{tabNames:["Products","Projects"],styled:""}},[a("c-tab",{attrs:{tab_id:1}},[t.identity.product_wishlist.length?a("div",{staticClass:"wishlist-box"},t._l(t.identity.product_wishlist,function(s){return a("div",{key:s.id,staticClass:"wishlist-box__item"},[a("c-game-includes-item",{attrs:{id:s.id,image:s.images.medium_tile,name:s.name,rating:s.rating.overall,developer:s.developer}}),t._v(" "),a("c-btn-fav",{attrs:{target:"wishlist",active:!0},on:{click:function(a){t.$store.dispatch("community/updateWishlist",["product",s.id])}}})],1)})):a("p",[t._v("\n                            You have not added any products to your wishlist\n                        ")])]),t._v(" "),a("c-tab",{attrs:{tab_id:2}},[t.identity.project_wishlist.length?a("div",{staticClass:"wishlist-box"},t._l(t.identity.project_wishlist,function(s){return a("div",{key:s.id,staticClass:"wishlist-box__item"},[a("c-project-card",{staticClass:"p-0 mb-2",attrs:{image:s.images[0],funds:s.funds}}),t._v(" "),a("c-btn-fav",{attrs:{target:"wishlist",active:!0},on:{click:function(a){t.$store.dispatch("community/updateWishlist",["project",s.id])}}})],1)})):a("p",[t._v("\n                            You have not added any projects to your wishlist\n                        ")])])],1)],1)],1)])])},[],!1,null,"07f52380",null);s.default=d.exports},288:function(t,s){},289:function(t,s){},855:function(t,s,a){"use strict";var i=a(288);a.n(i).a},856:function(t,s,a){"use strict";var i=a(289);a.n(i).a}}]);