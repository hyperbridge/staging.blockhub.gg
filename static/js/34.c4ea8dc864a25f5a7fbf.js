(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{475:function(t,s,e){"use strict";var i=e(89);e.n(i).a},759:function(t,s,e){"use strict";e.r(s);var i=function(){if(this.$store.state.marketplace.products){var t=this.$store.state.marketplace.products[this.id];if(t){if(t.images.preview&&t.images.preview.length){var s=window.document.getElementById("header-bg");s.style["background-image"]="url("+t.images.preview[0]+")",s.style["background-size"]="cover"}return t.projects||(t.projects=[]),t}}},a={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var s=[e(806)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-tags-list":function(t){return e.e(96).then(function(){var s=[e(685)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-block":function(t){return e.e(95).then(function(){var s=[e(675)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-project-card":function(t){return e.e(125).then(function(){var s=[e(812)];t.apply(null,s)}.bind(this)).catch(e.oe)}},data:function(){return{projects:[{description:"Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.",img:"https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg",funds:{currency:"USD",obtained:2834,goal:5e3}},{description:"Add new desert canyon themed area with 15 new monsters, 4 bosses and 2 dungeons.",img:"https://cnet1.cbsistatic.com/img/zSoSnjjOVxk2Hl0HOsT-nrFaYsc=/970x0/2018/04/02/068c90d1-19d9-4703-a5be-9814b2c7f8bb/fortnite-stock-image-1.jpg",funds:{currency:"USD",obtained:1234,goal:16e3}}]}},methods:{save:function(){this.$store.dispatch("marketplace/updateProduct",this.product)}},computed:{product:i,editing:function(){if(!this.$store.state.application.editor_mode)for(var t in this.activeElement)this.activeElement[t]=!1;return"editing"===this.$store.state.application.editor_mode}},mounted:i,created:i,beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"}},n=(e(475),e(0)),c=Object(n.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("c-layout",{attrs:{navigationKey:"product-navigation"}},[e("div",{staticClass:"content",attrs:{id:"content"}},[e("div",{staticClass:"container-fluid"},[t.product?t._e():e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t._v("\n                    Product not found\n                ")])]),t._v(" "),t.product?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",{staticClass:"title margin-top-10"},[t._v(t._s(t.product.name))]),t._v(" "),t.editing?t._e():e("c-tags-list",{attrs:{tags:t.product.author_tags}}),t._v(" "),e("ul",{staticClass:"nav nav-tabs margin-bottom-50 justify-content-between"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id}},[t._v("Overview")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id+"/community"}},[t._v("Community")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link active",attrs:{to:"/product/"+t.product.id+"/projects"}},[t._v("Projects")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id+"/assets"}},[t._v("Assets")])],1)])],1),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"filter d-flex justify-content-between"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"input-group input-group-sm"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("span",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-search"})])])])]),t._v(" "),e("div",[e("c-button",{attrs:{status:"info",icon_hide:""}},[t._v("Submit Project")])],1)])]),t._v(" "),e("div",{staticClass:"col-12"},[e("c-block",{attrs:{title:"Top 3 Submissions",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},t._l(t.projects,function(t,s){return e("c-project-card",{key:s,attrs:{project:t,showGame:!1}})}))],1)]):t._e()])])])},[],!1,null,"5c2355ba",null);s.default=c.exports},89:function(t,s){}}]);