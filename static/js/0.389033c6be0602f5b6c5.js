(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1242:function(t,e,i){"use strict";i.r(e);var a=i(5),o=function(){var t,e,i=null;if("new"===this.id&&(i=this.$store.state.marketplace.default_product),this.$store.state.marketplace.products&&this.$store.state.marketplace.products[this.id]&&(i=this.$store.state.marketplace.products[this.id]),i.images.preview&&i.images.preview.length){var a=window.document.getElementById("header-bg"),o=Math.floor(Math.random()*i.images.preview.length);a.style["background-image"]="url("+i.images.preview[o]+")",a.style["background-size"]="cover"}return i.community||(i.community={discussions:[]}),i.developer_tags||(i.developer_tags=[]),i.promotions&&(this.promotionSections=(t=i.promotions,e="section",t.reduce(function(t,i){return i[e]?((t[i[e]]=t[i[e]]||[]).push(i),t):t},{})||null)),i},n={props:["id","section"],components:{"c-product-overview":function(t){return i.e(207).then(function(){var e=[i(1171)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-product-projects":function(t){return i.e(206).then(function(){var e=[i(1158)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-product-assets":function(t){return i.e(205).then(function(){var e=[i(1212)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-product-community":function(t){return i.e(204).then(function(){var e=[i(1156)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-tags-list":function(t){return i.e(3).then(function(){var e=[i(1142)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-custom-modal":function(t){return i.e(171).then(function(){var e=[i(1203)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-popup":function(t){return i.e(6).then(function(){var e=[i(53)];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){return{activeElement:{name:!1,background_image:!1,tags:!1},author_tag_options:["rpg","adventure","racing","action"],savedState:!1}},computed:{product:o,editing:function(){if(!this.$store.state.application.editor_mode)for(var t in this.activeElement)this.activeElement[t]=!1;return"editing"===this.$store.state.application.editor_mode},first_product:function(){return this.$store.state.marketplace.first_product},breadcrumbLinks:function(){return[{to:{path:"/"},title:"Store"},{to:{path:""},title:this.product.name}]}},mounted:o,created:function(){window.onbeforeunload=this.unsaved,this.updateSection()},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"},methods:{updateSection:function(){this.section||(this.section=this.$route.meta.section)},deactivateElement:function(t){this.activeElement[t]=!1},activateElement:function(t){var e=this;for(var i in this.activeElement)this.activeElement[i]=!1;this.activeElement[t]=!0,setTimeout(function(){e.$refs[t]&&e.$refs[t].focus()},10)},save:function(){this.savedState=!0,"new"===this.id?this.$store.commit("marketplace/createProduct",this.product):this.$store.dispatch("marketplace/updateProduct",this.product)},unsaved:function(){if(!1===this.savedState&&"editing"===this.$store.state.application.editor_mode)return"ololololo"},closeModal:function(){this.$store.state.marketplace.first_product=!1}},updated:function(){var t=this;$("#tag-editor").select2().on("select2:select",function(e){var i=e.params.data;t.product.developer_tags.includes(i.text)||t.product.developer_tags.push(i.text),a.a.set(t.product,"developer_tags",t.product.developer_tags)}).on("select2:unselect",function(e){var i=e.params.data;t.product.developer_tags=t.product.developer_tags.filter(function(t){return t!==i.text}),a.a.set(t.product,"developer_tags",t.product.developer_tags)}),$("#summernote").summernote({placeholder:"Type in your text",tabsize:2,height:300,callbacks:{onBlur:function(){a.a.set(t.product,"content",$("#summernote").summernote("code"))}}})},watch:{$route:function(){this.updateSection()}}},s=(i(695),i(694),i(0)),c=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("c-layout",{attrs:{navigationKey:"product",showRightPanel:!1,navigationTitle:"GAME OVERVIEW",breadcrumbLinks:t.breadcrumbLinks}},[i("div",{staticClass:"container-fluid"},[t.product?t._e():i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[t._v("\n                Product not found\n            ")])]),t._v(" "),t.product?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-8"},[i("div",{staticClass:"editor-container"},[t.editing?i("div",{staticClass:"editor"},[t.activeElement.name?t._e():i("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("name")}}},[t._v("Change\n                                    Product Name "),i("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.name?i("div",{staticClass:"form-group"},[i("div",{staticClass:"form-control-element form-control-element--right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],ref:"name",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Product name..."},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}}),t._v(" "),i("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[i("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("name")}}})])])]):t._e()]):t._e(),t._v(" "),i("h1",{staticClass:"title margin-top-10 margin-bottom-15"},[t._v(t._s(t.product.name))])]),t._v(" "),i("div",{staticClass:"editor-container"},[t.editing?i("div",{},[i("div",{staticClass:"form-group"},[i("select",{staticClass:"form-control",attrs:{id:"tag-editor",multiple:"multiple"}},t._l(t.author_tag_options,function(e,a){return i("option",{key:a,domProps:{selected:t.product.developer_tags.includes(e)}},[t._v(t._s(e)+"\n                                        ")])}))])]):t._e(),t._v(" "),t.editing?t._e():i("c-tags-list",{attrs:{tags:t.product.developer_tags}})],1)]),t._v(" "),i("div",{staticClass:"col-4"},[t.editing?i("div",{staticClass:"editor"},[t.activeElement.background_image?t._e():i("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("background_image")}}},[t._v("Change Background Image "),i("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.background_image?i("div",{staticClass:"form-group"},[i("div",{staticClass:"form-control-element form-control-element--right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.images.header,expression:"product.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{name:"background_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.product.images.header},on:{input:function(e){e.target.composing||t.$set(t.product.images,"header",e.target.value)}}}),t._v(" "),i("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[i("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("background_image")}}})])])]):t._e(),t._v(" "),i("br"),t._v(" "),i("label",[t._v("RECOMMENDED SIZE: 1120 x 524px")])]):t._e()])]),t._v(" "),i("ul",{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",class:{active:"overview"===t.section},attrs:{to:"/product/"+t.product.id}},[t._v("Overview")])],1),t._v(" "),i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",class:{active:"community"===t.section},attrs:{to:"/product/"+t.product.id+"/community"}},[t._v("Community\n                        ")])],1),t._v(" "),i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",class:{active:"projects"===t.section},attrs:{to:"/product/"+t.product.id+"/projects"}},[t._v("Crowdfunding\n                        ")])],1),t._v(" "),i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",class:{active:"assets"===t.section},attrs:{to:"/product/"+t.product.id+"/assets"}},[t._v("Inventory")])],1)])]),t._v(" "),i("div",{staticClass:"col-12"},["overview"===t.section?i("c-product-overview",{attrs:{product:t.product,editing:t.editing}}):t._e(),t._v(" "),"assets"===t.section?i("c-product-assets",{attrs:{product:t.product,editing:t.editing}}):t._e(),t._v(" "),"community"===t.section?i("c-product-community",{attrs:{product:t.product,editing:t.editing}}):t._e(),t._v(" "),"projects"===t.section?i("c-product-projects",{attrs:{product:t.product,editing:t.editing}}):t._e()],1)]):t._e()]),t._v(" "),t.first_product&&t.editing?i("c-custom-modal",{attrs:{title:"Help Center"},on:{close:t.closeModal}},[i("div",{staticClass:"help-modal__content",staticStyle:{width:"500px"},attrs:{slot:"modal_body"},slot:"modal_body"},[i("h4",{staticClass:"h2 mb-3"},[t._v("Creating your first product?")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Etiam elementum ac ligula nec viverra. Nunc molestie augue a erat ultrices fermentum.")]),t._v(" "),i("p",[t._v("Curabitur non bibendum erat. Praesent nec vestibulum odio, vel euismod enim. Sed at tincidunt risus.\n                Mauris ac facilisis metus. Proin venenatis neque posuere urna sagittis ultricies.")]),t._v(" "),i("p",[i("a",{attrs:{href:"/#/help",target:"_blank"}},[t._v("Learn more about creating products")])])]),t._v(" "),i("div",{staticClass:"text-right w-100",attrs:{slot:"modal_footer"},slot:"modal_footer"},[i("c-button",{attrs:{size:"md"},on:{click:t.closeModal}},[t._v("Got it")])],1)]):t._e()],1)},[],!1,null,"7d308a20",null);e.default=c.exports},195:function(t,e){},196:function(t,e){},694:function(t,e,i){"use strict";var a=i(195);i.n(a).a},695:function(t,e,i){"use strict";var a=i(196);i.n(a).a}}]);