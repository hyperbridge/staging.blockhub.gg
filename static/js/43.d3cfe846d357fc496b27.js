(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1640:function(e,t,n){"use strict";n.r(t);var i=n(9),s=n.n(i),r=n(6),a=n.n(r),c=n(26),o=n.n(c),p=n(8),l=n.n(p),u=n(2),d=n.n(u),v=n(12),f=n.n(v),h=n(63),_=n.n(h),m={props:["profileId"],components:{"c-block":function(e){return Promise.resolve().then(function(){var t=[n(1574)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-range-slider":function(e){return n.e(200).then(function(){var t=[n(1458)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-asset-preview":function(e){return n.e(192).then(function(){var t=[n(1481)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-asset-preview-price":function(e){return n.e(198).then(function(){var t=[n(1498)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-asset-grid":function(e){return n.e(193).then(function(){var t=[n(1447)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-content-navigation":function(e){return n.e(11).then(function(){var t=[n(1436)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tab":function(e){return n.e(188).then(function(){var t=[n(1457)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-tabs":function(e){return n.e(189).then(function(){var t=[n(1463)];e.apply(null,t)}.bind(this)).catch(n.oe)},"c-datepicker":function(e){return n.e(218).then(function(){var t=[n(1720)];e.apply(null,t)}.bind(this)).catch(n.oe)}},data:function(){return{newSniper:{asset:null,priceMin:0,priceMax:0,expDate:""},edited:{},activeStep:1,errors:[],isLoading:!0}},methods:{createSniper:function(e){var t=this,n=this.activeStep,i=this.newSniper,s=i.asset,r=_()(i,["asset"]);this.errors=[];var a=function(e){return t.errors.push(e)};if(1===n)null==s?a("Select an asset first."):this.activeStep=2;else if(e&&e<n)this.activeStep=e;else if(f()(r).some(function(e){return!e})){var c=r.priceMin,o=r.priceMax,p=r.expDate;c||a("Invalid minimum price range."),o||a("Invalid maximum price range."),p||a("Invalid expiration date.")}else this.$store.dispatch("create",["assets/prospectors",d()({},this.newSniper,{user:this.profile})]),this.$snotify.success("Auction prospector has been successfully created","Created"),this.resetCreation()},setEdited:function(e){this.edited=d()({},e)},resetCreation:function(){this.activeStep=1,this.newSniper={asset:null,priceMin:0,priceMax:0,expDate:""},this.errors=[]},getPrice:function(e,t){return e&&Math.round(2*e.price[t])},getProspectors:function(){var e=this;return l()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,new o.a(function(e){return setTimeout(e,1e3)});case 3:e.isLoading=!1;case 4:case"end":return t.stop()}},t,e)}))()}},computed:{snipers:function(){return this.$store.getters["assets/snipers"]},assets:function(){return this.$store.getters["assets/assets"]},assetsArray:function(){return this.$store.getters["assets/assetsArray"]},prospectors:function(){var e=this;return this.$store.getters["assets/prospectorsMap"].filter(function(t){var n=s()(t,2);n[0];return n[1].user.id==e.profileId})},profile:function(){return this.$store.state.application.activeProfile}},watch:{profileId:{handler:"getProspectors",immediate:!0}}},b=(n(821),n(820),n(0)),x=Object(b.a)(m,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isLoading?n("p",[e._v("Loading ...")]):n("div",[n("c-block",{attrs:{title:"Created auction prospectors",noGutter:"",onlyContentBg:"",bgGradient:""}},[n("table",{staticClass:"snipers-table"},[n("thead",[n("th",[e._v("ID")]),e._v(" "),n("th",[e._v("Asset")]),e._v(" "),n("th",[e._v("Minimum price")]),e._v(" "),n("th",[e._v("Maximum price")]),e._v(" "),n("th",[e._v("Expiration date")]),e._v(" "),n("th",[e._v("Edit")])]),e._v(" "),n("tbody",e._l(e.prospectors,function(t){var i=t[0],s=t[1];return n("tr",{key:i},[e.edited.id!=s.id?[n("td",[e._v(e._s(i))]),e._v(" "),n("td",[n("c-asset-preview",{attrs:{asset:s.asset,size:"sm"}})],1),e._v(" "),n("td",[e._v(e._s(s.priceMin)+" $")]),e._v(" "),n("td",[e._v(e._s(s.priceMax)+" $")]),e._v(" "),n("td",[e._v(e._s(e._f("timeAgo")(s.expDate)))]),e._v(" "),n("td",[n("c-button",{attrs:{status:"info",icon:"edit"},on:{click:function(t){e.setEdited(s)}}},[e._v("Edit")])],1)]:[n("td",[e._v(e._s(i))]),e._v(" "),n("td",[n("c-asset-preview",{attrs:{asset:s.asset,size:"sm"}})],1),e._v(" "),n("td",[n("c-input",{staticClass:"edit-input",model:{value:e.edited.priceMin,callback:function(t){e.$set(e.edited,"priceMin",t)},expression:"edited.priceMin"}})],1),e._v(" "),n("td",[n("c-input",{staticClass:"edit-input",model:{value:e.edited.priceMax,callback:function(t){e.$set(e.edited,"priceMax",t)},expression:"edited.priceMax"}})],1),e._v(" "),n("td",[n("c-datepicker",{attrs:{"input-class":"form-control form-calendar__text edit-input","calendar-class":"form-calendar"},model:{value:e.edited.expDate,callback:function(t){e.$set(e.edited,"expDate",t)},expression:"edited.expDate"}})],1),e._v(" "),n("td",[n("c-button",{attrs:{status:"warning",iconHide:""},on:{click:function(t){e.edited={}}}},[e._v("Cancel")]),e._v(" "),n("c-button",{attrs:{status:"danger"},on:{click:function(t){e.$store.dispatch("delete",["assets/prospectors",i])}}},[e._v("Delete")]),e._v(" "),n("c-button",{attrs:{status:"success"},on:{click:function(t){e.$store.dispatch("update",["assets/prospectors",i,e.edited]),e.edited={}}}},[e._v("Save")])],1)]],2)}))])]),e._v(" "),n("c-block",{attrs:{title:"Create new auction prospector",noGutter:"",onlyContentBg:"",bgGradient:""}},[e.errors.length?[n("p",[e._v("Correct following error(s):")]),e._v(" "),n("ul",e._l(e.errors,function(t,i){return n("li",{key:i},[e._v("\n                        "+e._s(t)+"\n                    ")])}))]:e._e(),e._v(" "),n("c-tabs",{staticClass:"margin-bottom-100",attrs:{tabText:"Step",setActiveTab:e.activeStep},on:{click:e.createSniper}},[n("c-tab",{attrs:{tab_id:1}},[n("p",[e._v("Select asset that you are going to buy")]),e._v(" "),n("c-content-navigation",{attrs:{items:e.assetsArray,setLimits:10},scopedSlots:e._u([{key:"default",fn:function(t){return n("c-asset-grid",{attrs:{assets:t.items},on:{click:function(t){e.newSniper.asset=t,e.activeStep=2}}})}}])})],1),e._v(" "),n("c-tab",{attrs:{tab_id:2}},[n("h4",{staticClass:"text-align-center"},[e._v("Selected asset:")]),e._v(" "),n("c-asset-preview-price",{staticClass:"margin-auto margin-bottom-30 half-width",attrs:{asset:e.newSniper.asset}}),e._v(" "),n("p",[e._v("Select minimum price")]),e._v(" "),n("div",{staticClass:"flex-center-between margin-bottom-20"},[n("c-range-slider",{staticClass:"half-width margin-right-20",attrs:{max:e.getPrice(e.newSniper.asset,"min")},model:{value:e.newSniper.priceMin,callback:function(t){e.$set(e.newSniper,"priceMin",t)},expression:"newSniper.priceMin"}}),e._v(" "),n("c-input",{staticClass:"half-width",model:{value:e.newSniper.priceMin,callback:function(t){e.$set(e.newSniper,"priceMin",t)},expression:"newSniper.priceMin"}})],1),e._v(" "),n("p",[e._v("Select maximum price")]),e._v(" "),n("div",{staticClass:"flex-center-between margin-bottom-20"},[n("c-range-slider",{staticClass:"half-width margin-right-20",attrs:{max:e.getPrice(e.newSniper.asset,"max")},model:{value:e.newSniper.priceMax,callback:function(t){e.$set(e.newSniper,"priceMax",t)},expression:"newSniper.priceMax"}}),e._v(" "),n("c-input",{staticClass:"half-width",model:{value:e.newSniper.priceMax,callback:function(t){e.$set(e.newSniper,"priceMax",t)},expression:"newSniper.priceMax"}})],1),e._v(" "),n("p",[e._v("Select expiration date")]),e._v(" "),n("div",{staticClass:"flex-center margin-bottom-40"},[n("c-datepicker",{attrs:{placeholder:"Expiration date","input-class":"form-control form-calendar__text","calendar-class":"form-calendar"},model:{value:e.newSniper.expDate,callback:function(t){e.$set(e.newSniper,"expDate",t)},expression:"newSniper.expDate"}})],1),e._v(" "),n("div",{staticClass:"flex-center-between"},[n("c-button",{attrs:{status:"warning",icon:"trash-alt",size:"lg"},on:{click:function(t){e.resetCreation()}}},[e._v("\n                            Cancel\n                        ")]),e._v(" "),n("c-button",{attrs:{status:"success",size:"lg"},on:{click:function(t){e.createSniper()}}},[e._v("\n                            Create\n                        ")])],1)],1)],1)],2)],1)])},[],!1,null,"1bfc5319",null);t.default=x.exports},177:function(e,t){},178:function(e,t){},820:function(e,t,n){"use strict";var i=n(177);n.n(i).a},821:function(e,t,n){"use strict";var i=n(178);n.n(i).a}}]);