(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1099:function(t,e,n){"use strict";var s=n(347);n.n(s).a},1676:function(t,e,n){"use strict";n.r(e);var s={name:"system-requirements",props:{requirements:{type:Array,required:!0}},data:function(){var t=this.platform("Win")||this.platform("Mac")||this.platform("Linux");return{activeTab:"mac"===(t=t?t.os:"win")?1:"win"===t?2:3}},components:{"c-tab-universal":function(t){return n.e(214).then(function(){var e=[n(1686)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tabs-universal":function(t){return n.e(215).then(function(){var e=[n(1688)];t.apply(null,e)}.bind(this)).catch(n.oe)}},methods:{platform:function(t){return this.requirements.find(function(e){return e.os===t.toLowerCase()&&e})}},filters:{reqProp:function(t){return t.replace(/[\s_]+/g," ").toUpperCase()}}},r=(n(1099),n(0)),a=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("c-block",{attrs:{title:"System Requirements",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[n("template",{slot:"heading-bar"},[n("i",{staticClass:"fas fa-laptop title-icon"})]),t._v(" "),n("c-tabs-universal",{attrs:{tabNames:["Mac","Win","Linux"],setActiveTab:t.activeTab}},t._l(["Mac","Win","Linux"],function(e,s){return n("c-tab-universal",{key:s,attrs:{tab_id:s+1}},[t.platform(e)?n("ul",{staticClass:"system-requirements__list"},t._l(t.platform(e),function(e,s){return e?n("li",{key:s,staticClass:"system-requirements__list-item"},[n("strong",[t._v(t._s(t._f("reqProp")(s)))]),t._v(" "),n("p",{staticClass:"system-requirements__value"},"os"==s?[t._v("\n                        "+t._s(t._f("upperFirstChar")(e))+"\n                        "),n("i",{staticClass:"fab",class:"fa-"+("win"==e?"windows":"mac"==e?"apple":"linux")})]:[t._v(t._s(t._f("upperFirstChar")(e)))])]):t._e()})):n("h4",[t._v("Not currently supported.")])])}))],2)},[],!1,null,"18b62cd0",null);e.default=a.exports},347:function(t,e){}}]);