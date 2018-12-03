(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1314:function(t,e,o){"use strict";var s=o(410);o.n(s).a},1429:function(t,e,o){"use strict";o.r(e);var s=o(34),a=o.n(s),n=o(96),r=o.n(n),c={props:["activated"],components:{"c-popup":function(t){return o.e(8).then(function(){var e=[o(144)];t.apply(null,e)}.bind(this)).catch(o.oe)},"c-tabs":function(t){return o.e(183).then(function(){var e=[o(1535)];t.apply(null,e)}.bind(this)).catch(o.oe)},"c-tab":function(t){return o.e(182).then(function(){var e=[o(1484)];t.apply(null,e)}.bind(this)).catch(o.oe)}},data:function(){return{currentStep:1,errors:[],companyName:null,productName:null,contactName:null,contactNumber:null,contactEmail:null,companyWebsite:null}},computed:{developerProfileAddress:function(){return this.$store.state.application.account.activeProfile&&this.$store.state.application.account.activeProfile.address}},methods:{changeTab:function(t){t>this.currentStep?this.nextStep():this.currentStep=t},nextStep:function(){var t=this;if(this.errors=[],1===this.currentStep){if(this.companyName&&this.productName)return void(this.currentStep=2);this.errors.push("Missing fields.")}else if(2===this.currentStep){if(this.companyName&&this.productName&&this.contactName&&this.contactNumber&&this.contactEmail&&this.companyWebsite&&this.developerProfileAddress){var e=new r.a;return e.set("entry.524169597",this.companyName),e.set("entry.399172045",this.productName),e.set("entry.1527852888",this.contactName),e.set("entry.903832048",this.contactNumber),e.set("entry.2146275482",this.contactEmail),e.set("entry.817087000",this.companyWebsite),e.set("entry.199140031",this.developerProfileAddress),a()({method:"post",url:"https://docs.google.com/forms/d/1X0LukIIimTL9egE9dbtHYECXG9W-y3HFj_kGRKk7cww/formResponse",data:e,config:{headers:{"Content-Type":"multipart/form-data"}}}).then(function(e){t.complete=!0}).catch(function(e){t.errors.push("An error occurred. Please check your input or try again later.")}),void(this.currentStep=3)}this.errors.push("Missing fields.")}}}},i=(o(1314),o(0)),l=Object(i.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("c-popup",{ref:"modal",attrs:{activated:t.activated,type:"custom",width:"550"},on:{close:function(e){t.$emit("close")}}},[o("div",{attrs:{slot:"custom_close",hidden:""},slot:"custom_close"}),t._v(" "),o("div",{staticClass:"c-popup__content",attrs:{slot:"custom_content"},slot:"custom_content"},[o("c-tabs",{attrs:{setActiveTab:t.currentStep,tabNames:["Product Verification","Contact","Done"],styled:""},on:{click:function(e){t.changeTab(e)}}},[o("c-tab",{attrs:{tab_id:3,selected:!0,showFooter:!0}},[o("div",[o("p",[t._v("Product verification request has been submit. We'll be in touch soon. Thank you!")])]),t._v(" "),o("div",{staticClass:"d-flex align-items-center justify-content-end margin-top-10",attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"text-right w-100"},[o("c-button",{attrs:{status:"info",iconHide:""},on:{click:function(e){t.$emit("close")}}},[t._v("\n                            OK\n                        ")])],1)])]),t._v(" "),o("c-tab",{attrs:{tab_id:1,selected:!0,showFooter:!0}},[o("div",[o("p",[t._v("\n                        To manage your product listing, you'll need to verify your connection with this company. "),o("br"),t._v("\n                        What you'll get with verification:\n                        "),o("br"),o("br"),t._v(" "),o("i",{staticClass:"fas fa-check"}),t._v(" Allow new customers to find you on BlockHub Search"),o("br"),t._v(" "),o("i",{staticClass:"fas fa-check"}),t._v(" Promote your business with bounties"),o("br"),t._v(" "),o("i",{staticClass:"fas fa-check"}),t._v(" Track product analytics to understand your customers"),o("br"),t._v(" "),o("i",{staticClass:"fas fa-check"}),t._v(" Respond to customer reviews"),o("br"),t._v(" "),o("i",{staticClass:"fas fa-check"}),t._v(" And much more"),o("br"),t._v(" "),o("br")]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("p",[t._v("What's the name of your company?")]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"sr-only"},[t._v("Company Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.companyName,expression:"companyName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Company Name",name:"companyName"},domProps:{value:t.companyName},on:{input:function(e){e.target.composing||(t.companyName=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col"},[o("p",[t._v("What's the name of your product?")]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"sr-only"},[t._v("Product Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.productName,expression:"productName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Product Name",name:"productName"},domProps:{value:t.productName},on:{input:function(e){e.target.composing||(t.productName=e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("p",[t._v("What's your developer profile address?")]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"sr-only"},[t._v("Developer Profile Address")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.developerProfileAddress,expression:"developerProfileAddress"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Developer Profile Address",name:"developerProfileAddress"},domProps:{value:t.developerProfileAddress},on:{input:function(e){e.target.composing||(t.developerProfileAddress=e.target.value)}}})]),t._v(" "),o("c-button",{staticClass:"underline",on:{click:function(e){t.$store.commit("application/showProfileChooser",!0)}}},[t._v("Choose Different Profile")])],1)]),t._v(" "),o("div",{staticClass:"row",attrs:{hidden:""}},[o("div",{staticClass:"col"},[o("br"),o("br"),t._v(" "),o("p",[t._v("By continuing you agree to the following Terms and Services and Privacy Policy")])])]),t._v(" "),t.errors.length?o("p",{staticClass:"errors"},[o("br"),t._v(" "),o("strong",[t._v("Please correct the following error(s):")]),t._v(" "),o("ul",t._l(t.errors,function(e){return o("li",{key:e},[t._v(t._s(e))])}))]):t._e()]),t._v(" "),o("div",{staticClass:"d-flex align-items-center justify-content-end margin-top-10",attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"text-right w-100"},[o("c-button",{on:{click:function(e){t.$emit("close")}}},[t._v("Cancel")]),t._v(" "),o("c-button",{attrs:{status:"info",iconHide:""},on:{click:function(e){t.nextStep()}}},[t._v("\n                            Continue\n                        ")])],1)])]),t._v(" "),o("c-tab",{attrs:{tab_id:2,showFooter:!0}},[o("div",[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("p",[t._v("Website URL")]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"sr-only"},[t._v("Website URL")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.companyWebsite,expression:"companyWebsite"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Website URL",name:"companyWebsite"},domProps:{value:t.companyWebsite},on:{input:function(e){e.target.composing||(t.companyWebsite=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col"},[o("p",[t._v("Contact Name")]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"sr-only"},[t._v("Contact Name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contactName,expression:"contactName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Contact Name",name:"contactName"},domProps:{value:t.contactName},on:{input:function(e){e.target.composing||(t.contactName=e.target.value)}}})])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("p",[t._v("Contact Email")]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"sr-only"},[t._v("Contact Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contactEmail,expression:"contactEmail"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Contact Email",name:"contactEmail"},domProps:{value:t.contactEmail},on:{input:function(e){e.target.composing||(t.contactEmail=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col"},[o("p",[t._v("Contact Number")]),t._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"sr-only"},[t._v("Contact Number")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contactNumber,expression:"contactNumber"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Contact Name",name:"contactNumber"},domProps:{value:t.contactNumber},on:{input:function(e){e.target.composing||(t.contactNumber=e.target.value)}}})])])]),t._v(" "),t.errors.length?o("p",{staticClass:"errors"},[o("strong",[t._v("Please correct the following error(s):")]),t._v(" "),o("ul",t._l(t.errors,function(e){return o("li",{key:e},[t._v(t._s(e))])}))]):t._e()]),t._v(" "),o("div",{staticClass:"d-flex align-items-center justify-content-end margin-top-10",attrs:{slot:"footer"},slot:"footer"},[o("div",{staticClass:"text-right w-100"},[o("c-button",{on:{click:function(e){t.$emit("close")}}},[t._v("Cancel")]),t._v(" "),o("c-button",{attrs:{status:"info",iconHide:""},on:{click:function(e){t.nextStep()}}},[t._v("\n                            Continue\n                        ")])],1)])])],1)],1)])},[],!1,null,"6d36b002",null);e.default=l.exports},410:function(t,e){}}]);