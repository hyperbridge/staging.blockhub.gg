(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1421:function(e,t,o){"use strict";var s=o(441);o.n(s).a},1636:function(e,t,o){"use strict";o.r(t);var s=o(8),i=o.n(s),r=(o(12),o(11)),l=(o(40),{props:{darkMode:{type:Boolean,default:!0}},components:{"c-swiper":r.swiper,"c-slide":r.swiperSlide,"c-user-card":function(e){return o.e(14).then(function(){var t=[o(1834)];e.apply(null,t)}.bind(this)).catch(o.oe)}},data:function(){return{options:{slidesPerView:4,spaceBetween:0,navigation:{nextEl:".profile-chooser__wrapper .swiper-button-next",prevEl:".profile-chooser__wrapper .swiper-button-prev"},breakpoints:{1024:{slidesPerView:2},768:{slidesPerView:1,spaceBetween:0}}}}},computed:{profiles:function(){return i()(this.$store.state.profiles.keyedById)},activeProfile:function(){return this.$store.state.application.activeProfile}},methods:{closeProfileChooser:function(){this.$store.commit("application/showProfileChooser",!1)},setDefault:function(e){this.$store.commit("update",["application/activeProfile",e]),this.$store.state.application.developerMode="developer"===e.role}}}),a=(o(1421),o(0)),n=Object(a.a)(l,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"profile-chooser",class:{"profile-chooser--dark-mode":e.darkMode,"profile-chooser--light-mode":!e.darkMode}},[o("div",{staticClass:"profile-chooser__overlay",on:{click:e.closeProfileChooser}}),e._v(" "),o("div",{staticClass:"profile-chooser__wrapper"},[o("div",{staticClass:"profile-chooser__content"},[o("c-heading-bar",{staticClass:"mb-0",attrs:{slot:"title",name:"Choose Profile",showBackground:!1},slot:"title"}),e._v(" "),o("div",{staticClass:"profile-slider"},[o("c-swiper",{attrs:{options:e.options}},e._l(e.profiles,function(t){return o("c-slide",{key:t.id},[o("div",{staticClass:"user-card__container-link",on:{click:function(o){e.setDefault(t)}}},[o("c-user-card",{class:{default:e.activeProfile&&t.id==e.activeProfile.id},attrs:{user:t,previewMode:!t.edit}})],1)])})),e._v(" "),e.profiles.length>3?o("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}):e._e(),e._v(" "),e.profiles.length>3?o("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"}):e._e()],1),e._v(" "),o("c-heading-bar",{staticClass:"mb-0",attrs:{slot:"title",name:"",showBackground:!1},slot:"title"}),e._v(" "),o("div",{staticClass:"profile-chooser__actions"},[o("c-button",{staticClass:"profile-chooser__back-button c-button--lg outline-white",on:{click:e.closeProfileChooser}},[e._v("Back")]),e._v(" "),o("c-button",{staticClass:"profile-chooser__ok-button c-button--lg outline-white",on:{click:e.closeProfileChooser}},[e._v("OK")])],1)],1)])])},[],!1,null,"4f73030a",null);t.default=n.exports},441:function(e,t){}}]);