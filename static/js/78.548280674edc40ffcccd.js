(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1462:function(a,t,s){"use strict";s.r(t);function e(a){var t=parseInt(a,16);return(t>>16&255)+","+(t>>8&255)+","+(255&t)}var i={props:["id"],components:{"c-heading-bar":function(a){return Promise.resolve().then(function(){var t=[s(1576)];a.apply(null,t)}.bind(this)).catch(s.oe)},"c-simple-game-grid":function(a){return s.e(297).then(function(){var t=[s(1646)];a.apply(null,t)}.bind(this)).catch(s.oe)},"c-game-grid":function(a){return s.e(26).then(function(){var t=[s(1698)];a.apply(null,t)}.bind(this)).catch(s.oe)},"c-featured-assets":function(a){return s.e(247).then(function(){var t=[s(1671)];a.apply(null,t)}.bind(this)).catch(s.oe)}},data:function(){return{css:{bodyBgColor:null,headerBg:{},headerBgLayer1:{},headerBgLayer2:{}}}},computed:{realm:function(){var a=this;return this.$store.state.marketplace.realms.find(function(t){return t.id==a.id})}},mounted:function(){var a=this;this.$nextTick(function(){a.css.bodyBgColor=document.body.style.backgroundColor,a.css.headerBg=$("#header-bg")[0].style,a.css.headerBgLayer1=$(".header-bg__layer-1")[0].style,a.css.headerBgLayer2=$(".header-bg__layer-2")[0].style,document.body.style.backgroundColor=a.realm.theme.backgroundColor,$("#header-bg").css({"background-image":"url("+a.realm.images.background+")","background-size":a.realm.theme.header.backgroundSize||"cover"}),$(".header-bg__layer-1").css({background:"linear-gradient(to bottom, rgba("+e(a.realm.theme.backgroundColor.slice(1))+", 0.34) 0%, rgba("+e(a.realm.theme.backgroundColor.slice(1))+", 1) 100%)"}),$(".header-bg__layer-2").css({position:"fixed",background:"rgba(255, 255, 255, 0.2)",height:"48px"}),$(".app-header__shadow").hide(),$("#page-aside").hide()})},beforeDestroy:function(){document.body.style.backgroundColor=this.css.bodyBgColor,$("#header-bg")[0].style=this.css.headerBg,$(".header-bg__layer-1")[0].style=this.css.headerBgLayer1,$(".header-bg__layer-2")[0].style=this.css.headerBgLayer2,$(".app-header__shadow").show(),$("#page-aside").show()},created:function(){this.$store.commit("application/activateModal","coming-soon")}},r=(s(977),s(0)),n=Object(r.a)(i,function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("c-layout",[s("div",{staticClass:"row realm_page_header margin-bottom-30"},[s("div",{staticClass:"col-10 col-md-3"},[s("div",{staticClass:"logo"},[s("c-img",{staticClass:"img-fluid",attrs:{src:a.realm.images.logo}})],1)]),a._v(" "),s("div",{staticClass:"col-12 col-md-3 mb-4 mb-md-0"},[s("div",{staticClass:"widget--box"},[s("h3",[a._v("Widget Title")]),a._v(" "),s("p",[a._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Integer gravida in dui tempus mattis. Class aptent taciti sociosqu ad\n                    litora torquent per conubia nostra, per inceptos himenaeos.\n                ")])])]),a._v(" "),s("div",{staticClass:"col--12 col-md-3 mb-4 mb-md-0"},[s("div",{staticClass:"widget--box"},[s("h3",[a._v("Widget Title")]),a._v(" "),s("p",[a._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Integer gravida in dui tempus mattis. Class aptent taciti sociosqu ad\n                    litora torquent per conubia nostra, per inceptos himenaeos.\n                ")])])]),a._v(" "),s("div",{staticClass:"col--12 col-md-3 mb-4 mb-md-0"},[s("div",{staticClass:"widget--box"},[s("h3",[a._v("Widget Title")]),a._v(" "),s("p",[a._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Integer gravida in dui tempus mattis. Class aptent taciti sociosqu ad\n                    litora torquent per conubia nostra, per inceptos himenaeos.\n                ")])])]),a._v(" "),s("div",{staticClass:"col-12"},[s("ul",{staticClass:"nav"},[s("li",{staticClass:"nav-item active"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[a._v("Home")])]),a._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[a._v("News")])]),a._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[a._v("Community")])]),a._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[a._v("Games")])])])])]),a._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"banner-line margin-bottom-30"},[s("div",{staticClass:"banner-md"},[s("div",{staticClass:"img"},[s("c-img",{attrs:{src:a.realm.images.news}})],1),a._v(" "),s("div",{staticClass:"text"},[s("h4",[a._v("Announcing: The Boomsday Project")]),a._v(" "),s("p",[a._v("Sed pulvinar nibh id interdum tempus. Nam id massa sit amet dolor tincidunt bibendum.\n                            Nullam ante nunc, dapibus et mauris ut, sodales accumsan lorem.")]),a._v(" "),s("a",{attrs:{href:"#/project/1"}},[a._v("Read More")])])]),a._v(" "),s("div",{staticClass:"banner-sm"},[s("div",{staticClass:"img"},[s("c-img",{attrs:{src:a.realm.images.follow}})],1),a._v(" "),s("div",{staticClass:"text"},[s("a",{staticClass:"btn btn-sm btn-info",attrs:{href:"#"}},[a._v("Follow Us")]),a._v(" "),s("h4",[a._v("Get the news first!")])])])]),a._v(" "),s("div",{staticClass:"product-grid"},[s("c-heading-bar",{attrs:{name:"Featured Games",showArrows:!1,showBackground:!1}})],1),a._v(" "),s("div",{staticClass:"featured-assets"},[s("c-heading-bar",{attrs:{name:"Featured Assets",showArrows:!1,showBackground:!1}}),a._v(" "),s("c-featured-assets")],1),a._v(" "),s("div",{staticClass:"games-container"},[s("c-heading-bar",{attrs:{name:"Games",showArrows:!1,showBackground:!1,showActions:""}},[s("div",{staticClass:"additional-action margin-left-20",attrs:{slot:"additional-action"},slot:"additional-action"},[s("div",{staticClass:"text"},[a._v("\n                            Price\n                            "),s("i",{staticClass:"fas fa-dollar-sign"})]),a._v(" "),s("div",{staticClass:"arrow_container"},[s("i",{staticClass:"fas fa-sort-up"}),a._v(" "),s("i",{staticClass:"fas fa-sort-down"})])]),a._v(" "),s("div",{staticClass:"additional-action",attrs:{slot:"additional-action"},slot:"additional-action"},[s("div",{staticClass:"text"},[a._v("\n                            Rating\n                            "),s("i",{staticClass:"fas fa-star"})]),a._v(" "),s("div",{staticClass:"arrow_container"},[s("i",{staticClass:"fas fa-sort-up"}),a._v(" "),s("i",{staticClass:"fas fa-sort-down"})])])]),a._v(" "),s("c-game-grid")],1)])])])},[],!1,null,"64672870",null);t.default=n.exports},256:function(a,t){},977:function(a,t,s){"use strict";var e=s(256);s.n(e).a}}]);