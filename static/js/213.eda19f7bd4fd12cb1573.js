(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1085:function(t,a,o){var e=o(2021);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o(14)("0d1e5031",e,!0,{})},2021:function(t,a,o){(t.exports=o(15)(!1)).push([t.i,'.tooltip-universal__content[data-v-a615c506]{position:relative;width:100%;height:100%}.tooltip-universal__content .fa-question-circle[data-v-a615c506]{position:absolute;font-size:10px;top:0;right:-12px}.tooltip-universal__wrapper[data-v-a615c506]{position:relative;display:inline-flex;width:100%;height:100%}.tooltip-universal[data-v-a615c506]{position:absolute;z-index:999;animation:slide-fade-data-v-a615c506 .15s ease}.tooltip-universal.top[data-v-a615c506]{bottom:calc(100% + 10px)}.tooltip-universal.right[data-v-a615c506]{left:calc(100% + 10px)}.tooltip-universal.bottom[data-v-a615c506]{top:calc(100% + 10px)}.tooltip-universal.left[data-v-a615c506]{right:calc(100% + 10px)}.tooltip-universal__default[data-v-a615c506]{padding:10px;border-radius:8px;box-shadow:0 0 5px rgba(28,32,50,.6);min-width:140px}.tooltip-universal__default h4[data-v-a615c506]{margin-top:0;margin-bottom:5px}.tooltip-universal__default.dark[data-v-a615c506],.tooltip-universal__default.dark[data-v-a615c506]:before{background-color:#1c2032}.tooltip-universal__default.light[data-v-a615c506],.tooltip-universal__default.light[data-v-a615c506]:before{background-color:#5d75f7}.tooltip-universal__default.top[data-v-a615c506]:before{bottom:-7.5px;left:9.5px}.tooltip-universal__default.right[data-v-a615c506]:before{left:-7.5px;top:9.5px}.tooltip-universal__default.bottom[data-v-a615c506]:before{top:-7.5px;left:9.5px}.tooltip-universal__default.left[data-v-a615c506]:before{right:-7.5px;top:9.5px}.tooltip-universal__default[data-v-a615c506]:before{width:15px;height:15px;position:absolute;content:"";transform:rotate(45deg)}@keyframes slide-fade-data-v-a615c506{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}',""])},2022:function(t,a,o){"use strict";var e=o(1085);o.n(e).a},2235:function(t,a,o){"use strict";o.r(a);var e={name:"tooltip-universal",mixins:[o(57).b],props:{position:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},text:String,title:String,theme:{type:String,default:"light",validator:function(t){return["light","dark"].includes(t)}},iconHide:Boolean,default_class:String,delay:{type:Number,default:50}},data:function(){return{show_tooltip:!1}}},i=(o(2022),o(7)),l=Object(i.a)(e,function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"tooltip-universal__wrapper"},[o("div",{staticClass:"tooltip-universal__content",on:{mouseover:function(a){t.debounce(function(){return t.show_tooltip=!0},t.delay)},mouseout:function(a){t.debounce(function(){return t.show_tooltip=!1},t.delay+1)}}},[t._t("default"),t._v(" "),t.iconHide?t._e():o("c-icon",{attrs:{name:"question-circle"}})],2),t._v(" "),t.show_tooltip?o("div",{staticClass:"tooltip-universal",class:t.position},[t._t("tooltip",[o("div",{staticClass:"tooltip-universal__default",class:[t.position,t.theme,t.default_class]},[t.title?o("h4",[t._v(t._s(t.title))]):t._e(),t._v("\n                "+t._s(t.text)+"\n            ")])])],2):t._e()])},[],!1,null,"a615c506",null);a.default=l.exports}}]);