(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1615:function(t,n,r){"use strict";r.r(n);var e=r(8),i=r.n(e),a=r(6),o=r.n(a),u=r(20),c=r.n(u),s=r(9),f=r.n(s),d=(r(541),r(1),{props:["profileId"],components:{"c-block-menu":function(t){return r.e(222).then(function(){var n=[r(1385)];t.apply(null,n)}.bind(this)).catch(r.oe)},"c-spinner":function(t){return r.e(251).then(function(){var n=[r(1524)];t.apply(null,n)}.bind(this)).catch(r.oe)}},data:function(){return{links:[{title:"Manager",to:"/marketplace/trade"},{title:"Explorer",to:{name:"Marketplace Trade Explorer"}},{title:"History",to:{name:"Marketplace Trade History"}},{title:"Settings",to:{name:"Marketplace Trade Settings"}}],results:[],isLoading:!0}},methods:{loadData:function(){var t=this;return f()(o.a.mark(function n(){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t.isLoading=!0,n.next=3,new c.a(function(t){return setTimeout(t,1e3)});case 3:t.isLoading=!1;case 4:case"end":return n.stop()}},n,t)}))()}},computed:{transactions:function(){var t=this;return i()(this.$store.getters["assets/transactions"]).filter(function(n){return n.you.id==t.profileId})}},watch:{profileId:{handler:"loadData",immediate:!0}}}),l=(r(900),r(0)),p=Object(l.a)(d,function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("c-block-menu",{attrs:{links:this.links}},[this.isLoading?n("c-spinner"):n("router-view",{attrs:{transactions:this.transactions}})],1)],1)},[],!1,null,"6dd99488",null);n.default=p.exports},201:function(t,n){},541:function(t,n,r){"use strict";var e=r(2),i=r.n(e),a=r(480),o=r(50),u=r(479),c=r(61);n.a=a.map(function(t){return i()({},t,{contractorOffer:t.contractorOffer.map(function(t){return c.find(function(n){return n.id==t})}),yourOffer:t.yourOffer.map(function(t){return c.find(function(n){return n.id==t})}),contractor:o.find(function(n){return n.id===t.contractor}),you:o.find(function(n){return n.id===t.you}),messages:t.messages.map(function(t){return u.find(function(n){return n.id==t})}).map(function(t){return i()({},t,{author:o.find(function(n){return n.id==t.author})})})})})},900:function(t,n,r){"use strict";var e=r(201);r.n(e).a}}]);