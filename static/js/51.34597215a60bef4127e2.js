(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1649:function(t,n,e){"use strict";e.r(n);var i={props:["id"],components:{"c-block-menu":function(t){return e.e(222).then(function(){var n=[e(1385)];t.apply(null,n)}.bind(this)).catch(e.oe)}},data:function(){return{}},computed:{links:function(){return[{title:"Offer",to:"/marketplace/trade/"+this.id},{title:"Chat",to:"/marketplace/trade/"+this.id+"/chat"}]},trx:function(){return this.$store.getters["assets/transactions"][this.id]}}},r=(e(890),e(0)),s=Object(r.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.trx?e("c-block-menu",{attrs:{links:t.links}},[e("router-view",{attrs:{trxa:t.trx,trx:t.trx,id:t.id}})],1):e("p",[t._v("\n        Transaction with id "),e("i",[t._v(t._s(t.id))]),t._v(" doesn't exist\n    ")])],1)},[],!1,null,"eedda99c",null);n.default=s.exports},191:function(t,n){},890:function(t,n,e){"use strict";var i=e(191);e.n(i).a}}]);