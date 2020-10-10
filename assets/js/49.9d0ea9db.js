(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{426:function(t,e,a){"use strict";a.r(e);var s=a(11),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"blackhole"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blackhole"}},[t._v("#")]),t._v(" Blackhole")]),t._v(" "),a("ul",[a("li",[t._v("Name: "),a("code",[t._v("blackhole")])]),t._v(" "),a("li",[t._v("Type: Outbound Protocol")])]),t._v(" "),a("p",[t._v("Blackhole (black hole) is an outbound data protocol, which will hinder the outbound of all data. When used with "),a("RouterLink",{attrs:{to:"/en_US/config/routing.html"}},[t._v("Routing")]),t._v(", it can achieve the effect of prohibiting access to certain websites.")],1),t._v(" "),a("h2",{attrs:{id:"outboundconfigurationobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[t._v("#")]),t._v(" OutboundConfigurationObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"response"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("response")]),t._v(": "),a("a",{attrs:{href:"#responseobject"}},[t._v("ResponseObject")])])]),t._v(" "),a("p",[t._v("Configure the response data of the black hole. Blackhole will send the specified response data after receiving the data to be forwarded, and then close the connection. The data to be forwarded will be discarded. If this item is not specified, Blackhole will close the connection directly.")]),t._v(" "),a("h3",{attrs:{id:"responseobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responseobject"}},[t._v("#")]),t._v(" ResponseObject")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("type")]),t._v(': "http" | "none"')])]),t._v(" "),a("p",[t._v("When "),a("code",[t._v("type")]),t._v(" is "),a("code",[t._v('"none"')]),t._v(" (default value), Blackhole will close the connection directly. When "),a("code",[t._v("type")]),t._v(" is "),a("code",[t._v('"http"')]),t._v(", Blackhole will send back a simple HTTP 403 packet and then close the connection.")])])}),[],!1,null,null,null);e.default=n.exports}}]);