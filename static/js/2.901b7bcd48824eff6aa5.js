(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{127:function(t,e){},128:function(t,e){},548:function(t,e,a){"use strict";var i=a(127);a.n(i).a},549:function(t,e,a){"use strict";var i=a(128);a.n(i).a},871:function(t,e,a){"use strict";a.r(e);var i=a(4),n=function(){var t,e,a=null;if("new"===this.id&&(a=this.$store.state.marketplace.default_product),this.$store.state.marketplace.products&&this.$store.state.marketplace.products[this.id]&&(a=this.$store.state.marketplace.products[this.id]),a.images.preview&&a.images.preview.length){var i=window.document.getElementById("header-bg"),n=Math.floor(Math.random()*a.images.preview.length);i.style["background-image"]="url("+a.images.preview[n]+")",i.style["background-size"]="cover"}return a.community||(a.community={discussions:[]}),a.developer_tags||(a.developer_tags=[]),a.promotions&&(this.promotionSections=(t=a.promotions,e="section",t.reduce(function(t,a){return a[e]?((t[a[e]]=t[a[e]]||[]).push(a),t):t},{})||null)),a},s={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[a(930)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-game-plan":function(t){return a.e(167).then(function(){var e=[a(775)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-screen-gallery":function(t){return a.e(166).then(function(){var e=[a(773)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-promotion-box":function(t){return a.e(193).then(function(){var e=[a(769)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-tags-list":function(t){return a.e(118).then(function(){var e=[a(751)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-rating-block":function(t){return a.e(165).then(function(){var e=[a(768)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-purchase-block":function(t){return a.e(192).then(function(){var e=[a(766)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-frequently-traded-assets":function(t){return a.e(164).then(function(){var e=[a(764)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-community-spotlight":function(t){return a.e(163).then(function(){var e=[a(762)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[a(860)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-review":function(t){return a.e(191).then(function(){var e=[a(760)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-system-requirements":function(t){return a.e(190).then(function(){var e=[a(759)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-language-support":function(t){return a.e(189).then(function(){var e=[a(757)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-custom-modal":function(t){return a.e(141).then(function(){var e=[a(832)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-popup":function(t){return a.e(3).then(function(){var e=[a(29)];t.apply(null,e)}.bind(this)).catch(a.oe)}},data:function(){var t="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.",e="Good game with very nice graphics made by very smart people.",a={system:"Windows 10",gpu:"GTX 1080",cpu:"Core i7 7980x",ram:"8 GB",storage:"HyperX 1TB SSD"},i={name:"Nakatochi",img:"https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"};return{activeElement:{name:!1,background_image:!1,tags:!1},author_tag_options:["rpg","adventure","racing","action"],reviews:{helpful:[{author:i,title:e,text:t,date:"2018-08-19T04:09:00.000Z",rating:4.5,minutes_played:1938,setup:a},{author:i,title:e,text:t,date:"2018-08-16T04:09:00.000Z",rating:1.5,minutes_played:414,setup:a},{author:i,title:e,text:t,date:"2018-08-18T04:09:00.000Z",rating:3.5,minutes_played:71,setup:a}],recent:[{author:i,title:e,text:t,date:"2018-08-20T04:09:00.000Z",rating:1.5,minutes_played:13,setup:a},{author:i,title:e,text:t,date:"2018-03-21T04:09:00.000Z",rating:5,minutes_played:241,setup:a},{author:i,title:e,text:t,date:"2018-08-11T04:09:00.000Z",rating:3,minutes_played:2941,setup:a}]},promotionSections:null,savedState:!1}},methods:{showPurchaseModal:function(){this.$store.dispatch("application/activateModal","purchase")},deactivateElement:function(t){this.activeElement[t]=!1},activateElement:function(t){var e=this;for(var a in this.activeElement)this.activeElement[a]=!1;this.activeElement[t]=!0,setTimeout(function(){e.$refs[t]&&e.$refs[t].focus()},10)},save:function(){this.savedState=!0,"new"===this.id?this.$store.commit("marketplace/createProduct",this.product):this.$store.dispatch("marketplace/updateProduct",this.product)},closeModal:function(){console.log("close"),this.$store.state.marketplace.first_product=!1},unsaved:function(){if(!1===this.savedState&&"editing"===this.$store.state.application.editor_mode)return"ololololo"}},computed:{product:n,editing:function(){if(!this.$store.state.application.editor_mode)for(var t in this.activeElement)this.activeElement[t]=!1;return"editing"===this.$store.state.application.editor_mode},first_product:function(){return this.$store.state.marketplace.first_product}},mounted:n,created:function(){window.onbeforeunload=this.unsaved},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"},updated:function(){var t=this;$("#tag-editor").select2().on("select2:select",function(e){var a=e.params.data;t.product.developer_tags.includes(a.text)||t.product.developer_tags.push(a.text),i.a.set(t.product,"developer_tags",t.product.developer_tags)}).on("select2:unselect",function(e){var a=e.params.data;t.product.developer_tags=t.product.developer_tags.filter(function(t){return t!==a.text}),i.a.set(t.product,"developer_tags",t.product.developer_tags)}),$("#summernote").summernote({placeholder:"Type in your text",tabsize:2,height:300,callbacks:{onBlur:function(){i.a.set(t.product,"content",$("#summernote").summernote("code"))}}})}},o=(a(549),a(548),a(0)),r=Object(o.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-layout",{attrs:{navigationKey:"product",showRightPanel:!1,navigationTitle:"GAME OVERVIEW"}},[a("div",{staticClass:"content",attrs:{id:"content"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t.product?t._e():a("div",{staticClass:"col-12"},[t._v("\n                    Product not found\n                ")]),t._v(" "),t.product?a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-8"},[a("div",{staticClass:"editor-container"},[t.editing?a("div",{staticClass:"editor"},[t.activeElement.name?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("name")}}},[t._v("Change Product Name "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.name?a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-control-element form-control-element--right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],ref:"name",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Product name..."},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("name")}}})])])]):t._e()]):t._e(),t._v(" "),a("h1",{staticClass:"title margin-top-10 margin-bottom-15"},[t._v(t._s(t.product.name))])]),t._v(" "),a("div",{staticClass:"editor-container"},[t.editing?a("div",{},[a("div",{staticClass:"form-group"},[a("select",{staticClass:"form-control",attrs:{id:"tag-editor",multiple:"multiple"}},t._l(t.author_tag_options,function(e,i){return a("option",{key:i,domProps:{selected:t.product.developer_tags.includes(e)}},[t._v(t._s(e))])}))])]):t._e(),t._v(" "),t.editing?t._e():a("c-tags-list",{attrs:{tags:t.product.developer_tags}})],1)]),t._v(" "),a("div",{staticClass:"col-4"},[t.editing?a("div",{staticClass:"editor"},[t.activeElement.background_image?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("background_image")}}},[t._v("Change Background Image "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.background_image?a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-control-element form-control-element--right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.images.header,expression:"product.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{name:"background_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.product.images.header},on:{input:function(e){e.target.composing||t.$set(t.product.images,"header",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("background_image")}}})])])]):t._e(),t._v(" "),a("br"),t._v(" "),a("label",[t._v("RECOMMENDED SIZE: 1120 x 524px")])]):t._e()])]),t._v(" "),a("ul",{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{to:"/product/"+t.product.id}},[t._v("Overview")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id+"/community"}},[t._v("Community")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id+"/projects"}},[t._v("Crowdfunding")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id+"/assets"}},[t._v("Inventory")])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-8"},[a("c-screen-gallery",{attrs:{items:[t.product.images.medium_tile].concat(t.product.images.preview),video_url:t.product.video}}),t._v(" "),t._l(t.promotionSections,function(e,i){return t.promotionSections?a("div",{key:i},[i?a("h3",{staticStyle:{"margin-top":"20px"}},[t._v(t._s(i))]):t._e(),t._v(" "),t._l(e,function(e,i){return t.product.promotions?a("c-promotion-box",{key:i,attrs:{title:e.title,price:e.price}}):t._e()})],2):t._e()}),t._v(" "),a("div",{staticClass:"overflow-hidden"},t._l(t.product.plans,function(t,e){return a("c-game-plan",{key:e,attrs:{plan:t}})})),t._v(" "),t.editing?t._e():a("div",{staticClass:"main-content",domProps:{innerHTML:t._s(t.product.content)}},[t._v("\n                                "+t._s(t.product.content)+"\n                            ")]),t._v(" "),t.editing?a("div",{staticClass:"content-editor"},[a("div",{attrs:{id:"summernote"},domProps:{innerHTML:t._s(t.product.content)}},[t._v(t._s(t.product.content))])]):t._e()],2),t._v(" "),a("div",{staticClass:"col-4"},[a("c-purchase-block",{staticClass:"margin-bottom-15",attrs:{isReleased:!0,price:t.product.price,tags:["New"],onClickPurchase:t.showPurchaseModal}}),t._v(" "),a("c-rating-block",{staticClass:"margin-bottom-20",attrs:{items:t.product.rating,parent_url:"/#/product/"+t.product.id}}),t._v(" "),a("c-frequently-traded-assets",{staticClass:"margin-bottom-20",attrs:{items:t.product.frequently_traded_assets,assetsUrl:"/#/product/"+t.product.id+"/assets"}}),t._v(" "),a("c-community-spotlight",{staticClass:"margin-bottom-20",attrs:{discussions:t.product.community.discussions,communityUrl:"/#/product/"+t.product.id+"/community"}}),t._v(" "),a("c-system-requirements",{staticClass:"margin-bottom-20",attrs:{requirements:t.product.system_requirements}}),t._v(" "),a("c-language-support",{attrs:{languages:t.product.language_support}})],1)]),t._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("c-heading-bar",{attrs:{name:"Reviews",showArrows:!0,showBackground:!1}})],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-12"},[a("h3",{staticClass:"margin-vertical-20"},[t._v("Most helpful")]),t._v(" "),t._l(t.reviews.helpful,function(t,e){return a("c-review",{key:e,attrs:{review:t}})})],2),t._v(" "),a("div",{staticClass:"col-md-6 col-12"},[a("h3",{staticClass:"margin-vertical-20"},[t._v("Most recent")]),t._v(" "),t._l(t.reviews.recent,function(t,e){return a("c-review",{key:e,attrs:{review:t}})})],2)])])]):t._e()])])]),t._v(" "),t.first_product&&t.editing?a("c-custom-modal",{attrs:{title:"Help Center"},on:{close:t.closeModal}},[a("div",{staticClass:"help-modal__content",staticStyle:{width:"500px"},attrs:{slot:"modal_body"},slot:"modal_body"},[a("h4",{staticClass:"h2 mb-3"},[t._v("Creating your first product?")]),t._v(" "),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Etiam elementum ac ligula nec viverra. Nunc molestie augue a erat ultrices fermentum.")]),t._v(" "),a("p",[t._v("Curabitur non bibendum erat. Praesent nec vestibulum odio, vel euismod enim. Sed at tincidunt risus.\n                Mauris ac facilisis metus. Proin venenatis neque posuere urna sagittis ultricies.")]),t._v(" "),a("p",[a("a",{attrs:{href:"/#/help",target:"_blank"}},[t._v("Learn more about creating products")])])]),t._v(" "),a("div",{staticClass:"text-right w-100",attrs:{slot:"modal_footer"},slot:"modal_footer"},[a("c-button",{attrs:{size:"md"},on:{click:t.closeModal}},[t._v("Got it")])],1)]):t._e()],1)},[],!1,null,"6850519f",null);e.default=r.exports}}]);