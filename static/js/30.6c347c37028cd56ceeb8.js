(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{175:function(t,e){},1814:function(t,e,r){"use strict";r.r(e);var i=r(29),s={name:"product-card-dynamic",props:{product:{type:Object,required:!0}},components:{"c-tags":function(t){return r.e(12).then(function(){var e=[r(1788)];t.apply(null,e)}.bind(this)).catch(r.oe)}},mixins:[i.b],data:function(){return{displayPreview:!1,interval:null,currentImage:0}},methods:{show_preview:function(t){var e=this;clearTimeout(this.timeout),this.debounce(function(){t||clearInterval(e.interval),!t||e.displayPreview||e.product.video&&e.autoplay||e.slider(),e.displayPreview=t},t?250:0)},slider:function(){var t=this;this.interval=setInterval(function(){var e=t.currentImage,r=t.product.images;t.currentImage=e===r.preview.length-1?0:e+1},1600)}},computed:{autoplay:function(){return this.$store.state.application.settings.client.autoplay}}},a=(r(885),r(0)),o=Object(a.a)(s,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-grid__item",on:{mouseover:function(e){t.show_preview(!0)},mouseout:function(e){t.show_preview(!1)}}},[r("div",{staticClass:"position-relative"},[t.product.price?r("div",{staticClass:"product-grid__item-price"},[r("strong",[t._v(t._s(t._f("convertCurrency")(t.product.price)))])]):t._e(),t._v(" "),r("c-button",{staticClass:"card-img-top",attrs:{status:"none",to:"/product/"+t.product.id}},[r("transition",{attrs:{name:"fade"}},[t.displayPreview?[t.product.video&&t.autoplay?r("video",{staticClass:"card-img-top",attrs:{width:"100%",autoplay:""}},[r("source",{attrs:{src:t.product.video,type:"video/mp4"}})]):r("transition-group",{attrs:{tag:"div",name:"slide-left"}},t._l(t.product.images.preview,function(e,i){return i===t.currentImage?r("c-img",{key:e,staticClass:"card-img-top",attrs:{src:t.product.images.preview[i]}}):t._e()}))]:r("c-img",{staticClass:"card-img-top",attrs:{src:t.product.images.mediumTile}})],2)],1)],1),t._v(" "),r("h4",[r("c-button",{attrs:{status:"none",to:"/product/"+t.product.id}},[t._v(t._s(t.product.name))])],1),t._v(" "),r("p",{staticClass:"card-text",attrs:{hidden:""}},[t._v(t._s(t.product.shortDescription)+" ")]),t._v(" "),r("c-tags",{attrs:{tags:t.product.developerTags.slice(0,3)}})],1)},[],!1,null,"19f923bc",null);e.default=o.exports},885:function(t,e,r){"use strict";var i=r(175);r.n(i).a}}]);