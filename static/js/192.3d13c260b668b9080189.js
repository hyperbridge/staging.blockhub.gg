(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1140:function(t,e,a){"use strict";a.r(e);var s=a(96),r=a.n(s),n=a(26),c=a.n(n),i=a(21),o=a.n(i),l={name:"asset-comparison",props:{assets:{type:Array,default:function(){return[{metadata:{}}]}}},components:{"c-asset-preview":function(t){return a.e(158).then(function(){var e=[a(1209)];t.apply(null,e)}.bind(this)).catch(a.oe)}},methods:{colorClass:function(t){return t>=100?"positive":"negative"}},computed:{firstAsset:function(){return this.assets.length?this.assets[0]:{metadata:{}}},comparableProps:function(){var t=this,e=this.firstAsset.metadata;return o()(e).filter(function(e){return t.assets.every(function(t){return null!=t.metadata[e]})})},calculableProps:function(){var t=this.firstAsset.metadata;return this.comparableProps.reduce(function(e,a){return"number"==typeof t[a]?[].concat(c()(e),[a]):e},[])},calculateDiffs:function(){var t=this.assets,e=this.calculableProps;return t.length<2?[{}]:t.map(function(a,s){var n={},c=t.filter(function(t,e){return e!==s}),i=function(t){n[t]=Math.round(a.metadata[t]/(c.reduce(function(e,a){return e+a.metadata[t]},0)/c.length)*100)},o=!0,l=!1,u=void 0;try{for(var p,f=r()(e);!(o=(p=f.next()).done);o=!0){i(p.value)}}catch(t){l=!0,u=t}finally{try{!o&&f.return&&f.return()}finally{if(l)throw u}}return n})},compareProps:function(){return{comparableProps:this.comparableProps,calculableProps:this.calculableProps}}},filters:{parseProp:function(t){return t.replace(/_/g," ")},percentages:function(t){return t>=100?"+ "+t+"%":"- "+t+"%"}}},u=(a(639),a(0)),p=Object(u.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.assets.length?a("div",{staticClass:"comparisonable-properties"},t._l(["comparable","calculable"],function(e){return t.compareProps[e+"Props"].length?a("div",{key:e,staticClass:"properties-list"},[a("h4",[t._v(t._s(t._f("upperFirstChar")(e))+" properties")]),t._v(" "),a("ul",t._l(t.compareProps[e+"Props"],function(e){return a("li",{key:e},[t._v("\n                    "+t._s(t._f("upperFirstChar")(t._f("parseProp")(e)))+"\n                ")])}))]):t._e()})):t._e(),t._v(" "),a("div",{staticClass:"comparison"},[a("div",{staticClass:"comparison__add-asset"},[a("c-icon",{attrs:{name:"plus-circle"},on:{click:function(e){t.$emit("addMore")}}})],1),t._v(" "),t._l(t.assets,function(e,s){return a("div",{key:e.id,staticClass:"comparison__item"},[a("c-icon",{staticClass:"comparison__del-btn",attrs:{name:"times"},on:{click:function(a){t.$emit("delete",e)}}}),t._v(" "),a("c-asset-preview",{attrs:{asset:e}}),t._v(" "),a("table",{staticClass:"comparison__table"},[t._m(0,!0),t._v(" "),a("tbody",t._l(t.comparableProps,function(r,n){return a("tr",{key:n},[a("td",[t._v("\n                            "+t._s(t._f("upperFirstChar")(t._f("parseProp")(r)))+"\n                        ")]),t._v(" "),"object"==typeof e.metadata[r]?a("td",[a("ul",{staticClass:"margin-bottom-0"},t._l(e.metadata[r],function(e,s,r){return a("li",{key:r},[t._v("\n                                    "+t._s(e)+" "+t._s(s)+"\n                                ")])}))]):a("td",[t._v(t._s(e.metadata[r]))]),t._v(" "),a("td",[null!=t.calculateDiffs[s][r]?a("span",{class:t.colorClass(t.calculateDiffs[s][r])},[a("c-icon",{staticClass:"differences-arrow",class:{"differences-arrow--down":t.calculateDiffs[s][r]<100},attrs:{name:"arrow-up"}}),t._v("\n                                "+t._s(t._f("percentages")(t.calculateDiffs[s][r]))+"\n                            ")],1):t._e()])])}))])],1)})],2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("Property")]),this._v(" "),e("th",[this._v("Value")]),this._v(" "),e("th",[this._v("Difference")])])}],!1,null,"a82fc21a",null);e.default=p.exports},132:function(t,e){},639:function(t,e,a){"use strict";var s=a(132);a.n(s).a}}]);