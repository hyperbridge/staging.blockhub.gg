(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{152:function(t,i){},153:function(t,i){},1708:function(t,i,e){"use strict";e.r(i);e(55);var n=e(16),s={name:"collection-list",props:["title","description","collections"],components:{"c-swiper":n.swiper,"c-slide":n.swiperSlide,"c-collection-item":function(t){return e.e(20).then(function(){var i=[e(1715)];t.apply(null,i)}.bind(this)).catch(e.oe)}},data:function(){return{options:{slidesPerView:3,spaceBetween:10,pagination:{el:".collection-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:1,spaceBetween:0}}}}}},c=(e(832),e(831),e(0)),o=Object(c.a)(s,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"collection-list"},[e("div",{staticClass:"collection-list__header"},[e("h3",[t._v(t._s(t.title))]),t._v(" "),e("div",[t._v(t._s(t.description))]),t._v(" "),e("div",{staticClass:"slider-dots"},[e("div",{ref:"sliderDots",staticClass:"collection-swiper-pagination swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})])]),t._v(" "),e("div",{staticClass:"collection-list__container"},[t.collections.length?e("c-swiper",{staticClass:"padding-10",attrs:{options:t.options}},t._l(t.collections,function(t,i){return e("c-slide",{key:i},[e("c-collection-item",{attrs:{item:t}})],1)})):t._e(),t._v(" "),t.collections.length?t._e():e("p",{staticStyle:{padding:"20px","text-align":"center"}},[t._v("\n            No collections yet. "),e("c-button",{attrs:{status:"plain"},on:{click:function(i){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Create one")]),t._v("?\n        ")],1)],1)])},[],!1,null,"bed729bc",null);i.default=o.exports},831:function(t,i,e){"use strict";var n=e(152);e.n(n).a},832:function(t,i,e){"use strict";var n=e(153);e.n(n).a}}]);