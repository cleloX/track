// for (let a = 0; a < 5; a++) { 
//   setTimeout(
//     () => console.log(a)
//   , 1000) 
// }
// 5个 5


/**立即执行函数*/
// for (var a = 0; a < 5; a++) { 
//   (a => 
//     setTimeout(
//       function(){
//         console.log(a)
//       }
//     , 1000))(a) 
// }
// // 0 1 2 3 4 


// /**async*/
// let sleep = (time) => {
//   return new Promise((resolve, reject) => setTimeout(resolve,time))
// }
// (async () => {
//   for (var a = 0; a < 5; a++) { 
//     await sleep(1000)
//     console.log(a)
//   }
// })()
// // 0 1 2 3 4 

// /**promise*/
// let sleep = (time) => {
//   return new Promise((resolve, reject) => setTimeout(resolve,time))
// }
//   for (let a = 0; a < 5; a++) { 
//     sleep(1000).then(() => console.log(a))
    
//   }
// // 0 1 2 3 4 

const a = [1 , 2]
a[1] = 5
console.log(a)
