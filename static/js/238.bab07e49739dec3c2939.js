(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1076:function(t,n,s){"use strict";var e=s(355);s.n(e).a},1673:function(t,n,s){"use strict";s.r(n);var e={name:"benchmark",props:{settings:Object},data:function(){return{fps:0,fpsVals:[],running:!1,finished:!1,results:{avgFps:0,grade:""},btnMsg:"UPDATE SETTINGS AUTOMATICALLY"}},methods:{benchmark:function(){var t=this;this.running=!0,this.finished=!1,this.fpsVals=[];var n=[],s=0,e=0;!function i(){window.requestAnimationFrame(function(){e++;for(var a=performance.now();n.length>0&&n[0]<=a-1e3;)n.shift();n.push(a),s=n.length,t.fps=s,e>60&&t.fpsVals.push(s),e>500?(t.running=!1,t.finished=!0,t.getResults()):i()})}()},getResults:function(){var t=Math.round(this.fpsVals.reduce(function(t,n){return t+n},0)/this.fpsVals.length),n="good";t<50&&t>30?n="avg":t<30&&(n="bad"),this.results.avgFps=t,this.results.grade=n,this.results.text="good"==n?"There is no need to lower your settings":"You should consider lowering your settings (preferably by auto-update option)",this.autoUpdateSettings()},updateSettings:function(t,n){this.$store.commit("application/updateClientSettings",{key:t,value:n})},toggleAutoUpdateSettings:function(){this.updateSettings("auto_update_settings")},autoUpdateSettings:function(){var t=this,n=this.settings;if(n.client.auto_update_settings&&this.finished&&!this.running){var s=this.results.grade,e=["autoplay","animations"],i=function(n){return e.forEach(function(s){t.updateSettings(s,n)})};"good"===s?i(!0):"avg"===s?(n.client.autoplay&&this.updateSettings("autoplay",!1),n.client.animations&&this.updateSettings("animations",!1)):i(!1),this.$snotify.success("Settings were successfully updated","Settings updated",{timeout:2500,pauseOnHover:!0})}}}},i=(s(1076),s(0)),a=Object(i.a)(e,function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("div",[s("c-button",{class:{"avoid-clicks":t.running},attrs:{iconHide:""},on:{click:t.benchmark}},[t._v("\n            "+t._s(t.finished?"Try again":t.running?"Running...":"Run Performance Test")+"\n        ")]),t._v(" "),s("p",{staticClass:"benchmark__status"},[t._v("STATUS: "+t._s(t.running?"Running":t.finished?"Finished":"Waiting to start"))]),t._v(" "),t.running?s("p",[t._v("FPS: "+t._s(t.fps))]):t.finished?s("p",[t._v("\n            Average fps: "),s("strong",{staticClass:"benchmark__fps",class:t.results.grade},[t._v(t._s(t.results.avgFps))]),s("br"),t._v("\n            "+t._s(t.results.text)+"\n        ")]):s("p",[t._v("Run this benchmark to check your performance")])],1),t._v(" "),s("div",[t.settings.client.auto_update_settings?s("c-button",{attrs:{status:"success"},on:{click:t.toggleAutoUpdateSettings}},[t._v("\n            SETTINGS UPDATED AUTOMATICALLY\n        ")]):t._e(),t._v(" "),t.settings.client.auto_update_settings?t._e():s("c-button",{attrs:{status:"warning"},on:{click:t.toggleAutoUpdateSettings}},[t._v("\n            SETTINGS NOT UPDATED AUTOMATICALLY\n        ")])],1)])},[],!1,null,"7bf765dd",null);n.default=a.exports},355:function(t,n){}}]);