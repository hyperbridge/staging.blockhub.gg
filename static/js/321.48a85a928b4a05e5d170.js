(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{1274:function(t,e,a){(t.exports=a(15)(!1)).push([t.i,'.first-line[data-v-52dfe8d2]{height:100%!important}.hide-line[data-v-52dfe8d2]:before{display:none!important}.navigator-item[data-v-52dfe8d2]{display:flex;position:relative}.navigator-item[data-v-52dfe8d2]:after{position:absolute;font-family:Font Awesome\\ 5 Free;font-weight:900;font-size:15px;content:"\\F061";content:"\\F105";top:56.5px;left:15px;color:#a3a3a3}.navigator-item[data-v-52dfe8d2]:before{content:"";position:absolute;height:2px;background:#ff0;background:#a3a3a3;width:19px;top:65px;left:0;z-index:-1}.navigator-item__content[data-v-52dfe8d2]{width:70px;height:70px;margin:30px;position:relative}.navigator-item__content:hover .navigator-item__btn[data-v-52dfe8d2]{display:block}.navigator-item__content .navigator-item__asset[data-v-52dfe8d2]{max-height:70px;width:70px;margin:0}.navigator-item__btn[data-v-52dfe8d2]{position:absolute;border:2px dotted #fff;width:35px;height:35px;background:hsla(0,0%,100%,.2);border-radius:50%;color:#fff;cursor:pointer;animation:pop-in-data-v-52dfe8d2 .2s ease}.navigator-item__btn--right[data-v-52dfe8d2]{right:-45px;top:calc(50% - 17.5px)}.navigator-item__btn--bottom[data-v-52dfe8d2]{bottom:-45px;left:calc(50% - 17.5px)}@keyframes pop-in-data-v-52dfe8d2{0%{opacity:0;transform:scale(0)}60%{opacity:1;transform:scale(1.1)}to{opacity:1;transform:scale(1)}}.navigator-item__sub-navigators[data-v-52dfe8d2]{position:relative}.navigator-item__sub-navigators.sub-navigators__line[data-v-52dfe8d2]:before{position:absolute;content:"";height:calc(100% - 130px);top:65px;background:blue;width:2px;background:#a3a3a3}.navigator-item__sub-navigators.sub-navigators__line[data-v-52dfe8d2]:after{position:absolute;content:"";height:2px;width:30px;background:green;background:#a3a3a3;left:-30px;top:65px;background:linear-gradient(90deg,#fff,#a3a3a3);box-shadow:-15px 0 30px 1px #c4e3ff;z-index:-1}.navigator-item--first-row .sub-navigators__line[data-v-52dfe8d2]{height:calc(100% - 130px)}.navigator-item--first-row[data-v-52dfe8d2]:after,.navigator-item--first-row[data-v-52dfe8d2]:before{display:none}',""])},1275:function(t,e,a){"use strict";var i=a(805);a.n(i).a},2198:function(t,e,a){"use strict";a.r(e);var i=a(1159),n={name:"navigator-item",components:{"c-asset":function(t){return a.e(225).then(function(){var e=[a(2216)];t.apply(null,e)}.bind(this)).catch(a.oe)}},props:{item:Object,isChildren:Boolean,index:Number,listLength:Number,useComp:{type:String,default:"c-asset"},parentId:[Number,String],hideButtons:Boolean},data:function(){return{hovered:!1}},methods:{handleEvolve:function(t){i.a.$emit("evolve",t)},handleDevolve:function(t){t.id;var e=this.parentId;i.a.$emit("devolve",{tree:this.item,parentId:e})}}},o=(a(1275),a(7)),r=Object(o.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigator-item",class:{"navigator-item--first-row":!t.isChildren,"navigator-item--first":0===t.index,"navigator-item--last":t.index===t.listLength-1},on:{mouseover:function(e){t.hovered=!0},mouseout:function(e){t.hovered=!1}}},[a("div",{staticClass:"navigator-item__content"},[t.item.evolvesTo.length||!t.hovered||t.hideButtons?t._e():a("button",{staticClass:"navigator-item__btn navigator-item__btn--right",on:{click:function(e){t.handleEvolve(t.item.id)}}},[a("c-icon",{attrs:{name:"plus"}})],1),t._v(" "),t.index===t.listLength-1&&t.hovered&&!t.hideButtons?a("button",{staticClass:"navigator-item__btn navigator-item__btn--bottom",on:{click:function(e){t.handleEvolve(t.parentId)}}},[a("c-icon",{attrs:{name:"plus"}})],1):t._e(),t._v(" "),a("c-asset",{staticClass:"navigator-item__asset",attrs:{asset:t.item.asset},on:{click:t.handleDevolve}})],1),t._v(" "),a("div",{staticClass:"navigator-item__sub-navigators",class:{"sub-navigators__line":t.item.evolvesTo.length,"first-line":0===t.index,"hide-line":t.item.evolvesTo.length<2}},t._l(t.item.evolvesTo,function(e,i){return a("navigator-item",{key:i,attrs:{index:i,item:e,isChildren:!0,listLength:t.item.evolvesTo.length,parentId:t.item.id,hideButtons:t.hideButtons}})}))])},[],!1,null,"52dfe8d2",null);e.default=r.exports},805:function(t,e,a){var i=a(1274);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(14)("73054d83",i,!0,{})}}]);