(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{131:function(e,s){},557:function(e,s,t){"use strict";var a=t(131);t.n(a).a},769:function(e,s,t){"use strict";t.r(s);var a=t(1),i=t.n(a),n={name:"purchase-block",props:{tags:{type:Array},title:{type:String,default:null},price:{type:Number,default:null},eligibleTokens:{type:Number,default:0},releaseDate:{type:String},offersPurchases:{type:Boolean,default:!1},isUnavailable:{type:Boolean,default:!1},isPurchased:{type:Boolean,default:!1},isReleased:{type:Boolean,default:!1},hasDemo:{type:Boolean,default:!1},inWishlist:{type:Boolean,default:!1},purchaseLink:String,fullReviewsLink:String,onClickPurchase:Function},components:{"c-block":function(e){return Promise.resolve().then(function(){var s=[t(868)];e.apply(null,s)}.bind(this)).catch(t.oe)}},methods:{dateFormat:function(e){return i()(e).format("MM/DD/YYYY")}}},l=(t(557),t(0)),c=Object(l.a)(n,function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("c-block",{staticClass:"purchase-block",attrs:{title:e.title,noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[e.tags?t("div",{staticClass:"purchase-block__tags"},e._l(e.tags,function(s,a){return t("div",{key:a},[e._v("\n            "+e._s(s)+"\n        ")])})):e._e(),e._v(" "),t("div",{staticClass:"purchase-block__price"},[e.price?t("span",[e._v("$"+e._s(e.price))]):t("span",[e._v("$0.00")])]),e._v(" "),t("div",{staticClass:"purchase-block__info"},[e.eligibleTokens?t("div",[e._v("Eligible for up to "),t("i",{staticClass:"fas fa-coins mx-1",staticStyle:{color:"#FADC72"}}),e._v(" HBX +"+e._s(e.eligibleTokens))]):e._e(),e._v(" "),e.offersPurchases?t("div",[e._v("Offers In-Game Purchases")]):e._e(),e._v(" "),e.releaseDate?t("div",{staticClass:"release-date"},[e._v("Release date: "+e._s(e.dateFormat(e.releaseDate)))]):e._e(),e._v(" "),e.isPurchased?t("div",{staticClass:"purchased-status"},[t("i",{staticClass:"fas fa-check"}),e._v("\n            Purchased\n        ")]):e._e(),e._v(" "),e.isUnavailable?t("div",{staticClass:"unavailable-status"},[t("i",{staticClass:"fas fa-ban"}),e._v("\n            Unavailable\n        ")]):e._e()]),e._v(" "),t("div",{staticClass:"purchase-block__buttons-group"},[e.isReleased&&e.price?t("c-button",{attrs:{status:"outline-success",href:e.purchaseLink,icon_hide:"",size:"xl",shadow:!1},on:{click:e.onClickPurchase}},[e._v("\n            Proceed to Purchase\n        ")]):e._e(),e._v(" "),e.price?e._e():t("c-button",{attrs:{status:"success",size:"lg",icon:"download",href:e.purchaseLink},on:{click:e.onClickPurchase}},[e._v("\n            Free Download\n        ")]),e._v(" "),e.hasDemo?t("c-button",{attrs:{icon_hide:"",icon:"download",href:e.fullReviewsLink}},[e._v("\n            Download Demo\n        ")]):e._e(),e._v(" "),e.inWishlist?e._e():t("button",{staticClass:"wishlist-btn",on:{click:function(s){e.$emit("addToWishlist")}}},[t("i",{staticClass:"fas fa-heart mr-2"}),e._v("\n            Add to Wishlist\n        ")]),e._v(" "),e.inWishlist?t("button",{staticClass:"wishlist-btn is-in",on:{click:function(s){e.$emit("removeFromWishlist")}}},[t("i",{staticClass:"fas fa-heart mr-2"}),e._v("\n            Remove from Wishlist\n        ")]):e._e()],1)])},[],!1,null,"46054138",null);s.default=c.exports}}]);