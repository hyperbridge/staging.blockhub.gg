(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1494:function(t,n,e){"use strict";e.r(n);var c=e(7),a=e.n(c),r=e(3),s=e.n(r),i=e(10),o=e.n(i),u=e(58),f=e.n(u),l={props:["transactions"],components:{"c-tabs":function(t){return e.e(210).then(function(){var n=[e(1682)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-tab":function(t){return e.e(209).then(function(){var n=[e(1684)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-trade-offer":function(t){return e.e(332).then(function(){var n=[e(1687)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-tag-count":function(t){return e.e(266).then(function(){var n=[e(1685)];t.apply(null,n)}.bind(this)).catch(e.oe)}},data:function(){return{activeTab:1}},computed:{transactionsX:function(){},userId:function(){return this.$store.state.application.account.id},offers:function(){var t=this.userId;return this.transactions.reduce(function(n,e){return n[e.accepted?"closed":e.createdBy==t?"sent":"received"].push(e),n},{received:[],sent:[],closed:[]})},offersCount:function(){return f()(this.offers).reduce(function(t,n){var e=o()(n,2),c=e[0],r=e[1];return s()({},t,a()({},c,r.length))},{received:0,sent:0,closed:0})}}},d=(e(970),e(0)),p=Object(d.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"trade-block"},[e("nav",{staticClass:"trade-block__nav"},[e("ul",{staticClass:"trade-block__menu-list reset-list"},t._l(["received","sent","closed"],function(n,c){return e("li",{key:c},[e("a",{staticClass:"menu-list__item",class:{"menu-list__item--active":t.activeTab===c+1},on:{click:function(n){t.activeTab=c+1}}},[t._v("\n                    "+t._s(t._f("upperFirstChar")(n))+"\n                    "),e("c-tag-count",{attrs:{number:t.offersCount[n]}})],1)])}))]),t._v(" "),e("c-tabs",{attrs:{activeTabProp:t.activeTab,disableMenu:""}},t._l(t.offers,function(n,c,a){return e("c-tab",{key:c,staticClass:"trade-block__offers-tab",attrs:{tab_id:a+1}},[t._l(n,function(t){return e("c-trade-offer",{key:t.id,attrs:{offer:t},on:{wasSeen:function(n){t.new=!1}}})}),t._v(" "),n.length?t._e():e("p",[t._v("No offers were found")])],2)}))],1)},[],!1,null,"1cd0716a",null);n.default=p.exports},223:function(t,n){},970:function(t,n,e){"use strict";var c=e(223);e.n(c).a}}]);