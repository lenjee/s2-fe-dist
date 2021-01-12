(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{403:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"···-数据传输规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#···-数据传输规范"}},[t._v("#")]),t._v(" ··· 数据传输规范")]),t._v(" "),a("blockquote",[a("p",[t._v("此规范设计的目标是使浏览器端与业务系统相互传递的 JSON 数据保持一致，容易被理解和处理，并兼顾传输的数据量。")])]),t._v(" "),a("h2",{attrs:{id:"json-数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-数据类型"}},[t._v("#")]),t._v(" JSON 数据类型")]),t._v(" "),a("p",[t._v("JSON（JavaScript Object Notation）是一种轻量级，基于文本，语言无关的数据交换格式。其包括了基本数据类型 4 种和复合数据类型 2 种，共 6 种数据类型。在下面章节中，JSON 数据类型的表示法为 JSON+空格+数据类型，如：JSON Array。")]),t._v(" "),a("font",{attrs:{color:"#ff7474"}},[a("p",[t._v("传输的数据，包括对象属性以及数组成员， "),a("strong",[t._v("必须")]),t._v(" 是 6 种 JSON 数据类型之一。 "),a("strong",[t._v("禁止")]),t._v(" 使用 function、Date 等 js 对象类型。")])]),t._v(" "),a("h3",{attrs:{id:"基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[t._v("#")]),t._v(" 基本数据类型")]),t._v(" "),a("ul",[a("li",[t._v("Number：可以表示整数和浮点数。")]),t._v(" "),a("li",[t._v("Boolean：可以表示真假，值为 true 或 false。")]),t._v(" "),a("li",[t._v("String：表示一个字符串。")]),t._v(" "),a("li",[t._v("Null：通常用于表示空对象。")])]),t._v(" "),a("p",[t._v('"true" 和 true，这两个数据代表的是不同的数据类型。非字符串类型数据输出时一定 '),a("strong",[t._v("禁止")]),t._v(' 为两端加上双引号，否则可能产生不希望的后果（如 if 中判断"false"的结果是 true）。其他容易产生错误的例子如：0 和"0"等。')]),t._v(" "),a("h3",{attrs:{id:"复合数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复合数据类型"}},[t._v("#")]),t._v(" 复合数据类型")]),t._v(" "),a("p",[t._v("Object 是无序的集合，以键值对的方式保持数据。一个 Object 中包含零到多个 name/value 的数据，数据间以逗号(,)分隔。name 为 String 类型，value 可以是任意类型的数据。")]),t._v(" "),a("p",[t._v("Object 的最后一个元素之后一定 "),a("strong",[t._v("禁止")]),t._v(" 加上分隔符的逗号，否则可能导致解析出错。")]),t._v(" "),a("p",[t._v("Array(数组)为多个值的有序集合，数组元素间以逗号(,)分隔。")]),t._v(" "),a("h2",{attrs:{id:"http-响应头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-响应头"}},[t._v("#")]),t._v(" http 响应头")]),t._v(" "),a("h3",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[t._v("#")]),t._v(" status")]),t._v(" "),a("p",[t._v("http 响应的 status "),a("strong",[t._v("必须")]),t._v(" 为 200。通常 JSON 数据被用于通过 XMLHttpRequest 对象访问，通过 javascript 进行处理。返回错误的状态码可能导致错误不被响应，数据不被处理。")]),t._v(" "),a("h3",{attrs:{id:"content-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[t._v("#")]),t._v(" Content-Type")]),t._v(" "),a("p",[t._v("Content-Type 字段定义了响应体的类型。一般情况下，浏览器会根据该类型对内容进行正确的处理。对于传输 JSON 数据的响应，Content-Type "),a("strong",[t._v("推荐")]),t._v(' 设置为"text/javascript"或"text/plain"。 '),a("strong",[t._v("避免")]),t._v(" 将 Context-Type 设置为 text/html，否则可能导致安全问题。")]),t._v(" "),a("p",[t._v("Content-Type 中可以指定字符集。通常 "),a("strong",[t._v("需要")]),t._v(" 明确指定一个字符集。如果是通过 XMLHTTPRequest 请求的数据，并且字符编码为 UTF-8 时，可以不指定字符集。")]),t._v(" "),a("h4",{attrs:{id:"context-type-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-type-示例"}},[t._v("#")]),t._v(" Context-Type 示例")]),t._v(" "),a("p",[t._v("text/javascript;charset=UTF-8")]),t._v(" "),a("h2",{attrs:{id:"数据字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据字段"}},[t._v("#")]),t._v(" 数据字段")]),t._v(" "),a("p",[t._v("返回的数据包含在 http 响应体中。数据 "),a("strong",[t._v("必须")]),t._v(" 是一个 JSON Object。该 Object 可能包含 3 个字段：status，statusInfo，data。")]),t._v(" "),a("h3",{attrs:{id:"status-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status-2"}},[t._v("#")]),t._v(" status")]),t._v(" "),a("p",[t._v("status 字段 "),a("strong",[t._v("必须")]),t._v(" 是一个不小于 0 的 JSON Number 整数，表示请求的状态。这个字段 "),a("strong",[t._v("可以(SHOULD)")]),t._v(" 被省略，省略时和为 0 时表示同一含义。")]),t._v(" "),a("ul",[a("li",[t._v("0：表示 server 端理解了请求，成功处理并返回。")]),t._v(" "),a("li",[t._v("非 0：表示发生错误。 "),a("strong",[t._v("可以(SHOULD)")]),t._v(" 根据错误类型扩展错误码。")])]),t._v(" "),a("h4",{attrs:{id:"一个成功请求的-status-字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个成功请求的-status-字段"}},[t._v("#")]),t._v(" 一个成功请求的 status 字段")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"statusinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statusinfo"}},[t._v("#")]),t._v(" statusInfo")]),t._v(" "),a("p",[t._v("statusInfo 字段 "),a("strong",[t._v("通常")]),t._v(" 是一个 JSON String 或 JSON Object，表示除了请求状态外 server 端想要对 status 做出的说明，使 client 端能够获取更多信息进行后续处理。这个字段是 "),a("strong",[t._v("可选的")]),t._v(" 。下面的两个例子中，statusInfo 字段的信息都可以用于 client 端程序的后续处理，但是粒度和处理方式会有不同。")]),t._v(" "),a("h4",{attrs:{id:"client-端参数错误的-statusinfo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-端参数错误的-statusinfo"}},[t._v("#")]),t._v(" client 端参数错误的 statusInfo")]),t._v(" "),a("p",[t._v("简单说明的 statusInfo：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusInfo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"参数错误"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("具有更多信息的 statusInfo：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"statusInfo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"参数错误"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parameters"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"电子邮件格式不正确"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" data")]),t._v(" "),a("p",[t._v("data 字段可以是除 JSON Null 之外的任意 JSON 类型，表示请求返回的数据主体。这个字段是 "),a("strong",[t._v("可选的")]),t._v(" 。数据主体 data 包含了在请求成功时有意义的数据。")]),t._v(" "),a("h4",{attrs:{id:"一个查询姓名请求的返回数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个查询姓名请求的返回数据"}},[t._v("#")]),t._v(" 一个查询姓名请求的返回数据")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Lily"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"数据场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据场景"}},[t._v("#")]),t._v(" 数据场景")]),t._v(" "),a("p",[t._v("本章为常见数据场景定义了通用的标准数据格式，用于数据传输和使用。额外地，本章为部分可能大数据量传输的数据场景定义了变通数据格式。变通数据格式可在数据解析阶段转换成标准数据格式。")]),t._v(" "),a("p",[t._v("变通数据格式 "),a("strong",[t._v("必须")]),t._v(" 是一个 JSON Object，其中 "),a("strong",[t._v("必须")]),t._v(" 包含 e-type 属性和 data 属性。e-type 属性标识数据类型，便于对数据进行解析；data 属性包含变通后的数据。变通数据 "),a("strong",[t._v("可以")]),t._v(" 包含其他的属性，标识数据的其他扩展信息。")]),t._v(" "),a("p",[t._v("变通数据格式的 e-type 属性定义了 table 值。e-type 属性可以使用者扩展其他属性值，扩展的属性值 "),a("strong",[t._v("必须")]),t._v(" 以“项目缩写-名称”命名，如“fc-list”，自主解析。")]),t._v(" "),a("h3",{attrs:{id:"日期类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期类型"}},[t._v("#")]),t._v(" 日期类型")]),t._v(" "),a("p",[t._v("日期类型不属于 JSON 数据类型。对于日期类型，我们 "),a("strong",[t._v("必须")]),t._v(" 使用 JSON String 来表示。")]),t._v(" "),a("h4",{attrs:{id:"数据场景-日期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据场景-日期"}},[t._v("#")]),t._v(" 数据场景：日期")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2010-10-10"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),a("p",[t._v("在脚手架项目中，状态码在请求方法中是统一处理的（文件"),a("code",[t._v("statusCode.ts")]),t._v("），")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 请求状态码处理 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("httpStatusCode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请求状态码处理 >>>>>>>>> : "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"  >>>>>>>>>  <<<<<<<<< "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      MessageBox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("请联系管理员！")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"网络异常"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://passport.oa.com/modules/passport/signin.ashx?appkey=6ed4670763a24c3e97b512ef8126aa9f&title=%E7%A8%8E%E5%8A%A1%E8%B4%AD%E6%B1%87%E5%B9%B3%E5%8F%B0&url="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);