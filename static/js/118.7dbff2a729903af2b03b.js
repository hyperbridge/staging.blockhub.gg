(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1086:function(t,n,a){"use strict";var s=a(365);a.n(s).a},1520:function(t,n,a){"use strict";a.r(n);var s={props:["id"],components:{},computed:{transaction:function(){if(this.$store.state.application.transactions){var t=this.$store.state.application.transactions[this.id];if(t)return t}}},created:function(){this.$store.commit("application/activateModal","coming-soon")}},i=(a(1086),a(0)),o=Object(i.a)(s,function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("c-layout",{attrs:{navigationKey:"account"}},[a("div",{staticClass:"row"},[t.transaction?t._e():a("div",{staticClass:"col-12"},[t._v("\n            Transaction not found\n        ")]),t._v(" "),t.transaction?a("div",{staticClass:"col-12"},[t._v("\n            "+t._s(t.transaction.name)+"\n            "+t._s(t.transaction.id)+"\n            "),a("br"),t._v(" "),a("c-button",{attrs:{status:"none",to:"/transaction/"+t.transaction.id+"/transactions"}},[t._v("Transactions")])],1):t._e()])])},[],!1,null,null,null);n.default=o.exports},365:function(t,n){}}]);