(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{1304:function(t,s,n){"use strict";n.r(s);var e={name:"benchmark",props:{settings:Object},data:function(){return{fps:0,fpsVals:[],running:!1,finished:!1,results:{avgFps:0,grade:""},btnMsg:"UPDATE SETTINGS AUTOMATICALLY"}},methods:{benchmark:function(){var t=this;this.running=!0,this.finished=!1,this.fpsVals=[];var s=[],n=0,e=0;!function i(){window.requestAnimationFrame(function(){e++;for(var a=performance.now();s.length>0&&s[0]<=a-1e3;)s.shift();s.push(a),n=s.length,t.fps=n,e>60&&t.fpsVals.push(n),e>500?(t.running=!1,t.finished=!0,t.getResults()):i()})}()},getResults:function(){var t=Math.round(this.fpsVals.reduce(function(t,s){return t+s},0)/this.fpsVals.length),s="good";t<50&&t>30?s="avg":t<30&&(s="bad"),this.results.avgFps=t,this.results.grade=s,this.results.text="good"==s?"There is no need to lower your settings":"You should consider lowering your settings (preferably by auto-update option)"},updateSettings:function(t){this.$store.commit("UPDATE_CLIENT_SETTINGS",t)},autoUpdateSettings:function(){var t=this;if(!this.finished||this.running)this.btnMsg="YOU NEED TO START A BENCHMARK FIRST",setTimeout(function(){return t.btnMsg="UPDATE SETTINGS AUTOMATICALLY"},2e3);else{var s=this.results.grade,n=this.settings,e=["autoplay","animations"],i=function(s){return e.forEach(function(e){n[e]!=s&&t.updateSettings(e)})};"good"==s?i(!0):"avg"==s?(n.autoplay||this.updateSettings("autoplay"),n.animations&&this.updateSettings("animations")):i(!1),this.$snotify.success("Settings were successfully updated","Settings updated",{timeout:2500,pauseOnHover:!0}),this.$notif({title:"Saved",body:"Settings were saved successfully"})}}}},i=(n(814),n(0)),a=Object(i.a)(e,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("div",[n("c-button",{class:{"avoid-clicks":t.running},attrs:{icon_hide:""},on:{click:t.benchmark}},[t._v("\n            "+t._s(t.finished?"Try again":t.running?"Running...":"Run Performance Test")+"\n        ")]),t._v(" "),n("p",{staticClass:"benchmark__status"},[t._v("STATUS: "+t._s(t.running?"Running":t.finished?"Finished":"Waiting to start"))]),t._v(" "),t.running?n("p",[t._v("FPS: "+t._s(t.fps))]):t.finished?n("p",[t._v("\n            Average fps: "),n("strong",{staticClass:"benchmark__fps",class:t.results.grade},[t._v(t._s(t.results.avgFps))]),n("br"),t._v("\n            "+t._s(t.results.text)+"\n        ")]):n("p",[t._v("Run this benchmark to check your performance")])],1),t._v(" "),n("div",[n("c-button",{attrs:{status:"success"},on:{click:t.autoUpdateSettings}},[t._v(t._s(t.btnMsg))])],1)])},[],!1,null,"11f61678",null);s.default=a.exports},259:function(t,s){},814:function(t,s,n){"use strict";var e=n(259);n.n(e).a}}]);