var datas = {
    "data":
    [
        {
            "id": 1,
            "title": "4%2 的值为",
            "options": "[0,1,2,4]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 2,
            "title": "\"0\" == true 的值为",
            "options": "[true,false]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 3,
            "title": "以下返回 false 的选项是",
            "options": "[\"var tmp = 1;typeof tmp =='number';\",\"var tmp =1.2;typeof tmp =='float';\",\"var tmp = undefined;typeof tmp == 'undefined';\",\"var tmp = {};typeof tmp =='object';\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 4,
            "title": "以下关于History对象，描述错误的是",
            "options": "[\"go表示刷新当前页面。\",\"back回到浏览器载入历史URL地址列表的当前URL的前一个URL。\",\"forward转到浏览器载入历史URL地址列表的当前URL的下一个URL。\",\"length保存历史URL地址列表的长度信息。\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 8
        },
        {
            "id": 5,
            "title": "以下事件中，文本域不支持的事件是",
            "options": "[\"onBlur\",\"onLostFocused\",\"onChange\",\"onFocus\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 7
        },
        {
            "id": 6,
            "title": "不设置cookie设置过期时间，cookie的默认时间长度为",
            "options": "[\"立刻过期\",\"永不过期\",\"cookie 无法设置\",\"在浏览器会话结束时过期\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": null
        },
        {
            "id": 7,
            "title": "下面选项中的对象，与浏览器相关的是",
            "options": "[\"window\",\"history\",\"navigator\",\"location\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 8
        },
        {
            "id": 8,
            "title": "+new Array(042) 的值为",
            "options": "[43,\"NaN\",42,\"Error\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 3
        },
        {
            "id": 9,
            "title": "关于跨域，说法正确的是",
            "options": "[\"利用 flash 的 http 请求来处理\",\"通过 iframe 设置 document.domain 实现\",\"相同的根域可以相互请求并获得响应\",\"通过jsonp方式可以发出post请求\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 9
        },
        {
            "id": 10,
            "title": "下列 typeof 运算符的可能结果是",
            "options": "[\"NaN\",\"object\",\"null\",\"array\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 11,
            "title": "数组的方法中，哪些方法不能改变自身数组？",
            "options": "[\"pop\",\"splice\",\"sort\",\"concat\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 3
        },
        {
            "id": 12,
            "title": "关于 this 的工作原理，描述错误的是？",
            "options": "[\"在全局范围内，this指向全局对象\",\"对象函数调用时，this指向当前对象\",\"全局函数调用时，this指向全局函数\",\"使用new实例化对象时，this指向新创建的对象\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 13,
            "title": "下面不属于 js 基本数据类型的是",
            "options": "[\"undefined\",\"string\",\"null\",\"Object\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 14,
            "title": "下面结果为真的是",
            "options": "[\"null instanceof Object\",\"null === undefined\",\"null == undefined\",\"NaN == NaN\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 15,
            "title": "关于常见事件的触发情况，描述错误的是？",
            "options": "[\"onmousedown：某个鼠标按键被按下\",\"onkeypress：某个键盘的键被按下或按住\",\"onblur：元素获得焦点\",\"onchange：用户改变域的内容\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 7
        },
        {
            "id": 16,
            "title": "在JavaScript中，以下不是原始值的是",
            "options": "[3,\"10\",\"null\",\"[1]\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 17,
            "title": "Ajax 异步执行调用基于下面哪一个机制才能实现",
            "options": "[\"Event和callback\",\"多线程操作\",\"多CPU核\",\"Deferral和promise\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 9
        },
        {
            "id": 18,
            "title": "Number(null); 的值为：",
            "options": "[\"null\",0,\"undefined\",1]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 19,
            "title": "下面哪一个不是 JavaScript 的保留字",
            "options": "[\"goto\",\"abstract\",\"super\",\"array\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 20,
            "title": "document.getElementsByClassName 的返回值的类型为",
            "options": "[\"Array\",\"Object\",\"String\",\"Function\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 7
        },
        {
            "id": 21,
            "title": "void(); 表达式的返回值是",
            "options": "[\"undefined\",\"TypeError\",\"null\",\"SyntaxError\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 22,
            "title": "表达式 \"1\" + 2 + 3 的值为",
            "options": "[15,123,6,9]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 23,
            "title": "以下哪一项不属于浏览器Response Headers字段",
            "options": "[\"Referer\",\"Connection\",\"Content-Type D\",\"Server\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 9
        },
        {
            "id": 24,
            "title": "以下哪一个不是JavaScript的数据",
            "options": "[\"String\",\"Boolean\",\"Undefined\",\"Integer\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 25,
            "title": "当按下键盘上的任意一个键时都会触发事件是",
            "options": "[\"onFocus\",\"onBlur\",\"onSubmit\",\"onKeyDown\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 7
        },
        {
            "id": 26,
            "title": "哪个方法可以显示输入对话框",
            "options": "[\"confirm()\",\"alert()\",\"prompt()\",\"open()\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 27,
            "title": "在前提：var arr =[1,3,2]下，下面哪个操作会返回一个数组，并且不是 arr 本身。",
            "options": "[\"arr.push(3)\",\"arr.reverse()\",\"[].concat.call(arr,[])\",\"[].sort.call(arr)\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 3
        },
        {
            "id": 28,
            "title": "以下 Math 对象中哪个方法可以返回大于等于参数的整数？",
            "options": "[\"round()\",\"pow()\",\"floor()\",\"ceil()\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 29,
            "title": "想在网页显示后，动态地改变网页的标题的方法",
            "options": "[\"是不可能的\",\"document.write('新的标题内容')\",\"通过document.title('新的标题内容')\",\"通过document.changeTitle('新的标题内容')\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 7
        },
        {
            "id": 30,
            "title": "下面 4 个变量声明语句中，正确的是",
            "options": "[\"var default\",\"var 2_cat\",\"var two cats\",\"var 2cats\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 31,
            "title": "以对象格式返回当前日期的方法是",
            "options": "[\"Now()\",\"Date()\",\"new Date()\",\"new Now()\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 32,
            "title": "typeof[] 的值为",
            "options": "[\"Array\",\"array\",\"object\",\"undefined\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 33,
            "title": "下列不属于javascript内置对象的是",
            "options": "[\"Math\",\"Date\",\"RegExp\",\"Window\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 34,
            "title": "var Arr =[1,4,5,2,9]; 下面求 Arr 中最大值正确的是",
            "options": "[\"Math.max(Arr)\",\"Array.max(Arr)\",\"Math.max.call(null,Arr)\",\"Math.max.apply(null,Arr)\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 35,
            "title": "不属于基本类型的是",
            "options": "[\"date\",\"number\",\"null\",\"undefined\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 36,
            "title": "w3c 制定的标准事件模型，以下正确的顺序以及描述是",
            "options": "[\"事件捕获>事件冒泡\",\"事件捕获->事件处理->事件冒泡\",\"事件冒泡->事件处理\",\"事件冒泡->事件处理->事件捕获\",\"事件处理->事件捕获->事件冒泡\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 7
        },
        {
            "id": 37,
            "title": "以下描述错误的是",
            "options": "[\"cookie以及loaclStorage都会伴随着http请求发送到服务器\",\"get提交的url会有长度的限制，而post提交的数据则可以比较大\",\"在javascript中可以操作cookie\",\"javascript在浏览器的执行是单线程的\",\"html5中的新增存储方式包括localStorage/sessionStorage\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": null
        },
        {
            "id": 38,
            "title": "用于阻止默认事件的默认操作的方法是",
            "options": "[\"stopDeafault()\",\"stopPropagation()\",\"preventPropagation()\",\"preventDefault()\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 7
        },
        {
            "id": 39,
            "title": "以下选项中不属于原生操作数组的方法的是",
            "options": "[\"shift\",\"resort\",\"sort\",\"unshift\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 3
        },
        {
            "id": 40,
            "title": "下列不是JavaScript的全局函数的为",
            "options": "[\"encodeURI\",\"parseFloat\",\"setTimeout\",\"eval\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 41,
            "title": "alert(1&&2) 的值为",
            "options": "[1,2,false,true]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 42,
            "title": "下面哪个不属于Promise的状态",
            "options": "[\"Pending\",\"Rejected\",\"Resolved\",\"Pause\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 43,
            "title": "下列事件哪个不是由鼠标触发的事件",
            "options": "[\"click\",\"contextmenu\",\"mouseout\",\"keydown\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 7
        },
        {
            "id": 44,
            "title": "如何把 7.25 四舍五入为最接近的整数",
            "options": "[\"Math.abs(7.25)\",\"Math.floor(7.25)\",\"Math.ceil(7.25)\",\"Math.round(7.25)\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 45,
            "title": "在准备XMLHttpRequest对象时，在send()前需要调用哪个方法？",
            "options": "[\"prepare()\",\"open()\",\"init()\",\"build()\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 9
        },
        {
            "id": 46,
            "title": "33%6 的值为",
            "options": "[3,5.5,0,2]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 47,
            "title": "下面有关跨域的描述，说法错误的是？",
            "options": "[\"域名、端口相同，协议不同，属于相同的域\",\"js可以使用jsonp进行跨域\",\"通过修改document.domain来跨子域\",\"使用window.name来进行跨域\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 9
        },
        {
            "id": 48,
            "title": "如何与flash进行交互",
            "options": "[\"ExtensionContex\",\"ExternalInterface\",\"IInterpolator\",\"FlexContentHolder\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 7
        },
        {
            "id": 49,
            "title": "以下哪一条语句会产生运行错误？",
            "options": "[\"var tmp= ( );\",\"var tmp=[ ];\",\"var tmp={ };\",\"var tmp=/ /;\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 50,
            "title": "JavaScript中的操作符不包含",
            "options": "[\"$\",\"&&\",\"?:\",\"%\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 51,
            "title": "JavaScript中的赋值操作符不包含",
            "options": "[\"++\",\"+=\",\"-=\",\"=\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 52,
            "title": "JavaScript中的关系运算符不包含",
            "options": "[\"==\",\"<=\",\">=\",\"<\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 53,
            "title": "代码 isNaN(\"3.14\") 表示",
            "options": "[\"是否是PI值\",\"是否为空\",\"是否是一个对象\",\"是否是一个数字\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 54,
            "title": "对代码 setTimeout(\"show()\",100) 理解正确的是",
            "options": "[\"有语法错误要去掉双引号\",\"表示100毫秒后调用一次show方法\",\"100表示毫秒，在setTimeout后加一个参数,100也可以表示为秒\",\"setTimeout相当于C#中的Timer\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 55,
            "title": "var count = Math.ceil(Math.random() * 30) + 90，count的值为",
            "options": "[\"90 <= count <= 120\",\"90 < count <=120\",\"90 <= count <120\",\"90 < count < 120\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 56,
            "title": "new Array(12) 是表示",
            "options": "[\"定义字符长度为12\",\"定义字节长度为12\",\"定义有12元素的数组\",\"以上三者都不是\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 3
        },
        {
            "id": 57,
            "title": "String对象的方法不包括",
            "options": "[\"charAt\",\"substring\",\"length\",\"toUpperCase\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 58,
            "title": "XML和JSON的区别以下说法不正确的是",
            "options": "[\"在数据体积方面：JSON相对于XML来讲，数据的体积小\",\"数据交互方面：JSON与JavaScript的交互更加方便\",\"数据描述方面：JSON对数据的描述性比XML较好\",\"传输速度方面：JSON的速度要远远快于XML\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 2,
            "knowledge_id": 9
        },
        {
            "id": 59,
            "title": "创建对象实例的正确语法是什么？",
            "options": "[\"new { x: 1, y: 2}\",\"{ x: 1, y: 2}\",\"{ x = 1, y = 2}\",\"new { x = 1, y = 2}\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 60,
            "title": "下列哪一项是定义变量的无效方法？",
            "options": "[\"var x = 0; y = 1; z = 2;\",\"var x = 0, y = 1, z = 2;\",\"var x = 0;var y = 1;\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 61,
            "title": "哪一个不是错误的类型？",
            "options": "[\"InternalError\",\"EvalError\",\"ControlFlowError\",\"RangeError\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 6
        },
        {
            "id": 62,
            "title": "var data = [1, 2, 3, 4, 5, 6]; data.shift(); data 输出的值为：",
            "options": "[\"[1, 2, 3, 4, 5]\",\"[2, 3, 4, 5, 6]\",\"[6, 1, 2, 3, 4, 5]\",\"[undefined, 1, 2, 3, 4, 5]\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 3
        },
        {
            "id": 63,
            "title": "以下可以迭代下列对象 var my_data = {a: 'Ape', b: 'Banana', c: 'Citronella'}; 的属性的方法是",
            "options": "[\"对象不可遍历\",\"for (var i = 0; i < my_data.length; i++) {}\",\"for (var key in my_data) {}\",\"foreach (my_data as key => value) {}\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 64,
            "title": "下面哪一个方法将调用函数？",
            "options": "[\"function.apply(...)\",\"function.invoke(...)\",\"function.exec(...)\",\"function.Apply(...)\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 65,
            "title": "下面哪一个不是保留字？",
            "options": "[\"and\",\"while\",\"debugger\",\"instanceof\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 66,
            "title": "对一个对象调用 tostring() 默认的输出是什么？",
            "options": "[\"object\",\"[object Object]\",\"The name of the object\",\"The JSON representation of the object\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 67,
            "title": "undefined + 2 返回值为",
            "options": "[\"undefined\",\"NaN\",2,\"Type Error\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 68,
            "title": "function foo () { var x = 0; } foo.toString() 的值为",
            "options": "[\"function foo() { var x = 0; }\",\"foo\",\"function foo\",\"Runtime error occurs\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 69,
            "title": "定义函数foo时只有一个参数 function foo (x) { } 实际调用 foo(\"first\", \"second\"); 如何获得第二个参数的值 second",
            "options": "[\"运行时错误被抛出\",\"不能访问第二个参数\",\"x[1]\",\"arguments[1]\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 70,
            "title": "以下哪个是正则表达式对象的方法？",
            "options": "[\"run\",\"apply\",\"test\",\"eval\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 71,
            "title": "var x = ['a', 'b', 'c']; 以下哪行代码将删除数组的第一个元素？",
            "options": "[\"x.pop()\",\"x.unshift(0)\",\"x.splice(0,1)\",\"x.splice(0)\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 3
        },
        {
            "id": 72,
            "title": "如何在JavaScript中完成函数重载行为？",
            "options": "[\"用不同的参数多次定义一个函数\",\"检查参数对象以确定传入的参数是什么\",\"可以将数组或对象作为单个参数接受。\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 73,
            "title": "Date.now() 返回什么",
            "options": "[\"当前日期和时间\",\"当前日期\",\"当前时间\",\"距离1/1/1970的时间戳\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 74,
            "title": "以下哪个是一个标准的正则表达式文本格式？",
            "options": "[\"var re = RegExp/pattern/flags\",\"var re = RegExp(pattern, flags)\",\"var re = 'pattern' % 'flags'\",\"var re = /pattern/flags\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 75,
            "title": "哪个语句创建自定义异常？",
            "options": "[\"throw\",\"catch\",\"createException\",\"try\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 6
        },
        {
            "id": 76,
            "title": "var x = 5; var y = x++; y 的值为",
            "options": "[6,\"运行时错误\",5,7]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 77,
            "title": "如何获取 x = new Date() 的通用时间字符串",
            "options": "[\"x.getUTCDate()\",\"x.toUTCString()\",\"x.getUTC\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 78,
            "title": "以下哪个是继承原型 function superclass() {this.stuff=\"stuff\";} 的方法",
            "options": "[\"function subclass(superclass) {}\",\"function subclass() {subclass.prototype = new superclass();}\",\"function subclass() {} subclass.prototype = new superclass();\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 79,
            "title": "以下哪个是正则表达式对象的方法？",
            "options": "[\"makeMultiline\",\"ignoreCase\",\"exec\",\"eval\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 80,
            "title": "typeof [1,2] 的值为",
            "options": "[\"string\",\"array\",\"number\",\"object\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 81,
            "title": "var x = [\"foo\"]; x.quux = \"Hello\"; x[1] = \"bar\"; x.length 的值为",
            "options": "[\"Error on last line: index out of bounds\",2,1,3]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 3
        },
        {
            "id": 82,
            "title": "如何从一个对象中移除一个属性？",
            "options": "[\"myObj.properties.remove('myProp')\",\"myObj.myProp.delete()\",\"delete myObj.myProp\",\"remove myObj.myProp\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 83,
            "title": "哪一个是应该抛出的异常扩展的类型？",
            "options": "[\"ExceptionBase\",\"Error\",\"BaseError\",\"Exception\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 6
        },
        {
            "id": 84,
            "title": "var x; x++; x 的值为",
            "options": "[\"undefined\",0,1,\"NaN\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 85,
            "title": "私有作用域可以定义在下列哪一个作用域内？",
            "options": "[\"while\",\"function\",\"window\",\"if\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 86,
            "title": "var x = { name: \"hello\" }; console.log(y); 控制台的输出值为",
            "options": "[\"控制台没有任何输出\",\"undefined\",\"Reference error\",\"空字符串\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 87,
            "title": "typeof new String(\"abc\") 输出值为",
            "options": "[\"undefined\",\"string\",\"null\",\"object\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 88,
            "title": "哪些是JavaScript关键字？",
            "options": "[\"module\",\"void\",\"method\",\"test\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 89,
            "title": "var x = \"123\" + y; var y = \"456\"; x 的值为",
            "options": "[\"Runtime error\",\"Syntax error\",\"123undefined\",\"123456\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 90,
            "title": "Math.random() 的返回值为",
            "options": "[\"0~100\",\"0~1\",\"随机一个数字\",\"0~1000\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        {
            "id": 91,
            "title": "如何将匿名函数分配给变量？",
            "options": "[\"var anon = new Function () { };\",\"var anon = func({});\",\"var anon = func() { };\",\"var anon = function() { };\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 92,
            "title": "var matrix = [[0,0,0,0], [0,1,2,3], [0,2,4,6], [0,3,6,9]]; matrix[1][2] 的值为",
            "options": "[4,\"[0,1,2,3]\",\"界外异常\",2]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 93,
            "title": "如果一个函数没有显式地使用返回操作符，函数调用时返回值是多少？",
            "options": "[\"null\",\"undefined\",\"false\",\"NaN\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 94,
            "title": "如何读取字符串中的第一个字符？",
            "options": "[\"str.charAt(1);\",\"str.charAt(0);\",\"str.substring(1);\",\"str.substring(0);\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 95,
            "title": "当抛出catch块中的异常时，会发生什么情况？",
            "options": "[\"异常被外部catch块捕获\",\"语法错误\",\"未捕获异常\",\"运行时错误\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 6
        },
        {
            "id": 96,
            "title": "JavaScript中的函数总是：",
            "options": "[\"运行时\",\"在全局作用域\",\"循环\",\"对象\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 97,
            "title": "isNaN() 的作用",
            "options": "[\"查看是否为空\",\"如果条件语句为false，则抛出错误\",\"将非数值值转换为数字\",\"检查变量是否不能被确定为有效数字\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 98,
            "title": "(function () { })();",
            "options": "[\"没什么效果\",\"严格模式\",\"强制代码以特定的顺序进行分析\",\"创建范围以保护代码免受全局范围的影响\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 99,
            "title": "中断语句 break 是做了些什么？",
            "options": "[\"模拟JavaScript崩溃\",\"取消当前事件\",\"终止当前函数\",\"终止当前迭代语句\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 100,
            "title": "var tmp = 2 + '3' + 4; tmp 的值为",
            "options": "[\"54\",27,\"'234'\",9]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 1
        },
        {
            "id": 101,
            "title": "var x = ['foo', 'bar']; x.length = 1; x 的值为",
            "options": "[\"['foo', 'bar', 1]\",\"[]\",\"['foo', 'bar']\",\"['foo']\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 3
        },
        {
            "id": 102,
            "title": "下面哪一个开始while循环？",
            "options": "[\"while i=1 to 10\",\"while i=(1 <> 10)\",\"while (i<=10;i++)\",\"while (i<=10)\"]",
            "correct": "[3]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 103,
            "title": "如果x是空的或未定义的, x 赋值为 y",
            "options": "[\"x = x || y\",\"x |= y\",\"x ^= y\",\"x /= y\"]",
            "correct": "[0]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 104,
            "title": "当数组索引越界时返回什么？",
            "options": "[\"浏览器出错\",\"undefined\",0,\"数组中最后一个值\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 3
        },
        {
            "id": 105,
            "title": "开启严格模式",
            "options": "[\"strict\",\"do strict\",\"use strict\",\"use-strict\"]",
            "correct": "[2]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 2
        },
        {
            "id": 106,
            "title": "执行 function add() { var a = 0 } var b = a;",
            "options": "[0,\"RefereceError\",\"SyntacticalError\",\"SyntaxError\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 4
        },
        {
            "id": 107,
            "title": "下列哪一项是没有属性的对象文字的语法？",
            "options": "[\"[]\",\"{}\",\"null\",\"()\"]",
            "correct": "[1]",
            "level": 0,
            "skill_id": 1,
            "knowledge_id": 5
        },
        // {
        //     "id": 108,
        //     "title": "如何将新对象添加到数组中？",
        //     "options": "[\"myArray.add(newMember);\",\"myArray.push(newMember);\",\"myArray.push(newMember);\",\"myArray.insert(newMember);\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 109,
        //     "title": "如何删除数组的最后一项目？",
        //     "options": "[\"myArray.remove(myArray.end);\",\"myArray.pop();\",\"newArray = myArray.splice(0, myArray.length - 2);\",\"myArray.removeAt(myArray.length - 1);\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 110,
        //     "title": "哪一个不是逻辑运算符？",
        //     "options": "[\"||\",\"!\",\"&\",\"&&\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 2
        // },
        // {
        //     "id": 111,
        //     "title": "var x = Math.ceil(10.126); x 的值为",
        //     "options": "[11,10,10.13,\"错误，因为它被错误地调用\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 5
        // },
        // {
        //     "id": 112,
        //     "title": "哪一个字符串原型方法能够从字符串中删除一个字符？",
        //     "options": "[\"destroy\",\"replace\",\"delete\",\"remove\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 113,
        //     "title": "javascript中的全局函数名字冲突如何处理？",
        //     "options": "[\"运行时错误\",\"语法错误\",\"名字属于第一个定义的函数\",\"名字属于最后一个定义的函数\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 114,
        //     "title": "RegExp 对象包含以下哪个属性？",
        //     "options": "[\"isLowerCase\",\"setCase\",\"ignoreCase\",\"isUpperCase\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 5
        // },
        // {
        //     "id": 115,
        //     "title": "哪些不是内置的JavaScript类型？",
        //     "options": "[\"RegExp\",\"Array\",\"Date\",\"Time\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 116,
        //     "title": "以下不是构造数组的方法的是？",
        //     "options": "[\"var x = [];\",\"var x = [1,2,3];\",\"var x = new Array(1,2,3);\",\"var x = array();\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 117,
        //     "title": "下列字符串原型方法中的哪一个能使用正则表达式？",
        //     "options": "[\"concat\",\"charCodeAt\",\"search\",\"indexOf\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 118,
        //     "title": "\"abc\" == new String(\"abc\")",
        //     "options": "[true,\"抛出错误\",\"abc\",false]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 5
        // },
        // {
        //     "id": 119,
        //     "title": "关键词 this 指的是什么？",
        //     "options": "[\"承载当前函数的父对象\",\"当前执行上下文（可能是任何值）\",\"当前正在执行的函数\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 120,
        //     "title": "如何构造一个 RegExp 对象 ",
        //     "options": "[\"var re = new RegExp('ab+c', 'i');\",\"var re = RegExp('ab+c', 'i');\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 5
        // },
        // {
        //     "id": 121,
        //     "title": "function foo() { this.me = \"hello\" } var x = foo(); console.log(x.me)",
        //     "options": "[\"Runtime exception: property 'me' not found on undefined.\",\"hello\",\"Syntax error\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 122,
        //     "title": "以下哪个值为 3.14",
        //     "options": "[\"Math.round(Math.PI)\",\"Math.PI.toPrecision(2)\",\"Math.PI.toString('D2')\",\"Math.PI.toFixed(2)\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 123,
        //     "title": "new Boolean(new Boolean(false)).valueOf()",
        //     "options": "[false,\"undefined\",true]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 124,
        //     "title": "Math.max() 返回值为",
        //     "options": "[\"- Infinity\",\"null\",\"Infinity\",\"0\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 5
        // },
        // {
        //     "id": 125,
        //     "title": "var a = [\"well\", \"hello\", \"there\", \".\"]; 的原型链是",
        //     "options": "[\"a ---> Array.prototype ---> Object.prototype\",\"a ---> Array.prototype ---> Object.prototype ---> null\",\"a ---> Array.prototype\",\"a --->  Object.prototype ---> Array.prototype ---> null\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 5
        // },
        // {
        //     "id": 126,
        //     "title": "以下不属于内置的值类型的是？",
        //     "options": "[\"undefined\",\"boolean\",\"function\",\"symbol\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 127,
        //     "title": "在定义了 a 为 undefined 类型后（ var a = undefined ）以下能正确输出字符串 \"undefined\" 的是",
        //     "options": "[\"a.toString()\",\"a.String()\",\"toString(a)\",\"String(a)\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 128,
        //     "title": "typeof null 、null == undefined 的值分别为",
        //     "options": "[\"object、fale\",\"object、true\",\"null、false\",\"null、true\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 129,
        //     "title": "var s = \"hello,world\"; s.charAt(a.length-1) 输出的值为",
        //     "options": "[\"d\",\"hello,worl\",\"l\",\"ld\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 130,
        //     "title": "var s = \"hello,world\"; s.slice(1,-1)、s.substring(1,-1)、s.substr(1,-1) 输出的值为：",
        //     "options": "[\"ello,worl 、h、空\",\"ello,worl、h、ello,worl\",\"ello,worl、ello,worl、h\",\"h、h、h\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 131,
        //     "title": "var s = \"hello,world\"; s.indexOf(\"l\",3) 输出的值为：",
        //     "options": "[3,-1,8,9]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 132,
        //     "title": "var s = \"hello,world\"; s.toUpperCase()  输出的值为：",
        //     "options": "[\"报错\",\"HELLO,WORLD\",\"helloworld\",\"HELLOWORLD\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 133,
        //     "title": "var s = \"hello,world\"; s.split(',')[1]  输出的值为：",
        //     "options": "[\"hello\",\"world\",\"h\",\"w\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 134,
        //     "title": "isNaN(NaN)、isNaN('blue')、isNaN('10')、isNaN(true)",
        //     "options": "[\"true、true、false、false\",\"false、false、true、false\",\"false、false、false、false\",\"true、false、false、false\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 135,
        //     "title": "Number(\"hello11.11\")、parseInt(\"hello11.11\")、parseFloat(\"11.11hello\")",
        //     "options": "[\"false、11、11.11\",\"NaN、11、11.11\",\"1、11、11.11\",\"NaN、NaN、11.11\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 136,
        //     "title": "var num = 99; num.toFixed(3)、num.toPrecision(3)、typeof num.toFixed(3)、 typeof num.toPrecision(3) 输出的值为：",
        //     "options": "[\"99.000、99.0、string、string\",\"99.000、99.0、number、number\",\"99.0、99.000、number、number\",\"99.000、99.000、number、number\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 137,
        //     "title": "var num = 99; num.toExponential(2) 输出的值为：",
        //     "options": "[\"99.00\",\"99\",\"9.90e+1\",\"10e-1\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 138,
        //     "title": "Boolean(\"0\")、Boolean(0)、Boolean({})、Boolean(null)、Boolean(undefined)",
        //     "options": "[\"true、false、true、false、false\",\"false、false、true、false、false\",\"false、false、false、false、false\",\"true、false、false、false、false\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 1
        // },
        // {
        //     "id": 139,
        //     "title": "以下关于对象的描述，错误的是以下正确的是",
        //     "options": "[\"引用类型是一种数据结构，用于将数据和功能组织在一起，描述的是一类对象所具有的属性和方法\",\"对象是某个特定引用类型的实例，是引用类型的值\",\"JavaScript 中万物皆对象\",\"对象的属性名可以包含非字母非数字的(例如空格)，对象类型的值可以存储任意类型的属性\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 5
        // },
        // {
        //     "id": 140,
        //     "title": "以下关于对象的描述，错误的是",
        //     "options": "[\"所有通过对象字面量创建的对象都具有同一个原型对象\",\"所有通过关键字 new 和构造函数创建的对象，对象的原型就是构造函数 prototype 属性和值\",\"部分的内置构造函数都继承自 Object.prototype 的原型\",\"由 new Date() 创建的原型对象的属性同时继承于 Date.protopype 和 Object.prototype ，这一些列的原型对象，就是原型链\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 5
        // },
        // {
        //     "id": 141,
        //     "title": "以下创建对象的方法中，错误的是：",
        //     "options": "[\"对象直接量是由若干个名/值对组成的映射表，属性名是JS标识符也可以是空字符串，属性值可以是任意类型的JS表达式\",\"关键字 new 后跟随一个函数调用，这个函数称为构造函数，用以初始化一个新的创建对象\",\"Object.create() 是一个动态函数，提供给某个对象调用的方法\",\"Object.create() 可以通过任意原型创建新对象\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 5
        // },
        // {
        //     "id": 142,
        //     "title": "以下关于对象的描述，错误的是",
        //     "options": "[\"可以通过(.)或者([])运算符来获取、创建、赋值属性的值\",\"在对象中查询一个不存在的属性不会报错，返回 null\",\"delete 运算符可以删除对象中的自有属性，不能删除那些可配置属性为 false 的属性\",\"propertyIsEnumerable() 是 hasOwnProperty()\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 5
        // },
        // {
        //     "id": 143,
        //     "title": "关于对象中存取器属性的描述，以下错误的是",
        //     "options": "[\"存取器属性不具备可写性\",\"存取器属性不能被继承\",\"只有同时具有 getter 和 setter 方法的情况下，该属性才是一个读/写属性\",\"在 getter 和 setter 函数中使用的this，指向改对象本身\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 5
        // },
        // {
        //     "id": 144,
        //     "title": "var n = 1; n = n++ ; n+=1; n 的值为",
        //     "options": "[1,2,3,4]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 2
        // },
        // {
        //     "id": 145,
        //     "title": "11 < 3 、\"11\" < 3、'a' < 'abc'、'a' < 'ABC'",
        //     "options": "[\"false、false、false、true\",\"false、true、false、false\",\"false、false、true、false\",\"false、true、true、true\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 2
        // },
        // {
        //     "id": 146,
        //     "title": "在 if(condition) statement1 else statement2  语句中，其中的条件(condition)可以是任意表达式，而且对于这个表达式求值的结果不一定是布尔值。",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 2
        // },
        // {
        //     "id": 147,
        //     "title": "一下语句中，属于前测试循环语句的是",
        //     "options": "[\"if 语句\",\"do-while 语句\",\"while 语句\",\"for 语句\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 2
        // },
        // {
        //     "id": 148,
        //     "title": "var tmp = [1,2,3].push(4); tmp输出的值为 4",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 149,
        //     "title": "var tmp = [1,2,3].pop(); tmp输出的值为 [1,2]",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 150,
        //     "title": "var tmp = [1,2,3].shift(); tmp输出的值为 [2,3]",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 151,
        //     "title": "var tmp = [1,2,3].unshift(0); tmp输出的值为 4",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 152,
        //     "title": "var Arr = [1,2,3]; var Arr2 = Arr.concat(4,[5,6]); Arr2输出的值为：",
        //     "options": "[\"[1,2,3,4,5,6]\",\"[1,2,3,4,[5,6]]\",4,5]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 153,
        //     "title": "var Arr = [1,2,3,4].slice(2,3); Arr输出的值为：",
        //     "options": "[\"[3,4]\",\"[1,2,3]\",\"3\",\"[3]\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 154,
        //     "title": "var tmp = [1,2,3,4].every((item,index,arr) => item > 2 ); tmp输出值为：",
        //     "options": "[\"[3,4]\",\"undefined\",\"true\",\"false\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 155,
        //     "title": "var tmp = [1,2,3,4].some((item,index,arr) => item > 2 ); tmp输出值为：",
        //     "options": "[\"[3,4]\",\"undefined\",\"true\",\"false\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 156,
        //     "title": "var tmp = [1,2,3,4].filter((item,index,arr) => item > 2 ); tmp输出值为：",
        //     "options": "[\"[3,4]\",\"undefined\",\"true\",\"false\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 157,
        //     "title": "var tmp = [1,2,3,4].forEach((item,index,arr) => item > 2 ); tmp输出值为：",
        //     "options": "[\"[3,4]\",\"undefined\",\"true\",\"false\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 158,
        //     "title": "var tmp = [1,2,3,4].reduce((prev, cur, index, array) => prev + cur ); tmp输出值为：",
        //     "options": "[\"undefined\",\"false\",8,10]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 159,
        //     "title": "var tmp = [0,1,2].map((item,index,arr) => item + 1 );输出值为：",
        //     "options": "[\"[1,2,3]\",\"undefined\",\"[undefined,undefined,undefined]\",\"运行报错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 3
        // },
        // {
        //     "id": 160,
        //     "title": "以下关于函数描述错误的是",
        //     "options": "[\"不能把函数命名为 eval 或 arguments\",\"不能把参数命名为 eval 或 arguments\",\"不能出现两个命名参数同名的情况\",\"必须指定函数返回值\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 161,
        //     "title": "以下关于函数描述错误的是",
        //     "options": "[\"参数可以是任何类型\",\"函数内部可以通过arguments对象获取参数\",\"函数可以接受无数个参数\",\"严格模式下，可以重写arguments 的值\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 162,
        //     "title": "在ECMAScript 中定义了两个名字相同的函数，以下描述正确的是",
        //     "options": "[\"函数重载，只要两个定义的签名不同即可\",\"该名字属于先定义的函数\",\"该名字属于后定义的函数\",\"该名字函数无效\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 163,
        //     "title": "以下关于函数描述错误的是",
        //     "options": "[\"函数声明提升，是指执行代码之前会先读取所有方式定义的函数\",\"递归函数，是在一个函数通过名字调用自身的情况下构成\",\"闭包，是有权访问另一个函数作用域中变量的函数\",\"闭包只能去的包含函数中任何变量的最后一个值。\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 164,
        //     "title": "递归函数中，通过使用 arguments.callee 替代自身函数名。在严格模式下，访问这个属性会导致错误。",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 165,
        //     "title": "以下关于函数中this的描述，错误的是：",
        //     "options": "[\"内部函数在搜索this这个变量时，只会搜索到其活动对象为止\",\"在全局函数中，this等于window\",\"当函数作为某个对象的方法调用时，this等于这个对象\",\"匿名函数的执行环境具有全局性，其this对象一直指向window\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 166,
        //     "title": "以下关于函数的描述，正确的是：",
        //     "options": "[\"函数的 length 属性表示函数接收参数的个数\",\"函数apply和call方法的用途是改变调用函数的作用域\",\"函数apply和call方法作用相同，只是接受参数不同\",\"函数bind方法用途是创建一个函数实例，其 this 值会被绑定到参数的值\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 167,
        //     "title": "JavaScript 中所有节点都继承自 Node 类型，所有节点都共享着相同的属性和方法。",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 168,
        //     "title": "以下 Node 类型对应其节点类型，错误的是",
        //     "options": "[\"Node.ELEMENT_NODE(1)\",\"Node.ATTRIBUTE_NODE(2)\",\"Node.DOCUMENT_NODE(9)\",\"Node.NOTATION_NODE(13)\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 169,
        //     "title": "下列描述错误的是",
        //     "options": "[\"childNodes 属性，保存着一个 NodeList 对象\",\"parentNode 属性，指向该文档树中的父节点\",\"hasChildNodes 方法在节点包含两个以上的字节时返回 true\",\"通过 previousSibling 和 nextSibling 属性，可以反问同一个列表的其他节点\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 170,
        //     "title": "以下关于 Doucment 类型描述正确的是",
        //     "options": "[\"document 对象是 HTMLDocument 的一个实例，表示整个 HTML 页面\",\"nodeType 的值为 8\",\"document.url 可以获取地址栏显示的URL\",\"document.domain 可以设置为URL中不包含的域\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 171,
        //     "title": "以下关于 Doucment 类型描述错误的是",
        //     "options": "[\"document.url 可以获取地址栏显示的URL\",\"document.title 可以获取文档标题\",\"document.images 可以获取文档所有img元素\",\"document.links 可以获取文档所有带 href 属性的 a 标签\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 172,
        //     "title": "以下关于 Element 类型描述错误的是",
        //     "options": "[\"Element 类型提供了对元素标签名、子节点及属性的访问\",\"nodeType 的值为 1\",\"其 nodeName 属性返回小写的元素的标签名\",\"其 tagName 属性返回大写的元素的标签名\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 173,
        //     "title": "以下关于 Text 类型描述错误的是",
        //     "options": "[\"Text 类型表示包含可以字面解释的文本内容\",\"nodeType 的值为 3\",\"其 nodeName 属性返回值为 #text\",\"Text 类型支持子节点\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 174,
        //     "title": "以下关于节点类型描述错误的是",
        //     "options": "[\"Comment 类型用于注释，可以包含子节点\",\"CDATASection 类型用于XML的文档\",\"DocumentFragement 类型没有对应的标记\",\"元素特性在DOM中以 Attr 类型表示\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 175,
        //     "title": "以下获取第一个class属性值为klass的元素的选择器，错误的是",
        //     "options": "[\"document.querySelector('klass')\",\"document.getElementsByClassName('klass')[0]\",\"document.querySelectorAll('.klass')[0]\",\"document.querySelectorAll('.klass').item(0)\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 176,
        //     "title": "以下哪个时机 document.activeElement 的值为 null",
        //     "options": "[\"页面加载完成\",\"用户输入\",\"代码中调用 focus\",\"文档加载期间\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 177,
        //     "title": "以下自定义结构属性中，可以通过元素dataset属性访问自定义属性值的是",
        //     "options": "[\"data-name\",\"data_name\",\"dataName\",\"data^name\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 178,
        //     "title": "以下关于 innerHTML 描述错误的是",
        //     "options": "[\"innerHTML 属性返回调用元素的所有子节点\",\"outerHTML 属性会返回调用元素及所有子节点\",\"并不是所有元素都支持 innerHTML 属性\",\"元素使用innerHTML 插入script元素其中脚本会立即执行\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 179,
        //     "title": "以下关于 insertAdjacentHTML 方法中第一个参数作用的描述错误的是",
        //     "options": "[\"beforebegin, 作为前一个同辈元素插入\",\"afterbegin, 作为后一个同辈元素插入\",\"beforeend, 作为最后一个子元素插入\",\"afterend, 作为后一个同辈元素插入\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 180,
        //     "title": "以下描述正确的是",
        //     "options": "[\"DOM1级主要定义的是HTML和XML文档的底层结构\",\"DOM2 级增加了新方法和属性\",\"DOM2级和DOM3级的目的在于扩展DOM API，以满足操作XML的需求\",\"DOM Core 模块是在DOM2时候引入的\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 181,
        //     "title": "以下Node 类型属性在DOM2级时候包含的是",
        //     "options": "[\"localName\",\"isDefaultNamespace\",\"lookupNamespaceURI\",\"lookupPrefix\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 182,
        //     "title": "以下Node 类型属性在DOM3级引入的是",
        //     "options": "[\"localName\",\"namespaceURI\",\"prefix\",\"isDefaultNamespace\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 183,
        //     "title": "以下不属于DOM2 级中 Document类型的变化",
        //     "options": "[\"createElementNS\",\"createAttributeNS\",\"getElementsByTagNameNS\",\"getElementsByClassNameNS\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 184,
        //     "title": "以下不属于DOM2 级中 Element类型的变化",
        //     "options": "[\"getAttributeNS\",\"getAttributeNodeNS\",\"getElementsByTagNameNS\",\"getElementsByClassNameNS\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 185,
        //     "title": "offsetHeight 元素在垂直方向上占用的空间大小，不包含元素边框。",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 186,
        //     "title": "clientHeight 元素在垂直方向上占用的空间大小，不包含边距",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 187,
        //     "title": "以下UI事件中，在DOM3 级事件中被废弃的是",
        //     "options": "[\"DOMActivate\",\"abort\",\"load\",\"unload\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 188,
        //     "title": "以下UI事件中，描述错误的是",
        //     "options": "[\"window 的 load 事件在页面完全加载后触发\",\"在 unload 事件在页面将要被卸载时候触发\",\"不同浏览器触发 resize 事件有不同的机制\",\"scroll 事件在 window 对象中发生\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 189,
        //     "title": "以下关于焦点事件中，描述错误的是",
        //     "options": "[\"blur 在失去焦点时触发\",\"focus 在元素获得焦点时候触发\",\"focusin 在元素获得焦点时候触发\",\"所有焦点事件都不会冒泡\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 190,
        //     "title": "以下关于鼠标事件中，描述错误的是",
        //     "options": "[\"click 和 dblclick 分别在用户单次点击 和 双击鼠标主键触发\",\"mousedown 用户按下任意鼠标键时触发\",\"mouseup 在用户释放鼠标键时候触发\",\"由于mouseup触发顺序在click之后，因此取消mouseup事件，click事件依然能触发\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 191,
        //     "title": "以下关于鼠标事件中，描述错误的是",
        //     "options": "[\"mouseenter 鼠标从元素外部首次移动到元素范围内触发\",\"mousemove 鼠标在元素内部移动时重复触发\",\"mouseleave 鼠标从元素内部移动到外部触发\",\"除了mouseenter ，所有鼠标事件都会冒泡\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 192,
        //     "title": "所有浏览器都支持 mousewheel 事件",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 193,
        //     "title": "以下关于触摸设备事件，描述错误的是",
        //     "options": "[\"不支持dbclick事件\",\"不支持click事件\",\"屏幕阅读器无法触发mousedown事件\",\"轻击会先触发mousemove事件\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 194,
        //     "title": "以下关于键盘事件中，描述错误的是",
        //     "options": "[\"keydown 按下键盘上任意键触发\",\"keypress 按下键盘上字符键时触发\",\"keyup 当释放键盘上的键时触发\",\"keydown 按住不放，不会重复触发\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 195,
        //     "title": "textInput 事件，只有在可编辑区域才能够触发",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 196,
        //     "title": "以下触摸事件中，当手指触碰屏幕时触发的是",
        //     "options": "[\"touchstart\",\"touchmove\",\"touchend\",\"touchcancel\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 197,
        //     "title": "以下关于事件对象描述，错误的是",
        //     "options": "[\"所有DOM触发的事件上，都会产生事件对象 event\",\"所有浏览器都支持事件对象 event\",\"在事件对象处理内部，对象this等于currentTarget的值\",\"使用stopPropagation 方法能阻止事件的默认行为\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 198,
        //     "title": "以下事件对象方法中，哪个用于立即停止事件在DOM层次中的传播",
        //     "options": "[\"preventDefault\",\"stopPropagation\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 199,
        //     "title": "IE事件对象中returnValue属性设置为false时候，可以取消事件的默认行为",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 200,
        //     "title": "IE事件对象中srcElement属性为事件目标，于DOM中target属性相同",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 201,
        //     "title": "以下关于DOM2级事件处理流程描述，错误的是",
        //     "options": "[\"事件处理程序作用域是 window\",\"元素绑定的匿名函数将无法移除\",\"可以通过参数设置事件响应的阶段\",\"同一元素调用两次，按绑定时间相反的次序来触发\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 202,
        //     "title": "以下关于DOM2级事件处理流程描述，错误的是",
        //     "options": "[\"事件处理程序作用域是元素本身\",\"元素绑定的匿名函数将无法移除\",\"可以通过参数设置事件响应的阶段\",\"IE浏览器均不支持\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 203,
        //     "title": "DOM0级方法制定的事件处理程序的作用域是 window",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 204,
        //     "title": "HTML事件处理流程中，存在时差问题，在某一事件段内触发将引起错误",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 205,
        //     "title": "事件由具体元素接收，然后逐级向上传播的事件流程成为",
        //     "options": "[\"事件冒泡\",\"事件捕获\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 206,
        //     "title": "DOM2级事件 规定事件的三个阶段，第一个是：",
        //     "options": "[\"事件冒泡阶段\",\"处于目标阶段\",\"事件捕获阶段\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 7
        // },
        // {
        //     "id": 210,
        //     "title": "以下关于 window 对象描述错误的是",
        //     "options": "[\"window 对象表示浏览器的一个实例\",\"是JavaScript 访问浏览器窗口的一个借口\",\"是ECMAScropt 中规定的 Global 对象\",\"window 对象定义的属性为全局变量，不可通过 delete 操作符删除\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 8
        // },
        // {
        //     "id": 211,
        //     "title": "以下关于 window.open 方法中描述错误的是",
        //     "options": "[\"window.open 方法导航到一个特定的URL\",\"通过window.open 打开的窗口可以通过起close方法关闭\",\"window.open 方法打开窗口可能会被屏蔽\",\"window open 方法只接收一个参数，为需要加载页面的URL\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 8
        // },
        // {
        //     "id": 212,
        //     "title": "间歇性调用代码的方法是",
        //     "options": "[\"setInterval\",\"setTimeout\",\"clearTimeout\",\"clearInterval\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 4
        // },
        // {
        //     "id": 213,
        //     "title": "以下系统对话框中，用于提示用户输入文本的是",
        //     "options": "[\"alert\",\"confirm\",\"prompt\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 8
        // },
        // {
        //     "id": 214,
        //     "title": "以下关于location 对象属性描述错误的是",
        //     "options": "[\"hash 返回URL中的hash\",\"hostname 返回服务器名称和端口号\",\"href 当前加载完整的URL\",\"search 返回URL中查询字符串\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 8
        // },
        // {
        //     "id": 215,
        //     "title": "以下关于location 对象属性描述错误的是",
        //     "options": "[\"protocol 返回页面使用协议\",\"port 返回URL中指定的端口号\",\"pathname 返回URL中目录\",\"host 仅返回服务器名称\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 8
        // },
        // {
        //     "id": 216,
        //     "title": "以下在浏览器中打开新的URL地址的方法，错误的是",
        //     "options": "[\"location.assign('http://www.prodegree.com')\",\"window.location = 'http://www.prodegree.com'\",\"location.href = 'http://www.prodegree.com'\",\"window.location('http://www.prodegree.com')\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 8
        // },
        // {
        //     "id": 217,
        //     "title": "以下navigator对象中的哪个属性，可以获取浏览器用户代理",
        //     "options": "[\"appCodeName\",\"appName\",\"product\",\"userAgent\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 8
        // },
        // {
        //     "id": 218,
        //     "title": "以下不属于navigator对象中的属性是",
        //     "options": "[\"name\",\"platform\",\"cookieEnabled\",\"vendor\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 8
        // },
        // {
        //     "id": 219,
        //     "title": "如何检查浏览器中安装的的插件",
        //     "options": "[\"由于安全机制，不具备检测能力\",\"window.plugins\",\"navigator.plugins\",\"location.plugins\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 8
        // },
        // {
        //     "id": 220,
        //     "title": "以下浏览器对象中，用于获取浏览器窗口外部的显示信息的是",
        //     "options": "[\"navigator\",\"screen\",\"outerInfo\",\"history\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 8
        // },
        // {
        //     "id": 221,
        //     "title": "以下关于history对象描述中，错误的是",
        //     "options": "[\"history.length 返回当天浏览器历史列表中的 URL 数量\",\"history.back() 加载浏览历史列表中的前一个 URL\",\"history.forward() 加载浏览历史列表中的下一个 URL\",\"history.go() 加载浏览历史列表中的某个具体页面\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 8
        // },
        // {
        //     "id": 222,
        //     "title": "xhr.open 方法接收的3个参数中，最后一个参数的作用是",
        //     "options": "[\"要发送的请求类型\",\"请求URL地址\",\"是否异补发送\",\"发送回调函数\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 223,
        //     "title": "xhr.send 方法中接受一个参数作为请求主体发送的数据，如果没有则传入null，为必须值。",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 224,
        //     "title": "以下关于 xhr.readyState 属性值描述，错误的是",
        //     "options": "[\"1:未初始化，未调用open\",\"2:发送，已调用open 和 send\",\"3:接收，开始接收部分响应数据\",\"4:完成，已经接收到全部响应数据\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 225,
        //     "title": "通过以下哪个方法，在接收到响应之前停止XHR对象停止触发事件",
        //     "options": "[\"xhr.stop\",\"xhr.remove\",\"xhr.abort\",\"xhr.destory\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 226,
        //     "title": "需要 xhr.setRequestHeader 自定义请求头信息时，需要在哪个时机触发",
        //     "options": "[\"xhr.open 之前\",\"xhr.open 之后xhr.send 之前\",\"xhr.send 之后\",\"可以在xhr.send 之前任何时机\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 227,
        //     "title": "使用GET方法请求，查询字符串参数需要进行以下哪个类型编码",
        //     "options": "[\"encodeURIComponent\",\"decodeURIComponent\",\"encodeURI\",\"decodeURI\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 228,
        //     "title": "通常向服务器发送应该被保存的数据时的请求类型是",
        //     "options": "[\"GET\",\"POST\",\"PUT\",\"PATCH\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 229,
        //     "title": "以下不属于XMLHttpRequest 2级定义的规范内容时",
        //     "options": "[\"FormData类型\",\"超时设定\",\"overrideMimeType方法\",\"是否异步处理\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 230,
        //     "title": "以下XHR进度事件描述错误的是",
        //     "options": "[\"load：在接收第一个参数时候触发\",\"progress：在接收响应期间持续触发\",\"error：在请求发送错误时触发\",\"load 在接收到完整的响应数据时候触发\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 231,
        //     "title": "以下关于 xhr.progress 事件属性，错误的是",
        //     "options": "[\"lengthComputable\",\"position\",\"totalSize\",\"isComplete\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 232,
        //     "title": "以下关于不属于同源策略的约束是",
        //     "options": "[\"相同的域名\",\"相同的端口\",\"相同的协议\",\"相同的路径\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 233,
        //     "title": "CORS请求中，不属于简单请求的请求类型为",
        //     "options": "[\"GET\",\"POST\",\"PUT\",\"HEAD\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 234,
        //     "title": "CORS请求中，属于非简单请求的头部信息Content-Type内容类型的值为",
        //     "options": "[\"application/x-www-form-urlencoded\",\"multipart/form-data\",\"\",\"text/plain\",\"application/json\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 235,
        //     "title": "浏览器直接发出CORS简单请求，需要在头信息之中额外添加以下哪个属性",
        //     "options": "[\"Origin\",\"Host\",\"Accept\",\"Content-Language\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 236,
        //     "title": "CORS请求默认不发送Cookie和HTTP认证信息",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 237,
        //     "title": "非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 238,
        //     "title": "CORS支持所有类型的HTTP请求",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 239,
        //     "title": "以下跨域技术中，只能单向通讯的是",
        //     "options": "[\"图像 Ping\",\"JSONP\",\"SSE\",\"Web Scokets\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 240,
        //     "title": "Commet 技术运用中，HTTP流的关键所在于",
        //     "options": "[\"服务器语言都支持打印到输出缓存然后刷新\",\"浏览器定时向服务器推送新请求\",\"浏览器等待服务器返回信息后再推送新的请求\",\"HTTP链接没有限制\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 241,
        //     "title": "以下关于 SSE 描述错误的是",
        //     "options": "[\"SSE为Server-Sent Events 服务器发送事件\",\"是围绕只读Comet交互推出的API\",\"构造对象为 EventSource\",\"MINE 类型为 text/plain\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 242,
        //     "title": "以下关于Web Scokets 中，描述错误的是",
        //     "options": "[\"Web Scokets 目标是在一个独立的持久链接上提供双工、双向通讯\",\"Web Scoket使用自定义的协议而非HTTP协议\",\"构造对象为 WebSockets\",\"同源策略对Web Scokets不适用\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 9
        // },
        // {
        //     "id": 243,
        //     "title": "HTML5应用缓存中在根标签里将描述文件和页面关联起来的属性为",
        //     "options": "[\"manifest\",\"mainfest\",\"appcache\",\"cachefest\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 244,
        //     "title": "HTML5应用缓存 applicationCache 对象中 status 属性值的描述，以下错误的是",
        //     "options": "[\"0:无缓存\",\"1:闲置\",\"2:检查中\",\"3:更新完成\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 245,
        //     "title": "以下关于cookie的描述，错误的是",
        //     "options": "[\"cookie 的名称和值传送时都必须是URL编码\",\"浏览器每个域下的cookie总数有限制\",\"浏览器对cookie的尺寸有限制\",\"cookie的名称区分大小写\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 246,
        //     "title": "有一种类型为HTTP专有cookie，可以从浏览器或者服务器设置，但只能从服务端读取。",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 247,
        //     "title": "在设置cookie中，如果同时指定了Expires和Max-Age，哪一个将优先生效",
        //     "options": "[\"Expires\",\"Max-Age\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 248,
        //     "title": "document.cookie = 'test1=hello' 的含义错误的是",
        //     "options": "[\"覆盖网页的所有cookie设置新的cookie\",\"在当前页面cookie上添加一个新cookie\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 249,
        //     "title": "document.cookie 错误的是",
        //     "options": "[\"获取页面所有cookie\",\"通过参数获取页面某条cookie\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 250,
        //     "title": "通过document.cookie 获取的cookie的名字和值都是经过URL编码的，必须使用decodeURIComponent解码",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 251,
        //     "title": "设置cookie时，Domain属性，如果没有指定该属性默认值是",
        //     "options": "[\"当前域名\",\"当前URL的一级域名\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 252,
        //     "title": "可以通过子cookie的策略绕开浏览器的单个域名下的cookie数限制",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 253,
        //     "title": "浏览器端储存数据中，当当会话结束数据就会清除的类型是",
        //     "options": "[\"sessionStorage\",\"localStorage\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 254,
        //     "title": "以下Storage事件中，非所有浏览器都支持的是",
        //     "options": "[\"clear\",\"getItem\",\"setItem\",\"removeItem\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 255,
        //     "title": "当储存的数据发生变化时，会触发storage事件",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 256,
        //     "title": "IndexedDB 不属于关系型数据库",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 10
        // },
        // {
        //     "id": 257,
        //     "title": "WebGL的支持，除了浏览器还和操作系统相关",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 258,
        //     "title": "canvas 元素通过以下哪个方法创建2D上下文",
        //     "options": "[\"getCanvas\",\"createCanvas\",\"getContext\",\"createContext\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 259,
        //     "title": "以下哪种图形是可以直接在 canvas 2D 上下文中绘制的形状",
        //     "options": "[\"圆形\",\"梯形\",\"三角形\",\"矩形\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 260,
        //     "title": "canvas 2D 上下文中填充图形的方法是",
        //     "options": "[\"fillStyle\",\"strokeStyle\",\"fullStyle\",\"cssStyle\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 261,
        //     "title": "canvas 2D 中绘制路径必须先调用的方法是",
        //     "options": "[\"beginPath\",\"arc\",\"lineTo\",\"stoke\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 262,
        //     "title": "以下不属于 canvas 2D 中绘制文本方法的基础属性是",
        //     "options": "[\"font\",\"color\",\"textAlign\",\"textBaseline\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 263,
        //     "title": "canvas 2D 中的变化，将原点坐标移动的方法是",
        //     "options": "[\"rotate\",\"scale\",\"translate\",\"transform\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 264,
        //     "title": "canvas 2D 中 save 方法的作用是保存当前所有设置、内容进入一个桟结构中",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 265,
        //     "title": "canvas 2D 把图形设置在画布内通过以下哪个方法",
        //     "options": "[\"setImage\",\"drawImage\",\"fillImage\",\"imageTo\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 266,
        //     "title": "canvas 2D 中设置形象或者路径阴影的属性是",
        //     "options": "[\"shadowColor\",\"shadowOffsetX\",\"showOffsetY\",\"shadowBlur\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 267,
        //     "title": "通过 CanvasGradient 创建渐变对象后，通过以下哪个方法为其制定色标",
        //     "options": "[\"setColorStop\",setColor,\"addColorStop\",\"addColor\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 268,
        //     "title": "canvas 通过以下哪个方法导出图片",
        //     "options": "[\"getImageData\",\"putImageData\",\"getDataURL\",\"toDataURL\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 269,
        //     "title": "canvas WebGL 绘制的基本形状不包括",
        //     "options": "[\"点\",\"线\",\"角\",\"矩形\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 11
        // },
        // {
        //     "id": 270,
        //     "title": "requestAnimationFrame 方法接收的的回调函数中所接收的参数是什么类型",
        //     "options": "[\"毫秒\",\"时间戳\",\"UTC时间\",\"YYYY-MM-DD\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 12
        // },
        // {
        //     "id": 271,
        //     "title": "以下不属于 Page Visibility API 的主要组成部分是",
        //     "options": "[\"document.hidden\",\"document.visibilityState\",\"visibilitychange 事件\",\"document.visibility\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 12
        // },
        // {
        //     "id": 272,
        //     "title": "以下不属于navigator.geolocation 对象的方法是",
        //     "options": "[\"getCurrentPosition\",\"watchPosition\",\"setPosition\",\"clearWatch\"]",
        //     "correct": "[2]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 12
        // },
        // {
        //     "id": 273,
        //     "title": "Web worker中代码不能够访问DOM，也无法通过任何方式影响页面外观",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 12
        // },
        // {
        //     "id": 274,
        //     "title": "以下哪对象可以进行页面性能指标度量",
        //     "options": "[\"window.performance\",\"window.webtiming\",\"window.navigator\",\"window.location\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 12
        // },
        // {
        //     "id": 275,
        //     "title": "FileReader 类型是一种同步的文件读取机制",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[1]",
        //     "level": 0,
        //     "skill_id": 2,
        //     "knowledge_id": 12
        // },
        // {
        //     "id": 276,
        //     "title": "任何没有通过try-catch处理的错误都会触发window对象的error事件，例如图像加载失败",
        //     "options": "[\"对\",\"错\"]",
        //     "correct": "[0]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 6
        // },
        // {
        //     "id": 277,
        //     "title": "以下属于非致命错误的是",
        //     "options": "[\"应用程序无法继续运行\",\"影响到用户的主要操作\",\"导致其他连带错误\",\"重复相同操作可以清除错误\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 6
        // },
        // {
        //     "id": 278,
        //     "title": "以下方法会引发错误的是",
        //     "options": "[\"JSON.stringify(null)\",\"JSON.stringify(undefined)\",\"JSON.parse(null)\",\"JSON.parse(undefined)\"]",
        //     "correct": "[3]",
        //     "level": 0,
        //     "skill_id": 1,
        //     "knowledge_id": 6
        // }
    ]
}