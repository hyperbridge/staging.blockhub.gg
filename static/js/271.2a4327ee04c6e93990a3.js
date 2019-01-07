(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1625:function(a,t,e){(a.exports=e(15)(!1)).push([a.i,".purchase-block[data-v-e2d99dda]{margin:0}.purchase-block__price[data-v-e2d99dda]{font-size:38px;line-height:38px;font-weight:500;padding:0;margin:0;display:inline-block}.purchase-block__tags[data-v-e2d99dda]{display:flex;flex-wrap:wrap;padding:0;margin:-5px -3px 20px}.purchase-block__tags div[data-v-e2d99dda]{padding:0 7px;margin:3px;font-size:13px;border-radius:5px;color:#1c2032;background:#fadc72;font-weight:700;text-transform:capitalize}.purchase-block__info[data-v-e2d99dda]{display:flex;flex-direction:column;margin:20px 0;padding:0}.purchase-block__info .release-date[data-v-e2d99dda]{font-size:16px;margin-top:15px}.purchase-block__info .purchased-status[data-v-e2d99dda]{font-size:20px;color:#43c981;margin-top:15px}.purchase-block__info .purchased-status i[data-v-e2d99dda]{margin-right:8px}.purchase-block__info .unavailable-status[data-v-e2d99dda]{font-size:20px;color:#f75d5d;margin-top:15px}.purchase-block__info .unavailable-status i[data-v-e2d99dda]{margin-right:8px}.purchase-block__buttons-group[data-v-e2d99dda]{display:inline-flex;flex-direction:column;padding:0}.purchase-block__buttons-group .c-button[data-v-e2d99dda]{width:auto;margin:0 auto 15px 0;align-self:flex-start;justify-content:flex-start}.purchase-block__buttons-group .wishlist-btn[data-v-e2d99dda]{color:#fff;opacity:.8;background:transparent;padding:0;border:none;margin:15px auto 0 0;width:auto}.purchase-block__buttons-group .wishlist-btn.is-in[data-v-e2d99dda],.purchase-block__buttons-group .wishlist-btn[data-v-e2d99dda]:hover{text-decoration:none;opacity:1;cursor:pointer}.purchase-block__buttons-group .wishlist-btn.is-in i[data-v-e2d99dda],.purchase-block__buttons-group .wishlist-btn:hover i[data-v-e2d99dda]{color:#f75d5d}.purchase-block__buttons-group .wishlist-btn[data-v-e2d99dda]:active,.purchase-block__buttons-group .wishlist-btn[data-v-e2d99dda]:focus{outline:none;box-shadow:none}",""])},1626:function(a,t,e){"use strict";var s=e(966);e.n(s).a},2172:function(a,t,e){"use strict";e.r(t);e(0);var s={name:"purchase-block",props:{tags:Array,title:{type:String,default:null},price:{type:Number,default:null},eligibleTokens:{type:Number,default:0},releaseDate:{type:String},offersPurchases:{type:Boolean,default:!1},isUnavailable:{type:Boolean,default:!1},isPurchased:{type:Boolean,default:!1},isReleased:{type:Boolean,default:!1},demoLink:{type:String,default:null},playLink:{type:String,default:null},inWishlist:Boolean,inShortcut:Boolean,purchaseLink:String,fullReviewsLink:String,onClickPurchase:Function},components:{"c-button-fav":function(a){return e.e(221).then(function(){var t=[e(2259)];a.apply(null,t)}.bind(this)).catch(e.oe)}}},i=(e(1626),e(7)),n=Object(i.a)(s,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("c-block",{staticClass:"purchase-block",attrs:{title:a.title,noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[a.tags?e("div",{staticClass:"purchase-block__tags col-12"},a._l(a.tags,function(t,s){return e("div",{key:s},[a._v("\n            "+a._s(t)+"\n        ")])})):a._e(),a._v(" "),a.isUnavailable?a._e():e("div",{staticClass:"purchase-block__price col-12"},[a.price?e("span",[a._v(a._s(a._f("convertCurrency")(a.price)))]):e("span",[a._v("$0.00")])]),a._v(" "),a.eligibleTokens||a.offersPurchases||a.releaseDate||a.isPurchased||a.isUnavailable?e("div",{staticClass:"purchase-block__info col-12"},[a.eligibleTokens?e("div",[a._v("Eligible for up to "),e("i",{staticClass:"fas fa-coins mx-1",staticStyle:{color:"#FADC72"}}),a._v(" HBX +"+a._s(a.eligibleTokens))]):a._e(),a._v(" "),a.offersPurchases?e("div",[a._v("Offers In-Game Purchases")]):a._e(),a._v(" "),a.releaseDate?e("div",{staticClass:"release-date"},[a._v("Release date: "+a._s(a._f("customDate")(a.releaseDate,"MM/DD/YYYY")))]):a._e(),a._v(" "),a.isPurchased?e("div",{staticClass:"purchased-status"},[e("i",{staticClass:"fas fa-check"}),a._v("\n            Purchased\n        ")]):a._e(),a._v(" "),a.isUnavailable?e("div",{staticClass:"unavailable-status"},[e("i",{staticClass:"fas fa-ban"}),a._v("\n            Unavailable\n        ")]):a._e()]):a._e(),a._v(" "),e("div",{staticClass:"purchase-block__buttons-group col-12"},[a.isReleased&&a.price?e("c-button",{attrs:{status:"outline-success",href:a.purchaseLink,iconHide:"",size:"xl",shadow:!1},on:{click:a.onClickPurchase}},[a._v("\n            Proceed to Purchase\n        ")]):a._e(),a._v(" "),!a.price&&a.isReleased?e("c-button",{attrs:{status:"success",size:"lg",icon:"download",href:a.purchaseLink},on:{click:a.onClickPurchase}},[a._v("\n            Free Download\n        ")]):a._e(),a._v(" "),a.demoLink?e("c-button",{attrs:{iconHide:"",icon:"download",href:a.demoLink}},[a._v("\n            Download Demo\n        ")]):a._e(),a._v(" "),a.playLink?e("c-button",{attrs:{iconHide:"",status:"success",size:"xl",icon:"download",href:a.playLink}},[a._v("\n            Play Now\n        ")]):a._e(),a._v(" "),e("c-button-fav",{staticClass:"mt-3",attrs:{target:"Wishlist",active:a.inWishlist},on:{click:function(t){a.$emit("addToWishlist")}}}),a._v(" "),e("c-button-fav",{staticClass:"mt-3",attrs:{target:"Shortcuts",active:a.inShortcut,activeIcon:"link",unactiveIcon:"unlink"},on:{click:function(t){a.$emit("addToShortcut")}}})],1)])},[],!1,null,"e2d99dda",null);t.default=n.exports},966:function(a,t,e){var s=e(1625);"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);e(14)("0d640ad7",s,!0,{})}}]);