(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1002:function(e,t,n){"use strict";var r=n(250);n.n(r).a},1522:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),o=n(34),s=n.n(o),u=n(9),c=n.n(u),i=n(12),v={components:{},data:function(){return{}},methods:{submit:function(){var e=this;return c()(a.a.mark(function t(){var n,r,o,u,c,v,l,f,d,p,b,h,_;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$refs.action.value,r=e.$refs.body1.value,o=Number(e.$refs.walletIndex.value),"approveTokens"!==n){t.next=6;break}t.next=30;break;case 6:if("transferTokens"!==n){t.next=30;break}for(u=r.split("\n"),c=[],v=!0,l=!1,f=void 0,t.prev=12,d=s()(u);!(v=(p=d.next()).done);v=!0)b=p.value,h=null,_=null,e.$refs.amount.value?(h=b,_=Number(e.$refs.amount.value)):(h=b.split(" ")[0],_=Number(b.split(" ")[1])),_&&c.push({destinationAddress:h,amount:_});t.next=20;break;case 16:t.prev=16,t.t0=t.catch(12),l=!0,f=t.t0;case 20:t.prev=20,t.prev=21,!v&&d.return&&d.return();case 23:if(t.prev=23,!l){t.next=26;break}throw f;case 26:return t.finish(23);case 27:return t.finish(20);case 28:return t.next=30,i.sendCommand("transferTokenBatch",{batch:c,walletIndex:o}).then(function(){console.log("Done")});case 30:case"end":return t.stop()}},t,e,[[12,16,20,28],[21,,23,27]])}))()}}},l=(n(1002),n(0)),f=Object(l.a)(v,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container-fluid"},[n("h3",[e._v("Choose Action")]),e._v(" "),n("br"),e._v(" "),n("select",{ref:"action"},[n("option",{attrs:{value:"approveTokens"}},[e._v("Approve tokens")]),e._v(" "),n("option",{attrs:{value:"transferTokens"}},[e._v("Transfer tokens")])]),e._v(" "),n("br"),e._v(" "),n("input",{ref:"walletIndex",attrs:{type:"text",placeholder:"Wallet index to send from"}}),e._v(" "),n("br"),e._v(" "),n("textarea",{ref:"body1",staticStyle:{width:"100%",height:"300px"}}),e._v(" "),n("br"),e._v(" "),n("p",[e._v("For multiple addresses, enter one on each line. If you want to override the amount, specify the address and the amount with a tab between: 0x7312c5f03dac383b0e371263851b14dc8e1e0089 10 to send 10 to 0x7312c5f03dac383b0e371263851b14dc8e1e0089")]),e._v(" "),n("br"),e._v(" "),n("input",{ref:"amount",attrs:{type:"text",placeholder:"Amount to send"}}),e._v(" "),n("br"),e._v(" "),n("c-button",{on:{click:function(t){e.submit()}}},[e._v("Go")]),e._v(" "),n("br")],1)])},[],!1,null,"6e17e88f",null);t.default=f.exports},250:function(e,t){}}]);