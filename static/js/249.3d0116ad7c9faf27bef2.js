(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{1254:function(t,i,a){"use strict";a.r(i);var e={name:"game-grid",props:{items:{type:Array,require:!0},itemInRow:{default:"4"}},components:{"c-tags":function(t){return a.e(8).then(function(){var i=[a(1229)];t.apply(null,i)}.bind(this)).catch(a.oe)}}},s=(a(750),a(0)),n=Object(s.a)(e,function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"product-grid__container"},[t._l(t.items,function(i,e){return t.items.length?a("div",{key:e,staticClass:"product-grid__item-container",style:{width:"calc(100% / "+t.itemInRow+")"}},[a("div",{staticClass:"product-grid__item"},[a("div",{staticClass:"card-body padding-0"},[a("a",{attrs:{href:"/#/product/"+i.id}},[a("c-img",{staticClass:"card-img-top",attrs:{src:i.images.medium_tile}})],1),t._v(" "),a("h4",[a("a",{attrs:{href:"/#/product/"+i.id}},[t._v(t._s(i.name))])]),t._v(" "),a("p",{staticClass:"card-text",attrs:{hidden:""}},[t._v(t._s(i.short_description)+" ")]),t._v(" "),a("c-tags",{attrs:{tags:i.developer_tags}})],1)])]):t._e()}),t._v(" "),t.items.length?t._e():a("p",[t._v("\n        Nothing could be found. Want to "),a("c-button",{attrs:{status:"plain"},on:{click:function(i){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Check for updates")]),t._v("?\n    ")],1)],2)},[],!1,null,"b2455d60",null);i.default=n.exports},187:function(t,i){},750:function(t,i,a){"use strict";var e=a(187);a.n(e).a}}]);