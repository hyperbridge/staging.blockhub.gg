(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{1125:function(t,i,n){"use strict";var c=n(356);n.n(c).a},1174:function(t,i,n){"use strict";n.r(i);var c={name:"notification",props:{notification:{type:Object,required:!0},icon:{type:String,require:!1}},data:function(){return{show:!0}},methods:{actionOnClose:function(){this.show=!1}},computed:{notif_icon:function(){switch(this.notification.type){case"info":return"info-circle";case"success":return"check-circle";case"warning":return"exclamation-triangle";case"danger":return"times-circle";default:return"cog"}}}},e=(n(1125),n(0)),s=Object(e.a)(c,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("transition",{attrs:{name:"custom-classes-transition",mode:"out-in","leave-active-class":"animated bounceOutRight"}},[t.show?n("div",{staticClass:"notif",class:t.notification.type},[n("div",{staticClass:"title"},[n("h5",{staticClass:"text-left",on:{click:function(i){if(i.target!==i.currentTarget)return null;t.$emit("showPopup")}}},[t.icon?n("c-img",{attrs:{src:t.icon}}):n("i",{class:"fas fa-"+t.notif_icon}),t._v("\n                "+t._s(t.notification.title)+"\n                "),n("div",{staticClass:"close",on:{click:function(i){t.actionOnClose()}}},[n("i",{staticClass:"fas fa-times"})])],1)]),t._v(" "),n("div",{staticClass:"text"},[t._v("\n            "+t._s(t.notification.text)+"\n        ")])]):t._e()])},[],!1,null,"7cb8bdff",null);i.default=s.exports},356:function(t,i){}}]);