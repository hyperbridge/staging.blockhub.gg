(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{1683:function(s,t,i){"use strict";i.r(t);var a={name:"release-list-item",props:{id:String,version:String,date:String,author:String,size:String,text:String,latest_release:{type:Boolean,default:!1},files:[Array,Object]},data:function(){return{showList:!1}}},e=(i(990),i(0)),n=Object(e.a)(a,function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"history-list__list-item"},[i("div",{staticClass:"history-list__item-info"},[s.latest_release?i("div",{staticClass:"latest-badge"},[s._v("\n            Latest Release\n        ")]):s._e(),s._v(" "),i("span",[s._v("\n            "+s._s(s._f("timeAgo")(s.date))+"\n        ")]),s._v(" "),i("span",[i("i",{staticClass:"fas fa-tag mr-2"}),s._v("\n                "+s._s(s.version)+"\n            ")])]),s._v(" "),i("div",{staticClass:"history-list__item-description"},[i("div",{staticClass:"h1"},[i("router-link",{attrs:{to:{name:"Release page",params:{id:s.id}}}},[s._v("\n                "+s._s(s.version)+"\n            ")])],1),s._v(" "),i("div",{staticStyle:{"font-size":"14px"}},[s._v("\n            "+s._s(s.author)+" released this this version "+s._s(s._f("timeAgo")(s.date))+"\n        ")]),s._v(" "),i("div",{staticClass:"release-text padding-top-15",domProps:{innerHTML:s._s(s.text)}}),s._v(" "),s.files?i("div",{staticClass:"assets-list__wrapper"},[i("div",{staticClass:"assets-list__button",on:{click:function(t){s.showList=!s.showList}}},[i("div",{staticClass:"icon"},[i("i",{staticClass:"fas",class:[s.showList?"fa-angle-up":"fa-angle-down"]})]),s._v(" "),i("div",{staticClass:"text"},[s._v("\n                    Assets ("+s._s(s.files.length)+")\n                ")])]),s._v(" "),s.showList?i("div",{staticClass:"assets-list"},s._l(s.files,function(t){return i("div",{staticClass:"assets-list__item",on:{click:function(s){}}},[s._m(0,!0),s._v(" "),i("div",{staticClass:"title"},[i("a",{attrs:{href:t.src,target:"_blank"}},[s._v("\n                            "+s._s(t.name)+"\n                        ")])]),s._v(" "),i("div",{staticClass:"size"},[s._v("\n                        "+s._s(s._f("numeralFormat")(t.size,"0.00b"))+"\n                    ")])])})):s._e()]):s._e()])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"icon"},[t("i",{staticClass:"fas fa-file-download"})])}],!1,null,"c3b64642",null);t.default=n.exports},238:function(s,t){},990:function(s,t,i){"use strict";var a=i(238);i.n(a).a}}]);