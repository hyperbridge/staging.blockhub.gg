(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1149:function(t,s,a){"use strict";a.r(s);var o={props:["forum"],computed:{icon:function(){return this.forum.icon?this.forum.icon:"fas fa-comments"},calculateSince:function(){var t=new Date(this.forum.last_post_time),s=new Date,a=Math.round((s-t)/6e4),o=void 0,n=void 0;if(console.log("0",this.forum.last_post_time),0==a){var i=Math.round((s-t)/1e3);o=i<10?"less than 10 seconds ago":i<20?"less than 20 seconds ago":"half a minute ago"}else if(1==a){var e=Math.round((s-t)/1e3);o=30==e?"half a minute ago":e<60?"less than a minute ago":"1 minute ago"}else o=a<45?a+" minutes ago":a>44&&a<60?"1 hour ago":a<1440?1==(n=Math.round(a/60))?"1 hour ago":n+" hours ago":a>1439&&a<2880?"1 day ago":Math.round(a/1440)+" days ago";return o}}},n=(a(703),a(0)),i=Object(n.a)(o,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"forum-item"},[a("div",{staticClass:"forum-item__header"},[a("div",{staticClass:"icon"},[a("i",{class:t.icon})]),t._v(" "),a("div",{staticClass:"text"},[a("router-link",{attrs:{to:{name:"Community Forum",params:{id:t.forum.id}}}},[t._v("\n                "+t._s(t.forum.title)+"\n            ")])],1),t._v(" "),a("div",{staticClass:"last-post"},[t._v("\n            "+t._s(t.calculateSince)+"\n        ")]),t._v(" "),a("div",{staticClass:"discussions-count"},[t._v("\n            "+t._s(t.forum.discussions_count)+"\n        ")])])])},[],!1,null,"62748ddc",null);s.default=i.exports},198:function(t,s){},703:function(t,s,a){"use strict";var o=a(198);a.n(o).a}}]);