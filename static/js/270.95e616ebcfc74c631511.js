(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{1051:function(t,e,a){"use strict";var s=a(330);a.n(s).a},1557:function(t,e,a){"use strict";a.r(e);var s={name:"review",props:{review:{type:Object,required:!0},background:{type:Boolean,default:!1}},components:{"c-rating-stars":function(t){return a.e(205).then(function(){var e=[a(1580)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-author":function(t){return a.e(199).then(function(){var e=[a(1617)];t.apply(null,e)}.bind(this)).catch(a.oe)}},data:function(){return{show_more:!1,setup_params:["System","GPU","CPU","RAM","Storage"]}},computed:{time_played:function(){var t=this.review.minutes_played,e=Math.floor(t/60);return e+"h "+(t-60*e)+"m"}}},r=(a(1051),a(0)),i=Object(r.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"review",class:{"background-review":t.background,"p-0":!t.background,"margin-bottom-40":!t.background}},[a("div",{staticClass:"review__header"},[a("c-img",{staticClass:"review__author-img",attrs:{src:t.review.author.img}}),t._v(" "),a("div",{staticClass:"review__author"},[a("h5",{staticClass:"review__author-name"},[t._v(t._s(t.review.author.name))]),t._v(" "),a("span",{staticClass:"review__author-date"},[t._v(t._s(t._f("timeAgo")(t.review.date)))])]),t._v(" "),a("div",{staticClass:"review__rating"},[a("i",{staticClass:"review__rating-score"},[t._v(t._s(t.review.rating))]),t._v(" "),a("div",[a("c-rating-stars",{attrs:{number:t.review.rating}}),t._v(" "),a("div",[a("strong",[t._v("Played for "+t._s(t.time_played))])])],1)])],1),t._v(" "),a("h4",[t._v(t._s(t.review.title))]),t._v(" "),a("transition",{attrs:{name:"fade-scale"}},[t.show_more?a("p",{key:t.show_more},[t._v(t._s(t.review.text))]):a("p",[t._v(t._s(t.review.text.substring(0,200)))])]),t._v(" "),a("transition",{attrs:{name:"fade-scale"}},[t.show_more?a("div",{staticClass:"review__user-setup"},t._l(t.setup_params,function(e,s){return a("div",{key:s,staticClass:"param"},[a("strong",{staticClass:"param-title"},[t._v(t._s(e))]),t._v("\n                "+t._s(t.review.setup[e.toLowerCase()])+"\n            ")])})):t._e()]),t._v(" "),a("div",{staticClass:"review__action"},[t._m(0),t._v(" "),a("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.show_more=!t.show_more}}},[t._v("\n            "+t._s(t.show_more?"HIDE REVIEW":"READ MORE...")+"\n        ")])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"review__action-rate"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-thumbs-up up"}),this._v("HELPFUL\n            ")]),this._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-thumbs-down down"}),this._v("NOT HELPFUL\n            ")])])}],!1,null,"327bcf1e",null);e.default=i.exports},330:function(t,e){}}]);