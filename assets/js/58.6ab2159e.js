(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{438:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"···-响应性原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#···-响应性原理"}},[t._v("#")]),t._v(" ··· 响应性原理")]),t._v(" "),a("h2",{attrs:{id:"响应性原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应性原理"}},[t._v("#")]),t._v(" 响应性原理")]),t._v(" "),a("p",[t._v("响应性是一种允许我们以声明式的方式去适应变化的一种编程范例")]),t._v(" "),a("h2",{attrs:{id:"vue-如何追踪变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-如何追踪变化"}},[t._v("#")]),t._v(" Vue 如何追踪变化？")]),t._v(" "),a("p",[t._v("当把一个普通的 JavaScript 对象作为 data 选项传给应用或组件实例的时候，Vue 会使用带有 getter 和 setter 的处理程序遍历其所有 property 并将其转换为 Proxy")]),t._v(" "),a("blockquote",[a("p",[t._v("Proxy 这是 ES6 仅有的特性，但是我们在 Vue 3 版本也使用了 Object.defineProperty 来支持 IE 浏览器。两者具有相同的 Surface API，但是 Proxy 版本更精简，同时提升了性能。")])]),t._v(" "),a("ul",[a("li",[t._v("跟踪更改它的函数：vue3 在 Proxy 中的 getter 中执行此操作，称为 effect")]),t._v(" "),a("li",[t._v("触发函数以便它可以更新最终值：vue3 在 Proxy 中的 setter 中进行该操作，名为 trigger")])]),t._v(" "),a("h2",{attrs:{id:"proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[t._v("#")]),t._v(" Proxy")]),t._v(" "),a("blockquote",[a("p",[t._v("Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。")])]),t._v(" "),a("p",[t._v("Proxy 是一个包含另一个对象或函数并允许你对其进行拦截的对象。")]),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// target: 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handler: 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("举例：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dinner "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  meal"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tacos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dinner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tacos")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);