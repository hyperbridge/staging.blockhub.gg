(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1309:function(t,e,n){"use strict";n.r(e);n(23);var a={components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[n(1321)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-block":function(t){return Promise.resolve().then(function(){var e=[n(1278)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-dropdown":function(t){return n.e(14).then(function(){var e=[n(1125)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-input-searcher":function(t){return n.e(150).then(function(){var e=[n(1096)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-dropdown-menu":function(t){return n.e(197).then(function(){var e=[n(1174)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-list":function(t){return n.e(160).then(function(){var e=[n(1177)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-user-head":function(t){return n.e(189).then(function(){var e=[n(1162)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-game-card":function(t){return n.e(223).then(function(){var e=[n(1208)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-game-list":function(t){return n.e(222).then(function(){var e=[n(1210)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{online:[{name:"Sally Hamilton",img:"http://placehold.it/32x32"},{name:"Poole Wise",img:"http://placehold.it/32x32"},{name:"Frye Nash",img:"http://placehold.it/32x32"}],favorites:[{name:"Nixon Love",img:"http://placehold.it/32x32"},{name:"Richards Langley",img:"http://placehold.it/32x32"},{name:"Jill Medina",img:"http://placehold.it/32x32"},{name:"Callahan Ballard",img:"http://placehold.it/32x32"},{name:"Zamora Simmons",img:"http://placehold.it/32x32"},{name:"Jenkins Ruiz",img:"http://placehold.it/32x32"},{name:"Kemp Christian",img:"http://placehold.it/32x32"}]}},computed:{selectableCategory:function(){},selectableRating:function(){},games:function(){return this.$store.state.marketplace.products}}},i=(n(658),n(0)),l=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("c-layout",[n("div",{staticClass:"container-fluid"},[n("h2",[t._v("Your Chest")]),t._v(" "),n("p",[t._v("Here you'll find all your games, items, etc.")]),t._v(" "),n("div",{staticClass:"row margin-top-50"},[n("div",{staticClass:"col-12 col-xl-4"},[n("div",{staticClass:"h2 p-0 m-0"},[t._v("Game Drawer")]),t._v(" "),n("div",[n("strong",[t._v("482")]),t._v("\n                    games in your drawer\n                ")])]),t._v(" "),n("div",{staticClass:"col-12 col-lg-8"},[n("div",{staticClass:"filter-blk d-flex align-items-center"},[n("c-dropdown-menu",{staticClass:"margin-right-10 dark-bg",attrs:{title:"FILTER BY CATEGORY"}},[n("c-list",{attrs:{items:t.selectableCategory},on:{click:function(t){return t.selected=!t.selected}}})],1),t._v(" "),n("c-dropdown-menu",{staticClass:"margin-right-10 dark-bg",attrs:{title:"FILTER BY RATING"}},[n("c-list",{attrs:{items:t.selectableRating},on:{click:function(t){return t.selected=!t.selected}}})],1),t._v(" "),n("c-input-searcher",{staticClass:"assets-explorer__input-searcher",model:{value:t.phrase,callback:function(e){t.phrase=e},expression:"phrase"}})],1)])]),t._v(" "),n("div",{staticClass:"row align-items-stretch margin-top-30"},t._l(t.games,function(e,a){return n("div",{key:a,staticClass:"col-12 col-xl-3 py-3"},[n("c-game-card",{attrs:{game:e,online:t.online,favorites:t.favorites,isLoading:2==a}})],1)})),t._v(" "),n("div",{staticClass:"row align-items-stretch margin-top-30"},[n("div",{staticClass:"col-12 games-list"},t._l(t.games,function(e,a){return n("c-game-list",{key:a,attrs:{online:t.online,favorites:t.favorites,game:e,isLoading:2==a}})}))])])])},[],!1,null,"19a4e5b0",null);e.default=l.exports},153:function(t,e){},658:function(t,e,n){"use strict";var a=n(153);n.n(a).a}}]);