(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{442:function(t,n,a){"use strict";var i=a(52);a.n(i).a},52:function(t,n){},818:function(t,n,a){"use strict";a.r(n);var i={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var n=[a(807)];t.apply(null,n)}.bind(this)).catch(a.oe)},"c-content-navigation":function(t){return a.e(102).then(function(){var n=[a(700)];t.apply(null,n)}.bind(this)).catch(a.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var n=[a(247)];t.apply(null,n)}.bind(this)).catch(a.oe)},"c-heading-bar-fields":function(t){return a.e(104).then(function(){var n=[a(692)];t.apply(null,n)}.bind(this)).catch(a.oe)},"c-block":function(t){return a.e(98).then(function(){var n=[a(696)];t.apply(null,n)}.bind(this)).catch(a.oe)},"c-pagination":function(t){return a.e(105).then(function(){var n=[a(701)];t.apply(null,n)}.bind(this)).catch(a.oe)},"c-assets-grid":function(t){return a.e(116).then(function(){var n=[a(742)];t.apply(null,n)}.bind(this)).catch(a.oe)}},computed:{getAssets:function(){var t=this.$store.state.marketplace.collections[this.id].assets,n=this.$store.state.marketplace.assets,a=[];return t&&t.forEach(function(t,i){n[t]&&a.push(n[t])}),a}}},s=(a(442),a(0)),o=Object(s.a)(i,function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("c-layout",{attrs:{navigationKey:"product"}},[a("div",{staticClass:"content",attrs:{id:"content"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("c-block",[a("c-heading-bar",{attrs:{name:"Items"}},[a("template",{slot:"additional-action"},[a("c-heading-bar-fields",{attrs:{name:"Rarity",icon:"fas fa-trophy"},on:{click_up:function(t){},click_down:function(t){}}}),t._v(" "),a("c-heading-bar-fields",{attrs:{name:"Value",icon:"fas fa-dollar"},on:{click_up:function(t){},click_down:function(t){}}})],1)],2),t._v(" "),a("div",{staticClass:"filter_blk form-inline"},[a("div",{staticClass:"form-group"},[a("label",[t._v("\n                                    Filter by\n                                ")]),t._v(" "),a("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"}},[a("option",[t._v("Type")]),t._v(" "),a("option",[t._v("2")]),t._v(" "),a("option",[t._v("3")]),t._v(" "),a("option",[t._v("4")]),t._v(" "),a("option",[t._v("5")])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("\n                                    Game\n                                ")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("\n                                    Name\n                                ")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("c-button",{staticClass:"mr-4",attrs:{status:"danger",icon:"times"}},[t._v("Clear")]),t._v(" "),a("c-button",{attrs:{status:"info",icon:"filter"}},[t._v("More filters")])],1)]),t._v(" "),a("c-assets-grid",{attrs:{list:t.getAssets}}),t._v(" "),a("c-pagination",{attrs:{pages:8}})],1)],1)])])])])},[],!1,null,"520f0328",null);n.default=o.exports}}]);