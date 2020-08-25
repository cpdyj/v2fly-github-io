(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{382:function(t,a,s){"use strict";s.r(a);var e=s(18),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"api-远程控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-远程控制"}},[t._v("#")]),t._v(" API 远程控制")]),t._v(" "),s("p",[t._v("V2Ray 中可以开放一些 API 以便远程调用。这些 API 都基于 "),s("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC"),s("OutboundLink")],1),t._v("。大多数用户并不会用到此 API，新手可以直接忽略这一项。")]),t._v(" "),s("p",[t._v("当远程控制开启时，V2Ray 会自建一个出站代理，以 "),s("code",[t._v("tag")]),t._v(" 配置的值为标识。用户必须手动将所有的 gRPC 入站连接通过 "),s("RouterLink",{attrs:{to:"/config/routing.html"}},[t._v("路由")]),t._v(" 指向这一出站代理。")],1),t._v(" "),s("h2",{attrs:{id:"apiobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apiobject"}},[t._v("#")]),t._v(" ApiObject")]),t._v(" "),s("p",[s("code",[t._v("ApiObject")]),t._v(" 对应配置文件的 "),s("code",[t._v("api")]),t._v(" 项。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"services"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HandlerService"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LoggerService"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StatsService"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("tag")]),t._v(": string")])]),t._v(" "),s("p",[t._v("出站代理标识。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("services")]),t._v(": [string]")])]),t._v(" "),s("p",[t._v("开启的 API 列表，可选的值见 "),s("a",{attrs:{href:"#%E6%94%AF%E6%8C%81%E7%9A%84-api-%E5%88%97%E8%A1%A8"}},[t._v("API 列表")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"支持的-api-列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的-api-列表"}},[t._v("#")]),t._v(" 支持的 API 列表")]),t._v(" "),s("h3",{attrs:{id:"handlerservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#handlerservice"}},[t._v("#")]),t._v(" HandlerService")]),t._v(" "),s("p",[t._v("一些对于入站出站代理进行修改的 API，可用的功能如下：")]),t._v(" "),s("ul",[s("li",[t._v("添加一个新的入站代理；")]),t._v(" "),s("li",[t._v("添加一个新的出站代理；")]),t._v(" "),s("li",[t._v("删除一个现有的入站代理；")]),t._v(" "),s("li",[t._v("删除一个现有的出站代理；")]),t._v(" "),s("li",[t._v("在一个入站代理中添加一个用户（仅支持 VMess、VLESS）；")]),t._v(" "),s("li",[t._v("在一个入站代理中删除一个用户（仅支持 VMess、VLESS）；")])]),t._v(" "),s("h3",{attrs:{id:"loggerservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loggerservice"}},[t._v("#")]),t._v(" LoggerService")]),t._v(" "),s("p",[t._v("支持对内置 Logger 的重启，可配合 logrotate 进行一些对日志文件的操作。")]),t._v(" "),s("h3",{attrs:{id:"statsservice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statsservice"}},[t._v("#")]),t._v(" StatsService")]),t._v(" "),s("p",[t._v("内置的数据统计服务，详见 "),s("RouterLink",{attrs:{to:"/config/stats.html"}},[t._v("统计信息")]),t._v("。")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);