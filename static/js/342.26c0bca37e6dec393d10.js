(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{1701:function(s,e,t){"use strict";t.r(e);var a={props:["message","userId"],name:"chat-message",computed:{timeAgo:function(){}}},n=(t(962),t(0)),c=Object(n.a)(a,function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("li",{staticClass:"chat-message",class:{"chat-message--own":s.message.author&&s.userId==s.message.author.id}},[t("div",{staticClass:"chat-message__content-wrapper"},[s.userId!=s.message.author.id?t("c-img",{staticClass:"chat-message__img",attrs:{src:s.message.author.img}}):s._e(),s._v(" "),t("span",{staticClass:"chat-message__content",domProps:{textContent:s._s(s.message.content)}}),s._v(" "),s.message.author&&s.userId==s.message.author.id?t("button",{staticClass:"chat-message__delete-btn",on:{click:function(e){s.$emit("delete",s.message.id)}}},[t("c-icon",{attrs:{name:"trash-alt"}})],1):s._e()],1),s._v(" "),t("span",{staticClass:"chat-message__date"},[s._v("\n        "+s._s(s.timeAgo)+"\n    ")])])},[],!1,null,"11799510",null);e.default=c.exports},210:function(s,e){},962:function(s,e,t){"use strict";var a=t(210);t.n(a).a}}]);