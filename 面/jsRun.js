// // console.log(a); // 这里不报错，是undefined
// // if(true){
// //   console.log(a); // function a
// //   function a(){};
// // }

// // let a = {
// //   b:3
// // }
// // console.log(a.b.c)

// console.log(1+'undefined')
// console.log(true + null)
// console.log(1 + [])

// var a
// if(true){
// a = 10

// /* // 在代码没有执行到这一行时，可以理解为预编译时期代码执行的执行顺序是这样的
// var a
// if(true){
//   function a(){};
// a = 10
// console.log(a,window.a);
// }
// console.log(a);
// */
// /* // 在代码执行到这一行时，由于函数是一等公民，可以理解为预编译时期代码执行的执行顺序是这样的
// var a
// function a(){};
// if(true){
// a = 10
// console.log(a,window.a);
// }
// console.log(a);
// */
// function a(){}; 
// console.log(a,window.a);
// }
// console.log(a);

// var a
// if(true){
//   function a(){};
// a = 10
// console.log(a,window.a);

// }
// console.log(a);

// var a = {
// 	b:'b',
// 	c:function(){
// 		console.log(this.b)
// 	}
// }
// a.c()
// var a = {
// 	b:'b',
// 	c:()=>{
// 		console.log(this.b)
// 	}
// }
// a.c()
// var a = {
// 	b:'b',
// 	c:function(){
// 		console.log(this.b)
// 	}
// }
// let d = a.c
// d()



// console.log(1);
// setTimeout(() => {
//   console.log(2);
//   Promise.resolve().then(() => {
//     console.log(3)
//   });
// });
// new Promise((resolve, reject) => {
//   console.log(4)
//   resolve()
// }).then(() => {
//   console.log(5);
// })

// setTimeout(() => {
//     console.log(6);
// })
// console.log(7);


// if ([]) {console.log(1);} 
// if ([].length) {console.log(2);} 
// if ({} === {}) {console.log(3);} 
// if ('' == 0) {console.log(4);}

// console.log(parseInt('aa',36))
// !function say(){console.log(234)}  ()
// say()

// // 直接在控制台打印，相当于
// let aaa = !function say(){console.log(234)}  ()
// console.log(aaa)
// say()


//   console.log(foo);
//   function foo() { console.log('func'); } 
// foo = 1;

// console.log(foo);

//   console.log(foo);

// let a = [{val:1}]
// let  a = [1, 2, 3]
// // a.length = 0
// let b = a
// b.map(obj => obj = 2)
// console.log(a,a.length)
// let a = 'tz'
// console.log('nnn' + a == 'nnntz' ? 'hh' : 'nn')
// // console.log(!!")
// // var a= 100
// let foo = () => {
//   console.log(a)
//   let a = 20
//   a++
// }

// foo();
// let a = String('a')
// switch(a){
//   case 'a': console.log(1)
//   default: console.log(2)
// }
let a
a = 1
function a(){}
console.log(a)