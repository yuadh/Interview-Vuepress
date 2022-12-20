(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{365:function(t,a,s){"use strict";s.r(a);var e=s(3),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"react路由基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react路由基础"}},[t._v("#")]),t._v(" React路由基础")]),t._v(" "),a("ul",[a("li",[t._v("能够说出React路由的作用")]),t._v(" "),a("li",[t._v("能够掌握-react-router-dom的基本使用")]),t._v(" "),a("li",[t._v("能够使用编程式导航跳转路由")]),t._v(" "),a("li",[t._v("能够知道React路由的匹配模式")])]),t._v(" "),a("h2",{attrs:{id:"react路由介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react路由介绍"}},[t._v("#")]),t._v(" React路由介绍")]),t._v(" "),a("p",[t._v("现代的前端应用大多数是SPA（单页应用程序），也就是只有一个HTML页面的应用程序。因为它的用户体验更好、对服务器压力更小，所以更受欢迎。为了有效的使用单个页面来管理多页面的功能，前端路由应运而生。")]),t._v(" "),a("ul",[a("li",[t._v("前端路由功能：让用户从一个视图（页面）导航到另一个视图（页面）")]),t._v(" "),a("li",[t._v("前端路由是一套映射规则，在React中，是URL路径与组件的对应关系")]),t._v(" "),a("li",[t._v("使用React路由简单来说，就是配置路径和组件")])]),t._v(" "),a("h3",{attrs:{id:"使用步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[t._v("#")]),t._v(" 使用步骤")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("导入路由的三个核心组件： Router / Route / Link")]),t._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import {BrowserRouter as Router, Route, Link} from 'react-router-dom'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("使用Router 组件包裹整个应用")]),t._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<Router>\n\t<div className="App"></div>\n</Router>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("使用Link组件作为导航菜单（路由入口）")]),t._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<Link to="/frist">页面</Link>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("使用Route组件配置路由规则和要展示的组件（路由出口）")]),t._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<Router>\n\t<div className="App"></div>\n  <Router path="/frist" component ={Page}></Router>\n</Router>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"常用组件说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用组件说明"}},[t._v("#")]),t._v(" 常用组件说明")]),t._v(" "),a("ul",[a("li",[t._v("**Router组件：**包裹整个应用，一个React应用只需要使用一次\n"),a("ul",[a("li",[t._v("两种常用的Router： HashRouter和BrowserRouter")]),t._v(" "),a("li",[t._v("HashRouter： 使用URL的哈希值实现 （localhost:3000/#/first）")]),t._v(" "),a("li",[t._v("推荐 BrowserRouter：使用H5的history API实现（localhost3000/first）")])])]),t._v(" "),a("li",[t._v("**Link组件：**用于指定导航链接（a标签）\n"),a("ul",[a("li",[t._v("最终Link会编译成a标签，而to属性会被编译成 a标签的href属性")])])]),t._v(" "),a("li",[t._v("**Route组件：**指定路由展示组件相关信息\n"),a("ul",[a("li",[t._v("path属性：路由规则，这里需要跟Link组件里面to属性的值一致")]),t._v(" "),a("li",[t._v("component属性：展示的组件")]),t._v(" "),a("li",[t._v("Route写在哪，渲染出来的组件就在哪")])])])]),t._v(" "),a("h3",{attrs:{id:"路由的执行过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由的执行过程"}},[t._v("#")]),t._v(" 路由的执行过程")]),t._v(" "),a("ul",[a("li",[t._v("当我们点击Link组件的时候，修改了浏览器地址栏中的url")]),t._v(" "),a("li",[t._v("React路由监听地址栏url的变化")]),t._v(" "),a("li",[t._v("React路由内部遍历所有的Route组件，拿着Route里面path规则与pathname进行匹配")]),t._v(" "),a("li",[t._v("当路由规则（path）能够匹配地址栏中的pathname时，就展示该Route组件的内容")])]),t._v(" "),a("h3",{attrs:{id:"编程式导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程式导航"}},[t._v("#")]),t._v(" 编程式导航")]),t._v(" "),a("ul",[a("li",[t._v("**场景：**点击登陆按钮，登陆成功后，通过代码跳转到后台首页，如何实现？")]),t._v(" "),a("li",[t._v("**编程式导航：**通过JS代码来实现页面跳转")]),t._v(" "),a("li",[t._v("history是React路由提供的，用于获取浏览器历史记录的相关信息")]),t._v(" "),a("li",[t._v("**push(path)：**跳转到某个页面，参数path表示要跳转的路径")]),t._v(" "),a("li",[t._v("go(n)：前进或后退功能，参数n表示前进或后退页面数量")])]),t._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Login extends Component {\n  handleLogin = ()=>{\n    this.props.history.push('/home')\n  }\n  render(){...}\n}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"默认路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认路由"}},[t._v("#")]),t._v(" 默认路由")]),t._v(" "),a("ul",[a("li",[t._v("现在的路由都是通过点击导航菜单后展示的，如果进入页面的时候就主动触发路由呢")]),t._v(" "),a("li",[t._v("默认路由：表示进入页面时就会匹配的路由")]),t._v(" "),a("li",[t._v("默认路由：只需要把path设置为 "),a("code",[t._v("'/'")])])]),t._v(" "),a("h3",{attrs:{id:"匹配模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配模式"}},[t._v("#")]),t._v(" 匹配模式")]),t._v(" "),a("h4",{attrs:{id:"模糊匹配模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模糊匹配模式"}},[t._v("#")]),t._v(" 模糊匹配模式")]),t._v(" "),a("ul",[a("li",[t._v("当Link组件的to属性值为 '/login' 时候，为什么默认路由也被匹配成功？")]),t._v(" "),a("li",[t._v("默认情况下，React路由是模糊匹配模式")]),t._v(" "),a("li",[t._v("模糊匹配规则：只要pathname以path开头就会匹配成功")])]),t._v(" "),a("h4",{attrs:{id:"精准匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#精准匹配"}},[t._v("#")]),t._v(" 精准匹配")]),t._v(" "),a("ul",[a("li",[t._v("默认路由认可情况下都会展示，如果避免这种问题？")]),t._v(" "),a("li",[t._v("给Route组件添加exact属性，让其变为"),a("strong",[t._v("精准匹配模式")])]),t._v(" "),a("li",[t._v("精确匹配：只有当path和pathname完全匹配时才会展示改路由")])])])}),[],!1,null,null,null);a.default=r.exports}}]);