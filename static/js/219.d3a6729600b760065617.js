(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1282:function(t,s,e){"use strict";e.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"coin-img"},[s("img",{attrs:{src:e(863)}})]),this._v(" "),s("div",{staticClass:"box-title"},[s("h1",{staticClass:"text-uppercase p-0 m-0"},[this._v("\n                    HBX\n                ")]),this._v(" "),s("h3",{staticClass:"text-uppercase p-0 m-0"},[this._v("\n                    token sale\n                ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-center mr-5"},[s("div",[this._v("\n                    Token\n                ")]),this._v(" "),s("div",[s("h2",{staticClass:"font-weight-bold p-0 m-0"},[this._v("\n                        HBX\n                    ")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"token-sale-box_body-links"},[e("h3",{staticClass:"text-right"},[t._v("\n                More on HBX\n            ")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://hyperbridge.org/downloads/whitepaper.pdf",target:"_blank"}},[t._v("\n                        Whitepaper\n                        "),e("i",{staticClass:"fas fa-file-alt"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://hyperbridge.org/team",target:"_blank"}},[t._v("\n                        Team\n                        "),e("i",{staticClass:"fas fa-users"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://hyperbridge.org/roadmap",target:"_blank"}},[t._v("\n                        Roadmap\n                        "),e("i",{staticClass:"fas fa-gamepad"})])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://hyperbridge.org/",target:"_blank"}},[t._v("\n                        Corp. website\n                        "),e("i",{staticClass:"fas fa-home"})])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"token-sale-box__body-media"},[s("iframe",{attrs:{width:"380",height:"220",src:"https://www.youtube.com/embed/-QEdXZWMe-M",frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],n={name:"token-sale",components:{"c-progress-bar":function(t){return e.e(173).then(function(){var s=[e(1221)];t.apply(null,s)}.bind(this)).catch(e.oe)}},props:{hardCap:[Number,String],softCap:[Number,String],volume:[Number,String],soldDollars:[Number,String],soldTokens:[Number,String]},computed:{percentProgress:function(){return(this.soldTokens+5e6)/this.volume*100}}},r=(e(862),e(0)),i=Object(r.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"token-sale-box"},[e("div",{staticClass:"token-sale-box__head"},[t._m(0),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[t._m(1),t._v(" "),e("div",[e("c-button",{attrs:{status:"success",size:"lg",icon_hide:""},on:{click:function(s){t.$emit("purchase")}}},[t._v("\n                    Purchase HBX\n                ")])],1)])]),t._v(" "),e("div",{staticClass:"token-sale-box__body"},[e("div",{staticClass:"token-sale-box_body-info"},[e("h2",{staticClass:"p-0 mb-2"},[t._v("\n                Sale status\n            ")]),t._v(" "),e("div",{staticStyle:{"margin-top":"20px"}},[e("strong",[t._v("\n                    Sold\n                ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("\n                    "+t._s(t._f("convertCurrency")(t.soldDollars))+" USD\n                ")]),t._v(" "),e("span",{staticClass:"ml-3"},[t._v("\n                    "+t._s(t._f("numeralFormat")(t.soldTokens,0,0))+" HBX\n                ")])]),t._v(" "),e("div",{staticClass:"mt-3"},[e("c-progress-bar",{attrs:{percentages:t.percentProgress}})],1),t._v(" "),e("div",{staticClass:"token-sale-box__money-info"},[e("div",[e("strong",[t._v("\n                        Supply\n                    ")]),t._v(" "),e("span",[t._v("\n                        "+t._s(t._f("numeralFormat")(t.volume,0,0))+" HBX\n                    ")])]),t._v(" "),e("div",[e("strong",[t._v("\n                        Hard Cap\n                    ")]),t._v(" "),e("span",[t._v("\n                        "+t._s(t._f("convertCurrency")(t.hardCap))+" USD\n                    ")])]),t._v(" "),e("div",[e("strong",[t._v("\n                        Soft Cap\n                    ")]),t._v(" "),e("span",[t._v("\n                        "+t._s(t._f("convertCurrency")(t.softCap))+" USD\n                    ")])])])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])},a,!1,null,"0c62079e",null);s.default=i.exports},298:function(t,s){},862:function(t,s,e){"use strict";var a=e(298);e.n(a).a},863:function(t,s,e){t.exports=e.p+"static/img/token-icon.1653657.png"}}]);