(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1003:function(t,a,l){"use strict";var n=l(314);l.n(n).a},1551:function(t,a,l){"use strict";l.r(a);var n={props:["id"],components:{},computed:{wallet:function(){if(this.$store.state.application.wallets){var t=this.$store.state.application.wallets[this.id];if(t)return t}}}},s=(l(1003),l(0)),e=Object(s.a)(n,function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("c-layout",{attrs:{navigationKey:"wallet"}},[l("div",{staticClass:"row"},[t.wallet?t._e():l("div",{staticClass:"col-12"},[t._v("\n            Wallet not found\n        ")]),t._v(" "),t.wallet?l("div",{staticClass:"col-12"},[t._v("\n            "+t._s(t.wallet.name)+"\n            "+t._s(t.wallet.id)+"\n            "),l("br"),t._v(" "),l("a",{attrs:{href:"#/wallet/"+t.wallet.id+"/transactions"}},[t._v("Transactions")])]):t._e()])])},[],!1,null,null,null);a.default=e.exports},314:function(t,a){}}]);