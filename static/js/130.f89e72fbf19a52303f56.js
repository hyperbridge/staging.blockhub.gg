(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1137:function(t,a,n){"use strict";var s=n(384);n.n(s).a},1618:function(t,a,n){"use strict";n.r(a);var s={props:["id"],components:{},computed:{wallet:function(){if(this.$store.state.application.wallets){var t=this.$store.state.application.wallets[this.id];if(t)return t}}},created:function(){this.$store.commit("application/activateModal","coming-soon")}},l=(n(1137),n(0)),e=Object(l.a)(s,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("c-layout",{attrs:{navigationKey:"wallet"}},[n("div",{staticClass:"row"},[t.wallet?t._e():n("div",{staticClass:"col-12"},[t._v("\n            Wallet not found\n        ")]),t._v(" "),t.wallet?n("div",{staticClass:"col-12"},[t._v("\n            "+t._s(t.wallet.name)+"\n            "+t._s(t.wallet.id)+"\n            "),n("br"),t._v(" "),n("c-button",{attrs:{status:"none",to:"/wallet/"+t.wallet.id+"/transactions"}},[t._v("Transactions")])],1):t._e()])])},[],!1,null,null,null);a.default=e.exports},384:function(t,a){}}]);