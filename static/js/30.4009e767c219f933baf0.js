(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{126:function(t,e){},1409:function(t,e,n){"use strict";n.r(e);var s=n(69),i=n.n(s),a=n(6),o=n.n(a),r=n(10),l=n.n(r),c=n(428),u=n.n(c),d=n(3),v=n.n(d),f=n(9),h=n.n(f),g=n(70),p={components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[n(1416)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-navigator-item":function(t){return n.e(261).then(function(){var e=[n(1273)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-modal":function(t){return n.e(168).then(function(){var e=[n(1283)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-assets":function(t){return n.e(164).then(function(){var e=[n(1267)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{activeId:null,deleteId:null,deletingTree:null,deletingParentId:null}},methods:{evolveNavigator:function(t){this.$store.dispatch("assets/evolveNavigator",{evolveId:this.activeId,assetId:t}),this.activeId=null},deleteTree:function(t){this.$store.dispatch("assets/devolveNavigator",{id:t,parentId:this.deletingParentId}),this.deletingParentId=null,this.deletingTree=null}},computed:{assets:function(){return this.$store.state.assets.assets},navigator:function(){return this.$store.state.assets.navigator},assetsArray:function(){return h()(this.assets)},deeplyNestedNav:function(){var t=this.navigator,e=this.assets,n=h()(t).reduce(function(t,n){var s=v()({},n);for(var i in s)"object"===u()(s[i])&&(Array.isArray(s[i])?s[i]=[].concat(l()(s[i])):s[i]=v()({},s[i]));return v()({},t,o()({},n.id,v()({},s,{asset:e[s.assetId]})))},{}),s=h()(n),a=!0,r=!1,c=void 0;try{for(var d,f=i()(s);!(a=(d=f.next()).done);a=!0){var g=d.value;g.evolvesTo=g.evolvesTo.map(function(t){return n[t]})}}catch(t){r=!0,c=t}finally{try{!a&&f.return&&f.return()}finally{if(r)throw c}}return s.filter(function(t){return t.isRoot})}},mounted:function(){var t=this;g.a.$on("evolve",function(e){return t.activeId=e}),g.a.$on("devolve",function(e){e.id;var n=e.tree,s=e.parentId;t.deletingTree=[v()({},n,{isRoot:!0})],t.deletingParentId=s})},beforeDestroy:function(){g.a.$off("evolve"),g.a.$off("devolve")}},y=(n(681),n(0)),m=Object(y.a)(p,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("c-layout",{attrs:{navigationKey:"meta"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"item-navigator"},t._l(t.deeplyNestedNav,function(t,e){return n("c-navigator-item",{key:e,attrs:{index:e,item:t,listLength:t.evolvesTo.length}})})),t._v(" "),t.activeId?n("c-modal",{attrs:{title:"Select next asset to expand the tree"},on:{close:function(e){t.activeId=null}}},[n("c-assets",{attrs:{slot:"body",assets:t.assetsArray},on:{click:function(e){t.evolveNavigator(e.id)}},slot:"body"})],1):t._e(),t._v(" "),t.deletingTree?n("c-modal",{attrs:{title:"Delete asset from the tree"},on:{close:function(e){t.deletingTree=null}}},[n("p",{staticClass:"text-align-center"},[t._v("Are you sure to delete this assets tree?")]),t._v(" "),t._l(t.deletingTree,function(t,e){return n("c-navigator-item",{key:e,staticClass:"assets-tree--delete",attrs:{index:e,item:t,listLength:t.evolvesTo.length,hideButtons:""}})}),t._v(" "),n("div",{staticClass:"flex-center-between margin-top-50"},[n("c-button",{attrs:{status:"info",icon_hide:""},on:{click:function(e){t.deletingTree=null}}},[t._v("\n                            Cancel\n                        ")]),t._v(" "),n("c-button",{attrs:{status:"success"},on:{click:function(e){t.deleteTree(t.deletingTree[0].id)}}},[t._v("\n                            Confirm\n                        ")])],1)],2):t._e()],1)])])])},[],!1,null,"3a6b3bb1",null);e.default=m.exports},681:function(t,e,n){"use strict";var s=n(126);n.n(s).a},70:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var s=new(n(5).a)}}]);