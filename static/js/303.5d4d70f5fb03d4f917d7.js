(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{1093:function(t,e,n){"use strict";var i=n(340);n.n(i).a},1772:function(t,e,n){"use strict";n.r(e);n(40);var i=n(11),s={props:["product","editing"],components:{"c-game-plan":function(t){return n.e(263).then(function(){var e=[n(1653)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-screen-gallery":function(t){return n.e(262).then(function(){var e=[n(1676)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-promotion-box":function(t){return n.e(299).then(function(){var e=[n(1642)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-rating-block":function(t){return n.e(224).then(function(){var e=[n(1787)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-purchase-block":function(t){return n.e(298).then(function(){var e=[n(1651)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-frequently-traded-assets":function(t){return n.e(261).then(function(){var e=[n(1647)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-community-spotlight":function(t){return n.e(260).then(function(){var e=[n(1644)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[n(1779)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-review":function(t){return n.e(297).then(function(){var e=[n(1639)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-system-requirements":function(t){return n.e(296).then(function(){var e=[n(1677)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-language-support":function(t){return n.e(295).then(function(){var e=[n(1707)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-stream-item":function(t){return n.e(249).then(function(){var e=[n(1783)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-modal":function(t){return n.e(226).then(function(){var e=[n(1774)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-game-installer":function(t){return n.e(294).then(function(){var e=[n(1740)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-swiper":i.swiper,"c-slide":i.swiperSlide,"c-review-form":function(t){return n.e(293).then(function(){var e=[n(1792)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{promotionSections:null,sliderOptions:{slidesPerView:4,spaceBetween:20,breakpoints:{1200:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:1,spaceBetween:0}}},streamersList:8,showInstaller:!1,reviewForm:!1}},methods:{showPurchaseModal:function(){this.$store.dispatch("application/activateModal","purchase")},showArrowsState:function(t,e){return t.length>e},scrollToReviews:function(){this.$refs.reviews.scrollIntoView()}},computed:{streamsSlider:function(){return this.$refs.streamsSlider.swiper},wishlist:function(){return this.$store.state.community.profiles[this.$store.state.application.activeProfile.id]||(this.$store.state.community.profiles[this.$store.state.application.activeProfile.id]={productWishlist:{}}),this.$store.state.community.profiles[this.$store.state.application.activeProfile.id].productWishlist},streams:function(){return this.product.meta.streams},reviews:function(){return this.product.meta.reviews},currentRelease:function(){var t=this;return this.product.meta.releases&&this.product.meta.releases.find(function(e){return t.product.meta.currentVersion===e.version})},helpfulReviews:function(){if(!this.reviews)return[];var t=[];return this.reviews.forEach(function(e){e.helpful&&t.push(e)}),t},recentReviews:function(){if(!this.reviews)return[];var t=[];return this.reviews.forEach(function(e){e.recent&&t.push(e)}),t}}},r=(n(1093),n(0)),o=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-8 col-xl-8"},[t.product.meta.images?n("c-screen-gallery",{attrs:{items:[t.product.meta.images.mediumTile].concat(t.product.meta.images.preview),video_url:t.product.meta.video}}):t._e(),t._v(" "),t._l(t.promotionSections,function(e,i){return t.promotionSections?n("div",{key:i},[i?n("h3",{staticStyle:{"margin-top":"20px"}},[t._v(t._s(i))]):t._e(),t._v(" "),t._l(e,function(e,i){return t.product.meta.promotions?n("c-promotion-box",{key:i,attrs:{title:e.title,price:e.price}}):t._e()})],2):t._e()}),t._v(" "),n("div",{staticClass:"overflow-hidden"},t._l(t.product.meta.plans,function(t,e){return n("c-game-plan",{key:e,attrs:{plan:t}})})),t._v(" "),t.editing?t._e():n("div",{staticClass:"main-content",domProps:{innerHTML:t._s(t.product.meta.content)}},[t._v("\n            "+t._s(t.product.meta.content)+"\n        ")]),t._v(" "),t.editing?n("div",{staticClass:"content-editor"},[n("div",{attrs:{id:"summernote"},domProps:{innerHTML:t._s(t.product.meta.content)}},[t._v(t._s(t.product.meta.content))])]):t._e()],2),t._v(" "),n("div",{staticClass:"col-12 col-lg-4 col-xl-4"},[n("c-purchase-block",{staticClass:"margin-bottom-15",attrs:{isUnavailable:!t.currentRelease,price:t.product.meta.price,tags:["New"],onClickPurchase:t.showPurchaseModal,inWishlist:!!t.wishlist[t.product.id],inShortcut:t.$store.state.application.shortcuts.find(function(e){return e.id=="product"+t.product.id}),releaseDate:t.product.meta.releaseDate,playLink:t.currentRelease&&t.currentRelease.playLink},on:{addToWishlist:function(e){t.$store.dispatch("community/updateWishlist",["product",t.product.id])},addToShortcut:function(e){t.$store.commit("application/updateShortcut",{id:"product"+t.product.id,type:"product",text:t.product.name,to:"/product/"+t.product.id,image:t.product.meta.images.mediumTile})}}}),t._v(" "),n("c-button",{attrs:{iconHide:"",hidden:""},on:{click:function(e){t.showInstaller=!t.showInstaller}}},[t._v("Open installer")]),t._v(" "),n("c-rating-block",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"RATINGS",expression:"'RATINGS'"}],staticClass:"margin-bottom-20",attrs:{items:t.product.meta.rating,parentPath:"/product/"+t.product.id},on:{goto:t.scrollToReviews}}),t._v(" "),n("c-frequently-traded-assets",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"ASSETS",expression:"'ASSETS'"}],staticClass:"margin-bottom-20",attrs:{items:t.product.meta.frequentlyTradedAssets,assetsPath:"/product/"+t.product.id+"/assets"}}),t._v(" "),n("c-community-spotlight",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"COMMUNITY",expression:"'COMMUNITY'"}],staticClass:"margin-bottom-20",attrs:{discussions:t.product.meta.community.discussions,communityPath:"/product/"+t.product.id+"/community"}}),t._v(" "),n("c-block",{staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"Official",noGutter:!0,bgGradient:!0,onlyContentBg:!0,showBackground:!0}},[n("div",[n("c-button",{staticClass:"mb-1 text-align-center",attrs:{status:"dark",size:"md",full:""},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Open in Discord")]),t._v(" "),n("c-button",{staticClass:"mb-1 text-align-center",attrs:{status:"dark",size:"md",full:""},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Open in Twitch")]),t._v(" "),n("c-button",{staticClass:"mb-1 text-align-center",attrs:{status:"dark",size:"md",full:""},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Open in YouTube")]),t._v(" "),n("c-button",{staticClass:"mb-1 text-align-center",attrs:{status:"dark",size:"md",full:""},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Open in BlockHub")])],1)]),t._v(" "),n("c-system-requirements",{staticClass:"margin-bottom-20",attrs:{requirements:t.product.meta.systemRequirements}}),t._v(" "),n("c-language-support",{attrs:{languages:t.product.meta.languageSupport}})],1),t._v(" "),n("div",{staticClass:"col-12"},[n("c-block",{ref:"streamsSlider",staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"Updates",noGutter:!0,bgGradient:!0,onlyContentBg:!0,showArrows:!0,showBackground:!0},on:{prevClick:function(e){t.streamsSlider.slidePrev()},nextClick:function(e){t.streamsSlider.slideNext()}}},[n("div",{staticClass:"h5"},[t._v("\n                Updates were not found.\n            ")])])],1),t._v(" "),n("div",{staticClass:"col-12"},[n("c-block",{ref:"streamsSlider",staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"Streams",noGutter:!0,bgGradient:!0,onlyContentBg:!0,showArrows:!0,showBackground:!0},on:{prevClick:function(e){t.streamsSlider.slidePrev()},nextClick:function(e){t.streamsSlider.slideNext()}}},[t.streams?n("c-swiper",{attrs:{options:t.sliderOptions}},t._l(t.streams,function(e,i){return n("c-slide",{key:i},[n("c-stream-item",{attrs:{streamGame:t.product.name,streamName:e.userName,streamAvatar:e.userAvatar,streamImg:e.previews,streamLink:e.src,streamViews:e.views}})],1)})):n("div",{staticClass:"h5"},[t._v("\n                Twitch streams were not found.\n            ")])],1)],1),t._v(" "),n("div",{staticClass:"col-12"},[n("c-block",{ref:"streamsSlider",staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"World Records",noGutter:!0,bgGradient:!0,onlyContentBg:!0,showArrows:!0,showBackground:!0},on:{prevClick:function(e){t.streamsSlider.slidePrev()},nextClick:function(e){t.streamsSlider.slideNext()}}},[n("div",{staticClass:"h5"},[t._v("\n                World records were not found.\n            ")])])],1),t._v(" "),n("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"TOURNAMENTS",expression:"'TOURNAMENTS'"}],staticClass:"col-12"},[n("c-block",{ref:"streamsSlider",staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"Upcoming tournaments",noGutter:!0,bgGradient:!0,onlyContentBg:!0,showArrows:!0,showBackground:!0},on:{prevClick:function(e){t.streamsSlider.slidePrev()},nextClick:function(e){t.streamsSlider.slideNext()}}},[n("div",{staticClass:"h5"},[t._v("\n                Tournaments not found.\n            ")])])],1),t._v(" "),n("div",{ref:"reviews",staticClass:"col-12"},[n("c-block",{ref:"streamsSlider",staticClass:"margin-top-30 margin-bottom-20",attrs:{title:"Reviews",noGutter:!0,bgGradient:!0,onlyContentBg:!0,showArrows:!0,showBackground:!0},on:{prevClick:function(e){t.streamsSlider.slidePrev()},nextClick:function(e){t.streamsSlider.slideNext()}}},[t.helpfulReviews.length?n("div",{staticClass:"col-md-6 col-12"},[n("h3",{staticClass:"margin-vertical-20"},[t._v("Most helpful")]),t._v(" "),t._l(t.helpfulReviews,function(t,e){return n("c-review",{key:e,attrs:{review:t}})})],2):t.recentReviews.length?n("div",{staticClass:"col-md-6 col-12"},[n("h3",{staticClass:"margin-vertical-20"},[t._v("Most recent")]),t._v(" "),t._l(t.recentReviews,function(t,e){return n("c-review",{key:e,attrs:{review:t}})})],2):n("div",{staticClass:"h5"},[t.reviewForm?t._e():[t._v("\n                    No reviews yet. "),n("c-button",{staticClass:"p-0",attrs:{status:"plain",size:"md"},on:{click:function(e){t.reviewForm=!0}}},[t._v("Be the first?")])],t._v(" "),t.reviewForm?[n("c-review-form",{on:{cancel:function(e){t.reviewForm=!t.reviewForm}}})]:t._e()],2)])],1),t._v(" "),t.showInstaller?n("c-modal",{attrs:{title:t.product.name},on:{close:function(e){t.showInstaller=!1}}},[n("c-game-installer",{attrs:{slot:"body",product:t.product},on:{cancel:function(e){t.showInstaller=!1}},slot:"body"})],1):t._e()],1)},[],!1,null,null,null);e.default=o.exports},340:function(t,e){}}]);