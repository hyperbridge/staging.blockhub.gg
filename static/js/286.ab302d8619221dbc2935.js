(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{1471:function(t,s,a){"use strict";a.r(s);var i={name:"game-library-item",props:["game","isLoading","online","favorites"],data:function(){return{shareList:!1,active:!1}},components:{"c-dropdown":function(t){return a.e(221).then(function(){var s=[a(1384)];t.apply(null,s)}.bind(this)).catch(a.oe)},"c-share-list":function(t){return a.e(239).then(function(){var s=[a(1378)];t.apply(null,s)}.bind(this)).catch(a.oe)}},methods:{toggleList:function(){this.shareList=!this.shareList},activeMenu:function(){console.log(this.active),this.active=!this.active}},watch:{active:function(){this.active||(this.shareList=!1)}}},n=(a(914),a(0)),e=Object(n.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"game-library__item loading--w-spinner",class:{"is-active":t.active}},[a("div",{staticClass:"item-img"},[a("c-img",{attrs:{src:t.game.images.mediumTile}})],1),t._v(" "),a("div",{staticClass:"item-info"},[a("div",[t._v("\n            "+t._s(t.game.name)+"\n        ")]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"dropdown-container"},[a("c-dropdown",{class:{"no-right-border":t.shareList},on:{click:t.activeMenu}},[a("ul",{staticClass:"item-dropdown"},[a("li",[a("a",{attrs:{href:"#3"}},[a("i",{staticClass:"fas fa-list-alt"}),t._v("\n                        Add to Collection\n                    ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3"}},[a("i",{staticClass:"fas fa-shopping-basket"}),t._v("\n                        Market page\n                    ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3"}},[a("i",{staticClass:"fas fa-th"}),t._v("\n                        Inventory\n                    ")])]),t._v(" "),a("hr"),t._v(" "),a("li",{on:{click:t.toggleList}},[a("i",{staticClass:"fas fa-share"}),t._v("\n                    Share\n                    "),a("c-share-list",{staticClass:"in-dropdown",attrs:{onlineList:t.online,favoritesList:t.favorites,show:t.shareList}})],1),t._v(" "),a("li",[a("a",{attrs:{href:"#3"}},[a("i",{staticClass:"fas fa-link"}),t._v("\n                        Copy Link\n                    ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3"}},[a("i",{staticClass:"fab fa-facebook"}),t._v("\n                        Share on Facebook\n                    ")])])])])],1),t._v(" "),t.isLoading?a("div",{staticClass:"loader-block"},[a("div",{staticClass:"loading-spinner"})]):t._e()])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("i",{staticClass:"fas fa-clock mr-2"}),this._v("\n            345 Hours Played\n        ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("i",{staticClass:"fas fa-trophy mr-2"}),this._v("\n            15 Achievements\n        ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"item-action"},[s("span",{staticClass:"has-new"},[s("i",{staticClass:"fas fa-cog"})]),this._v(" "),s("span",[s("i",{staticClass:"fas fa-camera"})]),this._v(" "),s("span",[s("i",{staticClass:"fas fa-star"})]),this._v(" "),s("span",[s("i",{staticClass:"fas fa-play"})])])}],!1,null,"0fc58fc9",null);s.default=e.exports},230:function(t,s){},914:function(t,s,a){"use strict";var i=a(230);a.n(i).a}}]);