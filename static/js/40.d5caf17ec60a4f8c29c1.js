(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1399:function(t,n,e){"use strict";e.r(n);var i={data:function(){return{val:"m",timeout:null,add:0}},mixins:[e(28).b],components:{"c-test":function(t){return e.e(253).then(function(){var n=[e(1259)];t.apply(null,n)}.bind(this)).catch(e.oe)}},computed:{account:function(){return this.$store.state.application.account},tradeURL:function(){var t=this.account,n=t.id,e=t.tradeURLId;return window.location.origin+"/#/tradeoffer/new/?partner="+n+"&id="+e}},methods:{method:function(t){console.log("evt from method",t)},copyTradeURL:function(){var t=this;navigator.clipboard.writeText(this.tradeURL).then(function(){return t.$snotify.info("TradeURL has been copied")}).catch(function(n){return t.$snotify.warning("TradeURL could not be copied")})},updateVal:function(t){console.log(t)}}},o=(e(705),e(0)),a=Object(o.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",[e("section",{staticClass:"trade-settings__url"},[e("h3",[t._v("Your trade URL")]),t._v(" "),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]),t._v(" "),e("div",{staticClass:"trade-settings__url-form"},[e("c-icon",{attrs:{name:"copy"}}),t._v(" "),e("c-input",{staticClass:"trade-settings__url-input",attrs:{value:t.tradeURL,readonly:""},on:{click:function(n){t.copyTradeURL()}}})],1),t._v(" "),e("c-button",{attrs:{status:"info",icon_hide:""},on:{click:function(n){t.$store.dispatch("application/createTradeURL")}}},[t._v("\n            Generate new trade URL\n        ")])],1)])},[],!1,null,"76d5c5f0",null);n.default=a.exports},148:function(t,n){},705:function(t,n,e){"use strict";var i=e(148);e.n(i).a}}]);