(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1417:function(t,o,n){"use strict";var s=n(484);n.n(s).a},1686:function(t,o,n){"use strict";n.r(o);var s={props:{prompt:{type:Boolean,default:!1}},data:function(){return{user_agent:"",showAll:!1,downloading:null,defaultDownload:null,downloads:{macos:{default:{text:"MacOS",subtext:"64-bit",link:"#/download/desktop/mac"}},windows:{default:{text:"Windows",subtext:"64-bit",link:"#/download/desktop/windows"},generic32:{text:"Windows",subtext:"32-bit",link:"#/download/desktop/windows-32bit"}},linux:{default:{text:"Linux",subtext:"64-bit",link:"#/download/desktop/linux"},generic32:{text:"Linux",subtext:"32-bit",link:"#/download/desktop/linux-32bit"},debian64:{text:"Linux",subtext:"64-bit Debian",link:"#/download/desktop/linux-64bit-debian"},debian32:{text:"Linux",subtext:"32-bit Debian",link:"#/download/desktop/linux-32bit-debian"}}}}},created:function(){this.getOS()},methods:{getOS:function(){var t=window.navigator.userAgent,o=window.navigator.platform;-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(o)?this.user_agent="macos":-1!==["iPhone","iPad","iPod"].indexOf(o)?this.user_agent="ios":-1!==["Win32","Win64","Windows","WinCE"].indexOf(o)?this.user_agent="windows":/Android/.test(t)?this.user_agent="android":/Linux/.test(o)&&(this.user_agent="linux"),this.defaultDownload=this.downloads[this.user_agent].default},showAllPlatforms:function(){this.showAll=!this.showAll},startDownload:function(t){this.downloading=t}}},i=(n(1417),n(0)),e=Object(i.a)(s,function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"welcome-block"},[n("div",{staticClass:"welcome-block__header"},[n("c-img",{attrs:{src:"/static/img/logo-white.svg",alt:"Logo"}})],1),t._v(" "),n("div",{staticClass:"welcome-block__download-block"},[n("div",{staticClass:"info"},[t.prompt?n("h4",{staticClass:"font-weight-bold text-uppercase h3"},[t._v("This requires our desktop version")]):t._e(),t._v(" "),t.prompt?n("p",{staticClass:"h4"},[t._v("\n                Some actions are not safe within a browser,\n                so we built BlockHub it's own fortress,\n                a safer environment for you to do much more!\n            ")]):t._e(),t._v(" "),t.prompt?t._e():n("h4",{staticClass:"font-weight-bold text-uppercase h3"},[t._v("DO MORE WITH OUR DESKTOP CLIENT")]),t._v(" "),t.prompt?t._e():n("p",{staticClass:"h4"},[t._v("\n                Some actions are not safe within a browser, so we built BlockHub it's own fortress, a safer environment for you to do much more!\n            ")]),t._v(" "),n("div",{staticClass:"action d-flex align-items-center"},[t.downloading?t._e():n("a",{staticClass:"btn btn-outline-success",attrs:{href:t.defaultDownload.link},on:{click:function(o){t.startDownload(t.defaultDownload)}}},[n("strong",[t._v("Download Now")]),t._v(" "),n("small",[t._v("for "+t._s(t.defaultDownload.text))])]),t._v(" "),t.downloading?n("div",[t._v("\n                    Downloading now. "),n("a",{attrs:{href:t.downloading.link}},[t._v("Click here")]),n("br"),t._v(" if it doesn't start in 10 seconds.\n                ")]):t._e(),t._v(" "),n("div",{staticClass:"download_info",on:{click:t.showAllPlatforms}},[n("h6",[t._v("Using another OS?")]),t._v(" "),n("p",[t._v("We are multiplatform, enjoy!")]),t._v(" "),n("i",{staticClass:"fab fa-apple"}),t._v(" "),n("i",{staticClass:"fab fa-linux"}),t._v(" "),n("i",{staticClass:"fab fa-windows"})])])]),t._v(" "),t.showAll?n("div",{staticClass:"other_options"},t._l(t.downloads,function(o,s){return n("div",{key:s},t._l(o,function(o,s){return n("a",{key:s,staticClass:"btn",attrs:{href:o.link}},[n("strong",[t._v(t._s(o.text))]),t._v(" "),n("small",[t._v(t._s(o.subtext))])])}))})):t._e()]),t._v(" "),n("div",{staticClass:"welcome-block__screen"},[n("c-img",{attrs:{src:"/static/img/welcome-box.png"}})],1)])},[],!1,null,"8c1d7cfa",null);o.default=e.exports},484:function(t,o){}}]);