(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{1493:function(t,o,s){"use strict";var n=s(515);s.n(n).a},1785:function(t,o,s){"use strict";s.r(o);var n={props:{prompt:{type:Boolean,default:!1}},data:function(){return{userAgent:"",showAll:!1,downloading:null,defaultDownload:null,downloads:{macos:{default:{text:"MacOS",subtext:"64-bit",to:"/download/desktop/mac"}},windows:{default:{text:"Windows",subtext:"64-bit",to:"/download/desktop/windows"},generic32:{text:"Windows",subtext:"32-bit",to:"/download/desktop/windows-32bit"}},linux:{default:{text:"Linux",subtext:"64-bit",to:"/download/desktop/linux"},generic32:{text:"Linux",subtext:"32-bit",to:"/download/desktop/linux-32bit"},debian64:{text:"Linux",subtext:"64-bit Debian",to:"/download/desktop/linux-64bit-debian"},debian32:{text:"Linux",subtext:"32-bit Debian",to:"/download/desktop/linux-32bit-debian"}}}}},created:function(){this.getOS()},methods:{getOS:function(){var t=window.navigator.userAgent,o=window.navigator.platform;-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(o)?this.userAgent="macos":-1!==["iPhone","iPad","iPod"].indexOf(o)?this.userAgent="ios":-1!==["Win32","Win64","Windows","WinCE"].indexOf(o)?this.userAgent="windows":/Android/.test(t)?this.userAgent="android":/Linux/.test(o)&&(this.userAgent="linux"),this.defaultDownload=this.downloads[this.userAgent].default},showAllPlatforms:function(){this.showAll=!this.showAll},startDownload:function(t){this.downloading=t}}},e=(s(1493),s(0)),i=Object(e.a)(n,function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"welcome-block"},[s("div",{staticClass:"welcome-block__header"},[s("c-img",{attrs:{src:"/static/img/logo-white.svg",alt:"Logo"}})],1),t._v(" "),s("div",{staticClass:"welcome-block__download-block"},[s("div",{staticClass:"info"},[t.prompt?s("h4",{staticClass:"font-weight-bold text-uppercase h3"},[t._v("This requires our desktop version")]):t._e(),t._v(" "),t.prompt?s("p",{staticClass:"h4"},[t._v("\n                Some actions are not safe within a browser,\n                so we built BlockHub it's own fortress,\n                a safer environment for you to do much more!\n            ")]):t._e(),t._v(" "),t.prompt?t._e():s("h4",{staticClass:"font-weight-bold text-uppercase h3"},[t._v("DO MORE WITH OUR DESKTOP CLIENT")]),t._v(" "),t.prompt?t._e():s("p",{staticClass:"h4"},[t._v("\n                Some actions are not safe within a browser, so we built BlockHub it's own fortress, a safer environment for you to do much more!\n            ")]),t._v(" "),s("div",{staticClass:"action d-flex align-items-center"},[t.downloading?t._e():s("c-button",{staticClass:"btn btn-outline-success",attrs:{status:"none",to:t.defaultDownload.to},on:{click:function(o){t.startDownload(t.defaultDownload)}}},[s("strong",[t._v("Download Now")]),t._v(" "),s("small",[t._v("for "+t._s(t.defaultDownload.text))])]),t._v(" "),t.downloading?s("div",[t._v("\n                    Downloading now. "),s("c-button",{attrs:{status:"none",to:t.downloading.to}},[t._v("Click here")]),s("br"),t._v(" if it doesn't start in 10 seconds.\n                ")],1):t._e(),t._v(" "),s("div",{staticClass:"download_info",on:{click:t.showAllPlatforms}},[s("h6",[t._v("Using another OS?")]),t._v(" "),s("p",[t._v("We are multiplatform, enjoy!")]),t._v(" "),s("i",{staticClass:"fab fa-apple"}),t._v(" "),s("i",{staticClass:"fab fa-linux"}),t._v(" "),s("i",{staticClass:"fab fa-windows"})])],1)]),t._v(" "),t.showAll?s("div",{staticClass:"other_options"},t._l(t.downloads,function(o,n){return s("div",{key:n},t._l(o,function(o,n){return s("c-button",{key:n,staticClass:"btn",attrs:{status:"none",to:o.to}},[s("strong",[t._v(t._s(o.text))]),t._v(" "),s("small",[t._v(t._s(o.subtext))])])}))})):t._e()]),t._v(" "),s("div",{staticClass:"welcome-block__screen"},[s("c-img",{attrs:{src:"/static/img/welcome-box.png"}})],1)])},[],!1,null,"07fde72c",null);o.default=i.exports},515:function(t,o){}}]);