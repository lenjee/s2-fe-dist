(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{458:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"···-媒体类型-mime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#···-媒体类型-mime"}},[t._v("#")]),t._v(" ··· 媒体类型（MIME）")]),t._v(" "),s("h2",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("p",[t._v("是一种标准，用来表示文档、文件或字节流的性质和格式。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：MIME 类型对大小写不敏感，但是传统写法都是小写")])]),t._v(" "),s("h2",{attrs:{id:"通用结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用结构"}},[t._v("#")]),t._v(" 通用结构")]),t._v(" "),s("blockquote",[s("p",[t._v("type/subtype")])]),t._v(" "),s("h2",{attrs:{id:"分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("典型示例")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("表明文件是普通文本，理论上是人类可读")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("text/plain, text/html, text/css, text/javascript")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("image")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("表明是某种图像。不包括视频，但是动态图（比如动态 gif）也使用 image 类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("image/gif, image/png, image/jpeg, image/bmp, image/webp, image/x-icon, image/vnd.microsoft.icon")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("audio")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("表明是某种音频文件")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("video")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("表明是某种视频文件")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("video/webm, video/ogg")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("application")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("表明是某种二进制数据")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("application/octet-stream, application/pkcs12, application/vnd.mspowerpoint, application/xhtml+xml, application/xml, application/pdf")])])])]),t._v(" "),s("h2",{attrs:{id:"multipart-类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multipart-类型"}},[t._v("#")]),t._v(" Multipart 类型")]),t._v(" "),s("p",[t._v("Multipart 类型表示细分领域的文件类型的种类，经常对应不同的 MIME 类型")]),t._v(" "),s("blockquote",[s("p",[t._v("multipart/form-data")])]),t._v(" "),s("h2",{attrs:{id:"重要的一些-mime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重要的一些-mime"}},[t._v("#")]),t._v(" 重要的一些 MIME")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 常用MIME")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MIME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*/*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 任意类型的 MIME 类型")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ********* 常用媒体格式类型 *********")]),t._v("\n  text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文本文件默认值")]),t._v("\n  css "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在网页中要被解析为CSS的任何CSS文件必须指定MIME为text/css")]),t._v("\n  html "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所有的HTML内容都应该使用这种类型")]),t._v("\n  js "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/javascript'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 据 HTML 标准，应该总是使用 MIME 类型 text/javascript 服务 JavaScript 文件")]),t._v("\n  image "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图片类型")]),t._v("\n  audio "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'audio/*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 音频类型")]),t._v("\n  video "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'video/*'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 视频类型")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ********* 以application开头，常用媒体格式类型 *********")]),t._v("\n  json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// json类型")]),t._v("\n  pdf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/pdf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pdf格式")]),t._v("\n  doc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/msword'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Word文档格式")]),t._v("\n  stream "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/octet-stream'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二进制流数据（如常见的文件下载）")]),t._v("\n  docx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/vnd.openxmlformats-officedocument.wordprocessingml.document'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  xls "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/vnd.ms-excel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  xlsx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ppt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/vnd.ms-powerpoint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  pptx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/vnd.openxmlformats-officedocument.presentationml.presentation'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ********* form 相关 *********")]),t._v("\n  form "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/x-www-form-urlencoded'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原生form表单中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）")]),t._v("\n  mform "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'multipart/form-data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要在表单中进行文件上传时使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);