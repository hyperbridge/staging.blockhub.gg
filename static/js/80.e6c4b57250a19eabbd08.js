(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1570:function(t,n,e){"use strict";e.r(n);var i={props:["projectID","postID"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var n=[e(1655)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-block":function(t){return Promise.resolve().then(function(){var n=[e(1574)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-tags":function(t){return e.e(10).then(function(){var n=[e(1416)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-badges":function(t){return e.e(212).then(function(){var n=[e(1441)];t.apply(null,n)}.bind(this)).catch(e.oe)}},data:function(){return{id:this.projectID}},computed:{project:function(){var t=null;return"new"===this.id&&(t=this.$store.state.funding.defaultProject),this.$store.state.funding.projects&&this.$store.state.funding.projects[this.id]&&(t=this.$store.state.funding.projects[this.id]),t&&t.images&&t.images.header&&(window.document.getElementById("header-bg").style["background-image"]="url("+t.images.header+")"),t},post:function(){var t=this;return this.project.updates.find(function(n){return n.id===Number(t.postID)&&n})}}},s=(e(938),e(0)),o=Object(s.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("c-layout",{attrs:{navigationKey:"project"}},[t.post?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",[t._v("\n                "+t._s(t.post.title)+"\n            ")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.post.text)}})])]):e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h4",[t._v("\n                Something went wrong\n            ")])])])])},[],!1,null,"1ef75dd6",null);n.default=o.exports},254:function(t,n){},938:function(t,n,e){"use strict";var i=e(254);e.n(i).a}}]);