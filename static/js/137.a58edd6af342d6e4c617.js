(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{172:function(t,o){},577:function(t,o,e){"use strict";var n=e(172);e.n(n).a},721:function(t,o,e){"use strict";e.r(o);var n={name:"main-banner",props:{image:Object,logo:Object,video:Object},components:{"c-button":function(t){return Promise.resolve().then(function(){var o=[e(23)];t.apply(null,o)}.bind(this)).catch(e.oe)}},computed:{bannerImg:function(){var t=this.image;return{"background-image":"url("+t.src+")","background-position":t.position}},logoPosition:function(){switch(this.logo.position){case"left top":return"margin: 0 auto auto 0";case"center top":return"margin: 0 auto";case"right top":return"margin: 0 0 auto auto";case"left center":return"margin: auto auto auto 0";case"center center":return"margin: auto";case"right center":return"margin: auto 0 auto auto";case"left bottom":return"margin: auto auto 0 0";case"center bottom":return"margin: auto auto 0";case"right bottom":return"margin: auto 0 0 auto"}}}},a=(e(577),e(0)),i=Object(a.a)(n,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"main-banner text-white"},[e("div",{staticClass:"main-banner__content"},[t.image?e("div",{staticClass:"image-bg",style:t.bannerImg}):t._e(),t._v(" "),t.video?e("video",{staticClass:"video-bg",attrs:{autoplay:"",playsinline:"",loop:"",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:t.video.src,type:"video/mp4"}})]):t._e(),t._v(" "),e("div",{staticClass:"main-banner__content--logo",class:[t.logo.size?"logo-size-"+t.logo.size:"logo-size-md",t.logo.position],style:t.logoPosition},[e("c-img",{attrs:{src:t.logo.src,alt:"company-logo"}})],1)]),t._v(" "),e("div",{staticClass:"main-banner__footer"},[e("h4",[t._v("\n            Banner Headline or Game title\n        ")]),t._v(" "),e("c-button",{attrs:{status:"success"}},[t._v("Call To Action")])],1)])},[],!1,null,"af9df876",null);o.default=i.exports}}]);