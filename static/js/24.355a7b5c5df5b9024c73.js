(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1143:function(t,e,n){"use strict";var a=n(395);n.n(a).a},1802:function(t,e,n){"use strict";n.r(e);var a={components:{"c-money-info":function(t){return n.e(371).then(function(){var e=[n(1640)];t.apply(null,e)}.bind(this)).catch(n.oe)}},props:{image:String,description:String,rating:Object,funds:{obtained:Number,goal:Number},parentImage:String,parentName:String,parentDeveloper:String,id:Number,customClass:{type:String}},data:function(){return{hovering:!1}},computed:{goalProgress:function(){if(!this.funds)return 0;var t=this.funds,e=t.obtained,n=t.goal;return Math.round(e/n*100)}},filters:{currencySign:function(t){switch(t){case"EUR":return"€";case"GBP":return"£";default:return"$"}}}},s=(n(1143),n(0)),r=Object(s.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-card__item",class:t.customClass,on:{mouseover:function(e){t.hovering=!0},mouseout:function(e){t.hovering=!1}}},[t.parentName?n("div",{staticClass:"head"},[t.parentImage?n("div",{staticClass:"img"},[n("c-img",{attrs:{src:t.parentImage}})],1):t._e(),t._v(" "),n("div",{staticClass:"text"},[n("h4",[t._v(t._s(t.parentName))]),t._v(" "),t.parentDeveloper?n("p",[t._v(t._s(t.parentDeveloper))]):t._e()])]):t._e(),t._v(" "),n("c-button",{attrs:{status:"none",to:"/project/"+t.id}},[n("c-img",{attrs:{src:t.image}}),t._v(" "),n("div",{staticClass:"description"},[t._v(t._s(t.description))])],1),t._v(" "),n("c-money-info",{attrs:{label:"Obtained Funds",percent:t.goalProgress,amount:t.funds?t.funds.obtained:0,goal:t.funds?t.funds.goal:0}}),t._v(" "),n("div",{staticClass:"item-action"},[n("c-button",{attrs:{status:"info",to:"/project/"+t.id,iconHide:""}},[t._v("Check it out")]),t._v(" "),n("c-button",{attrs:{status:"success",to:"/project/"+t.id,iconHide:"",hidden:""}},[t._v("Donate Funds")])],1),t._v(" "),t.hovering?n("c-simple-vote",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"RATINGS",expression:"'RATINGS'"}],attrs:{rating:t.rating}}):t._e()],1)},[],!1,null,null,null);e.default=r.exports},395:function(t,e){}}]);