(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1272:function(t,e,i){"use strict";i.r(e);var n=i(4),a=i.n(n),s=i(7),o={components:{"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[i(1298)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-user-card":function(t){return i.e(151).then(function(){var e=[i(1245)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-button-arrows":function(t){return i.e(161).then(function(){var e=[i(1168)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-modal-light":function(t){return i.e(204).then(function(){var e=[i(1178)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-checkbox":function(t){return Promise.resolve().then(function(){var e=[i(1273)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-input-searcher":function(t){return i.e(154).then(function(){var e=[i(1109)];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){return{newIdentity:{name:"",wallet:"",img:"/static/img/new-identity.png",default:!1,edit:!1},identityCopy:{},editedIdentity:null,removeIdentity:null,filterPhrase:"",sortAsc:!0}},methods:{setDefault:function(t){this.$store.state.application.account.current_identity=t,this.saveIdentities()},editIdentity:function(t){console.log(t,this.editedIdentity,this.filteredIdentities),this.editedIdentity?this.$snotify.warning("You must finish editing the current profile"):(t.edit=!0,this.editedIdentity=t)},cancelEditIdentity:function(t){t.edit=!1,this.editedIdentity=null},saveIdentity:function(t){var e=this;for(var i in t)t[i]=this.identityClone[i];t.name||(t.name="Default"),t.edit=!1,this.editedIdentity=null,s.sendCommand("saveIdentityRequest",t).then(function(t){e.saveIdentities()})},deleteIdentity:function(t){var e=this.removeIdentity;if(e){var i=this.identities.indexOf(e);this.identities.splice(i,1),this.removeIdentity=null}else this.removeIdentity=t;t.edit=!1,this.editedIdentity=null,this.saveIdentities()},createIdentity:function(){var t=this,e=this.newIdentity;Math.floor(100*Math.random());s.sendCommand("createIdentityRequest",e).then(function(i){e.id=i.id,e.public_address=i.public_address,e.name||(e.name="Default"),t.identities.push(a()({},e,{edit:!0})),t.editedIdentity=e,t.saveIdentities()})},saveIdentities:function(){this.$store.state.application.account.identities=this.identities,this.$store.dispatch("application/updateState")}},computed:{identities:function(){for(var t in this.$store.state.application.account.identities)this.$store.state.application.account.identities[t].name||(this.$store.state.application.account.identities[t].name="Default");return this.$store.state.application.account.identities},defaultIdentity:function(){var t=this;return this.identities.find(function(e){return t.$store.state.application.account.current_identity?e.id==t.$store.state.application.account.current_identity.id:null})},identityClone:function(){return this.editedIdentity?a()({},this.editedIdentity):{}},isEditing:function(){return this.identities.find(function(t){return t.edit})},filteredIdentities:function(){var t=this;return this.identities.filter(function(e){return!e.name||e.name.toLowerCase().includes(t.filterPhrase.toLowerCase())}).sort(function(e,i){return e.name>i.name?t.sortAsc?1:-1:0})}}},d=(i(763),i(0)),c=Object(d.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("c-layout",{attrs:{navigationKey:"account"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("c-heading-bar",{attrs:{name:"My Profile",showArrows:!1,showBackground:!1}})],1),t._v(" "),i("div",{staticClass:"col-6 margin-bottom-40 my_identity"},[t.defaultIdentity?i("c-user-card",{attrs:{user:t.defaultIdentity,previewMode:!0},on:{updateIdentity:function(e,i){return t.defaultIdentity[e]=i}}}):t.identities.length?i("p",[t._v("\n                        You don't have a default profile.\n                    ")]):i("p",[t._v("\n                        You don't have any profiles yet.\n                    ")])],1),t._v(" "),t.defaultIdentity?i("div",{staticClass:"col-6"},[i("div",{staticClass:"verification-blk"},[i("h3",[t._v("Verify Your Profile")]),t._v(" "),t.defaultIdentity.is_verified?i("div",{staticClass:"status"},[i("i",{staticClass:"fas fa-check"}),t._v("\n                            Verified\n                        ")]):t.defaultIdentity.is_verifying?i("div",{staticClass:"status"},[i("i",{staticClass:"fas fa-hourglass"}),t._v("\n                            Verifying\n                        ")]):i("router-link",{attrs:{to:"/account/verification"}},[t._v("\n                            Click here to verify\n                        ")]),t._v(" "),t.defaultIdentity.is_verified?i("div",{staticClass:"date"},[t._v("\n                            Valid up to $7,500 USD\n                        ")]):t._e()],1)]):t._e(),t._v(" "),i("div",{staticClass:"col-12 mb-4"},[i("c-button",{attrs:{status:"info",icon:"user-plus"},on:{click:t.createIdentity}},[t._v(" New Profile")])],1),t._v(" "),i("div",{staticClass:"col-12"},[i("c-heading-bar",{attrs:{name:"All Identities",showArrows:!1,showBackground:!1}},[i("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[i("span",{staticClass:"text"},[t._v("Name "),i("c-icon",{attrs:{name:"user"}})],1),t._v(" "),i("c-button-arrows",{attrs:{activeUp:t.sortAsc},on:{clickUp:function(e){t.sortAsc=!0},clickDown:function(e){t.sortAsc=!1}}})],1),t._v(" "),i("div",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"REPUTATION",expression:"'REPUTATION'"}],staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[i("span",{staticClass:"text"},[t._v("Rating "),i("c-icon",{attrs:{name:"trophy"}})],1),t._v(" "),i("c-button-arrows")],1),t._v(" "),i("div",{staticClass:"additional-action margin-left-20 padding-5",attrs:{slot:"additional-action"},slot:"additional-action"},[i("c-input-searcher",{attrs:{placeholder:"Search"},model:{value:t.filterPhrase,callback:function(e){t.filterPhrase=e},expression:"filterPhrase"}})],1)])],1),t._v(" "),i("transition-group",{staticClass:"profile-picker",attrs:{tag:"div",name:"item",duration:100}},t._l(t.filteredIdentities,function(e){return i("div",{key:e.id,staticClass:"profile-picker__profile",class:{edit:e.edit}},[i("c-user-card",t._b({class:{default:e.id==(t.defaultIdentity&&t.defaultIdentity.id)},attrs:{user:e,previewMode:!e.edit,type:e.developer_id?"developer":"user"}},"c-user-card",t.identityClone,!1,!0)),t._v(" "),i("div",{staticClass:"profile__action"},[e.edit||e.id==(t.defaultIdentity&&t.defaultIdentity.id)?t._e():i("c-button",{attrs:{status:"info",icon:"check"},on:{click:function(i){t.setDefault(e)}}},[t._v("Set default")]),t._v(" "),e.edit?t._e():i("c-button",{attrs:{status:"share",icon:"pen"},on:{click:function(i){t.editIdentity(e)}}},[t._v("Edit")]),t._v(" "),e.edit?i("c-button",{attrs:{status:"share",icon:"pen"},on:{click:function(i){t.saveIdentity(e)}}},[t._v("Save")]):t._e(),t._v(" "),e.edit?i("c-button",{attrs:{status:"danger",icon:"trash"},on:{click:function(i){t.deleteIdentity(e)}}},[t._v("Delete")]):t._e(),t._v(" "),e.edit?i("c-button",{attrs:{icon:"times"},on:{click:function(i){t.cancelEditIdentity(e)}}},[t._v("Cancel")]):t._e()],1)],1)})),t._v(" "),t.removeIdentity?i("c-modal-light",{on:{close:function(e){t.removeIdentity=null}}},[i("h4",[t._v("Are you sure that you want to delete this profile?")]),t._v(" "),i("p",[t._v("This operation can not be reversed")]),t._v(" "),i("c-user-card",{attrs:{user:t.removeIdentity,previewMode:""}}),t._v(" "),i("div",[i("div",{staticClass:"profile-remove__buttons"},[i("c-button",{attrs:{size:"md"},on:{click:function(e){t.removeIdentity=null}}},[t._v("Cancel")]),t._v(" "),i("c-button",{attrs:{size:"md"},on:{click:function(e){t.deleteIdentity()}}},[t._v("Confirm")])],1)])],1):t._e()],1)])},[],!1,null,"51be6320",null);e.default=c.exports},250:function(t,e){},763:function(t,e,i){"use strict";var n=i(250);i.n(n).a}}]);