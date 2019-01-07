(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1071:function(t,e,a){"use strict";var s=a(350);a.n(s).a},1491:function(t,e,a){"use strict";a.r(e);var s=a(6),o=a.n(s),c=a(9),r=a.n(c),n=a(8),i=a.n(n),l=a(31),d=a.n(l),p={data:function(){return{selected:[],protocolData:{token:{data:"",visible:!1},reserve:{data:"",visible:!1},marketplace:{data:"",visible:!1},funding:{data:"",visible:!1}}}},computed:{selectAll:{get:function(){return this.selected.length==this.protocols.map(function(t){return t.contracts.length}).reduce(function(t,e){return t+e})},set:function(t){this.selected=t?this.protocols.map(function(t){return t.contracts.map(function(e){return t.id+"."+e.name})}).reduce(function(t,e){return t.concat(e)}):[]}},protocols:function(){return this.protocolData.token.data=d()(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.token),this.protocolData.reserve.data=d()(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.reserve),this.protocolData.marketplace.data=d()(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.marketplace),this.protocolData.funding.data=d()(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.funding),[{id:"token",name:"Token",link:"https://github.com/hyperbridge/protocol/tree/master/packages/token",contracts:i()(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.token.contracts)},{id:"reserve",name:"Reserve",link:"https://github.com/hyperbridge/protocol/tree/master/packages/reserve",contracts:i()(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.reserve.contracts)},{id:"marketplace",name:"Marketplace",link:"https://github.com/hyperbridge/protocol/tree/master/packages/marketplace",contracts:i()(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.marketplace.contracts)},{id:"funding",name:"Funding",link:"https://github.com/hyperbridge/protocol/tree/master/packages/funding",contracts:i()(this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages.funding.contracts)}]}},methods:{toggleRawData:function(t){this.protocolData[t].visible=!this.protocolData[t].visible},saveRawData:function(t){this.$store.state.application.ethereum[this.$store.state.application.currentEthereumNetwork].packages[t]=JSON.parse(this.protocolData[t].data)},deployContract:function(t,e,a){this.$store.dispatch("application/deployContract",{protocolName:t,contractName:e,oldContractAddress:a})},deploySelected:function(){var t=this;return r()(o.a.mark(function e(){var a,s,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=o.a.keys(t.selected);case 1:if((e.t1=e.t0()).done){e.next=9;break}return a=e.t1.value,s=t.selected[a].split(".")[0],c=t.selected[a].split(".")[1],e.next=7,t.$store.dispatch("application/deployContract",{protocolName:s,contractName:c});case 7:e.next=1;break;case 9:case"end":return e.stop()}},e,t)}))()}}},u=(a(1071),a(0)),m=Object(u.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-layout",{attrs:{navigationKey:"settings"}},[a("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Protocol Settings",noGutter:!0,noPadding:!0,onlyContentBg:!0,bgGradient:!0}},[a("div",{staticClass:"page-heading"},[a("div",{staticClass:"page-heading__container"},[a("p",{staticClass:"caption"},[t._v("Select protocol contracts to deploy")])]),t._v(" "),a("div",{staticClass:"page-heading__container float-right d-none d-md-block"},[t.selected.length?a("button",{staticClass:"btn btn-outline-secondary",on:{click:t.deploySelected}},[t._v("Deploy selected")]):t._e()])]),t._v(" "),a("div",{},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-dark margin-bottom-0"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col",width:"40"}},[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectAll,expression:"selectAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selectAll)?t._i(t.selectAll,null)>-1:t.selectAll},on:{change:function(e){var a=t.selectAll,s=e.target,o=!!s.checked;if(Array.isArray(a)){var c=t._i(a,null);s.checked?c<0&&(t.selectAll=a.concat([null])):c>-1&&(t.selectAll=a.slice(0,c).concat(a.slice(c+1)))}else t.selectAll=o}}}),t._v(" "),a("span",{staticClass:"custom-control-label"})])]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),a("th",{attrs:{scope:"col",width:"160"}},[t._v("Status")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Address")]),t._v(" "),a("th",{attrs:{scope:"col"}})])]),t._v(" "),a("tbody",[t._l(t.protocols,function(e){return[a("tr",{key:e.id},[a("td",{staticClass:"margin-top-0 margin-bottom-0",staticStyle:{background:"rgba(255, 255, 255, 0.01)"},attrs:{colspan:"4"}},[a("a",{attrs:{href:e.link}},[a("strong",[t._v(t._s(e.name))])]),t._v(" "),t.protocolData[e.id].visible?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.protocolData[e.id].data,expression:"protocolData[protocol.id].data"}],staticStyle:{width:"100%",height:"300px"},domProps:{value:t.protocolData[e.id].data},on:{input:function(a){a.target.composing||t.$set(t.protocolData[e.id],"data",a.target.value)}}}),t._v(" "),t.protocolData[e.id].visible?a("c-button",{on:{click:function(a){t.saveRawData(e.id)}}},[t._v("Save")]):t._e(),t._v(" "),t.protocolData[e.id].visible?a("c-button",{on:{click:function(a){t.toggleRawData(e.id)}}},[t._v("Hide")]):t._e()],1)]):t._e()]),t._v(" "),a("td",{staticStyle:{background:"rgba(255, 255, 255, 0.01)"}},[t.protocolData[e.id].visible?t._e():a("c-button",{on:{click:function(a){t.toggleRawData(e.id)}}},[t._v("Raw")])],1)]),t._v(" "),t._l(e.contracts,function(s){return a("tr",{key:e.id+"-"+s.name},[a("td",[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"custom-control-input",attrs:{type:"checkbox",number:""},domProps:{value:e.id+"."+s.name,checked:Array.isArray(t.selected)?t._i(t.selected,e.id+"."+s.name)>-1:t.selected},on:{change:function(a){var o=t.selected,c=a.target,r=!!c.checked;if(Array.isArray(o)){var n=e.id+"."+s.name,i=t._i(o,n);c.checked?i<0&&(t.selected=o.concat([n])):i>-1&&(t.selected=o.slice(0,i).concat(o.slice(i+1)))}else t.selected=r}}}),t._v(" "),a("span",{staticClass:"custom-control-label"})])]),t._v(" "),a("td",[a("a",{attrs:{href:s.link}},[t._v(t._s(s.name))]),t._v(" "),a("br"),t._v(" "),s.links&&s.links.length?a("p",[a("strong",[t._v("Dependencies:")]),t._v(" "),t._l(s.links,function(e){return a("em",{key:e.name},[t._v(t._s(e.name)+" ")])})],2):t._e()]),t._v(" "),a("td",[s.createdAt?a("span",{staticClass:"badge badge-success"},[t._v("Deployed")]):t._e(),t._v(" "),s.createdAt?t._e():a("span",{staticClass:"badge badge-warning"},[t._v("Undeployed")]),t._v(" "),s.createdAt?a("div",[a("strong",[t._v(t._s(t._f("formatDate")(s.createdAt)))]),a("br"),t._v(" "),a("span",{staticClass:"text-muted"},[t._v(t._s(t._f("formatTime")(s.createdAt)))])]):t._e()]),t._v(" "),a("td",[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.address,expression:"contract.address"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:s.address},on:{input:function(e){e.target.composing||t.$set(s,"address",e.target.value)}}}),t._v(" "),a("span",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.$store.dispatch("application/sendCommand",{key:"writeToClipboard",data:s.address})}}},[t._v("Copy")])])])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-light btn-sm",on:{click:function(a){a.preventDefault(),t.deployContract(e.id,s.name,s.address)}}},[t._v("Deploy")]),t._v(" "),a("button",{staticClass:"btn btn-light btn-sm",on:{click:function(a){a.preventDefault(),t.$store.dispatch("application/sendCommand",{key:"setContractAddress",data:{protocolName:e.id,contractName:s.name,address:s.address}})}}},[t._v("Update")])])])})]})],2)])])])])],1)},[],!1,null,"74888f04",null);e.default=m.exports},350:function(t,e){}}]);