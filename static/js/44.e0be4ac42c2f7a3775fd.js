(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1531:function(t,s,r){"use strict";r.r(s);var a={props:["transactions"],components:{"c-user":function(t){return r.e(173).then(function(){var s=[r(1416)];t.apply(null,s)}.bind(this)).catch(r.oe)}},computed:{transactionsX:function(){}}},e=(r(792),r(0)),i=Object(e.a)(a,function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("article",t._l(t.transactions,function(s){return r("section",{key:s.id,staticClass:"trade-history"},[r("span",{staticClass:"trade-history__date"},[t._v("\n            "+t._s(t._f("customDate")(s.createdAt,"MMM DD YYYY, hh:mm"))+"\n        ")]),t._v(" "),r("div",{staticClass:"trade-history__user"},[t._v("\n            You traded with\n            "),r("router-link",{staticClass:"trade-history__user-link",attrs:{to:"/profile/"+s.contractor.id}},[r("c-user",{attrs:{user:s.contractor}})],1)],1),t._v(" "),t._l(["yourOffer","contractorOffer"],function(a,e){return r("ul",{key:e,staticClass:"trade-history__list"},[r("p",{staticClass:"trade-history__list-title"},[t._v("\n                "+t._s("yourOffer"===a?"Bought:":"Sold:")+"\n            ")]),t._v(" "),t._l(s[a],function(s,e){return r("li",{key:e,staticClass:"trade-history__item",class:"trade-history__item--"+("yourOffer"===a?"bought":"sold")},[r("router-link",{staticClass:"trade-history__item-link",attrs:{to:"/asset/"+s.id}},[r("c-img",{staticClass:"trade-history__item-image",attrs:{src:s.image}}),t._v("\n                    "+t._s(s.name)+"\n                ")],1)],1)})],2)})],2)}))},[],!1,null,"64eac8ca",null);s.default=i.exports},163:function(t,s){},792:function(t,s,r){"use strict";var a=r(163);r.n(a).a}}]);