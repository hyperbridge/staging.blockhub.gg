(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{1047:function(t,i,e){"use strict";var s=e(294);e.n(s).a},1734:function(t,i,e){"use strict";e.r(i);var s=e(2),a=e.n(s),n=e(7),o=e.n(n),r={props:["project","editing"],data:function(){var t=o()({contributors:0,submissions:0,bounties:[],showDownload:!1},"bounties",[]);return"production"!==this.$store.state.application.environmentMode&&(t=a()({},t,{contributors:81,submissions:81,bounties:[{title:"Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.",submited:"2851",approved:"408",prize:"30000",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.",explainText:"",fileSrc:""},{title:"Find a bug, behind the word mountains, far from the countries Vokalia and Consonantia, there live.",submited:"2851",approved:"408",prize:"30000",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu nulla sed urna malesuada ornare nec ac risus. Nam vehicula mauris ac augue finibus finibus non et erat. Integer malesuada rutrum elit non hendrerit. Nam volutpat scelerisque magna, in lacinia nulla consectetur eget. Nunc feugiat egestas arcu id lobortis. Proin rhoncus viverra mi, ac bibendum ligula molestie eget. Vivamus a tempor ligula.",explainText:"",fileSrc:""}]})),t},components:{"c-icon-block":function(t){return e.e(240).then(function(){var i=[e(1736)];t.apply(null,i)}.bind(this)).catch(e.oe)}}},u=(e(1047),e(0)),l=Object(u.a)(r,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"bounties-header margin-bottom-20"},[e("div",{staticClass:"bounties-header__info"},[e("div",{staticClass:"h3 text-white font-weight-bold mb-0"},[t._v("\n                "+t._s(t.bounties.length)+" Bounties available\n            ")])]),t._v(" "),e("div",{staticClass:"bounties-header__stat"},[e("c-icon-block",{staticClass:"ml-5",attrs:{icon:"users"}},[e("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                    "+t._s(t.contributors)+"\n                ")]),t._v("\n                Contributors\n            ")]),t._v(" "),e("c-icon-block",{staticClass:"ml-5",attrs:{icon:"arrow-right"}},[e("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                    "+t._s(t.submissions)+"\n                ")]),t._v("\n                Submissions\n            ")])],1),t._v(" "),e("div",{staticClass:"bounties-header__action"},[e("c-button",{staticClass:"text-uppercase with-label",attrs:{to:"/business/projects/"+t.project.id,status:"dark",iconHide:"",size:"lg",fontSize:"14"}},[e("span",{staticClass:"btn-label"},[e("i",{staticClass:"fas fa-lock"})]),t._v("\n                Management\n            ")]),t._v(" "),e("c-button",{staticClass:"text-uppercase ml-3",attrs:{to:"/profile/"+t.$store.state.application.activeProfile.id+"/bounties",status:"info",iconHide:"",size:"lg",fontSize:"14"}},[t._v("\n                My bounties\n            ")])],1)]),t._v(" "),t._l(t.bounties,function(i,s){return e("div",{key:s,staticClass:"bounties_item margin-bottom-30"},[e("div",{staticClass:"bountie__head d-flex justify-content-between align-items-center"},[e("div",{staticClass:"bountie__head-stat"},[e("div",[e("h4",{staticClass:"mb-0"},[t._v("Prize")]),t._v(" "),e("span",[t._v(t._s(t._f("numeralFormat")(i.prize,"0,0"))+" HBX")])]),t._v(" "),e("div",[e("h4",{staticClass:"mb-0"},[t._v("Submited")]),t._v(" "),e("span",[t._v(t._s(i.submited))])]),t._v(" "),e("div",[e("h4",{staticClass:"mb-0"},[t._v("Approved")]),t._v(" "),e("span",[t._v(t._s(i.approved))])])]),t._v(" "),e("c-button",{staticClass:"text-uppercase",attrs:{status:"success",fontSize:"14",iconHide:"",size:"lg"},on:{click:function(i){t.showDownload=!t.showDownload}}},[t._v("\n                Claim Bounty\n            ")])],1),t._v(" "),e("div",{staticClass:"bountie__text padding-left-15 padding-right-15"},[e("h4",[t._v(t._s(i.title))]),t._v(" "),e("p",[t._v(t._s(i.text))])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.showDownload?e("div",{staticClass:"bountie__bottom"},[e("div",{staticClass:"file_upload"},[e("i",{staticClass:"fas fa-download"}),t._v("\n                    Select a Dossier File\n                ")]),t._v(" "),e("span",[t._v("or")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:i.explainText,expression:"item.explainText"}],staticClass:"explain_input",attrs:{type:"text",placeholder:"Explain your findings"},domProps:{value:i.explainText},on:{input:function(e){e.target.composing||t.$set(i,"explainText",e.target.value)}}}),t._v(" "),e("c-button",{attrs:{status:"success",icon:"arrow-right",size:"md"}},[t._v("Submit")])],1):t._e()])],1)})],2)])},[],!1,null,"5ca088e8",null);i.default=l.exports},294:function(t,i){}}]);