(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1391:function(t,i,s){"use strict";var e=s(430);s.n(e).a},1781:function(t,i,s){"use strict";s.r(i);var e={props:{active:{type:Boolean,default:!0}},components:{"c-drag":function(t){return s.e(370).then(function(){var i=[s(1843)];t.apply(null,i)}.bind(this)).catch(s.oe)}},data:function(){return{width:285,height:160,isPlaying:!1}},methods:{destroy:function(){this.$emit("close"),this.isVideo.showPopup=!1},play:function(){this.$refs.video.play(),this.isPlaying=!0},pause:function(){this.$refs.video.pause(),this.isPlaying=!1},fullscreen:function(){this.$refs.video.requestFullscreen()},setCurrentTime:function(){this.$refs.video.currentTime=this.isVideo.currentTime}},computed:{isVideo:function(){return this.$store.state.application.video}},created:function(){this.isVideo.src||(this.isVideo.showPopup=!1)}},n=(s(1391),s(0)),o=Object(n.a)(e,function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"fade"}},[t.active?s("c-drag",{attrs:{w:t.width,h:t.height,x:20,y:20,resizable:!1,z:99999999}},[s("div",{staticClass:"video-container"},[s("div",{staticClass:"video-container__wrapper"},[s("div",{staticClass:"video-container__video"},[s("video",{ref:"video",attrs:{autoplay:""},on:{timeupdate:function(t){},loadeddata:t.setCurrentTime,playing:function(i){t.isPlaying=!0}}},[s("source",{attrs:{src:t.isVideo.src,type:"video/mp4"}}),t._v("\n                        Your browser does not support HTML5 video.\n                    ")])]),t._v(" "),s("div",{staticClass:"video-control"},[t.isPlaying?s("c-button",{staticClass:"video-control__btn video-control__btn--expand",attrs:{status:"none"},on:{click:t.fullscreen}},[s("i",{staticClass:"fas fa-expand"})]):t._e(),t._v(" "),t.isPlaying?t._e():s("c-button",{staticClass:"video-control__btn video-control__btn--play",attrs:{status:"none"},on:{click:t.play}},[s("i",{staticClass:"fas fa-play"})]),t._v(" "),t.isPlaying?s("c-button",{staticClass:"video-control__btn video-control__btn--play",attrs:{status:"none"},on:{click:t.pause}},[s("i",{staticClass:"fas fa-pause"})]):t._e(),t._v(" "),s("c-button",{staticClass:"video-control__btn video-control__btn--times",attrs:{status:"none"},on:{click:t.destroy}},[s("i",{staticClass:"fas fa-times"})])],1)])])]):t._e()],1)},[],!1,null,"210b1a9e",null);i.default=o.exports},430:function(t,i){}}]);