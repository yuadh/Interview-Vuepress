(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{363:function(s,a,n){"use strict";n.r(a);var e=n(3),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"react组件通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react组件通信"}},[s._v("#")]),s._v(" React组件通信")]),s._v(" "),a("ul",[a("li",[s._v("能够使用props接收数据")]),s._v(" "),a("li",[s._v("能够实现父子组件之间的通讯")]),s._v(" "),a("li",[s._v("能够实现兄弟组件之间的通讯")]),s._v(" "),a("li",[s._v("能够给组件添加props校验")])]),s._v(" "),a("h2",{attrs:{id:"组件通讯介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件通讯介绍"}},[s._v("#")]),s._v(" 组件通讯介绍")]),s._v(" "),a("p",[s._v("组件是独立且封闭的单元，默认情况下，只能使用组件自己的数据。在组件化过程中，我们将一个完整的功能拆分成多个组件，以更好的完成整个应用的功能。而在这个过程中，多个组件之间不可避免的要共享某些数据。为了实现这些功能，就需要打破组件的独立封闭性，让其与外界沟通，这个过程就是组件通讯")]),s._v(" "),a("h2",{attrs:{id:"组件的props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的props"}},[s._v("#")]),s._v(" 组件的props")]),s._v(" "),a("ul",[a("li",[s._v("组件时封闭的，要接受外部数据应该通过props来实现")]),s._v(" "),a("li",[s._v("props的作用：接收传递给组件的数据")]),s._v(" "),a("li",[s._v("传递数据：给组件标签添加属性")])]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<Hello name="jack" age={19} />\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接收数据：函数组件通过 参数 props接收数据，类组件通过 this.props接收数据")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("函数组件获取")]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function Hello(props){\n  return (<div>{props.name}</div>)\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("类组件获取")]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Hello extend React.Componet{\n  render(){\n    return(\n    \t<div>{this.props.name}</div>\n    )\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("可以给组件传递任意类型的数据")])]),s._v(" "),a("li",[a("p",[s._v("props是只读属性，不能对值进行修改")])]),s._v(" "),a("li",[a("p",[s._v("注意：使用类组件时，如果写了构造函数，应该将props传递给super(),否则，无法在构造函数中获取到props，其他的地方是可以拿到的")])])]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Hello extend React.Componet{\n  constructor(props){\n    super(props)\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"组件通讯的三种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件通讯的三种方式"}},[s._v("#")]),s._v(" 组件通讯的三种方式")]),s._v(" "),a("h2",{attrs:{id:"父组件传递数据给子组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#父组件传递数据给子组件"}},[s._v("#")]),s._v(" 父组件传递数据给子组件")]),s._v(" "),a("ul",[a("li",[s._v("父组件提供要传递的state数据")]),s._v(" "),a("li",[s._v("给子组件标签添加属性，值为state中的数据")]),s._v(" "),a("li",[s._v("子组件中通过props接收父组件中传递的数据")])]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Parent extends React.Componet{\n  state = {lastName:'yuan'}\n\trender(){\n    return (\n    \t<div>\n      \t<Child name={this.state.lastName}></Child>\n      </div>\n    )\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("Child")]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Child extends React.Componet{\n\trender(){\n    return (\n    \t<div>\n      \t{this.props.name}\n      </div>\n    )\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"子组件传递数据给父组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件传递数据给父组件"}},[s._v("#")]),s._v(" 子组件传递数据给父组件")]),s._v(" "),a("ul",[a("li",[s._v("利用回调函数，父组件提供回调，子组件调用，将要传递的数据作为回调函数的参数")]),s._v(" "),a("li",[s._v("父组件提供一个回调函数，用来接收数据")]),s._v(" "),a("li",[s._v("将该函数作为属性的值，传递给子组件")])]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Parent extends React.Componet{\n  state = {lastName:'yuan'}\n\tgetChildMsg = (msg)=>{\n    console.log(msg)\n  }\n\trender(){\n    return (\n    \t<div>\n      \t<Child getMsg = {this.getChildMsg}></Child>\n      </div>\n    )\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("子组件通过props调用回调函数")]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Child extends React.Componet{\n   state = {lastName:'yuan'}\n  handleClick = ()=>{\n    this.props.getMsg(this.state.lastName)\n  }\n\trender(){\n    return (\n    \t<button onClick={this.handleClick}>\n      \t传递数据给父组件\n      </button>\n    )\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"兄弟组件传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兄弟组件传递"}},[s._v("#")]),s._v(" 兄弟组件传递")]),s._v(" "),a("ul",[a("li",[s._v("将共享状态(数据)提升到最近的公共父组件中，由公共父组件管理这个状态")]),s._v(" "),a("li",[s._v("这个称为状态提升")]),s._v(" "),a("li",[s._v("公共父组件职责：1. 提供共享状态 2.提供操作共享状态的方法")]),s._v(" "),a("li",[s._v("要通讯的子组件只需要通过props接收状态或操作状态的方法")])]),s._v(" "),a("h4",{attrs:{id:"示例demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例demo"}},[s._v("#")]),s._v(" 示例demo")]),s._v(" "),a("ul",[a("li",[s._v("定义布局结构，一个Counter里面包含两个子组件，一个是计数器的提示，一个是按钮")])]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Counter extends React.Component {\n    render() {\n        return (<div>\n            <Child1 />\n            <Child2 />\n        </div>\n        )\n    }\n}\nclass Child1 extends React.Component {\n    render() {\n        return (\n            <h1>计数器：</h1>\n        )\n    }\n}\nclass Child2 extends React.Component {\n    render() {\n        return (\n            <button>+1</button>\n        )\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("ul",[a("li",[s._v("在父组件里定义共享状态，把这个状态传递给第一个子组件")])]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Counter extends React.Component {\n    // 提供共享的状态\n    state = {\n        count: 0\n    }\n    render() {\n        return (<div>\n            {/* 把状态提供给第一个子组件 */}\n            <Child1 count={this.state.count}/>\n            <Child2 />\n        </div>\n        )\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("ul",[a("li",[s._v("在第一个子组件里面就能通过props获取到")])]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Child1 extends React.Component {\n    render() {\n        return (\n            <h1>计数器：{this.props.count}</h1>\n        )\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("在父组件中提供共享方法，通过属性传递给第二个子组件，方便第二个子组件来进行调用")])]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    // 提供共享方法\n    onIncrement = (res) => {\n        // 只要第二个子组件调用了这个函数，就会执行里面代码\n        this.setState({\n            count: this.state.count + res\n        })\n    }\n    render() {\n        return (<div>\n            ...\n            {/* 把共享方法提供给第二个子组件 */}\n            <Child2 onIncrement={this.onIncrement} />\n        </div>\n        )\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("在第二个子组件里面通过props来获取到对应函数，然后进行调用")])]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("class Child2 extends React.Component {\n    handleClick = () => {\n        // 这里一旦调用，就会执行父组件里面 onIncrement函数\n        this.props.onIncrement(2)\n    }\n    render() {\n        return (\n            <button onClick={this.handleClick}>+</button>\n        )\n    }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[s._v("#")]),s._v(" Context")]),s._v(" "),a("p",[s._v("如果出现层级比较多的情况下（例如：爷爷传递数据给孙子），我们会使用Context来进行传递")]),s._v(" "),a("p",[s._v("作用： 跨组件传递数据")]),s._v(" "),a("h3",{attrs:{id:"使用步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[s._v("#")]),s._v(" 使用步骤")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("调用 "),a("code",[s._v("React.createContext()")]),s._v(" 创建 Provider(提供数据) 和 Consumer(消费数据) 两个组件")]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const {Provider,Consumer}  = React.createContext()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("使用Provider 组件作为父节点")]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<Provider>\n\t<div className = "App">\n  \t<Child1/>\n  </div>\n</Provider>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("设置value属性，表示要传递的数据")]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<Provider value= "yuan">\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("哪一层想要接收数据，就用Consumer进行包裹，在里面回调函数中的参数就是传递过来的值")]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<Consumer>\n\t{\n    (data)=>{\n    \t<span>\n      \tdata参数接收为:-- {data}\n      </span>\n  \t}\n  }\n</Consumer>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("ul",[a("li",[s._v("如果两个组件相隔层级比较多，可以使用Context实现组件通讯")]),s._v(" "),a("li",[s._v("Context提供了两个组件：Provider 和 Consumer")]),s._v(" "),a("li",[s._v("Provider组件： 用来提供数据")]),s._v(" "),a("li",[s._v("Consumer组件： 用来消费数据")])]),s._v(" "),a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[s._v("#")]),s._v(" props")]),s._v(" "),a("h3",{attrs:{id:"children属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#children属性"}},[s._v("#")]),s._v(" children属性")]),s._v(" "),a("ul",[a("li",[s._v("children属性： 表示组件标签的子节点，当组件标签有子节点时，props就会有该属性")]),s._v(" "),a("li",[s._v("children属性与普通的props一样，值可以使任意值（文本、react元素、组件、甚至是函数）")])]),s._v(" "),a("h3",{attrs:{id:"props校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props校验"}},[s._v("#")]),s._v(" props校验")]),s._v(" "),a("ul",[a("li",[s._v("对于组件来说，props是外来的，无法保证组件使用者传入什么格式的数据，简单来说就是组件调用者可能不知道组件封装着需要什么样的数据")]),s._v(" "),a("li",[s._v("如果传入的数据不对，可能会导致报错")]),s._v(" "),a("li",[s._v("关键问题：组件的使用者不知道需要传递什么样的数据")]),s._v(" "),a("li",[s._v("props校验：允许在创建组件的时候，指定props的类型、格式等")]),s._v(" "),a("li",[s._v("作用：捕获使用组件时因为props导致的错误，给出明确的错误提示，增加组件的健壮性")])]),s._v(" "),a("h4",{attrs:{id:"使用步骤-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤-2"}},[s._v("#")]),s._v(" 使用步骤")]),s._v(" "),a("ul",[a("li",[s._v("安装包  "),a("code",[s._v("prop-types (yarn add prop-types | npm i props-types)")])]),s._v(" "),a("li",[s._v("导入prop-types 包")]),s._v(" "),a("li",[s._v("使用"),a("code",[s._v("组件名.propTypes={}")]),s._v(" 来给组件的props添加校验规则")]),s._v(" "),a("li",[s._v("校验规则通过PropTypes对象来指定")])]),s._v(" "),a("div",{staticClass:"language-react line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("App.propTypes = {\n  colors:PropTypes.array\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"常见的约束规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的约束规则"}},[s._v("#")]),s._v(" 常见的约束规则")]),s._v(" "),a("ul",[a("li",[s._v("创建的类型： "),a("code",[s._v("array、bool、func、number、object、string")])]),s._v(" "),a("li",[s._v("React元素类型："),a("code",[s._v("element")])]),s._v(" "),a("li",[s._v("必填项："),a("code",[s._v("isRequired")])]),s._v(" "),a("li",[s._v("特定结构的对象： "),a("code",[s._v("shape({})")])]),s._v(" "),a("li",[s._v("更多的[约束规则](")])])])}),[],!1,null,null,null);a.default=t.exports}}]);