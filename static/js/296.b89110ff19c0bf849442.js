(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{1000:function(t,e,i){"use strict";var n=i(279);i.n(n).a},1001:function(t,e,i){"use strict";var n=i(280);i.n(n).a},1662:function(t,e,i){"use strict";i.r(e);var n=i(3),s=i.n(n),a=(i(5),{props:["project","editing"],components:{"c-game-plan":function(t){return i.e(243).then(function(){var e=[i(1563)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-screen-gallery":function(t){return i.e(242).then(function(){var e=[i(1564)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-tags":function(t){return i.e(12).then(function(){var e=[i(1688)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-rating-block":function(t){return i.e(206).then(function(){var e=[i(1639)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-frequently-traded-assets":function(t){return i.e(241).then(function(){var e=[i(1555)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-community-spotlight":function(t){return i.e(240).then(function(){var e=[i(1548)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-participation-tier":function(t){return i.e(287).then(function(){var e=[i(1549)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[i(1576)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-progress-bar":function(t){return i.e(203).then(function(){var e=[i(1560)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-contribute-form":function(t){return i.e(286).then(function(){var e=[i(635)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-contribute-pledge":function(t){return i.e(285).then(function(){var e=[i(1550)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-badges":function(t){return i.e(222).then(function(){var e=[i(1668)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-decentralization-meter":function(t){return i.e(284).then(function(){var e=[i(1551)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-button-fav":function(t){return i.e(221).then(function(){var e=[i(1650)];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){var t={errors:[],activeElement:{name:!1,backgroundImage:!1,storeImage:!1,developerTags:!1,description:!1,content:!1},authorTagOptions:["game","mod","other"],crowdfundingProps:["spent","locked","overflow"]};return"production"!==this.$store.state.application.environmentMode&&(t=s()({},t,{participationTiers:[{id:1,price:"29",sold:"222",left:"9",tag:"Combo",title:"Game Standard Edition"},{id:2,price:"219",sold:"32",left:"1",tag:"Combo",title:"Game Standard Edition"},{id:3,price:"9",sold:"981",left:"1",tag:"Combo",title:"Game Standard Edition"}]})),t},methods:{showContributeModal:function(){this.$store.commit("application/activateModal","contribute")}},computed:{wishlist:function(){return this.$store.state.application.activeProfile&&this.$store.state.application.activeProfile.productWishlist||{}}}}),o=(i(1001),i(1e3),i(0)),c=Object(o.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row mx-0"},[i("div",{staticClass:"col-12 col-lg-7 col-xl-8"},[t.project.images&&t.project.images.preview?i("c-screen-gallery",{attrs:{items:t.project.images.preview}}):t._e(),t._v(" "),i("div",{staticClass:"action",attrs:{hidden:""}},[t._v("Currently crowdfunding")]),t._v(" "),i("c-block",{attrs:{title:"Participation Tiers",noGutter:!0,onlyContentBg:!0,bgGradient:!0}},t._l(t.participationTiers,function(e,n){return i("c-participation-tier",{key:n,attrs:{id:e.id,price:e.price,sold:e.sold,left:e.left,title:e.title,tag:e.tag,inList:n<t.participationTiers.length-1}})})),t._v(" "),i("div",{staticClass:"editor-container"},[t.editing?i("div",{staticClass:"editor"},[t.activeElement.description?t._e():i("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("description")}}},[t._v("Change Description "),i("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.description?i("div",{staticClass:"form-control-element form-control-element--right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.project.description,expression:"project.description"}],ref:"description",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Project description..."},domProps:{value:t.project.description},on:{input:function(e){e.target.composing||t.$set(t.project,"description",e.target.value)}}}),t._v(" "),i("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[i("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("description")}}})])]):t._e()]):t._e(),t._v(" "),i("p",{staticClass:"project__description"},[t._v(t._s(t.project.description))])]),t._v(" "),t.editing?t._e():i("c-block",{staticClass:"margin-bottom-30",attrs:{title:"About Game",noPadding:!0,noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[i("div",{staticClass:"main-content",domProps:{innerHTML:t._s(t.project.value)}},[t._v("\n                "+t._s(t.project.value)+"\n            ")])]),t._v(" "),t.editing?i("div",{staticClass:"content-editor"},[i("div",{attrs:{id:"summernote"},domProps:{innerHTML:t._s(t.project.value)}},[t._v(t._s(t.project.value))])]):t._e()],1),t._v(" "),i("div",{staticClass:"col-12 col-lg-5 col-xl-4"},[t.project.funding?i("div",{staticClass:"card invert"},[i("div",{staticClass:"card-body"},[t.editing&&!t.activeElement.campaign?i("a",{staticClass:"nav-link editor-container editor-container--style-2",attrs:{href:"javascript:;"},on:{click:function(e){t.showTab("configure")}}},[i("i",{staticClass:"fas fa-cog"}),t._v(" "),i("span",[t._v("Configure Campaign")])]):t._e(),t._v(" "),i("h2",{staticClass:"title"},[t._v("Crowdfunding campaign")]),t._v(" "),i("c-button-fav",{attrs:{target:"wishlist",active:!!t.wishlist[t.project.id]},on:{click:function(e){t.$store.dispatch("community/updateWishlist",["project",t.project.id])}}}),t._v(" "),i("div",{staticClass:"project"},[i("div",{staticClass:"project__progress"},t._l(t.project.funding.stages,function(e,n){return i("div",{key:n,staticClass:"project__progress-stage",class:e.status},["Done"===e.status?i("i",{staticClass:"fas fa-check"}):t._e(),t._v(" "),"InProgress"===e.status?i("i",{staticClass:"fas fa-clock"}):t._e(),t._v(" "),i("span",{staticClass:"stage_line"}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(e.text))])])})),t._v(" "),i("div",{staticClass:"project__info"},[i("div",{staticClass:"funded"},[i("div",{staticClass:"text"},[t._v("114% Funded")]),t._v("\n                            "+t._s(t._f("convertCurrency")(t.project.funding.fundedAmount))+"\n                        ")]),t._v(" "),i("div",{staticClass:"goal"},[i("div",{staticClass:"text"},[t._v("Goal")]),t._v("\n                            "+t._s(t._f("convertCurrency")(t.project.funding.goalAmount))+"\n                        ")]),t._v(" "),t._l(t.crowdfundingProps,function(e,n){return i("div",{key:n,class:e},[i("div",{staticClass:"progress-bar-vertical"},[i("c-progress-bar",{attrs:{values:{reached:t.project.funding[e+"_amount"],goal:t.project.funding.goalAmount},direction:"vertical"}})],1),t._v(" "),i("div",[i("p",{staticClass:"text"},[i("strong",[t._v(t._s(t._f("upperFirstChar")(e)))])]),t._v("\n                                "+t._s(t._f("convertCurrency")(t.project.funding[e+"_amount"]))+"\n                            ")])])})],2),t._v(" "),i("div",{staticClass:"project__action"},[i("c-button",{attrs:{status:"share",swapDirection:""}},[t._v("Share")]),t._v(" "),i("c-button",{attrs:{status:"info",icon:"check",swapDirection:""}},[t._v("Follow")]),t._v(" "),i("c-button",{attrs:{status:"support",swapDirection:""}},[t._v("Support")])],1)])],1)]):t._e(),t._v(" "),t.project.milestones?i("div",{staticClass:"card invert milestones"},[i("div",{staticClass:"card-body"},[t.editing&&!t.activeElement.milestones?i("a",{staticClass:"editor-container editor-container--style-2",attrs:{href:"#"}},[i("i",{staticClass:"fas fa-cog"}),t._v(" "),i("span",[t._v("Set Up Milestones")])]):t._e(),t._v(" "),i("h2",{staticClass:"title"},[t._v("Milestones")]),t._v(" "),i("ul",{staticClass:"milestones__list"},t._l(t.project.milestones.items,function(e,n){return i("li",{key:n,class:{done:"Done"===e.status}},["Done"===e.status?i("div",{staticClass:"stepNumber"},[i("i",{staticClass:"fas fa-check"})]):i("div",{staticClass:"stepNumber"},[t._v("\n                            "+t._s(e.stepNumber)+"\n                        ")]),t._v(" "),i("div",{staticClass:"text"},[t._v("\n                            "+t._s(e.title)+"\n                        ")])])}))])]):t._e(),t._v(" "),i("c-community-spotlight",{staticClass:"margin-bottom-30",attrs:{discussions:t.project.community.discussions,community_url:"#/project/"+t.project.id,editing:t.editing,activeElement:t.activeElement.milestones}}),t._v(" "),i("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Contribute",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[i("c-contribute-form",{on:{click:t.showContributeModal}})],1),t._v(" "),t._l(t.project.pledges,function(e,n){return i("c-contribute-pledge",{key:n,attrs:{pledge:e,currency:t.project.meta.currency},on:{click:t.showContributeModal}})}),t._v(" "),i("c-decentralization-meter",{directives:[{name:"decentralized-mode",rawName:"v-decentralized-mode"}]}),t._v(" "),i("c-basic-popup",{attrs:{activated:"contribute"===t.$store.state.application.activeModal},on:{close:function(e){t.$store.commit("application/activateModal",null)}}},[i("div",{staticClass:"h4",staticStyle:{"text-align":"left"},attrs:{slot:"header"},slot:"header"},[t._v("Contribute")]),t._v(" "),i("template",{slot:"body"},[1===t.syncStep?i("div",[i("h3",{staticClass:"margin-auto"},[i("strong",[t._v("Status:")]),t._v(" unsynced ")]),t._v("\n                    Contract Address: 0xasdadas"),i("br"),t._v(" "),i("c-button",{staticClass:"c-button--lg outline-white margin-top-20 margin-auto",on:{click:t.startSync}},[t._v("Start")])],1):t._e(),t._v(" "),2===t.syncStep?i("div"):t._e(),t._v(" "),i("br"),t._v(" "),t.syncing?i("div",{staticClass:"padding-40 loading-process",staticStyle:{position:"relative"}},[i("div",{staticClass:"loading loading--w-spinner"},[i("div",[i("div",{staticClass:"loading-spinner"})])])]):t._e()]),t._v(" "),i("p",{staticClass:"margin-top-20",attrs:{slot:"footer"},slot:"footer"},[i("c-button",{attrs:{status:"dark",to:"/help"}},[t._v("Need help? Check the Help Center")])],1)],2)],2)])},[],!1,null,"08bbe298",null);e.default=c.exports},279:function(t,e){},280:function(t,e){}}]);