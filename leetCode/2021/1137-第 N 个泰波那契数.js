/* 泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 */
/**
 * @param {number} n
 * @return {number}
 */

 // 递归 + 数组记忆
// var tribonacci = function(k) {
//   let arr = Array(k+1).fill(0)
//   arr[1] = arr[2] = 1
//   function getTribonacciN(n){
//     if(n <= 0) return 0
//     if(n < 3) return arr[n]
//     arr[n] = getTribonacciN(n-1) + getTribonacciN(n-2) + getTribonacciN(n-3)
//     return arr[n]
//   }
//   return getTribonacciN(k)

//   console.log(arr)
// };

var tribonacci = function(k) {
  let arr = Array(k+1).fill(0)
  arr[1] = arr[2] = 1
  for(let i=3;i<=k;i++){
    arr[i] = arr[i-1] + arr[i-2] + arr[i-3]
  }
  return arr[k]
};
console.log(tribonacci(25))