(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1600:function(e,i,s){"use strict";s.r(i);var r={name:"exchange-bar",props:{price:{type:Object,required:!0},yours:Number,their:Number},data:function(){return{displayedPrice:0,interval:0}},computed:{mainPrice:function(){return this.price.sum}},watch:{mainPrice:function(e){var i=this;clearInterval(this.interval),e!==this.displayedPrice&&(this.interval=setInterval(function(){if(i.displayedPrice!==i.mainPrice){var e=(i.mainPrice-i.displayedPrice)/10;i.displayedPrice+=e}},20))}}},c=(s(921),s(0)),a=Object(c.a)(r,function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"transaction__exchange"},[s("div",{staticClass:"exchange__data"},[s("p",[e._v("Sell "+e._s(e.yours)+" assets for")]),e._v(" "),s("span",{staticClass:"data__price"},[e._v(e._s(e._f("convertCurrency")(e.price.yours)))])]),e._v(" "),s("div",{staticClass:"exchange__sum"},[s("div",{staticClass:"sum__circle"},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.price.sum||e.price.yours||e.price.their,expression:"price.sum || price.yours || price.their"}],staticClass:"circle__price",class:[e.price.sum>0?"positive":e.price.sum<0?"negative":""]},[e._v(e._s(e.price.sum>0?"+":"")+e._s(e._f("convertCurrency")(e.price.sum)))]),e._v(" "),s("c-icon",{staticClass:"circle__icon",class:{"circle__icon--small":e.price.sum||e.price.yours||e.price.their},attrs:{name:"exchange-alt"}})],1)]),e._v(" "),s("div",{staticClass:"exchange__data"},[s("p",[e._v("Buy "+e._s(e.their)+" assets for")]),e._v(" "),s("span",{staticClass:"data__price"},[e._v(e._s(e._f("convertCurrency")(e.price.their)))])])])},[],!1,null,"3a2e0c52",null);i.default=a.exports},200:function(e,i){},921:function(e,i,s){"use strict";var r=s(200);s.n(r).a}}]);