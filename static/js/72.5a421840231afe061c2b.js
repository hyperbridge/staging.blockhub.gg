(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1314:function(o,e,s){"use strict";s.r(e);var t={data:function(){return{consoleLogMessages:"",consoleLogInterval:null}},created:function(){var o=this;this.consoleLogInterval=setInterval(function(){o.consoleLogMessages=window.consoleLogMessages.join("<br />"),o.$forceUpdate(),o.$refs.consoleLog.scrollTop=o.$refs.consoleLog.scrollHeight},1e3)},beforeDestroy:function(){clearInterval(this.consoleLogInterval)}},n=(s(758),s(0)),c=Object(n.a)(t,function(){var o=this.$createElement,e=this._self._c||o;return e("c-layout",{attrs:{navigationKey:"settings"}},[e("c-block",{attrs:{title:"Activity Log",noGutter:!0,onlyContentBg:!0,bgGradient:!0}},[e("div",{ref:"consoleLog",staticClass:"console-log",domProps:{innerHTML:this._s(this.consoleLogMessages)}},[this._v("\n                "+this._s(this.consoleLogMessages)+"\n            ")])])],1)},[],!1,null,"4974f094",null);e.default=c.exports},237:function(o,e){},758:function(o,e,s){"use strict";var t=s(237);s.n(t).a}}]);