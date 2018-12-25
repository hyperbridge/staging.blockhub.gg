(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1584:function(t,s,i){"use strict";i.r(s);var e={components:{},data:function(){return{loadingState:!0}},computed:{projects:function(){return this.$store.getters["projects/list"]}},created:function(){this.$store.dispatch("projects/find",{query:{$sort:{createdAt:-1},$limit:25}})},mounted:function(){var t=this;this.$nextTick(function(){t.loadingState=!1,document.getElementById("startup-loader").style.display="none"})}},a=(i(917),i(0)),c=Object(a.a)(e,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"row margin-bottom-20"},[i("div",{staticClass:"col-12 col-lg-3"},[i("div",{staticClass:"widget"},[t._m(0),t._v(" "),i("div",{staticClass:"widget__container"},[t._m(1),t._v(" "),i("div",{staticClass:"widget__box widget__box--left"},[i("div",{staticClass:"widget__informer"},[t._v(t._s(t.projects.length)+" crowdfunds")])])])])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("div",{staticClass:"col-12"},[i("div",{staticClass:"card margin-bottom-0"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"form-row"},[t._m(5),t._v(" "),i("div",{staticClass:"col-6 col-lg-4 d-none d-md-block"}),t._v(" "),t._m(6),t._v(" "),i("div",{staticClass:"col-6 col-lg-2 d-none d-md-block"},[i("c-button",{staticClass:"w-100 justify-content-center h-100",attrs:{href:"#/business/project/new",status:"dark",icon:"plus",size:"mg"}},[t._v("\n                            New Crowdfund\n                        ")])],1)]),t._v(" "),i("div",{staticClass:"table-responsive margin-top-20 margin-bottom-0"},[i("table",{staticClass:"table table-striped table-bordered margin-bottom-0",staticStyle:{"min-width":"800px"}},[t._m(7),t._v(" "),i("tbody",t._l(t.projects,function(s){return i("tr",{key:s.id},[t._m(8,!0),t._v(" "),i("td",[t._v(t._s(s.id))]),t._v(" "),i("td",[i("a",{staticClass:"text-secondary text-bold",attrs:{href:"#/business/project/"+s.id}},[t._v(t._s(s.name))])]),t._v(" "),i("td",[t._v(t._s(s.meta.created))]),t._v(" "),i("td",[i("div",{staticClass:"user user--bordered"},[i("img",{attrs:{src:"http://via.placeholder.com/128x128"}}),t._v(" "),i("div",{staticClass:"user__name"},[i("strong",[t._v(t._s(s.owner.name))])])])]),t._v(" "),t._m(9,!0),t._v(" "),i("td",[t._v("\n                                "+t._s(s.meta.funds.obtained)+"\n                            ")]),t._v(" "),i("td",[t._v("\n                                "+t._s(s.meta.funds.goal)+"\n                            ")]),t._v(" "),i("td",[i("button",{staticClass:"btn btn-outline-success btn-block btn-sm"},[t._v(t._s(s.status))])]),t._v(" "),t._m(10,!0)])}))])])])])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[s("span",{staticClass:"li-window"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"widget__line"},[s("div",{staticClass:"widget__icon"},[s("span",{staticClass:"li-window"})]),this._v(" "),s("div",{staticClass:"widget__title"},[this._v("Crowdfunds")]),this._v(" "),s("div",{staticClass:"widget__subtitle"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 col-lg-3",attrs:{hidden:""}},[s("div",{staticClass:"widget"},[s("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[s("span",{staticClass:"li-users"})]),this._v(" "),s("div",{staticClass:"widget__container"},[s("div",{staticClass:"widget__line"},[s("div",{staticClass:"widget__icon"},[s("span",{staticClass:"li-users"})]),this._v(" "),s("div",{staticClass:"widget__title"},[this._v("Users activity")]),this._v(" "),s("div",{staticClass:"widget__subtitle"},[this._v("Online operators")])]),this._v(" "),s("div",{staticClass:"widget__box widget__box--left"},[s("div",{staticClass:"widget__informer"},[this._v("12 operators")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 col-lg-3",attrs:{hidden:""}},[s("div",{staticClass:"widget"},[s("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[s("span",{staticClass:"li-receipt"})]),this._v(" "),s("div",{staticClass:"widget__container"},[s("div",{staticClass:"widget__line"},[s("div",{staticClass:"widget__icon"},[s("span",{staticClass:"li-receipt"})]),this._v(" "),s("div",{staticClass:"widget__title"},[this._v("Open payments")]),this._v(" "),s("div",{staticClass:"widget__subtitle"},[this._v("Payments summary")])]),this._v(" "),s("div",{staticClass:"widget__box widget__box--left"},[s("div",{staticClass:"widget__informer"},[this._v("6 payments for $2,485.00")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-12 col-lg-3",attrs:{hidden:""}},[s("div",{staticClass:"widget"},[s("div",{staticClass:"widget__icon_layer widget__icon_layer--right"},[s("span",{staticClass:"li-lifebuoy"})]),this._v(" "),s("div",{staticClass:"widget__container"},[s("div",{staticClass:"widget__line"},[s("div",{staticClass:"widget__icon"},[s("span",{staticClass:"li-lifebuoy"})]),this._v(" "),s("div",{staticClass:"widget__title"},[this._v("Support tickets")]),this._v(" "),s("div",{staticClass:"widget__subtitle"},[this._v("Count of opened tickets")])]),this._v(" "),s("div",{staticClass:"widget__box widget__box--left"},[s("div",{staticClass:"widget__informer"},[this._v("5 of 2,133")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-6 col-lg-2"},[s("select",{staticClass:"form-control actionWithSelected",attrs:{tabindex:"-1","aria-hidden":"true",hidden:""}},[s("option"),this._v(" "),s("option",{attrs:{value:"1"}},[this._v("Set as readed")]),this._v(" "),s("option",{attrs:{value:"2"}},[this._v("Remove")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"col-6 col-lg-2"},[i("select",{staticClass:"form-control orderByStatus",attrs:{tabindex:"-1","aria-hidden":"true",hidden:""}},[i("option"),t._v(" "),i("option",{attrs:{value:"1"}},[t._v("New")]),t._v(" "),i("option",{attrs:{value:"2"}},[t._v("Active")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("Closed")]),t._v(" "),i("option",{attrs:{value:"3"}},[t._v("Denied")])])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("thead",[i("tr",[i("th",{attrs:{width:"30"}},[i("label",{staticClass:"custom-control custom-checkbox"},[i("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),i("span",{staticClass:"custom-control-label"})])]),t._v(" "),i("th",{attrs:{width:"100"}},[t._v("ID")]),t._v(" "),i("th",[t._v("Name")]),t._v(" "),i("th",[t._v("Date")]),t._v(" "),i("th",[t._v("Owner")]),t._v(" "),i("th",{attrs:{hidden:""}},[t._v("Operators")]),t._v(" "),i("th",[t._v("Funding Obtained")]),t._v(" "),i("th",[t._v("Funding Goal")]),t._v(" "),i("th",{attrs:{width:"100"}},[t._v("Status")]),t._v(" "),i("th",{attrs:{width:"30"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("label",{staticClass:"custom-control custom-checkbox"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),this._v(" "),s("span",{staticClass:"custom-control-label"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",{attrs:{hidden:""}},[s("div",{staticClass:"user-group user-group--bordered"},[s("div",{staticClass:"user"},[s("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),this._v(" "),s("div",{staticClass:"user"},[s("img",{attrs:{src:"http://via.placeholder.com/128x128"}})]),this._v(" "),s("div",{staticClass:"user"},[s("img",{attrs:{src:"http://via.placeholder.com/128x128"}})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("button",{staticClass:"btn btn-secondary btn-icon btn-sm"},[s("i",{staticClass:"fa fa-pencil"})])])}],!1,null,"1421a851",null);s.default=c.exports},218:function(t,s){},917:function(t,s,i){"use strict";var e=i(218);i.n(e).a}}]);