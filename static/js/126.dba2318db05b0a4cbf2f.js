(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{1059:function(t,n,s){"use strict";var e=s(372);s.n(e).a},1558:function(t,n,s){"use strict";s.r(n);var e=s(1),i=s.n(e),a={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var n=[s(1655)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-content-navigation":function(t){return s.e(11).then(function(){var n=[s(1435)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var n=[s(1573)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-heading-bar-fields":function(t){return s.e(16).then(function(){var n=[s(1555)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-block":function(t){return Promise.resolve().then(function(){var n=[s(1574)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-pagination":function(t){return s.e(194).then(function(){var n=[s(1430)];t.apply(null,n)}.bind(this)).catch(s.oe)},"c-assets-grid":function(t){return s.e(208).then(function(){var n=[s(1546)];t.apply(null,n)}.bind(this)).catch(s.oe)}},computed:{collection:function(){return this.$store.state.marketplace.collections[this.id-1]},getAssets:function(){var t=this.$store.state.marketplace.collections[this.id].assets,n=this.$store.state.marketplace.assets,s=[];return t&&t.forEach(function(t,e){n[t]&&s.push(n[t])}),s},timeAgo:function(){return i()(this.collection.updates).fromNow()}}},o=(s(1059),s(0)),c=Object(o.a)(a,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("c-layout",{attrs:{navigationKey:"product"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 margin-bottom-40"},[s("div",{staticClass:"collection-header"},[s("div",{staticClass:"collection-header__name"},[s("div",{staticClass:"p-0 margin-bottom-5 h1 text-white"},[t._v(t._s(t.collection.name))]),t._v(" "),s("div",[s("strong",{staticClass:"mr-3"},[t._v("\n                                    "+t._s(t.getAssets.length)+" Items\n                                ")]),t._v("\n                                Updated "+t._s(t.timeAgo)+"\n                            ")])]),t._v(" "),s("div",{staticClass:"collection-header__stats"},[s("div",[s("div",{staticClass:"h5 font-weight-bold m-0 p-0 text-white"},[t._v("\n                                    Owner\n                                ")]),t._v("\n                               "+t._s(t.collection.author)+"\n                            ")]),t._v(" "),s("div",[s("div",{staticClass:"h5 font-weight-bold m-0 p-0 text-white"},[t._v("\n                                    Estimated Value\n                                ")]),t._v("\n                                "+t._s(t._f("convertCurrency")(t.collection.estimatedValue))+"\n                            ")]),t._v(" "),s("div",[s("div",{staticClass:"h5 font-weight-bold m-0 p-0 text-white"},[t._v("\n                                    Item Count\n                                ")]),t._v("\n                                "+t._s(t.getAssets.length)+"\n                            ")]),t._v(" "),s("div",[s("div",{staticClass:"h5 font-weight-bold m-0 p-0 text-white"},[t._v("\n                                    Last Update\n                                ")]),t._v("\n                                "+t._s(t.timeAgo)+"\n                            ")])])])]),t._v(" "),s("div",{staticClass:"col-12"},[s("c-block",[s("c-heading-bar",{attrs:{name:"Items"}}),t._v(" "),s("div",{staticClass:"d-flex justify-content-between align-items-center margin-bottom-20"},[s("div",{staticClass:"filter_blk form-inline"},[s("div",{staticClass:"form-group"},[s("label",[t._v("\n                                        Filter by\n                                    ")]),t._v(" "),s("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},[s("option",[t._v("Type")]),t._v(" "),s("option",[t._v("2")]),t._v(" "),s("option",[t._v("3")]),t._v(" "),s("option",[t._v("4")]),t._v(" "),s("option",[t._v("5")])])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("\n                                        Game\n                                    ")]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text"}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("\n                                        Name\n                                    ")]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text"}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("c-button",{staticClass:"mr-4",attrs:{status:"danger",icon:"times"}},[t._v("Clear")]),t._v(" "),s("c-button",{attrs:{status:"info",icon:"filter"}},[t._v("More filters")])],1)]),t._v(" "),s("div",{staticClass:"d-inline-flex"},[s("c-heading-bar-fields",{attrs:{name:"Rarity",icon:"fas fa-trophy"}}),t._v(" "),s("c-heading-bar-fields",{attrs:{name:"Value",icon:"fas fa-dollar"}})],1)]),t._v(" "),s("c-assets-grid",{attrs:{list:t.getAssets}}),t._v(" "),s("c-pagination",{attrs:{pages:8}})],1)],1)])])])},[],!1,null,"7122fa35",null);n.default=c.exports},372:function(t,n){}}]);