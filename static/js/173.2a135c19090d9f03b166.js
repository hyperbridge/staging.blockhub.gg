(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1427:function(t,n,e){"use strict";var i=e(446);e.n(i).a},1819:function(t,n,e){"use strict";e.r(n);var i=e(2),s=e.n(i),o=e(23),c={name:"cookie-policy",components:{"c-popup":function(t){return e.e(11).then(function(){var n=[e(158)];t.apply(null,n)}.bind(this)).catch(e.oe)}},data:function(){return{show:!1}},methods:s()({},Object(o.d)(["updateClientSettings"]),{updateClientSettings:function(){this.$store.commit("application/updateClientSettings",{key:"cookiePolicyAccepted"}),this.show=!1},showPopup:function(){this.show=!0},closePopup:function(){this.show=!1}}),computed:{settings:function(){return this.$store.state.application.settings}}},a=(e(1427),e(0)),u=Object(a.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"fade"}},[t.settings.client.cookiePolicyAccepted?t._e():e("div",{staticClass:"cookie-policy"},[e("p",{staticClass:"p-0 m-0"},[t._v("\n            By using this website, you agree to our\n            "),e("c-button",{staticClass:"p-0 m-0",attrs:{status:"plain"},on:{click:t.showPopup}},[t._v("cookie policy")])],1),t._v(" "),e("c-button",{staticClass:"margin-left-20",attrs:{status:"info",iconHide:""},on:{click:function(n){t.updateClientSettings()}}},[t._v("\n            Dismiss\n        ")]),t._v(" "),e("c-popup",{attrs:{activated:t.show,title:"Cookie Policy"},on:{close:t.closePopup}},[e("p",[t._v("\n                We use cookies to make interactions with our websites and services easy and meaningful,\n                to better understand how they are used and to tailor advertising.")]),t._v(" "),e("p",[t._v("\n                You can "),e("c-button",{attrs:{status:"plain",href:"#"}},[t._v("read more")]),t._v("\n                and "),e("c-button",{attrs:{status:"plain",href:"#"}},[t._v("make you cookies choices here")]),t._v(".\n            ")],1),t._v(" "),e("p",[t._v("\n                By continuing to use this site you are giving\n                us your consent to do this.\n            ")]),t._v(" "),e("template",{slot:"footer"},[e("div",{staticClass:"text-right w-100"},[e("c-button",{attrs:{status:"success",iconHide:""},on:{click:function(n){t.updateClientSettings()}}},[t._v("\n                        Accept\n                    ")])],1)])],2)],1)])},[],!1,null,null,null);n.default=u.exports},446:function(t,n){}}]);