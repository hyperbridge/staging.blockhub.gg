(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1020:function(t,s,a){"use strict";var i=a(299);a.n(i).a},1489:function(t,s,a){"use strict";a.r(s);var i={props:["id"],components:{"c-heading-bar":function(t){return Promise.resolve().then(function(){var s=[a(1576)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-heading-bar-fields":function(t){return a.e(18).then(function(){var s=[a(1737)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-pagination":function(t){return a.e(204).then(function(){var s=[a(1652)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-collection-item":function(t){return a.e(20).then(function(){var s=[a(1715)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-popup":function(t){return a.e(11).then(function(){var s=[a(94)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-asset-popup":function(t){return a.e(278).then(function(){var s=[a(1675)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-content-navigation":function(t){return a.e(13).then(function(){var s=[a(1739)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-model-obj":a(645).a},data:function(){return{totalOwned:3,show_popup:!1,tmpItem:{},sales:!1,assetId:this.id}},methods:{numberFormat:function(t){return Math.log(t)/Math.log(10)},closePopup:function(){this.show_popup=!1,this.tmpItem={}},openPopup:function(t){this.tmpItem=t,this.show_popup=!0}},computed:{asset:function(){return this.$store.getters["assets/assets"][this.id]}}},e=(a(1020),a(0)),n=Object(e.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("c-layout",{attrs:{navigationKey:"asset"}},[a("div",{staticClass:"container-fluid"},[t.asset?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[t._v("\n                    Asset not found\n                ")])]),t._v(" "),t.asset?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-8 col-xl-9 margin-bottom-15"},[a("div",{staticClass:"asset-head"},[a("div",{staticClass:"asset-head__asset-title"},[a("div",{staticClass:"title-thumb"},[a("c-img",{attrs:{src:t.asset.image}})],1),t._v(" "),a("div",{staticClass:"title-text"},[a("h1",[t._v(t._s(t.asset.name))]),t._v(" "),a("span",[a("strong",[t._v(t._s(t.asset.gameName))])]),t._v(" "),a("span",{staticClass:"company"},[t._v(t._s(t.asset.productName))])])]),t._v(" "),a("div",{staticClass:"asset-head__icons"},[a("div",{staticClass:"icon_item"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-box"})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"h5 mb-0 font-weight-bold"},[t._v(t._s(t._f("numeralFormat")(t.asset.inventoryCount,"0 a")))]),t._v(" "),a("p",{staticClass:"p-0"},[t._v("Your Inventory")])])]),t._v(" "),a("div",{staticClass:"icon_item"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-shopping-basket"})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"h5 mb-0 font-weight-bold"},[t._v(t._s(t._f("numeralFormat")(t.asset.existingCount,"0.0 a")))]),t._v(" "),a("p",{staticClass:"p-0"},[t._v("For Sale")])])]),t._v(" "),a("div",{staticClass:"icon_item"},[a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-globe"})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"h5 mb-0 font-weight-bold"},[t._v(t._s(t._f("numeralFormat")(t.asset.forSaleCount,"0.0 a")))]),t._v(" "),a("p",{staticClass:"p-0"},[t._v("Existing")])])])])])]),t._v(" "),a("div",{staticClass:"col-12 d-none d-lg-block col-lg-4 col-xl-3 margin-bottom-15"},[a("div",{staticClass:"asset-head__company-logo"},[a("c-img",{staticClass:"img-fluid",attrs:{src:"https://i.imgur.com/BngHC98.png"}})],1)]),t._v(" "),a("c-model-obj",{attrs:{src:"../../../../static/assets-3d/sylvanas/Sylvanas.obj",mtl:"../../../../static/assets-3d/sylvanas/Sylvanas.mtl",backgroundAlpha:0}}),t._v(" "),a("div",{staticClass:"col-12 col-lg-6 margin-top-15 margin-bottom-15"},[a("c-block",{staticClass:"h-100",attrs:{title:"Attributes",noGutter:!0,onlyContentBg:!0,bgGradient:!0}},[a("template",{slot:"additional-action"},[a("a",{staticClass:"font-weight-bold text-uppercase text-white",attrs:{href:"#"}},[t._v("\n                                    Game View\n                                ")]),t._v(" "),a("a",{staticClass:"font-weight-bold text-uppercase text-white ml-4",attrs:{href:"#"}},[t._v("\n                                    Chart\n                                ")])]),t._v(" "),a("div",{staticClass:"metadata__table padding-bottom-10"},t._l(t.asset.metadata,function(s,i,e){return a("div",{key:e,staticClass:"item-row"},[a("div",{staticClass:"item-label"},[a("i",{staticClass:"fas fa-file"}),t._v("\n                                    "+t._s(t._f("upperFirstChar")(t._f("space")(i)))+"\n                                ")]),t._v(" "),a("div",{staticClass:"item-description"},["object"==typeof s?a("ul",{staticClass:"margin-0"},t._l(s,function(s,i,e){return a("li",{key:e},[t._v("\n                                            "+t._s(t._f("upperFirstChar")(t._f("space")(i)))+": "+t._s(s)+"\n                                        ")])})):a("span",[t._v("\n                                        "+t._s(s)+"\n                                    ")])])])}))],2)],1),t._v(" "),a("div",{staticClass:"col-12 col-lg-6 margin-top-15 margin-bottom-15"},[a("c-block",{staticClass:"h-100",attrs:{title:"Sales",noGutter:"",onlyContentBg:"",bgGradient:"",showActions:""}},[a("template",{slot:"additional-action"},[a("a",{staticClass:"font-weight-bold text-uppercase text-white",attrs:{href:"#"}},[t._v("\n                                    History\n                                ")]),t._v(" "),a("a",{staticClass:"font-weight-bold text-uppercase text-white ml-4",attrs:{href:"#"}},[t._v("\n                                    Chart\n                                ")])]),t._v(" "),t.sales?a("div"):a("p",[t._v("\n                            Nothing to show for now\n                        ")])],2)],1),t._v(" "),a("div",{staticClass:"col-12 margin-top-15 margin-bottom-15"},[a("c-block",{staticClass:"padding-bottom-0",attrs:{title:"Offers",noGutter:"",onlyContentBg:"",bgGradient:"",showActions:""}},[a("template",{slot:"additional-action"},[a("c-heading-bar-fields",{attrs:{name:"Rarity",icon:"trophy"}}),t._v(" "),a("c-heading-bar-fields",{attrs:{name:"Value",icon:"dollar"}})],1),t._v(" "),a("c-content-navigation",{attrs:{items:t.asset.offersList,setLimits:4},scopedSlots:t._u([{key:"default",fn:function(s){return a("div",{staticClass:"offers__list"},t._l(s.items,function(s,i){return a("div",{key:i,staticClass:"list-item"},[a("div",{staticClass:"item-name-img"},[a("c-img",{attrs:{src:s.image}}),t._v(" "),a("h4",[t._v(t._s(s.name))])],1),t._v(" "),a("div",{staticClass:"item-company text-center"},[t._v("\n                                        "+t._s(s.company_name)+"\n                                    ")]),t._v(" "),a("div",{staticClass:"item-info"},[a("span",{staticClass:"userName"},[t._v("\n                                            "+t._s(s.userName)+"\n                                        ")]),t._v(" "),a("span",{staticClass:"price"},[t._v("\n                                            $ "+t._s(s.price.current)+"\n                                        ")]),t._v(" "),s.price.current?a("a",{staticClass:"btn btn-success float-right",attrs:{href:"#"}},[a("c-icon",{attrs:{name:"cart-plus"}}),t._v("\n                                            Proceed to Purchase\n                                        ")],1):t._e()])])}))}}])},[a("template",{staticClass:"text-left",slot:"left-content"},[a("strong",[t._v("245345")]),t._v(" Available on the market\n                            ")]),t._v(" "),a("template",{staticClass:"text-right",slot:"right-content"},[a("strong",[t._v("319")]),t._v(" On the list\n                                "),a("a",{staticClass:"text-white mx-2",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-reply"})]),t._v(" "),a("a",{staticClass:"text-white",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-bookmark"})])])],2)],2)],1),t._v(" "),a("div",{staticClass:"col-12 margin-top-15 margin-bottom-15"},[a("c-block",{staticClass:"padding-bottom-0",attrs:{title:"Yours Inventory",noGutter:"",onlyContentBg:"",bgGradient:""}},[a("c-content-navigation",{attrs:{items:t.asset.inventoryList,setLimits:4},scopedSlots:t._u([{key:"default",fn:function(s){return a("div",{staticClass:"my-assets__list"},t._l(s.items,function(s,i){return a("div",{key:i,staticClass:"item"},[a("c-button",{attrs:{status:"plain"},on:{click:function(a){t.openPopup(s)}}},[a("i",{staticClass:"fas fa-external-link-alt"})]),t._v(" "),a("div",{staticClass:"item_thumb"},[a("c-img",{attrs:{src:s.image}})],1),t._v(" "),a("div",{staticClass:"item_info"},[a("h5",[t._v(t._s(s.name))]),t._v(" "),a("span",{staticClass:"price"},[t._v("\n                                            $ "+t._s(s.price.current)+"\n                                        ")]),t._v(" "),a("div",{staticClass:"switcher"},[a("c-switch",{attrs:{label:"Accept offers",checked:s.acceptOffers,size:"sm",label_position:"left"},on:{change:function(a){t.$store.commit("assets/negateValue",{id:s.id,iprop:"acceptOffers"})},changev2:function(a){var i;t.$store.commit("assets/negateValue",((i={})["id"+s.id]="acceptOffers",i))}}})],1)])],1)}))}}])})],1)],1),t._v(" "),a("div",{staticClass:"col-12 margin-top-15 margin-bottom-15"},[a("c-block",{staticClass:"pb-0",attrs:{title:"Collections Containing this Item",noGutter:"",onlyContentBg:"",bgGradient:""}},[t.asset.collections.length?a("c-content-navigation",{attrs:{items:t.asset.collections,setLimits:3},scopedSlots:t._u([{key:"default",fn:function(s){return a("div",{staticClass:"collections-container"},t._l(s.items,function(t,s){return a("div",{key:s,staticClass:"item"},[a("c-collection-item",{attrs:{item:t}})],1)}))}}])}):a("p",[t._v("\n                            Nothing to show for now\n                        ")])],1)],1)],1):t._e()]),t._v(" "),a("c-popup",{attrs:{activated:t.show_popup,width:550},on:{close:t.closePopup}},[a("c-asset-popup",{attrs:{slot:"custom_content",asset:t.tmpItem},slot:"custom_content"})],1)],1)},[],!1,null,"4d5a756b",null);s.default=n.exports},299:function(t,s){}}]);