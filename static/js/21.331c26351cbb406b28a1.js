(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{485:function(t,e,a){"use strict";var i=a(81);a.n(i).a},81:function(t,e){},843:function(t,e,a){"use strict";a.r(e);var i={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[a(871)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-block":function(t){return a.e(105).then(function(){var e=[a(756)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-tags-list":function(t){return a.e(106).then(function(){var e=[a(751)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-badges":function(t){return a.e(112).then(function(){var e=[a(771)];t.apply(null,e)}.bind(this)).catch(a.oe)},"c-timeline":function(t){return a.e(183).then(function(){var e=[a(763)];t.apply(null,e)}.bind(this)).catch(a.oe)}},data:function(){return{errors:[],activeElement:{name:!1,background_image:!1,store_image:!1,developer_tags:!1,description:!1,content:!1},author_tag_options:["game","mod","other"]}},methods:{showTab:function(t){$('.nav-tabs a[href="#'+t+'"]').tab("show")},deactivateElement:function(t){this.activeElement[t]=!1},activateElement:function(t){var e=this;for(var a in this.activeElement)this.activeElement[a]=!1;this.activeElement[t]=!0,setTimeout(function(){e.$refs[t]&&e.$refs[t].focus()},10)},save:function(){this.checkForm()?"new"===this.id?(this.$store.commit("funding/createProject",this.project),this.$store.dispatch("application/setEditorMode","viewing")):(this.$store.dispatch("funding/updateProject",this.project),this.$store.dispatch("application/setEditorMode","viewing")):this.$store.dispatch("application/setEditorMode","editing")},checkForm:function(t){if(this.errors=[],this.project.name&&this.project.description)return!0;this.project.name||this.errors.push("Project name required."),this.project.description||this.errors.push("Project description required.")}},computed:{project:function(){var t=null;return"new"===this.id&&(t=this.$store.state.funding.default_project),this.$store.state.funding.projects&&this.$store.state.funding.projects[this.id]&&(t=this.$store.state.funding.projects[this.id]),t&&t.images&&t.images.header&&(window.document.getElementById("header-bg").style["background-image"]="url("+t.images.header+")"),t},editing:function(){if(!this.$store.state.application.editor_mode)for(var t in this.activeElement)this.activeElement[t]=!1;return"editing"===this.$store.state.application.editor_mode}},watch:{editing:function(t,e){"publishing"===this.$store.state.application.editor_mode&&this.save()}},created:function(){},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"},updated:function(){var t=this;$("#tag-editor").select2().on("select2:select",function(e){var a=e.params.data;t.project.developer_tags.includes(a.text)||t.project.developer_tags.push(a.text),Vue.set(t.project,"developer_tags",t.project.developer_tags)}).on("select2:unselect",function(e){var a=e.params.data;t.project.developer_tags=t.project.developer_tags.filter(function(t){return t!==a.text}),Vue.set(t.project,"developer_tags",t.project.developer_tags)}),$("#summernote").summernote({placeholder:"Type in your text",tabsize:2,height:300,callbacks:{onBlur:function(){Vue.set(t.project,"content",$("#summernote").summernote("code"))}}})}},n=(a(485),a(0)),o=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-layout",{attrs:{navigationKey:"project"}},[a("div",{staticClass:"content",attrs:{id:"content"}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t.project?t._e():a("div",{staticClass:"col-12"},[t._v("\n                    Project not found\n                ")])]),t._v(" "),t.project?a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4"},[a("div",{staticClass:"editor-container"},[t.editing?a("div",{staticClass:"editor"},[t.activeElement.name?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("name")}}},[t._v("Change\n                                Project Name "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.name?a("div",{staticClass:"form-control-element form-control-element--right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.name,expression:"project.name"}],ref:"name",staticClass:"form-control",attrs:{name:"name",type:"text",placeholder:"Project name..."},domProps:{value:t.project.name},on:{input:function(e){e.target.composing||t.$set(t.project,"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("name")}}})])]):t._e()]):t._e(),t._v(" "),a("h1",{staticClass:"title margin-top-10 margin-bottom-15"},[t._v(t._s(t.project.name))])]),t._v(" "),a("div",{staticClass:"editor-container"},[t.editing?a("div",{staticClass:"editor"},[t.activeElement.developer_tags?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",staticStyle:{"margin-bottom":"20px"},on:{click:function(e){t.activateElement("developer_tags")}}},[t._v("Change\n                                Tags "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.developer_tags?a("div",{staticClass:"form-control-element form-control-element--right"},[a("select",{staticClass:"form-control",attrs:{id:"tag-editor",multiple:"multiple"}},t._l(t.author_tag_options,function(e,i){return a("option",{key:i,domProps:{selected:t.project.developer_tags.includes(e)}},[t._v(t._s(e)+"\n                                    ")])})),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("developer_tags")}}})])]):t._e()]):t._e(),t._v(" "),t.editing&&t.activeElement.developer_tags?t._e():a("c-tags-list",{attrs:{tags:t.project.developer_tags}})],1)]),t._v(" "),a("div",{staticClass:"col-lg-4"},[a("c-badges",{attrs:{icons:["trophy","gem"]}})],1),t._v(" "),a("div",{staticClass:"col-lg-4"},[t.editing?a("div",{staticClass:"editor text-right",staticStyle:{"margin-bottom":"30px"}},[t.activeElement.background_image?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("background_image")}}},[t._v("Change Background Image "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.background_image?a("div",{},[a("div",{staticClass:"form-control-element form-control-element--right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"background_image",staticClass:"form-control",attrs:{name:"background_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("background_image")}}})])])]):t._e(),t._v(" "),a("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 1120 x 524px")])]):t._e(),t._v(" "),t.editing?a("div",{staticClass:"editor text-right"},[t.activeElement.store_image?t._e():a("button",{staticClass:"btn btn-secondary btn--icon btn--icon-stacked btn--icon-right",on:{click:function(e){t.activateElement("store_image")}}},[t._v("Change Store Image "),a("span",{staticClass:"fa fa-edit"})]),t._v(" "),t.activeElement.store_image?a("div",{},[a("div",{staticClass:"form-control-element form-control-element--right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.project.images.header,expression:"project.images.header"}],ref:"store_image",staticClass:"form-control",attrs:{name:"store_image",type:"text",placeholder:"Background image URL..."},domProps:{value:t.project.images.header},on:{input:function(e){e.target.composing||t.$set(t.project.images,"header",e.target.value)}}}),t._v(" "),a("div",{staticClass:"form-control-element__box form-control-element__box--pretify bg-secondary"},[a("span",{staticClass:"fa fa-check",on:{click:function(e){t.deactivateElement("store_image")}}})])])]):t._e(),t._v(" "),a("label",{staticStyle:{display:"block"}},[t._v("RECOMMENDED SIZE: 2140 x 680px")])]):t._e()]),t._v(" "),a("div",{staticClass:"col-12"},[a("ul",{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id}},[t._v("Overview")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/community"}},[t._v("Community")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/bounties"}},[t._v("Bounties")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link active",attrs:{to:"/project/"+t.project.id+"/updates"}},[t._v("Updates")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/project/"+t.project.id+"/milestones"}},[t._v("Milestones")])],1)])]),t._v(" "),a("div",{staticClass:"col-12"},[a("c-timeline",{attrs:{items:t.project.updates,project_id:t.project.id}})],1)]):t._e()])])])},[],!1,null,"62317b7a",null);e.default=o.exports}}]);