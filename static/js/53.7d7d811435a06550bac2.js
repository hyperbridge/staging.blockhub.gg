(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1348:function(e,t,s){(e.exports=s(15)(!1)).push([e.i,".chat[data-v-01af9987]{max-height:450px;overflow-y:scroll;padding:10px}.chat-form[data-v-01af9987]{margin-top:10px;display:flex;justify-content:space-around}.chat-form__input[data-v-01af9987]{background:#fff;color:#000;width:80%;padding:10px}.chat-form__btn[data-v-01af9987]{border-radius:50%;background:#696cb3;border-style:none;cursor:pointer;height:42px;width:42px;color:#fff}",""])},1349:function(e,t,s){"use strict";var a=s(821);s.n(a).a},595:function(e,t,s){"use strict";s.r(t);var a=s(4),n=s.n(a),r=s(9),o=s.n(r),c={props:["trx"],components:{"c-chat-message":function(e){return s.e(315).then(function(){var t=[s(2207)];e.apply(null,t)}.bind(this)).catch(s.oe)}},data:function(){return{newMessage:"",lastMessageId:null,lastMsg:null}},methods:{sendMessage:function(){var e=this;return o()(n.a.mark(function t(){var s,a,r,o,c;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.newMessage&&Date.now()/1e3-e.lastMsg<10)){t.next=7;break}s=e.lastMessageId,a=e.trx.messages.find(function(e){return e.id==lastMessageId}),e.$store.dispatch("community/update",{id:s,data:{content:a.content+" "+e.newMessage}}),e.cleanUp(),t.next=14;break;case 7:if(!e.newMessage){t.next=14;break}return r=e.trx,o=r.id,r.messages,c={message:e.newMessage,trxId:o},t.next=12,e.$store.dispatch("assets/createTransactionMessage",c);case 12:e.lastMessageId=t.sent,e.cleanUp();case 14:case"end":return t.stop()}},t,e)}))()},sendMessageV2:function(){var e=this;return o()(n.a.mark(function t(){var s,a,r,o,c;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.newMessage&&Date.now()/1e3-e.lastMsg<10)){t.next=8;break}s=e.lastMessageId,a=e.trx.messages.find(function(e){return e.id==s}),r={content:a.content+" "+e.newMessage},e.$store.dispatch("updateV2",["community/messages",s,r]),e.cleanUp(),t.next=15;break;case 8:if(!e.newMessage){t.next=15;break}return o=e.trx.id,c={content:e.newMessage,author:1},t.next=13,e.$store.dispatch("createRelation",["assets/trxs/messages",o,c]);case 13:e.lastMessageId=t.sent,e.cleanUp();case 15:case"end":return t.stop()}},t,e)}))()},cleanUp:function(){var e=this;return o()(n.a.mark(function t(){var s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.newMessage="",e.lastMsg=Date.now()/1e3,s=e.$refs.chatList,t.next=5,e.$nextTick();case 5:s.scrollTop=s.scrollHeight;case 6:case"end":return t.stop()}},t,e)}))()}},computed:{trxRaw:function(){return this.$store.state.assets.trxs[this.trx.id]},userId:function(){return this.$store.state.application.account.id},messages:function(){return this.$store.getters["community/messages"]}}},i=(s(1349),s(7)),u=Object(i.a)(c,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ul",{ref:"chatList",staticClass:"reset-list chat"},e._l(e.trx.messages,function(t,a){return s("c-chat-message",{key:a,attrs:{message:t,userId:e.userId},on:{delete:function(t){e.$store.dispatch("deleteRelation",["assets/trxs/messages",e.trx.id,t])}}})})),e._v(" "),s("div",{staticClass:"chat-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],staticClass:"chat-form__input",attrs:{type:"text"},domProps:{value:e.newMessage},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.sendMessageV2()},input:function(t){t.target.composing||(e.newMessage=t.target.value)}}}),e._v(" "),s("button",{staticClass:"chat-form__btn",on:{click:function(t){e.sendMessage()}}},[s("c-icon",{attrs:{name:"paper-plane"}})],1)]),e._v(" "),s("button",{on:{click:function(t){e.$store.dispatch("createRelation",["assets/trxs/messages",e.trx.id,{content:"New message!",author:1}])}}},[e._v("\n        Dispatch root createRelation\n    ")]),e._v(" "),s("button",{on:{click:function(t){e.$store.dispatch("deleteRelation",["assets/trxs/messages",e.trx.id,8])}}},[e._v("\n        Dispatch root deleteRelation\n    ")])])},[],!1,null,"01af9987",null);t.default=u.exports},821:function(e,t,s){var a=s(1348);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(14)("051f757c",a,!0,{})}}]);