(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1050:function(t,s,e){"use strict";var n=e(298);e.n(n).a},1736:function(t,s,e){"use strict";e.r(s);var n={props:["project","editing"],components:{"c-milestone":function(t){return e.e(315).then(function(){var s=[e(1648)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-icon-block":function(t){return e.e(240).then(function(){var s=[e(1735)];t.apply(null,s)}.bind(this)).catch(e.oe)},"c-progress-bar":function(t){return e.e(221).then(function(){var s=[e(1647)];t.apply(null,s)}.bind(this)).catch(e.oe)}},computed:{milestones:function(){return this.project.milestones.items.sort()},doneMilestones:function(){var t=this.project.milestones.items,s=0;return t.forEach(function(t,e){"Done"===t.status&&(s+=1)}),s}}},i=(e(1050),e(0)),o=Object(i.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[t.project.milestones?t._e():e("div",{staticClass:"col-12"},[t._m(0)]),t._v(" "),t.project.milestones?e("div",{staticClass:"col-12"},[e("div",{staticClass:"milestones-header margin-bottom-20"},[e("div",{staticClass:"milestones-header__info"},[e("div",{staticClass:"h3 text-white font-weight-bold mb-0"},[t._v("\n                    "+t._s(t.project.milestones.overallProgress)+"% Project Completion\n                ")]),t._v("\n                "+t._s(t.doneMilestones)+" of "+t._s(t.project.milestones.items.length)+" Milestones Completed\n            ")]),t._v(" "),e("div",{staticClass:"milestones-header__stat"},[e("c-icon-block",{attrs:{icon:"check"}},[e("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                        Completed\n                    ")]),t._v("\n                    "+t._s(t.doneMilestones)+" Milestones\n                ")]),t._v(" "),e("c-icon-block",{attrs:{icon:"th"}},[e("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                        Total\n                    ")]),t._v("\n                    "+t._s(t.project.milestones.items.length)+" Milestones\n                ")]),t._v(" "),e("c-icon-block",{attrs:{icon:"file-alt"}},[e("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                        Total Spent\n                    ")]),t._v("\n                    "+t._s(t._f("convertCurrency")(t.project.funding.spentAmount))+"\n                ")]),t._v(" "),e("c-icon-block",{attrs:{icon:"hand-holding-usd"}},[e("div",{staticClass:"h6 p-0 m-0 text-white font-weight-bold"},[t._v("\n                        Project Budget\n                    ")]),t._v("\n                    "+t._s(t._f("convertCurrency")(t.project.funding.fundedAmount))+"\n                ")])],1)]),t._v(" "),e("div",{staticClass:"timeline-block position-relative"},[e("div",{staticClass:"progress main_timeline",staticStyle:{height:"15px"}},[e("c-progress-bar",{attrs:{percentages:t.project.milestones.overallProgress}})],1),t._v(" "),t.milestones?e("div",{staticClass:"period-container"},t._l(t.milestones,function(s,n){return e("div",{key:n,staticClass:"period"},[e("div",{staticClass:"number"},[t._v(t._s(s.stepNumber))]),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v("\n                            "+t._s(s.shortDescription)+"\n                        ")]),t._v(" "),e("div",{staticClass:"progress_line"},[e("i",{staticClass:"fas fa-clock icon"}),t._v(" "),e("c-progress-bar",{attrs:{percentages:s.progress.percentDays}}),t._v("\n                            "+t._s(s.progress.daysLeft)+" days left\n                        ")],1),t._v(" "),e("div",{staticClass:"progress_line"},[e("i",{staticClass:"fas fa-check icon"}),t._v(" "),e("c-progress-bar",{attrs:{percentages:s.progress.percentDone}}),t._v("\n                            "+t._s(s.progress.percentDone)+"% Done\n                        ")],1),t._v(" "),e("div",{staticClass:"progress_line"},[e("i",{staticClass:"fas fa-dollar-sign icon"}),t._v(" "),e("c-progress-bar",{attrs:{percentages:s.progress.percentSpent}}),t._v("\n                            "+t._s(s.progress.percentSpent)+"% Spent\n                        ")],1)])])})):t._e()]),t._v(" "),e("div",{staticClass:"milestones-list"},t._l(t.milestones,function(t,s){return e("c-milestone",{key:s,attrs:{milestone:t}})}))]):t._e()])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"no-updates"},[s("h3",[this._v("\n                There is no milestones defined.\n            ")])])}],!1,null,"633c9c83",null);s.default=o.exports},298:function(t,s){}}]);