(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{1121:function(t,i,n){"use strict";var s=n(396);n.n(s).a},1649:function(t,i,n){"use strict";n.r(i);var s={name:"option-block",props:{image:String,title:String,subtitle:String,notification:String,list:[Array,Object],ntfColor:String,inWishlist:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},data:function(){return{selectedId:""}},components:{"c-button-fav":function(t){return n.e(221).then(function(){var i=[n(1650)];t.apply(null,i)}.bind(this)).catch(n.oe)},"c-option-list-item":function(t){return n.e(262).then(function(){var i=[n(1556)];t.apply(null,i)}.bind(this)).catch(n.oe)}},methods:{selectThis:function(t){this.selectedId=t}}},o=(n(1121),n(0)),c=Object(o.a)(s,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"option-block",class:{"box-shadow":t.shadow}},[n("div",{staticClass:"option-block__head"},[n("div",{staticClass:"option-block__head-logo"},[n("img",{attrs:{src:t.image}})]),t._v(" "),n("div",{staticClass:"option-block__head-info"},[n("div",{staticClass:"h3"},[t._v("\n                "+t._s(t.title)+"\n            ")]),t._v(" "),n("div",[t._v("\n                "+t._s(t.subtitle)+"\n            ")])])]),t._v(" "),n("div",{staticClass:"option-block__notification",style:{"background-color":t.ntfColor}},[t._v("\n        "+t._s(t.notification)+"\n    ")]),t._v(" "),n("div",{staticClass:"option-block__body"},[n("div",{staticClass:"option-block__list"},t._l(t.list,function(i){return n("c-option-list-item",{key:i.id,attrs:{selected:t.selectedId==i.id,image:i.image,price:i.price},on:{select:function(n){t.selectThis(i.id)}}},[t._v("\n                "+t._s(i.name)+"\n            ")])})),t._v(" "),n("div",{staticClass:"option-block__action-list"},[n("c-button",{staticClass:"my-2",attrs:{status:"second-info",size:"xl"},on:{click:function(i){t.$emit("buy")}}},[t._v("\n                Buy now\n            ")]),t._v(" "),n("c-button",{staticClass:"my-2",staticStyle:{"border-radius":"2px"},attrs:{status:"opacity-info",size:"xl"},on:{click:function(i){t.$emit("gift")}}},[t._v("\n                Gift\n            ")]),t._v(" "),n("c-button-fav",{staticClass:"text-center wishlist-btn",attrs:{target:"Wishlist",active:t.inWishlist},on:{click:function(i){t.$emit("addToWishlist")}}})],1)])])},[],!1,null,"199c4aca",null);i.default=c.exports},396:function(t,i){}}]);