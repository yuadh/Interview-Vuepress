(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{349:function(v,_,e){"use strict";e.r(_);var c=e(3),o=Object(c.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[v._v("#")]),v._v(" 简介")]),v._v(" "),_("p",[v._v("网页包含了大量的文字，浏览器必须知道这些文字的编码方法，才能把文字还原出来。")]),v._v(" "),_("p",[v._v("一般情况下，服务器向浏览器发送 HTML 网页文件时，会通过 HTTP 头信息，声明网页的编码方式。")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("Content-Type: text/html; charset=UTF-8\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("p",[v._v("上面代码中，HTTP 头信息的"),_("code",[v._v("Content-Type")]),v._v("字段先声明，服务器发送的数据类型是"),_("code",[v._v("text/html")]),v._v("（即 HTML 网页），然后声明网页的文字编码是"),_("code",[v._v("UTF-8")]),v._v("。")]),v._v(" "),_("p",[v._v("网页内部也会再用"),_("code",[v._v("<meta>")]),v._v("标签，再次声明网页的编码。")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('<meta charset="UTF-8">\n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br")])]),_("h2",{attrs:{id:"字符的数字表示法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符的数字表示法"}},[v._v("#")]),v._v(" 字符的数字表示法")]),v._v(" "),_("p",[v._v("网页可以使用不同语言的编码方式，但是最常用的编码是 UTF-8。UTF-8 编码是 Unicode 字符集的一种表达方式。这个字符集的设计目标是包含世界上的所有字符，目前已经收入了十多万个字符。")]),v._v(" "),_("p",[v._v("每个字符有一个 Unicode 号码，称为码点（code point）。如果知道码点，就能查到这是什么字符。举例来说，英文字母"),_("code",[v._v("a")]),v._v("的码点是十进制的"),_("code",[v._v("97")]),v._v("（十六进制的"),_("code",[v._v("61")]),v._v("），汉字“中”的码点是十进制的"),_("code",[v._v("20013")]),v._v("（十六进制的"),_("code",[v._v("4e2d")]),v._v("）。")]),v._v(" "),_("p",[v._v("由于下面的原因，不是每一个 Unicode 字符都能直接在 HTML 语言里面显示。")]),v._v(" "),_("p",[v._v("（1）不是每个 Unicode 字符都可以打印出来，有些没有可打印形式，比如换行符的码点是十进制的"),_("code",[v._v("10")]),v._v("（十六进制的"),_("code",[v._v("A")]),v._v("），就没有对应的字面形式。")]),v._v(" "),_("p",[v._v("（2）小于号（"),_("code",[v._v("<")]),v._v("）和大于号（"),_("code",[v._v(">")]),v._v("）用来定义 HTML 标签，其他需要用到这两个符号的场合，必须防止它们被解释成标签。")]),v._v(" "),_("p",[v._v("（3）由于 Unicode 字符太多，无法找到一种输入法，可以直接输入所有这些字符。换言之，没有一种键盘，有办法输入所有符号。")]),v._v(" "),_("p",[v._v("（4）网页不允许混合使用多种编码，如果使用 UTF-8 编码的同时，又想插入其他编码的字符，就会很困难。")]),v._v(" "),_("p",[v._v("HTML 为了解决上面这些问题，允许使用 Unicode 码点表示字符，浏览器会自动将码点转成对应的字符。")]),v._v(" "),_("p",[v._v("字符的码点表示法是"),_("code",[v._v("&#N;")]),v._v("（十进制，"),_("code",[v._v("N")]),v._v("代表码点）或者"),_("code",[v._v("&#xN;")]),v._v("（十六进制，"),_("code",[v._v("N")]),v._v("代表码点），比如，字符"),_("code",[v._v("a")]),v._v("可以写成"),_("code",[v._v("a")]),v._v("（十进制）或者"),_("code",[v._v("a")]),v._v("（十六进制），字符"),_("code",[v._v("中")]),v._v("可以写成"),_("code",[v._v("中")]),v._v("（十进制）或者"),_("code",[v._v("中")]),v._v("（十六进制），浏览器会自动转换它们。")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("<p>hello</p>\n\x3c!-- 等同于 --\x3e\n<p>&#104;&#101;&#108;&#108;&#111;</p>\n\x3c!-- 等同于 --\x3e\n<p>&#x68;&#x65;&#x6c;&#x6c;&#x6f;</p>\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br")])]),_("p",[v._v("上面代码中，字符可以直接表示，也可以使用十进制码点或十六进制码点表示。")]),v._v(" "),_("p",[v._v("注意，HTML 标签本身不能使用码点表示，否则浏览器会认为这是所要显示的文本内容，而不是标签。比如，"),_("code",[v._v("<p>")]),v._v("一旦写成"),_("code",[v._v("<p>")]),v._v("或者"),_("code",[v._v("<p>")]),v._v("，浏览器就不再认为这是标签了，而会当作文本内容将其显示为"),_("code",[v._v("<p>")]),v._v("。")]),v._v(" "),_("h2",{attrs:{id:"字符的实体表示法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符的实体表示法"}},[v._v("#")]),v._v(" 字符的实体表示法")]),v._v(" "),_("p",[v._v("数字表示法的不方便之处，在于必须知道每个字符的码点，很难记忆。为了能够快速输入，HTML 为一些特殊字符，规定了容易记忆的名字，允许通过名字来表示它们，这称为实体表示法（entity）。")]),v._v(" "),_("p",[v._v("实体的写法是"),_("code",[v._v("&name;")]),v._v("，其中的"),_("code",[v._v("name")]),v._v("是字符的名字。下面是其中一些特殊字符，及其对应的实体。")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("<")]),v._v("："),_("code",[v._v("<")])]),v._v(" "),_("li",[_("code",[v._v(">")]),v._v("："),_("code",[v._v(">")])]),v._v(" "),_("li",[_("code",[v._v('"')]),v._v("："),_("code",[v._v('"')])]),v._v(" "),_("li",[_("code",[v._v("'")]),v._v("："),_("code",[v._v("'")])]),v._v(" "),_("li",[_("code",[v._v("&")]),v._v("："),_("code",[v._v("&")])]),v._v(" "),_("li",[_("code",[v._v("©")]),v._v("："),_("code",[v._v("©")])]),v._v(" "),_("li",[_("code",[v._v("#")]),v._v("："),_("code",[v._v("#")])]),v._v(" "),_("li",[_("code",[v._v("§")]),v._v("："),_("code",[v._v("§")])]),v._v(" "),_("li",[_("code",[v._v("¥")]),v._v("："),_("code",[v._v("¥")])]),v._v(" "),_("li",[_("code",[v._v("$")]),v._v("："),_("code",[v._v("$")])]),v._v(" "),_("li",[_("code",[v._v("£")]),v._v("："),_("code",[v._v("£")])]),v._v(" "),_("li",[_("code",[v._v("¢")]),v._v("："),_("code",[v._v("¢")])]),v._v(" "),_("li",[_("code",[v._v("%")]),v._v("："),_("code",[v._v("%")])]),v._v(" "),_("li",[_("code",[v._v("*")]),v._v("："),_("code",[v._v("$ast;")])]),v._v(" "),_("li",[_("code",[v._v("@")]),v._v("："),_("code",[v._v("@")])]),v._v(" "),_("li",[_("code",[v._v("^")]),v._v("："),_("code",[v._v("^")])]),v._v(" "),_("li",[_("code",[v._v("±")]),v._v("："),_("code",[v._v("±")])]),v._v(" "),_("li",[v._v("空格："),_("code")])]),v._v(" "),_("p",[v._v("注意，上面最后一个特殊字符是空格，它也有对应的实体表示法。")]),v._v(" "),_("p",[v._v("字符的数字表示法和实体表示法，都可以表示正常情况无法输入的字符，逃脱了浏览器的限制，所以英语里面称为“escape”，中文翻译为“字符的转义”。")])])}),[],!1,null,null,null);_.default=o.exports}}]);