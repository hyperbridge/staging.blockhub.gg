(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{120:function(t,e){},1663:function(t,e,i){"use strict";i.r(e);var s=i(2),a=i.n(s),o=i(5),n=i(10),r=i(3),c=(i(120),{props:{id:[String,Number],section:{type:String,default:"overview"}},components:{"c-product-overview":function(t){return i.e(264).then(function(){var e=[i(1469)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-product-projects":function(t){return i.e(263).then(function(){var e=[i(1415)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-product-assets":function(t){return i.e(262).then(function(){var e=[i(1417)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-product-community":function(t){return i.e(261).then(function(){var e=[i(1420)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-basic-popup":function(t){return i.e(21).then(function(){var e=[i(1505)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-topic-item":function(t){return i.e(187).then(function(){var e=[i(1552)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-tags":function(t){return i.e(10).then(function(){var e=[i(1416)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-custom-modal":function(t){return i.e(13).then(function(){var e=[i(1500)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-popup":function(t){return i.e(9).then(function(){var e=[i(146)];t.apply(null,e)}.bind(this)).catch(i.oe)},multiselect:function(t){return i.e(207).then(function(){var e=[i(1708)];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){return{activeElement:{name:!1,backgroundImage:!1,tags:!1},tagOptions:["rpg","adventure","racing","action"],importing:!1,importStep:1,savedState:!1,value:null}},computed:{marketplace:function(){return this.$store.state.marketplace},product:function(){var t=null;if("new"===this.id&&(t=a()({},this.$store.state.marketplace.defaultProduct),this.$store.state.application.developerMode=!0,this.$store.dispatch("application/setEditorMode","editing")),t||(t=this.$store.getters["products/get"](this.id)),t||(t=r.marketplace.products.findOne({id:Number(this.id)})),t){if(t.community||(t.community={discussions:[]}),t.tags||(t.tags=[]),t.meta||(t.meta={}),t.meta.images&&t.meta.images.preview&&t.meta.images.preview.length){var e=window.document.getElementById("header-bg"),i=Math.floor(Math.random()*t.meta.images.preview.length);e.style["background-image"]="url("+t.meta.images.preview[i]+")",e.style["background-size"]="cover"}var s,o;return t.meta.promotions&&(this.promotionSections=(s=t.meta.promotions,o="section",s.reduce(function(t,e){return e[o]?((t[e[o]]=t[e[o]]||[]).push(e),t):t},{})||null)),t}},editorMode:function(){return this.$store.state.application.editorMode},nextImportStep:function(){1===this.importStep?this.importStep=2:this.importStep},editing:function(){if(!this.$store.state.application.editorMode)for(var t in this.activeElement)this.activeElement[t]=!1;return"editing"===this.$store.state.application.editorMode},firstProduct:function(){return this.$store.state.marketplace.firstProduct},breadcrumbLinks:function(){if(!this.product)return[];var t=[{to:{path:"/"},title:"Store"},{to:{path:"/product/"+this.id},title:this.product.name}];return"community"===this.section?t.push({to:{path:""},title:"Community"}):"projects"===this.section?t.push({to:{path:""},title:"Crowdfunding"}):"assets"===this.section&&t.push({to:{path:""},title:"Inventory"}),t}},mounted:function(){"new"===this.id&&this.$store.dispatch("application/setEditorMode","editing")},created:function(){window.onbeforeunload=this.unsaved,this.updateSection()},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"},methods:{updateSection:function(){this.section||(this.section=this.$route.meta.section)},deactivateElement:function(t){this.activeElement[t]=!1},activateElement:function(t){var e=this;for(var i in this.activeElement)this.activeElement[i]=!1;this.activeElement[t]=!0,setTimeout(function(){e.$refs[t]&&e.$refs[t].focus()},10)},save:function(){var t=this;if("new"===this.id)this.product.type="game",n.sendCommand("createMarketplaceProductRequest",{profile:this.$store.state.application.activeProfile,product:this.product}).then(function(e){var i=r.marketplace.products.insert(e);r.save(),o.default.set(t.$store.state.marketplace.products,i.id,i),t.savedState=!0});else{var e=this.product;o.default.set(this.$store.state.marketplace.products,e.id,e),r.marketplace.products.update(e),r.save(),this.savedState=!0}},unsaved:function(){if(!1===this.savedState&&"editing"===this.$store.state.application.editorMode)return!0},closeModal:function(){this.$store.state.marketplace.firstProduct=!1,this.$store.commit("application/updateClientSettings","hide_product_intro_modal",!0)},startImport:function(){var t=this;if(!this.$store.state.application.desktopMode)return BlockHub.Notification.error("Desktop app required","Error");n.sendCommand("fetchPageDataRequest",{url:this.$refs.importUrl.value,script:"function onWindowLoad(requestId) {\n                const script = document.createElement('script');\n                script.src = 'https://code.jquery.com/jquery-2.2.4.min.js';\n                script.type = 'text/javascript';\n\n                script.onload = script.onreadystatechange = function () {\n                    const monitor = function() {\n                        try {\n                            if (!$('.game_area_description').length) return setTimeout(monitor, 500);\n\n                            const fetchers = {\n                                steam: () => {\n                                    return {\n                                        title: $('.apphub_AppName').text().trim(),\n                                        description: $('.game_description_snippet').text().trim(),\n                                        about: $('#game_area_description').html().trim(),\n                                        developers: Object.values($('#developers_list a').map((i, el) => $(el).text().trim()).get()),\n                                        publishers: Object.values($('#developers_list').parent().next().find('a').map((i, el) => $(el).text().trim()).get()),\n                                        tags: Object.values($('.popular_tags a').map((i, el) => $(el).text().trim()).get()),\n                                        releaseDate: $('.releaseDate .date').text().trim(),\n                                        images: {\n                                            preview: Object.values($('.highlight_strip_item.highlight_strip_screenshot').map((i, el) => $(el).find('img').attr('src')).get())\n                                        },\n                                        videos: Object.values($('.highlight_strip_item.highlight_strip_movie').map((i, el) => ({\n                                            preview: $(el).find('img').attr('src'),\n                                            url: 'https://cdn.hyperbridge.org/blockhub/videos/products/doom-20087/trailer.mp4'\n                                        })).get())\n                                    }\n                                },\n                                gog: () => {\n\n                                },\n                                itch: () => {\n\n                                }\n                            };\n\n                            let fetcherType = null;\n\n                            if (window.location.hostname.indexOf('steampowered.com'))\n                                fetcherType = 'steam';\n                            else if (window.location.hostname.indexOf('gog.com'))\n                                fetcherType = 'gog';\n                            else if (window.location.hostname.indexOf('itch.io'))\n                                fetcherType = 'itch';\n                            else {\n                                // fail\n                            }\n\n                            const fetcher = fetchers[fetcherType];\n\n                            const cmd = {\n                                key: 'resolveCallback',\n                                responseId: requestId,\n                                data: fetcher()\n                            };\n\n                            window.desktopBridge.send('command', JSON.stringify(cmd));\n                        }\n                        catch (e) {\n                            const cmd = {\n                                key: 'resolveCallback',\n                                responseId: requestId,\n                                data: {\n                                    error: true,\n                                    message: 'Error in script: ' + e\n                                }\n                            };\n\n                            window.desktopBridge.send('command', JSON.stringify(cmd));\n                        }\n                    }\n\n                    monitor();\n                };\n\n                document.body.appendChild(script);\n            }"}).then(function(e){if(e.error)return console.log(e.message);console.log("Import response: ",e),t.product.type="game",t.product.tags=[{key:"imported",value:"Imported"}],t.product.developerTags=e.tags,t.product.name=e.title,t.product.releaseDate=e.releaseDate,t.product.description=e.description,t.product.content=e.value,t.product.genre="",t.product.developer=e.developers&&e.developers[0],t.product.publisher=e.publishers&&e.publishers[0],t.$store.commit("application/activateModal",null)})}},updated:function(){var t=this;$("#summernote").summernote({placeholder:"Type in your text",tabsize:2,height:300,callbacks:{onBlur:function(){o.default.set(t.product,"content",$("#summernote").summernote("code"))}}})},watch:{$route:function(){this.updateSection()},editorMode:function(t,e){"editing"===e&&"publishing"===t?(this.save(),this.$store.dispatch("application/setEditorMode","viewing")):"removing"===t&&n.sendCommand("removeProduct",{id:this.product.id}).then(function(t){if(t.error)return console.log(t.message)})}}}),l=(i(985),i(984),i(0)),d=Object(l.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("c-layout",{staticClass:"product-single-page",attrs:{navigationKey:"product",showRightPanel:!1,navigationTitle:"GAME OVERVIEW",breadcrumbLinks:t.breadcrumbLinks,showBreadcrumbs:!t.editing}},[t.product?t._e():i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[t._v("\n            Product not found\n        ")])]),t._v(" "),t.product?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-12"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-8"},[i("div",{staticClass:"editor-container"},[t.editing?i("div",{staticClass:"editor"},[t.activeElement.name?t._e():i("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("name")}}},[t._v("Change\n                                Product Name "),i("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.name?i("div",{staticClass:"form-group"},[i("div",{staticClass:"form-control-element form-control-element--right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],ref:"name",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Product name..."},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}}),t._v(" "),i("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary",on:{click:function(e){t.deactivateElement("name")}}},[i("span",{staticClass:"fa fa-check"})])])]):t._e()]):t._e(),t._v(" "),i("h1",{staticClass:"title margin-top-10 margin-bottom-15"},[t._v(t._s(t.product.name))])]),t._v(" "),i("div",{staticClass:"editor-container"},[t.editing?i("div",{},[i("div",{staticClass:"form-group tag-editor"},[i("multiselect",{staticClass:"dark-mode",attrs:{multiple:!0,taggable:!0,options:t.tagOptions},model:{value:t.product.developerTags,callback:function(e){t.$set(t.product,"developerTags",e)},expression:"product.developerTags"}})],1)]):t._e(),t._v(" "),t.editing?t._e():i("c-tags",{attrs:{tags:t.product.developerTags}})],1)]),t._v(" "),i("div",{staticClass:"col-12 col-md-4"},[t.editing?i("div",{staticClass:"editor"},[t.activeElement.backgroundImage?t._e():i("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("backgroundImage")}}},[t._v("Change Background Image "),i("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.backgroundImage?i("div",{staticClass:"form-group"},[i("div",{staticClass:"form-control-element form-control-element--right"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.images.header,expression:"product.images.header"}],ref:"backgroundImage",staticClass:"form-control",attrs:{name:"backgroundImage",type:"text",placeholder:"Background image URL..."},domProps:{value:t.product.images.header},on:{input:function(e){e.target.composing||t.$set(t.product.images,"header",e.target.value)}}}),t._v(" "),i("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary",on:{click:function(e){t.deactivateElement("backgroundImage")}}},[i("span",{staticClass:"fa fa-check"})])])]):t._e(),t._v(" "),i("br"),t._v(" "),i("label",[t._v("RECOMMENDED SIZE: 1120 x 524px")])]):t._e()]),t._v(" "),i("div",{staticClass:"col-12"},[i("c-button",{staticClass:"w-100 d-flex d-md-none justify-content-center my-4",attrs:{status:"dark",size:"lg","data-toggle":"collapse","data-target":"#product_nav","aria-expanded":"false","aria-controls":"product_nav"}},[t._v("\n                        Menu\n                    ")]),t._v(" "),i("div",{staticClass:"collapse show product_nav",attrs:{id:"product_nav"}},[i("ul",{staticClass:"nav nav-tabs margin-bottom-30 justify-content-between"},[i("li",{staticClass:"nav-item",on:{click:function(e){t.section="overview"}}},[i("router-link",{staticClass:"nav-link",class:{active:"overview"===t.section},attrs:{to:"/product/"+t.id}},[t._v("Overview")])],1),t._v(" "),i("li",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"COMMUNITY",expression:"'COMMUNITY'"}],staticClass:"nav-item",on:{click:function(e){t.section="community"}}},[i("router-link",{staticClass:"nav-link",class:{active:"community"===t.section},attrs:{to:"/product/"+t.id+"/community"}},[t._v("Community\n                                ")])],1),t._v(" "),i("li",{staticClass:"nav-item",on:{click:function(e){t.section="projects"}}},[i("router-link",{staticClass:"nav-link",class:{active:"projects"===t.section},attrs:{to:"/product/"+t.id+"/projects"}},[t._v("Crowdfunding\n                                ")])],1),t._v(" "),i("li",{staticClass:"nav-item",on:{click:function(e){t.section="assets"}}},[i("router-link",{staticClass:"nav-link",class:{active:"assets"===t.section},attrs:{to:"/product/"+t.id+"/assets"}},[t._v("Inventory")])],1),t._v(" "),t.editing?i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",class:{active:"configure"===t.section},on:{click:function(e){t.section="configure"}}},[t._v("Configure")])]):t._e()])])],1),t._v(" "),"configure"===t.section?i("div",{staticClass:"col-12",attrs:{editing:t.editing}},[i("c-block",{attrs:{title:"Product"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("div",{staticClass:"form-group row"},[i("label",{staticClass:"switch switch-sm col-sm-3"},[i("label",[t._v("Price")])]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Example: 10"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}}),t._v(" "),i("span",{staticClass:"form-text"})])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"switch switch-sm col-sm-3"},[i("label",[t._v("Old Price")])]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.oldPrice,expression:"product.oldPrice"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Example: 20"},domProps:{value:t.product.oldPrice},on:{input:function(e){e.target.composing||t.$set(t.product,"oldPrice",e.target.value)}}}),t._v(" "),i("span",{staticClass:"form-text"})])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("div",{staticClass:"col-sm-3"},[i("label",[t._v("Genre")])]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.genre,expression:"product.genre"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Example: RPG"},domProps:{value:t.product.genre},on:{input:function(e){e.target.composing||t.$set(t.product,"genre",e.target.value)}}}),t._v(" "),i("span",{staticClass:"form-text"})])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("div",{staticClass:"col-sm-3"},[i("label",[t._v("Release Date")])]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.releaseDate,expression:"product.releaseDate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Example: 12/30/2020"},domProps:{value:t.product.releaseDate},on:{input:function(e){e.target.composing||t.$set(t.product,"releaseDate",e.target.value)}}}),t._v(" "),i("span",{staticClass:"form-text"})])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("div",{staticClass:"col-sm-3"},[i("label",[t._v("Publisher")])]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.publisher,expression:"product.publisher"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Example: Actilizard Entertainment"},domProps:{value:t.product.publisher},on:{input:function(e){e.target.composing||t.$set(t.product,"publisher",e.target.value)}}}),t._v(" "),i("span",{staticClass:"form-text"})])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("div",{staticClass:"col-sm-3"},[i("label",[t._v("Developer")])]),t._v(" "),i("div",{staticClass:"col-sm-9"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.developer,expression:"product.developer"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Example: Northcap Studios"},domProps:{value:t.product.developer},on:{input:function(e){e.target.composing||t.$set(t.product,"developer",e.target.value)}}}),t._v(" "),i("span",{staticClass:"form-text"})])])]),t._v(" "),i("div",{staticClass:"col-md-6"})])])],1):t._e(),t._v(" "),i("div",{staticClass:"col-12"},[i("transition",{attrs:{name:"page",mode:"out-in"}},["overview"===t.section?i("c-product-overview",{attrs:{product:t.product,editing:t.editing}}):t._e(),t._v(" "),"assets"===t.section?i("c-product-assets",{attrs:{product:t.product,editing:t.editing}}):t._e(),t._v(" "),"community"===t.section?i("c-product-community",{attrs:{product:t.product,editing:t.editing}}):t._e(),t._v(" "),"projects"===t.section?i("c-product-projects",{attrs:{product:t.product,editing:t.editing}}):t._e()],1)],1)])])]):t._e(),t._v(" "),t.firstProduct&&t.editing&&!t.$store.state.application.account.settings.client.hide_product_intro_modal?i("c-custom-modal",{attrs:{title:"Help Center"},on:{close:t.closeModal}},[i("div",{staticClass:"help-modal__content",staticStyle:{"max-width":"500px"},attrs:{slot:"modal_body"},slot:"modal_body"},[i("h4",{staticClass:"h2 mb-3"},[t._v("Creating your first product?")]),t._v(" "),i("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Etiam elementum ac ligula nec viverra. Nunc molestie augue a erat ultrices fermentum.")]),t._v(" "),i("p",[t._v("Curabitur non bibendum erat. Praesent nec vestibulum odio, vel euismod enim. Sed at tincidunt risus.\n                Mauris ac facilisis metus. Proin venenatis neque posuere urna sagittis ultricies.")]),t._v(" "),i("p",[i("a",{attrs:{href:"#/help",target:"_blank"}},[t._v("Learn more about creating products")])])]),t._v(" "),i("div",{staticClass:"text-right w-100",attrs:{slot:"modal_footer"},slot:"modal_footer"},[i("c-button",{attrs:{size:"md"},on:{click:t.closeModal}},[t._v("Got it")])],1)]):t._e(),t._v(" "),i("c-basic-popup",{attrs:{activated:"import-product"===t.$store.state.application.activeModal},on:{close:function(e){t.$store.commit("application/activateModal",null)}}},[i("div",{staticClass:"h4",staticStyle:{"text-align":"left"},attrs:{slot:"header"},slot:"header"},[t._v("Import Product")]),t._v(" "),i("template",{slot:"body"},[1===t.importStep?i("div",[i("h3",{staticClass:"margin-auto"},[t._v("Choose source: ")]),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"row justify-content-center margin-bottom-50"},[i("div",{staticClass:"col-12 col-md-4 col-lg-3"},[i("c-topic-item",{staticClass:"padding-10",attrs:{size:"lg",icon:"users"},on:{click:t.nextImportStep}},[t._v("\n                            Steam\n                        ")])],1),t._v(" "),i("div",{staticClass:"col-12 col-md-4 col-lg-3"},[i("c-topic-item",{staticClass:"padding-10",attrs:{icon:"users",size:"lg"},on:{click:t.nextImportStep}},[t._v("\n                            GOG\n                        ")])],1),t._v(" "),i("div",{staticClass:"col-12 col-md-4 col-lg-3"},[i("c-topic-item",{staticClass:"padding-10",attrs:{icon:"users",size:"lg"},on:{click:t.nextImportStep}},[t._v("\n                            Itch\n                        ")])],1)]),t._v(" "),i("br")]):t._e(),t._v(" "),2===t.importStep?i("div",[i("h3",{staticClass:"margin-auto"},[t._v("Enter URL: ")]),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"form-group row"},[i("div",{staticClass:"col-12"},[i("input",{ref:"importUrl",staticClass:"form-control",attrs:{type:"text",value:"https://store.steampowered.com/app/441830/I_am_Setsuna/"}}),t._v(" "),i("span",{staticClass:"form-text"},[t._v("Example: https://store.steampowered.com/app/441830/I_am_Setsuna/")])])]),t._v(" "),i("c-button",{staticClass:"c-button--lg outline-white margin-top-20 margin-auto",on:{click:t.startImport}},[t._v("GO")])],1):t._e(),t._v(" "),i("br"),t._v(" "),t.importing?i("div",{staticClass:"padding-40 loading-process",staticStyle:{position:"relative"}},[i("div",{staticClass:"loading loading--w-spinner"},[i("div",[i("div",{staticClass:"loading-spinner"})])])]):t._e()]),t._v(" "),i("p",{staticClass:"margin-top-20",attrs:{slot:"footer"},slot:"footer"},[t._v("\n            Need help? "),i("c-button",{attrs:{status:"plain",href:"#/help"}},[t._v("Check the Help Center")])],1)],2)],1)},[],!1,null,"143210c5",null);e.default=d.exports},301:function(t,e){},302:function(t,e){},984:function(t,e,i){"use strict";var s=i(301);i.n(s).a},985:function(t,e,i){"use strict";var s=i(302);i.n(s).a}}]);