(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1008:function(t,n,e){"use strict";var i=e(256);e.n(i).a},1524:function(t,n,e){"use strict";e.r(n);var i={components:{"c-icon-block":function(t){return e.e(240).then(function(){var n=[e(1735)];t.apply(null,n)}.bind(this)).catch(e.oe)}},data:function(){return{quickImport:!1,integrateLocally:!1,services:[{name:"GitHub",icon:"github"},{name:"BitBucket",icon:"bitbucket"},{name:"GitKraken",icon:"gitkraken"},{name:"GitHub",icon:"github"},{name:"BitBucket",icon:"bitbucket"},{name:"GitKraken",icon:"gitkraken"}]}},computed:{signedIn:function(){return this.$store.state.application.signedIn}},methods:{dropHandler:function(t){if(console.log("File(s) dropped"),t.preventDefault(),t.dataTransfer.items){for(var n=0;n<t.dataTransfer.items.length;n++)if("file"===t.dataTransfer.items[n].kind){var e=t.dataTransfer.items[n].getAsFile();console.log("... file["+n+"].name = "+e.name)}}else for(n=0;n<t.dataTransfer.files.length;n++)console.log("... file["+n+"].name = "+t.dataTransfer.files[n].name)},dragOverHandler:function(t){console.log("File(s) in drop zone"),t.preventDefault()}}},a=(e(1008),e(0)),s=Object(a.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("c-layout",{attrs:{navigationKey:"store"}},[e("div",{staticClass:"row"},[t.quickImport||t.integrateLocally?t._e():e("div",{staticClass:"col-12 col-lg-6"},[e("c-block",{attrs:{title:"Quick import",bgGradient:"",noGutter:"",onlyContentBg:""}},[e("div",{staticClass:"text-center pb-4"},[e("p",[t._v("Sed posuere varius ex id ullamcorper. Donec et aliquet mi, in tincidunt massa. Maecenas ornare, elit nec condimentum semper")]),t._v(" "),e("c-button",{staticClass:"mt-3 px-5",attrs:{status:"second-info",size:"md"},on:{click:function(n){t.quickImport=!0}}},[t._v("\n                        Continue\n                    ")]),t._v(" "),e("small",{staticClass:"text-muted d-block text-center mt-2"},[e("i",{staticClass:"fas fa-lock mr-2"}),t._v("Authentication required\n                    ")])],1)])],1),t._v(" "),t.quickImport||t.integrateLocally?t._e():e("div",{staticClass:"col-12 col-lg-6"},[e("c-block",{attrs:{title:"Integrate locally",bgGradient:"",noGutter:"",onlyContentBg:""}},[e("div",{staticClass:"text-center pb-4"},[e("p",[t._v("Sed posuere varius ex id ullamcorper. Donec et aliquet mi, in tincidunt massa. Maecenas ornare, elit nec condimentum semper")]),t._v(" "),e("c-button",{staticClass:"mt-3 px-5",attrs:{status:"second-info",size:"md"},on:{click:function(n){t.integrateLocally=!0}}},[t._v("\n                        View Guide\n                    ")]),t._v(" "),e("small",{staticClass:"text-success d-block text-center mt-2"},[e("i",{staticClass:"fas fa-eye-slash mr-2"}),t._v(" No Auth / Code Access\n                    ")])],1)])],1),t._v(" "),t.signedIn&&t.quickImport?e("div",{staticClass:"col-12"},[e("c-block",{attrs:{title:"Quick import",bgGradient:"",noGutter:"",onlyContentBg:""}},[e("p",{staticClass:"mb-2"},[t._v("\n                    Automatically analyze from code host for easy initial result.\n                ")]),t._v(" "),e("c-button",{staticClass:"mb-3",attrs:{status:"plain",icon:"arrow-left"},on:{click:function(n){t.quickImport=!1}}},[t._v("\n                    Go Back\n                ")]),t._v(" "),e("div",{staticClass:"row"},[t._l(t.services,function(n){return e("div",{staticClass:"col-12 col-md-6 col-lg-4 mb-4"},[e("c-icon-block",{staticClass:"icon-block-border w-100",attrs:{icon:n.icon,iconType:"fab",size:"md"}},[e("div",{staticClass:"h4 p-0"},[t._v("\n                                "+t._s(n.name)+"\n                            ")])])],1)}),t._v(" "),e("div",{staticClass:"col-12 mb-4",attrs:{hidden:""}},[e("div",{staticClass:"file-drag-zone",attrs:{id:"drag-zone"},on:{drop:function(n){t.dropHandler(t.event)},dragover:function(n){t.dragOverHandler(t.event)}}},[t._v("\n                            Drag zone\n                        ")])])],2)],1)],1):t._e(),t._v(" "),!t.signedIn&&t.quickImport?e("div",{staticClass:"col-12"},[e("div",{staticClass:"h6"},[t._v("\n                You are not signed in. Please\n                "),e("c-button",{attrs:{status:"plain"},on:{click:function(n){t.$store.commit("application/activateModal","login")}}},[t._v("\n                    Sign In\n                ")]),t._v("\n                to continue.\n            ")],1)]):t._e()])])},[],!1,null,"7a369ad1",null);n.default=s.exports},256:function(t,n){}}]);