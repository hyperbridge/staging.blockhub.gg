(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1259:function(t,i,e){"use strict";var s=e(358);e.n(s).a},1477:function(t,i,e){"use strict";e.r(i);var s={name:"game-includes-list",props:["list","showNumber"],data:function(){return{hiddenItems:"",limit:this.showNumber,showMore:!0}},components:{"c-includes-item":function(t){return e.e(217).then(function(){var i=[e(1487)];t.apply(null,i)}.bind(this)).catch(e.oe)},"c-load-more":function(t){return e.e(23).then(function(){var i=[e(1405)];t.apply(null,i)}.bind(this)).catch(e.oe)}},methods:{hiddenCount:function(){return this.list.length-this.showNumber},showAll:function(){this.limit=this.list.length,this.limitedList(this.limit),this.showMore=!1},hideAll:function(){this.limit=this.showNumber,this.limitedList(this.limit),this.showMore=!0},limitedList:function(t){var i=this.products,e=[];return i.forEach(function(i,s){s<=t-1&&e.push(i)}),e}},computed:{products:function(){var t=this;return this.list.map(function(i){return t.$store.state.marketplace.products[i]})}}},n=(e(1259),e(0)),l=Object(n.a)(s,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"game-includes"},[t._m(0),t._v(" "),e("transition-group",{staticClass:"game-includes__list",attrs:{name:"list",tag:"div"}},t._l(t.limitedList(t.limit),function(i,s){return e("div",{key:s,staticClass:"game-includes__item-container",style:{width:"calc(100% / "+t.showNumber+")"}},[e("c-includes-item",{attrs:{id:i.id,name:i.name,developer:i.developer,rating:i.rating.overall,image:i.images.mediumTile}})],1)})),t._v(" "),t.showMore&&t.list.length>t.showNumber-1?e("c-load-more",{on:{click:t.showAll}},[t._v("\n        Load More "),e("span",{staticClass:"ml-3"},[t._v("+"+t._s(t.hiddenCount()))])]):t._e(),t._v(" "),t.showMore?t._e():e("c-load-more",{on:{click:t.hideAll}},[t._v("\n        Hide\n    ")])],1)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"game-includes__title"},[i("h3",[this._v("What's included")])])}],!1,null,"353b7e21",null);i.default=l.exports},358:function(t,i){}}]);