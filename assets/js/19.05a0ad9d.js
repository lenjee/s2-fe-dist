(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{394:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"···-git规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#···-git规范"}},[t._v("#")]),t._v(" ··· Git规范")]),t._v(" "),a("blockquote",[a("p",[t._v("团队开发中，遵循一个合理、清晰的Git使用流程，是非常重要的。否则，每个人都提交一堆杂乱无章的commit，项目很快就会变得难以协调和维护。")])]),t._v(" "),a("h2",{attrs:{id:"git使用规范流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git使用规范流程"}},[t._v("#")]),t._v(" Git使用规范流程")]),t._v(" "),a("h3",{attrs:{id:"一-新建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-新建分支"}},[t._v("#")]),t._v(" (一) 新建分支")]),t._v(" "),a("p",[t._v("每次新功能开发，都应该新建一个单独的分支")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取主干最新代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个开发分支myfeature")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b myfeature\n\n")])])]),a("h3",{attrs:{id:"二-提交commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-提交commit"}},[t._v("#")]),t._v(" (二) 提交commit")]),t._v(" "),a("p",[t._v("分支代码修改后，提交commit")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加修改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# review 发生变动的文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撰写提交信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提交信息"')]),t._v("\n\n")])])]),a("p",[t._v("提交信息编写规范：")]),t._v(" "),a("font",{staticStyle:{"font-weight":"bold",color:"#3a84fb"}},[a("p",[t._v("语法格式：[行为关键词]：[1.修改点xx,2.修改点xx,...]")])]),t._v(" "),a("font",{attrs:{color:"#ff7474"}},[a("p",[t._v("行为关键词列表：")]),t._v(" "),a("ul",[a("li",[t._v("add：增加")]),t._v(" "),a("li",[t._v("del：删除")]),t._v(" "),a("li",[t._v("mod：修改")]),t._v(" "),a("li",[t._v("update：更新")]),t._v(" "),a("li",[t._v("fix：修复bug")]),t._v(" "),a("li",[t._v("docs：文档（documentation）")]),t._v(" "),a("li",[t._v("style： 格式（不影响代码运行的变动）")]),t._v(" "),a("li",[t._v("refactor：重构（即不是新增功能，也不是修改bug的代码变动）")]),t._v(" "),a("li",[t._v("test：增加测试")]),t._v(" "),a("li",[t._v("chore：构建过程或辅助工具的变动")]),t._v(" "),a("li",[t._v("perf : 性能优化")]),t._v(" "),a("li",[t._v("revert : 撤销上一次的 commit")]),t._v(" "),a("li",[t._v("merge：合并分支操作")])])]),t._v(" "),a("p",[t._v("例如：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fix:\n1.修改xx\n2.修复了xx\n"')]),t._v("\n")])])]),a("h3",{attrs:{id:"三-与主干同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-与主干同步"}},[t._v("#")]),t._v(" (三) 与主干同步")]),t._v(" "),a("p",[t._v("分支的开发过程中，要每次提交前与主干保持同步。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase origin/master\n")])])]),a("h3",{attrs:{id:"四-推送到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-推送到远程仓库"}},[t._v("#")]),t._v(" （四）推送到远程仓库")]),t._v(" "),a("p",[t._v("推送当前分支到远程仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin myfeature\n")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);