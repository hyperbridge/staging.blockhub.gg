(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1529:function(t,s,e){"use strict";e.r(s);var a=e(10),i=e.n(a),r=e(13),n=e.n(r),l=e(127),c=e.n(l),o=e(1),_=e.n(o),f={props:["assetId","profileId"],data:function(){return{priceHistory:c()({length:100},function(t,s){return Math.round(Math.random()*(s+1))}),priceDates:c()({length:100},function(t,s){return _()().add(-100+s,"days").format("DD / MM")}),chartOptions:{maintainAspectRatio:!1}}},components:{"c-line-chart":function(t){return Promise.all([e.e(285),e.e(344)]).then(function(){var s=[e(1632)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-user":function(t){return e.e(243).then(function(){var s=[e(1679)];t.apply(null,s)}.bind(this)).catch(e.oe)}},computed:{asset:function(){return this.$store.getters["assets/assets"][this.assetId]},chartData:function(){return{labels:this.priceDates,datasets:[{label:"Price history",data:this.priceHistory,backgroundColor:"#83D0F2"}]}},priceHistorySorted:function(){return[].concat(n()(this.priceHistory)).sort()},offersMap:function(){var t=this;return this.$store.getters["assets/offersMap"].filter(function(s){var e=i()(s,2);e[0];return e[1].asset.id==t.assetId})},profile:function(){return this.$store.state.application.activeProfile}}},u=(e(918),e(0)),p=Object(u.a)(f,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.asset?e("div",{staticClass:"asset__wrapper"},[e("c-img",{staticClass:"asset__background-img",attrs:{src:t.asset.image}}),t._v(" "),e("h1",{staticClass:"asset__name"},[t._v(t._s(t.asset.name))]),t._v(" "),e("div",{staticClass:"asset__details"},[e("c-img",{staticClass:"asset__img",attrs:{src:t.asset.image}}),t._v(" "),e("ul",{staticClass:"details__list"},[e("li",{staticClass:"details__list-item"},[e("span",{staticClass:"details__title"},[t._v("Game:")]),t._v("\n                    "+t._s(t.asset.product.name)+"\n                ")]),t._v(" "),e("li",{staticClass:"details__list-item"},[e("span",{staticClass:"details__title"},[t._v("Type:")]),t._v("\n                    "+t._s(t.asset.metadata.type)+"\n                ")]),t._v(" "),t._m(0),t._v(" "),e("li",{staticClass:"details__list-item"},[e("span",{staticClass:"details__title"},[t._v("Maximum Price:")]),t._v("\n                    "+t._s(t.priceHistorySorted[0])+" $\n                ")]),t._v(" "),e("li",{staticClass:"details__list-item"},[e("span",{staticClass:"details__title"},[t._v("Minimum Price:")]),t._v("\n                    "+t._s(t.priceHistorySorted[t.priceHistory.length-1])+" $\n                ")]),t._v(" "),t._m(1)])],1),t._v(" "),e("c-line-chart",{attrs:{data:t.chartData,options:t.chartOptions,height:400}}),t._v(" "),e("h2",{key:"offers",staticClass:"offers__title"},[t._v("\n            "+t._s("Marketplace Asset Offers"===t.$route.name?"Offers":"Offer bids")+"\n        ")]),t._v(" "),e("nav",{staticClass:"back-btn"},[e("router-link",{directives:[{name:"show",rawName:"v-show",value:"Marketplace Asset Offer"===t.$route.name,expression:"$route.name === 'Marketplace Asset Offer'"}],attrs:{to:{name:"Marketplace Asset Offers"}}},[e("c-icon",{attrs:{name:"arrow-left"}}),t._v("\n                Go back\n            ")],1)],1),t._v(" "),e("div",{staticClass:"offers-route"},[e("transition",{attrs:{name:"slide"}},[e("router-view",{attrs:{offersMap:t.offersMap,asset:t.asset,profile:t.profile}})],1)],1)],1):e("p",[t._v("Asset with id "+t._s(t.id)+" doesn't exist")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"details__list-item"},[s("span",{staticClass:"details__title"},[this._v("Average Price:")]),this._v("\n                    14 $\n                ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"details__list-item"},[s("span",{staticClass:"details__title"},[this._v("Sold in 24hrs:")]),this._v("\n                    412\n                ")])}],!1,null,"6b9195ad",null);s.default=p.exports},206:function(t,s){},918:function(t,s,e){"use strict";var a=e(206);e.n(a).a}}]);