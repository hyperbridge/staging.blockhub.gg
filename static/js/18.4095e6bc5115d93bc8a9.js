(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1111:function(t,e,s){"use strict";var i=s(336);s.n(i).a},1273:function(t,e,s){"use strict";s.r(e);var i=s(1),a=s.n(i),n={name:"game-grid-description",props:{items:{type:Array,required:!0},itemInRow:{type:Number,default:1},showRating:{type:Boolean,default:!0},showDate:{type:Boolean,default:!0},showPrice:{type:Boolean,default:!0},showLink:{type:Boolean,default:!1},pricePosition:{type:String,default:"left"},hovered:{type:Boolean,default:!0},itemBg:String},data:function(){return{itemWidth:""}},components:{"c-tags":function(t){return s.e(8).then(function(){var e=[s(1255)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-rating-stars":function(t){return s.e(167).then(function(){var e=[s(1194)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-tooltip":function(t){return s.e(272).then(function(){var e=[s(1190)];t.apply(null,e)}.bind(this)).catch(s.oe)}},methods:{checkWidth:function(){var t=this.$el.offsetWidth/this.itemInRow;this.itemWidth=t<350?"100%":100/this.itemInRow+"%"},formatDate:function(t){return a()(t).format("DD MMMM, YYYY")},calculateSince:function(t){return a()(t).fromNow()}},mounted:function(){this.$nextTick(function(){window.addEventListener("resize",this.checkWidth),this.checkWidth()})}},o=(s(1111),s(0)),r=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition-group",{ref:"gameList",staticClass:"games-list",attrs:{tag:"div",name:"games-list"}},[t._l(t.items,function(e){return t.items&&t.items.length?s("div",{key:e.id,staticClass:"games-list__item",class:{hovered:t.hovered},style:{width:t.itemWidth,background:t.itemBg}},[s("div",{staticClass:"img"},[e.price&&t.showPrice?s("div",{staticClass:"price",class:["price-position-"+t.pricePosition]},[s("strong",[t._v(t._s(t._f("convertCurrency")(e.price)))])]):t._e(),t._v(" "),s("a",{attrs:{href:"/#/product/"+e.id}},[s("c-img",{attrs:{src:e.images.medium_tile}})],1),t._v(" "),e.crowdfund?s("div",{staticClass:"crowdfund-icon"},[s("i",{staticClass:"fas fa-hand-holding-usd"})]):t._e()]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"text"},[s("div",{staticClass:"state-tag"},["trending"==e.state_tag?[s("span",{staticStyle:{color:"#F75D5D"}},[s("i",{staticClass:"fas fa-fire"}),t._v(" Trending\n                        ")])]:"pre-release"==e.state_tag?[s("i",{staticClass:"fas fa-bolt",staticStyle:{color:"#FADC72"}}),t._v(" "+t._s(e.prerelease_count)+"\n                        "),s("span",{staticClass:"ml-4",staticStyle:{color:"#499fd3"}},[t._v("Pre Release")])]:t._e()],2),t._v(" "),s("a",{attrs:{href:"/#/product/"+e.id,title:e.name+" - product page"}},[s("h4",[t._v(t._s(e.name))])]),t._v(" "),e.crowdfund?s("div",{staticClass:"crowdfund-tag"},[t._v("\n                    Crowdfund Campaign\n                ")]):t._e(),t._v(" "),e.publisher?s("p",[t._v(t._s(e.publisher))]):t._e(),t._v(" "),e.description?s("p",[t._v(t._s(e.description))]):t._e()]),t._v(" "),s("div",{staticClass:"footer"},[s("div",{staticClass:"d-flex flex-nowrap"},[e.release_date&&t.showDate?s("div",{staticClass:"time mr-3"},[s("i",{staticClass:"fas fa-calendar-alt"}),t._v(" "),s("c-tooltip",{attrs:{name:t.calculateSince(e.release_date),position:"center"}},[s("div",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[s("strong",[t._v("Released")]),s("br"),t._v("\n                                "+t._s(t.formatDate(e.release_date))+"\n                            ")])])],1):t._e(),t._v(" "),e.followers?s("div",{staticClass:"followers mr-3"},[s("i",{staticClass:"fas fa-eye"}),t._v(" "),s("c-tooltip",{attrs:{position:"center"}},[s("div",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[s("strong",[t._v("Followers")]),s("br"),t._v("\n                                "+t._s(e.followers)+"\n                            ")])])],1):t._e(),t._v(" "),e.players?s("div",{staticClass:"players"},[s("i",{staticClass:"fas fa-user"}),t._v(" "),s("c-tooltip",{attrs:{position:"center"}},[s("div",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[s("strong",[t._v("Players")]),s("br"),t._v("\n                                "+t._s(e.players)+"\n                            ")])])],1):t._e()]),t._v(" "),e.rating&&t.showRating?s("c-rating-stars",{staticClass:"rating_stars",attrs:{number:e.rating.overall}}):t._e(),t._v(" "),t.showLink?s("c-button",{attrs:{status:"success",href:"/#/product/"+e.id,icon_hide:""}},[t._v("More")]):t._e()],1)])]):t._e()}),t._v(" "),t.items&&t.items.length?t._e():s("p",{key:"nothing"},[t._v("Nothing could be found. Want to "),s("c-button",{attrs:{status:"plain"},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Check for updates")]),t._v("?")],1)],2)},[],!1,null,"eb8f9080",null);e.default=r.exports},336:function(t,e){}}]);