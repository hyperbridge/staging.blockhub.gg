(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1515:function(t,e,s){"use strict";s.r(e);var a=s(5),o=s.n(a),r=s(9),i=s.n(r),n=s(17),c=s.n(n),l=s(2),d=s.n(l),p=(s(74),{props:{id:[String,Number]},components:{"c-layout":function(t){return s.e(212).then(function(){var e=[s(1696)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-html-editor":function(t){return s.e(242).then(function(){var e=[s(1692)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-json-editor":function(t){return s.e(241).then(function(){var e=[s(1691)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-basic-popup":function(t){return s.e(15).then(function(){var e=[s(1811)];t.apply(null,e)}.bind(this)).catch(s.oe)},"c-multiselect":function(t){return s.e(216).then(function(){var e=[s(1911)];t.apply(null,e)}.bind(this)).catch(s.oe)}},data:function(){var t="new"===this.id?this.$store.state.marketplace.defaultProduct:this.$store.getters["products/get"](this.id);return t||(t=this.$store.state.marketplace.defaultProduct),{product:t,loadingState:!0,importStep:1,notice:"",advanced:!1,blockchain:!1,tagOptions:[],creating:"new"===this.id,successfulCreationMessage:!1}},computed:{originalProduct:function(){return"new"===this.id?this.$store.state.marketplace.defaultProduct:this.$store.getters["products/get"](this.id)}},watch:{originalProduct:function(){this.product=d()({},this.product,this.originalProduct)}},created:function(){"new"!==this.id&&this.$store.dispatch("products/find",{query:{id:Number(this.id),$eager:"tags"}})},methods:{nextImportStep:function(){1===this.importStep?this.importStep=2:this.importStep},updateProductRaw:function(t){this.product=JSON.parse(t)},toggleAdvanced:function(){this.advanced=!this.advanced},transferOwnership:function(){var t=this,e={code:function(t,e,s,a,r,n,l,d,p,u,v){var m,h=this,g=v.product,f=v.profile;return new c.a((m=i()(o.a.mark(function t(e,s){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.api.ethereum.state.contracts.MarketplaceStorage.deployed,t.next=3,marketplaceStorage.setDeveloperOwnsProduct(g.developerId,g.id,!0,{from:f.address});case 3:return t.next=5,marketplaceStorage.pushDeveloperOwnedProduct(g.developerId,g.id,{from:f.address});case 5:return t.next=7,marketplaceStorage.setProductDeveloper(g.id,g.developer,{from:f.address});case 7:return t.next=9,marketplaceStorage.setProductDeveloperId(g.id,g.developerId,{from:f.address});case 9:e(g);case 10:case"end":return t.stop()}},t,h)})),function(t,e){return m.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.activeProfile,product:this.product}};window.BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.successfulCreationMessage="Product ownership has been changed")})},startImport:function(){var t=this;if(!this.$store.state.application.desktopMode)return window.BlockHub.Notification.error("Desktop app required","Error");Bridge.sendCommand("fetchPageDataRequest",{url:this.$refs.importUrl.value,script:"function onWindowLoad(requestId) {\n                const script = document.createElement('script');\n                script.src = 'https://code.jquery.com/jquery-2.2.4.min.js';\n                script.type = 'text/javascript';\n\n                script.onload = script.onreadystatechange = function () {\n                    const monitor = function() {\n                        try {\n                            if (!$('.game_area_description').length) return setTimeout(monitor, 500);\n\n                            const fetchers = {\n                                steam: () => {\n                                    return {\n                                        title: $('.apphub_AppName').text().trim(),\n                                        description: $('.game_description_snippet').text().trim(),\n                                        about: $('#game_area_description').html().trim(),\n                                        developers: Object.values($('#developers_list a').map((i, el) => $(el).text().trim()).get()),\n                                        publishers: Object.values($('#developers_list').parent().next().find('a').map((i, el) => $(el).text().trim()).get()),\n                                        tags: Object.values($('.popular_tags a').map((i, el) => $(el).text().trim()).get()),\n                                        releaseDate: $('.releaseDate .date').text().trim(),\n                                        images: {\n                                            preview: Object.values($('.highlight_strip_item.highlight_strip_screenshot').map((i, el) => $(el).find('img').attr('src')).get())\n                                        },\n                                        videos: Object.values($('.highlight_strip_item.highlight_strip_movie').map((i, el) => ({\n                                            preview: $(el).find('img').attr('src'),\n                                            url: 'https://cdn.hyperbridge.org/blockhub/videos/products/doom-20087/trailer.mp4'\n                                        })).get())\n                                    }\n                                },\n                                gog: () => {\n\n                                },\n                                itch: () => {\n\n                                }\n                            };\n\n                            let fetcherType = null;\n\n                            if (window.location.hostname.indexOf('steampowered.com'))\n                                fetcherType = 'steam';\n                            else if (window.location.hostname.indexOf('gog.com'))\n                                fetcherType = 'gog';\n                            else if (window.location.hostname.indexOf('itch.io'))\n                                fetcherType = 'itch';\n                            else {\n                                // fail\n                            }\n\n                            const fetcher = fetchers[fetcherType];\n\n                            const cmd = {\n                                key: 'resolveCallback',\n                                responseId: requestId,\n                                data: fetcher()\n                            };\n\n                            window.ipcRenderer.send('command', JSON.stringify(cmd));\n                        }\n                        catch (e) {\n                            const cmd = {\n                                key: 'resolveCallback',\n                                responseId: requestId,\n                                data: {\n                                    error: true,\n                                    message: 'Error in script: ' + e\n                                }\n                            };\n\n                            window.ipcRenderer.send('command', JSON.stringify(cmd));\n                        }\n                    }\n\n                    monitor();\n                };\n\n                document.body.appendChild(script);\n            }"}).then(function(e){if(e.error)return console.log(e.message);console.log("Import response: ",e),t.product.name=e.title,t.product.value=e.value,t.product.tags=[{key:"imported",value:"Imported"}],t.product.meta={},t.product.meta.type="game",t.product.meta.developerTags=e.tags,t.product.meta.releaseDate=e.releaseDate,t.product.meta.description=e.description,t.product.meta.genre="",t.product.meta.developer=e.developers&&e.developers[0],t.product.meta.publisher=e.publishers&&e.publishers[0],t.$store.commit("application/activateModal",null)})},updateStatus:function(){var t=this,e={code:function(t,e,s,a,r,n,l,d,p,u,v){var m,h=this,g=v.product,f=v.profile;return new c.a((m=i()(o.a.mark(function t(e,s){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.api.ethereum.state.contracts.MarketplaceStorage.deployed,t.next=3,a.setProductStatus(productId,Number(g.status),{from:f.address});case 3:e(g);case 4:case"end":return t.stop()}},t,h)})),function(t,e){return m.apply(this,arguments)}))}.toString(),params:{profile:this.$store.state.application.activeProfile,product:this.product}};window.BlockHub.Bridge.sendCommand("eval",e).then(function(e){e.id&&(t.successfulCreationMessage="Product status has been updated")})},create:function(){var t=this;this.product.type="game",this.product.ownerId=this.$store.state.application.activeProfile.id,this.$store.dispatch("products/create",this.product).then(function(e){t.product.id=e.id,t.notice="Congratulations, your product has been created!",t.$router.push("/business/product/"+t.product.id)})},save:function(){var t=this;this.product.type="game",this.product.ownerId=this.$store.state.application.activeProfile.id,this.$store.dispatch("products/update",[this.product.id,this.product,{query:{$eager:"tags"}}]).then(function(){t.notice="Product has been saved."})}},mounted:function(){var t=this;this.$nextTick(function(){t.loadingState=!1,document.getElementById("startup-loader").style.display="none"})}}),u=(s(999),s(0)),v=Object(u.a)(p,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-layout",[s("div",{staticClass:"row"},[t.successfulCreationMessage?s("div",{staticClass:"col-md-12"},[s("p",{staticClass:"alert alert-info"},[t._v(t._s(t.successfulCreationMessage))]),t._v(" "),s("br"),s("br")]):t._e(),t._v(" "),s("div",{staticClass:"col-md-6"},[t.product.id?s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"col-sm-3"},[s("label",[t._v("Change Status")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.status,expression:"product.status"}],staticClass:"form-control",attrs:{name:"change_status"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.product,"status",e.target.multiple?s:s[0])},t.updateStatus]}},[s("option",{attrs:{value:"",selected:""}},[t._v("Choose Status")]),t._v(" "),s("option",{attrs:{value:"0"}},[t._v("Inactive")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("Draft")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("Pending")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("Published")]),t._v(" "),s("option",{attrs:{value:"4"}},[t._v("Rejected")])])])]):t._e(),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"col-sm-3"},[s("label",[t._v("Title")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"col-sm-3"},[s("label",[t._v("Type")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.type,expression:"product.type"}],staticClass:"form-control actionWithSelected",attrs:{tabindex:"-1","aria-hidden":"true"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.product,"type",e.target.multiple?s:s[0])}}},[s("option"),t._v(" "),s("option",{attrs:{value:"game"}},[t._v("Game")]),t._v(" "),s("option",{attrs:{value:"app"}},[t._v("App")]),t._v(" "),s("option",{attrs:{value:"tool"}},[t._v("Tool")])])])]),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"col-sm-3"},[s("label",[t._v("Description")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"col-sm-3"},[s("label",[t._v("Content")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.content,expression:"product.content"}],staticClass:"form-control",domProps:{value:t.product.content},on:{input:function(e){e.target.composing||t.$set(t.product,"content",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])])]),t._v(" "),s("div",{staticClass:"col-md-6"}),t._v(" "),s("div",{staticClass:"col-12"},[t.product.id?s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[t._v("\n                    Ownership\n                ")]),t._v(" "),s("div",{staticClass:"col-6"},[t._v("\n                    Owned by address: "+t._s(t.product.developer)),s("br"),t._v("\n                    Created by Developer ID: "+t._s(t.product.developerId)+"\n                ")]),t._v(" "),s("div",{staticClass:"col-12"},[s("h3",[t._v("Transfer Ownership")]),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"col-sm-3"},[s("label",[t._v("Developer Address")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.developer,expression:"product.developer"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.developer},on:{input:function(e){e.target.composing||t.$set(t.product,"developer",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"col-sm-3"},[s("label",[t._v("Developer ID")])]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.product.developerId,expression:"product.developerId"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.product.developerId},on:{input:function(e){e.target.composing||t.$set(t.product,"developerId",e.target.value)}}}),t._v(" "),s("span",{staticClass:"form-text"})])]),t._v(" "),s("c-button",{on:{click:t.transferOwnership}},[t._v("Transfer")])],1)]):t._e()]),t._v(" "),s("div",{staticClass:"col-12"},[s("c-heading-bar-color",{staticClass:"mt-4 mb-4",attrs:{colorCode:"#444",textAlign:"center",hidden:""}},[t._v("Advanced Options")]),t._v(" "),s("div",{on:{click:t.toggleAdvanced}},[s("i",{staticClass:"mr-2 fas",class:t.advanced?"fa-angle-up":"fa-angle-down"}),t._v("\n                "+t._s(t.advanced?"Hide":"Show")+" Advanced\n            ")])],1),t._v(" "),t.advanced?s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group row",staticStyle:{"text-align":"center"}},[s("br"),t._v(" "),s("h3",{staticStyle:{width:"100%"}},[t._v("Raw Data Editor")]),t._v(" "),s("br"),s("br"),t._v(" "),s("textarea",{attrs:{rows:"10",cols:"50"},domProps:{value:JSON.stringify(t.product)},on:{input:function(e){t.updateProductRaw(e.target.value)}}}),t._v(" "),s("br"),s("br"),t._v(" "),s("span",{staticClass:"form-text"}),t._v(" "),s("c-json-editor",{staticStyle:{margin:"0 auto"},attrs:{objData:t.product},model:{value:t.product,callback:function(e){t.product=e},expression:"product"}})],1)]):t._e(),t._v(" "),s("c-button",{staticClass:"mb-4",attrs:{status:"second-info",size:"lg"},on:{click:function(e){t.$store.commit("application/activateModal","import-product")}}},[t._v("Import")])],1),t._v(" "),s("template",{slot:"menu"},[s("div",{staticClass:"row"},[t.product.id?s("div",{staticClass:"col-12 text-right"},[s("c-button",{attrs:{status:"success",icon:"save"},on:{click:t.save}},[t._v("\n                    Save\n                ")])],1):t._e(),t._v(" "),t.product.id?t._e():s("div",{staticClass:"col-12 text-right"},[s("c-button",{attrs:{status:"success",size:"md",icon:"plus"},on:{click:t.create}},[t._v("\n                    Create\n                ")])],1)])]),t._v(" "),s("c-basic-popup",{attrs:{activated:"import-product"===t.$store.state.application.activeModal},on:{close:function(e){t.$store.commit("application/activateModal",null)}}},[s("div",{staticClass:"h4",staticStyle:{"text-align":"left"},attrs:{slot:"header"},slot:"header"},[t._v("Import Product")]),t._v(" "),s("template",{slot:"body"},[1===t.importStep?s("div",[s("h3",{staticClass:"margin-auto"},[t._v("Choose source: ")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"row justify-content-center margin-bottom-50"},[s("div",{staticClass:"col-12 col-md-4 col-lg-3"},[s("c-topic-item",{staticClass:"padding-10",attrs:{size:"lg",icon:"users"},on:{click:t.nextImportStep}},[t._v("\n                            BlockHub\n                        ")])],1),t._v(" "),s("div",{staticClass:"col-12 col-md-4 col-lg-3"},[s("c-topic-item",{staticClass:"padding-10",attrs:{icon:"users",size:"lg"},on:{click:t.nextImportStep}},[t._v("\n                            GOG\n                        ")])],1),t._v(" "),s("div",{staticClass:"col-12 col-md-4 col-lg-3"},[s("c-topic-item",{staticClass:"padding-10",attrs:{icon:"users",size:"lg"},on:{click:t.nextImportStep}},[t._v("\n                            Itch\n                        ")])],1)]),t._v(" "),s("br")]):t._e(),t._v(" "),2===t.importStep?s("div",[s("h3",{staticClass:"margin-auto"},[t._v("Enter URL: ")]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-12"},[s("input",{ref:"importUrl",staticClass:"form-control",attrs:{type:"text",value:"https://store.steampowered.com/app/441830/I_am_Setsuna/"}}),t._v(" "),s("span",{staticClass:"form-text"},[t._v("Example: https://store.steampowered.com/app/441830/I_am_Setsuna/")])])]),t._v(" "),s("c-button",{staticClass:"c-button--lg outline-white margin-top-20 margin-auto",on:{click:t.startImport}},[t._v("GO")])],1):t._e(),t._v(" "),s("br"),t._v(" "),t.importing?s("div",{staticClass:"padding-40 loading-process",staticStyle:{position:"relative"}},[s("div",{staticClass:"loading loading--w-spinner"},[s("div",[s("div",{staticClass:"loading-spinner"})])])]):t._e()]),t._v(" "),s("p",{staticClass:"margin-top-20",attrs:{slot:"footer"},slot:"footer"},[s("c-button",{attrs:{status:"dark",to:"/help"}},[t._v("Need help? Check the Help Center")])],1)],2)],2)},[],!1,null,null,null);e.default=v.exports},247:function(t,e){},74:function(t,e){},999:function(t,e,s){"use strict";var a=s(247);s.n(a).a}}]);