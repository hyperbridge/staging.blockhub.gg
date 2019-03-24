(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1059:function(t,e,o){"use strict";var s=o(306);o.n(s).a},1587:function(t,e,o){"use strict";o.r(e);var s={components:{"c-project-card":function(t){return o.e(24).then(function(){var e=[o(1821)];t.apply(null,e)}.bind(this)).catch(o.oe)}},data:function(){return{loading:!0}},created:function(){var t=this;this.$store.dispatch("projects/find",{query:{$sort:{createdAt:-1},$limit:25}}).then(function(){t.loading=!1})},computed:{projects:function(){return this.$store.getters["projects/list"]},list:function(){var t=[];return t.push({type:"trendingProjectsRow",data:{title:"Trending Crowdfunds",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.trendingProjects||[]}}),t.push({type:"trendingProjectsRow",data:{title:"Most Popular Projects",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.most_popular_games||[]}}),t.push({type:"trendingProjectsRow",data:{title:"Top Content Proposals",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.topContentIdeas||[]}}),t.push({type:"trendingProjectsRow",data:{title:"Top Item Proposals",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.topItemIdeas||[]}}),t}}},n=(o(1059),o(0)),i=Object(n.a)(s,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("c-layout",{attrs:{navigationKey:"funding"}},[o("div",{staticClass:"row"},[t.$store.state.application.settings.client.hide_crowdfund_game_notice?t._e():o("div",{staticClass:"crowdfund-notice col-12 col-md-6 offset-md-3",staticStyle:{"text-align":"center",width:"100%","margin-top":"30px","margin-bottom":"30px",padding:"20px",border:"3px dashed rgba(0,0,0,0.1)","border-radius":"7px",background:"rgba(0,0,0,0.2)"}},[o("c-button",{staticClass:"btn-close",on:{click:function(e){t.$store.commit("application/updateClientSettings",{key:"hide_crowdfund_game_notice",value:!0})}}},[o("i",{staticClass:"fas fa-times"})]),t._v(" "),o("h2",[t._v("Crowdfund Games")]),t._v(" "),o("div",{staticStyle:{"text-align":"left"}},[o("p",[t._v("Are you looking to crowdfund that game you've been working hard on? We're here to help.")]),t._v(" "),o("p",[t._v("Maybe you just have an awesome idea, or want to inspire your favourite dev studio to continue a series (*cough* half-life).")])]),t._v(" "),o("br"),t._v(" "),t.$store.state.application.developerMode?o("p",[o("c-button",{staticClass:"c-button--lg outline-white",attrs:{to:"/business/project/new"}},[t._v("Get Started")])],1):t._e(),t._v(" "),t.$store.state.application.developerMode?t._e():o("p",[o("c-button",{staticClass:"c-button--lg outline-white",attrs:{to:"/developer/apply"}},[t._v("Get Started")])],1)],1)]),t._v(" "),o("c-block",{attrs:{noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[o("c-heading-bar",{staticClass:"mb-0",attrs:{slot:"title",name:"Browse All Projects"},slot:"title"}),t._v(" "),o("div",{staticClass:"row"},[o("c-loading",{attrs:{enabled:t.loading,size:"lg"}}),t._v(" "),t.loading||t.projects.length?t._e():o("p",[t._v("Nothing could be found. Want to "),o("c-button",{attrs:{status:"plain"},on:{click:function(e){t.$store.commit("application/activateModal","coming-soon")}}},[t._v("Check for updates")]),t._v("?")],1),t._v(" "),t._l(t.projects,function(e,s){return t.projects.length?o("c-project-card",{key:s,staticClass:"p-2 col-3",attrs:{description:e.description,image:e.meta&&e.meta.images.mediumTile,funds:e.meta&&e.meta.funds,parentName:e.product&&e.product.name,parentDeveloper:e.product&&e.product.owner,parentImage:e.product&&e.product.meta&&e.product.meta.images.mediumTile,id:e.id}}):t._e()})],2)],1),t._v(" "),o("c-infinite-content",{attrs:{list:t.list}})],1)},[],!1,null,"5a78ccae",null);e.default=i.exports},306:function(t,e){}}]);