(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1282:function(e,t,s){"use strict";s.r(t);s(1);var a={name:"purchase-block",props:{tags:Array,title:{type:String,default:null},price:{type:Number,default:null},eligibleTokens:{type:Number,default:0},releaseDate:{type:String},offersPurchases:{type:Boolean,default:!1},isUnavailable:{type:Boolean,default:!1},isPurchased:{type:Boolean,default:!1},isReleased:{type:Boolean,default:!1},demoLink:{type:String,default:null},playLink:{type:String,default:null},inWishlist:Boolean,inShortcut:Boolean,purchaseLink:String,fullReviewsLink:String,onClickPurchase:Function},components:{"c-btn-fav":function(e){return s.e(195).then(function(){var t=[s(1410)];e.apply(null,t)}.bind(this)).catch(s.oe)}}},i=(s(888),s(0)),n=Object(i.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("c-block",{staticClass:"purchase-block",attrs:{title:e.title,noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[e.tags?s("div",{staticClass:"purchase-block__tags col-12"},e._l(e.tags,function(t,a){return s("div",{key:a},[e._v("\n            "+e._s(t)+"\n        ")])})):e._e(),e._v(" "),e.isUnavailable?e._e():s("div",{staticClass:"purchase-block__price col-12"},[e.price?s("span",[e._v(e._s(e._f("convertCurrency")(e.price)))]):s("span",[e._v("$0.00")])]),e._v(" "),e.eligibleTokens||e.offersPurchases||e.releaseDate||e.isPurchased||e.isUnavailable?s("div",{staticClass:"purchase-block__info col-12"},[e.eligibleTokens?s("div",[e._v("Eligible for up to "),s("i",{staticClass:"fas fa-coins mx-1",staticStyle:{color:"#FADC72"}}),e._v(" HBX +"+e._s(e.eligibleTokens))]):e._e(),e._v(" "),e.offersPurchases?s("div",[e._v("Offers In-Game Purchases")]):e._e(),e._v(" "),e.releaseDate?s("div",{staticClass:"release-date"},[e._v("Release date: "+e._s(e._f("customDate")(e.releaseDate,"MM/DD/YYYY")))]):e._e(),e._v(" "),e.isPurchased?s("div",{staticClass:"purchased-status"},[s("i",{staticClass:"fas fa-check"}),e._v("\n            Purchased\n        ")]):e._e(),e._v(" "),e.isUnavailable?s("div",{staticClass:"unavailable-status"},[s("i",{staticClass:"fas fa-ban"}),e._v("\n            Unavailable\n        ")]):e._e()]):e._e(),e._v(" "),s("div",{staticClass:"purchase-block__buttons-group col-12"},[e.isReleased&&e.price?s("c-button",{attrs:{status:"outline-success",href:e.purchaseLink,icon_hide:"",size:"xl",shadow:!1},on:{click:e.onClickPurchase}},[e._v("\n            Proceed to Purchase\n        ")]):e._e(),e._v(" "),!e.price&&e.isReleased?s("c-button",{attrs:{status:"success",size:"lg",icon:"download",href:e.purchaseLink},on:{click:e.onClickPurchase}},[e._v("\n            Free Download\n        ")]):e._e(),e._v(" "),e.demoLink?s("c-button",{attrs:{icon_hide:"",icon:"download",href:e.demoLink}},[e._v("\n            Download Demo\n        ")]):e._e(),e._v(" "),e.playLink?s("c-button",{attrs:{icon_hide:"",status:"success",size:"xl",icon:"download",href:e.playLink}},[e._v("\n            Play Now\n        ")]):e._e(),e._v(" "),s("c-btn-fav",{staticClass:"mt-3",attrs:{target:"Wishlist",active:e.inWishlist},on:{click:function(t){e.$emit("addToWishlist")}}}),e._v(" "),s("c-btn-fav",{staticClass:"mt-3",attrs:{target:"Shortcuts",active:e.inShortcut,activeIcon:"link",unactiveIcon:"unlink"},on:{click:function(t){e.$emit("addToShortcut")}}})],1)])},[],!1,null,"eb6bf25c",null);t.default=n.exports},259:function(e,t){},888:function(e,t,s){"use strict";var a=s(259);s.n(a).a}}]);