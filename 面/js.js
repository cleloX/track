// // function changeObjProperty(o) {
// //   console.log(o);
// //   o.siteUrl = "http://www.baidu.com"
// //   console.log(o);
// //   o = new Object()
// //   console.log(o);
// //   o.siteUrl = "http://www.google.com"
// //   // return o
// //   console.log(o);
// // } 
// //   var webSite = new Object();
// //   console.log(changeObjProperty(webSite));
// //   console.log(webSite.siteUrl);

//  /**
//   * 事件循环
//   * await后面所有的都是微任务
//   * promise本身是一个立即执行函数，里面的then回调是微任务，也即是（resolve 和 reject是微任务）
//  */
// // async function async1() {
// //   console.log('async1 start'); // 2
// //   await async2();
// //   console.log('async1 end');
// // }

// // async function async2() {
// //   console.log('async2'); //3
// // }

// // console.log('script start'); //1
// // setTimeout(function()
// //   {
// //   console.log('setTimeout'); // 最后
// // }, 0);
// // async1();
// // new Promise(function(resolve) {
// //   console.log('promise1');
// //   resolve();
// // }).then(function() {
// //   console.log('promise2');
// // });
// // console.log('script end');

// //script start
// // async1 start
// // async2
// // script end

// // promise1
// // promise2
// // async1 end
// // setTimeout


// // var a = {
// //   foo: function(){ 
// //         console.log(this) 
// //     }
// // }
 
// // a.foo(); // 打印什么   a
 
// // var _foo = a.foo;
// // _foo(); // 打印什么   window，还有可能是undefined
// // var a = {
// //   foo:  () => { 
// //         console.log(this) 
// //     }
// // }
// //         a.foo()  //  (foo改写成箭头函数)，打印什么


// // let arr = [1].concat(1,[2,3])
// // console.log(arr);





// /* 关于作用域和变量提升 */
// // 
// // var a = 1
// // function a(){}
// // console.log(a)     //fn a
// // {
// //   console.log(a, window.a)   // 1   1
// //   a = 10
// //   console.log(a, window.a)  //  10  1
// //   function a(){}
// //   console.log(a, window.a)  //  fn-a  10
// // }
// // console.log(a, window.a)   // 10 10

// // var a = 0;
// // if(true){
// //   a = 10;
// //   console.log(a,window.a);
// //   function a(){};
// //   console.log(a,window.a);
// //   a = 20;
// //   console.log(a,window.a);
// // }
// // console.log(a);

// // 答案
// // 10 0
// // 10 10
// // 20 10
// // 10

// // 知识点

// // 解析
// // 1）变量提升
// //   变量的提升是以变量作用域来决定的，即全局作用域中声明的变量会提升至全局最顶层，函数内声明的变量只会提升至该函数作用域最顶层。
//   // console.log(a);
//   // var a = 10;
//   // // 等价于
//   // var a;
//   // console.log(a);
//   // a = 10;

// // 2）函数提升
// //   ①函数提升，类似变量提升，但是确有些许不同。
// //   ②函数表达式
//     // console.log(a);// undefined
//     // var a = function(){};
//     // 函数表达式不会声明提升，这里输出undefined,是var a变量声明的提升
//   // ③函数声明
//     // 函数声明覆盖变量声明
//     //因为其是一等公民,与其他值地位相同，所以 函数声明会覆盖变量声明
//     // 如果存在函数声明和变量声明（注意：仅仅是声明，还没有被赋值），而且变量名跟函数名是相同的，那么，它们都会被提示到外部作用域的开头，但是，函数的优先级更高，所以变量的值会被函数覆盖掉。

//     /*************未赋值的情况***************/
//     // 变量名与函数名相同
//     // var company;
//     // function company () {
//     // console.log ("yideng");
//     // }
//     // console.log(typeof company); // function,函数声明将变量声明覆盖了

//     /*************赋值的情况***************/
//     // 如果这个变量或者函数其中是赋值了的，那么另外一个将无法覆盖它：
//     // var company = "yideng"; // 变量声明并赋值
//     // function company () {
//     //   console.log ("yideng");
//     // }
//     // console.log(typeof company); // string


//     // 这个其实再次赋值了
//     // var company;
//     // function company(){};
//     // company = 'yideng'; // 被重新赋值
//     // console.log(typeof company); 

// // 3）块级作用域的函数声明
//   // 在块级作用域中的函数声明和变量是不同的
//   /*********块级作用域中变量声明***************/
//   console.log(a); //ReferenceError: a is not defined
//   if(true){
//     a = 10;
//     console.log(a);
//   }
//   console.log(a);
//   // 会报错，

//   /****************块级作用域函数声明******************/
//   console.log(a); // 这里不报错，是undefined
//   if(true){
//     console.log(a); // function a
//     function a(){};
//   }
//   // 上边的代码等价于
//   var a; // 函数a的声明
//   console.log(a); // undefined
//   if(true){
//     function a(){} // 函数a的定义
//     console.log(a); // function a
//   }
//   /*
//     这里其实就是函数function a(){}经过预解析之后:
//     将函数声明提到函数级作用域最前面，var a;// 函数a的声明
//     然后将函数定义提升到块级作用域最前面， function a(){} 函数a的定义
//   */
// /* 
//   如果改变了作用域内声明的函数的处理规则，显然会对老代码产生很大影响。为了减轻因此产生的不兼容问题，es6在附录B里面规定，浏览器的实现可以不遵守上面规定，有自己的行为方式
//     ①允许在块级作用域内声明函数
//     ②函数声明类似于var,即会提升到全局作用域或函数作用域的头部
//     ③同时，函数声明还会提升到所在的块级作用域的头部。
//   注意，上面三条规则只对ES6的浏览器实现有效，其它环境的实现不用遵守，还是将块级作用域的函数声明当做let处理
//   块级作用域函数，就像预先在全局作用域中使用`var`声明了一个变量，且默认值为`undefined`。 */
//   console.log(a,window.a); // undefined undefined
//   {
//     console.log(a,window.a); // function a(){} undefined
//     function a(){}
//     console.log(a,window.a); // function a(){} function a(){}
//   }
//   console.log(a,window.a);    // function a(){} function a(){}

// /*   总结：
//     ①块级作用域函数在编译阶段将函数声明提升到全局作用域，并且会在全局声明一个变量，值为undefined。同时，也会被提升到对应的块级作用域顶层。
//     ②块级作用域函数只有定义声明函数的那行代码执行过后，才会被映射到全局作用域。

// 4）块级作用域中有同名的变量和函数声明 */
//   console.log(window.a,a);//undefined undefined
//   {
//       console.log(window.a,a);//undefined function a(){}
//       function a() {};
//       a = 10;
//       console.log(window.a,a); //function a(){}  10
//   };
//   console.log(window.a,a); //function a(){}  function a(){}

//   /*
//     1.第一个log,块级作用域函数a的声明会被提升到全局作用域，所以不报错，是undefined undefined
//     2.第二个log,在块级作用域中，由于声明函数a提升到块级作用域顶端,所以打印a = function a(){}，而window.a由于并没有执行函数定义的那一行代码，所以仍然为undefined。
//     3.第三个log,这时已经执行了声明函数定义，所以会把函数a映射到全局作用域中。所以输出function a(){},
//     4.第四个log,就是function a(){}  function a(){}，因为在块级作用域中window.a的值已经被改变了，变成了function a(){}
//   */
//   // 块级作用域函数只有执行函数声明语句的时候，才会重写对应的全局作用域上的同名变量。

//   // 解析

//   var a;// 函数a声明提前，块级作用域函数a的声明会被提升到全局作用域
//   var a = 0; // 已经声明了a,这里会忽略变量声明，直接赋值为0
//   if(true){ // 块级作用域
//     function a(){} // 函数a的定义，提升到块级作用域最前面
//     a = 10; // 执行a = 10，此时，在块级作用域中函数声明已经被提升到顶层，那么此时执行a，就是相当于赋值，将函数声明a赋值为数字a，这里就是赋值为10了，
//     console.log(a,window.a); // a是块级作用域的function a,所以输出 10,window.a还是0，因为块级作用域函数只有执行函数声明语句的时候，才会重写对应的全局作用域上的同名变量
//     function a(){} // 执行到函数声明语句，虽然这一行代码是函数声明语句，但是a，已经为数字10了，所以，执行function a(){}之后，a的值10就会被赋值给全局作用域上的a，所以下面打印的window.a,a都为10
//     console.log(a,window.a); // a 还是块级作用域中的function a,前边已经被赋值为10，所以window.a前边已经变为了10
//     a = 20; // 仍然是函数定义块级作用域的a,重置为21
//     console.log(a,window.a); // 输出为函数提升的块级作用域的a,和window.a,所以这里输出20 10
//   }
//   console.log(a); // 因为在块级作用域中window.a被改变成了10，所以这里现在是10


//   // 写出打印结果
//   var foo = 1;
//   function bar() {
//       // foo会声明提前 var foo;
//     // !foo 等价于!undefined true
//       if (!foo) {
//           var foo = 10;
//       }
//     console.log(foo); // 10
//   }
//   bar();

//   // 写出打印结果
//   var a = 1;
//   function b() {
//       // 函数声明提前
//       // var a = function a(){};
//       a = 10; // 赋值相当于是给函数a进行重新赋值，并且这是函数作用域，不是块级作用域
//       return;
//       function a() {}
//   }
//   b();
//   console.log(a); // 1


//   const value = { number: 10 };
//   const multiply = (x = { ...value }) => {
//     console.log(x.number *= 2);
//   };
//   multiply();
//   multiply();
//   multiply(value);
//   multiply(value);
//   // 答案
// // 20 20 20 40

// // 解析
// /* 在ES6中，我们可以使用默认值初始化参数。如果没有给函数传参，或者传的参值为 `"undefined"` ，那么参数的值将是默认值。上述例子中，我们将 `value` 对象进行了解构并传到一个新对象中，因此 `x` 的默认值为 `{number：10}` 。
// 默认参数在调用时才会进行计算，每次调用函数时，都会创建一个新的对象。我们前两次调用 `multiply` 函数且不传递值，那么每一次 `x` 的默认值都为 `{number：10}` ，因此打印出该数字的乘积值为 `20`。
// 第三次调用 `multiply` 时，我们传递了一个参数，即对象 `value`。`*=`运算符实际上是 `x.number=x.number*2`的简写，我们修改了 `x.number`的值，并打印出值 `20`。
// 第四次，我们再次传递 `value`对象。`x.number`之前被修改为 `20`，所以 `x.number*=2`打印为 `40`。 */



// function GetMinPathStringLength( m ,  n ,  strTableContent ) {
//   // write code here
//   strTableContent = strTableContent.split('/').filter(str => str.length > 0)
//   strTableContent = strTableContent.map(arr => arr.split('|'))
// console.log(strTableContent)

// for(let i = 0; i < m; i++){
//   for(let j = 0; j < n; j++){
//     if(i == 0 && j == 0){
//       strTableContent[i][j] = strTableContent[i][j].length
//     }
//     else if(i == 0) strTableContent[i][j] = strTableContent[i][j-1] + strTableContent[i][j].length
//     else if(j == 0) strTableContent[i][j] = strTableContent[i-1][j] + strTableContent[i][j].length
//     else strTableContent[i][j] = Math.min(strTableContent[i][j-1], strTableContent[i-1][j]) + strTableContent[i][j].length
//   }
// }
// return strTableContent[m-1][n-1]
// }

// console.log(GetMinPathStringLength(2,3,"hqghumeaylnlfdxfircvscxggbwkfnqduxwfnfozv|rtkjprepggxr|nrvystmwcysyycqpevikeffmznimkkas/wsrenzkycxfxtlsgypsfadpooefxzbcoejuvpvaboygpoeylfpbnpljvrvipyamyehwqnqrqpmxujjloovaowuxwhmsncb|coksfzkvatxdknlyjyhfixjswnkkufnuxxzrzbmnmgqooketlyhnkoaugzqrcddiuteiojwayyzpvscm|sajlfvgubfaaovlzylntrkdcpwsrtesjwhdizcobzcnfwlqijtvdwvxhrcbldvgyl/"))

// console.log([12,[3]].toString().split(','))

// function Fn(name){
//   this.name = name
//   this.a = 'a'
//   console.log(this)
// }

// let res = new Fn('name ')
// console.log(res)

let a = 0, b = 0
function A(a) {
  A = function(b) {
    console.log(a + b++)
  }
  console.log(a++)
}
A(1)
A(2)