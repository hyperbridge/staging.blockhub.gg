(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1588:function(t,e,s){"use strict";s.r(e);var i={components:{"c-buttons-group":function(t){return s.e(295).then(function(){var e=[s(1555)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-release-tag-item":function(t){return s.e(294).then(function(){var e=[s(1554)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-release-list-item":function(t){return s.e(293).then(function(){var e=[s(1553)];t.apply(null,e)}.bind(this)).catch(s.oe)}},data:function(){return{listType:"list",releases_list:[{id:"987",date:"2018-03-09T18:31:42+03:30",latest_release:!1,version:"0.5.1",author:"Josh Doel",text:"In this update:<ul><li>Simplify sign up</li><li>Hold ALT and click to give feedback!</li></ul>",files:[{name:"BlockHub-0.3.1-mac.zip",src:"#",size:234214324},{name:"BlockHub-0.3.1-Win86.zip",src:"#",size:2342324324},{name:"BlockHub-0.3.1-Linux.zip",src:"#",size:942324324}]},{id:"23413",date:"2018-08-09T18:31:42+03:30",latest_release:!0,version:"0.2.1",author:"Josh Doel",text:"In this update:<ul><li>Token purchase flow</li><li>Copy to address works</li><li>Account recovery</li></ul>",files:[{name:"BlockHub-0.2.1-mac.zip",src:"#",size:234214324},{name:"BlockHub-0.2.1-Win86.zip",src:"#",size:2342324324},{name:"BlockHub-0.2.1-Linux.zip",src:"#",size:942324324}]},{id:"12",date:"2013-12-09T18:31:42+03:30",latest_release:!1,version:"0.0.1",author:"Josh Doel",text:"Add version for MacOs",files:[{name:"BlockHub-0.0.1-mac.zip",src:"#",size:234214324}]},{id:"243",date:"2013-08-09T18:31:42+03:30",latest_release:!1,version:"0.0.1",author:"Josh Doel",text:"First release",files:[{name:"BlockHub-0.0.1-Win86.zip",src:"#",size:2342324324},{name:"BlockHub-0.0.1-Win64.zip",src:"#",size:2342324324}]}]}},computed:{ifList:function(){switch(this.listType){case"list":return"success";default:return"outline-success"}},ifTags:function(){switch(this.listType){case"tags":return"success";default:return"outline-success"}},sortedList:function(){var t=this.releases_list;return t.sort(function(t,e){return console.log(new Date(e.date)-new Date(t.date)),new Date(e.date)-new Date(t.date)}),t}}},a=(s(911),s(0)),n=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("c-buttons-group",[s("c-button",{attrs:{status:t.ifList,size:"md",shadow:!1,iconHide:""},on:{click:function(e){t.listType="list"}}},[t._v("\n                        Releases\n                    ")]),t._v(" "),s("c-button",{attrs:{status:t.ifTags,size:"md",shadow:!1,iconHide:""},on:{click:function(e){t.listType="tags"}}},[t._v("\n                        Tags\n                    ")])],1),t._v(" "),s("c-button",{staticClass:"float-right",attrs:{status:"success",icon:"plus",size:"md"},on:{click:function(e){t.$router.push({path:"/business/new-release"})}}},[t._v("\n                    Draft a new release\n                ")])],1),t._v(" "),s("div",{staticClass:"col-12"},[s("div",{staticClass:"history-list"},[t._l(t.sortedList,function(e,i){return"list"==t.listType?s("c-release-list-item",{attrs:{version:e.version,date:e.date,author:e.author,size:e.size,files:e.files,text:e.text,id:e.id,latest_release:e.latest_release}}):t._e()}),t._v(" "),"tags"==t.listType?s("div",{staticClass:"history-list__tags-title"},[s("i",{staticClass:"fas fa-tag mr-2"}),t._v(" Tags\n                    ")]):t._e(),t._v(" "),t._l(t.sortedList,function(e){return"tags"==t.listType?s("c-release-tag-item",{attrs:{version:e.version,id:e.id,date:e.date,author:e.author}}):t._e()})],2)])])])},[],!1,null,"1b556f9e",null);e.default=n.exports},212:function(t,e){},911:function(t,e,s){"use strict";var i=s(212);s.n(i).a}}]);