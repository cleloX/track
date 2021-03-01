// function changeObjProperty(o) {
//   console.log(o);
//   o.siteUrl = "http://www.baidu.com"
//   console.log(o);
//   o = new Object()
//   console.log(o);
//   o.siteUrl = "http://www.google.com"
//   // return o
//   console.log(o);
// } 
//   var webSite = new Object();
//   console.log(changeObjProperty(webSite));
//   console.log(webSite.siteUrl);

 /**
  * 事件循环
  * await后面所有的都是微任务
  * promise本身是一个立即执行函数，里面的then回调是微任务，也即是（resolve 和 reject是微任务）
 */
// async function async1() {
//   console.log('async1 start'); // 2
//   await async2();
//   console.log('async1 end');
// }

// async function async2() {
//   console.log('async2'); //3
// }

// console.log('script start'); //1
// setTimeout(function()
//   {
//   console.log('setTimeout'); // 最后
// }, 0);
// async1();
// new Promise(function(resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function() {
//   console.log('promise2');
// });
// console.log('script end');

//script start
// async1 start
// async2
// script end

// promise1
// promise2
// async1 end
// setTimeout


// var a = {
//   foo: function(){ 
//         console.log(this) 
//     }
// }
 
// a.foo(); // 打印什么   a
 
// var _foo = a.foo;
// _foo(); // 打印什么   window，还有可能是undefined
// var a = {
//   foo:  () => { 
//         console.log(this) 
//     }
// }
//         a.foo()  //  (foo改写成箭头函数)，打印什么


let arr = [1].concat(1,[2,3])
console.log(arr);