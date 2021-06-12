// /**
//  * @param {number} x
//  * @param {number} y
//  * @param {number[][]} points
//  * @return {number}
//  */
// var nearestValidPoint = function(x, y, points) {
//   let max = Infinity
//   let index = 0
//   points.forEach((arr, i) => {
//     if(arr[0] == x || arr[1] == y){
//       if(Math.abs(x-arr[0]) + Math.abs(y-arr[1]) < max){
//         max = Math.abs(x-arr[0]) + Math.abs(y-arr[1])
//         index = i
//       }
//     }
//   })
//   if(max == Infinity) return -1
//   let [a,b] = points[index]
//   if(a == x && b == y) return 0
//   return index
// };

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
  s = s.split('')
  let left = 0, right = 2
  let res = 0
  while(left<s.length - 2){
    right = left + 2
    
    while(right < s.length){
      let arr = s.slice(left, right+1)
      let map = new Map()
      
      for (const c of arr) {
        if(map.get(c)){
          map.set(c,map.get(c)+1)
        }else{
          map.set(c,1)
        }
      }
      let max = 0, min = Infinity
      for (const [key,val] of map) {
        if(val>max) max = val
        if(val < min) min = val
      }

      res += max - min
      // console.log(max, min)
      right++
    }


    left++
  }
  return res

};
console.log(beautySum('xzvfsppsjfbxdwkqe'))

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var checkPowersOfThree = function(n) {
//   let arr = []
//   while(n > 2){
//     // if(n == 3) return true
//     let index = 0
//     while(Math.pow(3,index) < n) index++
//     if(arr.indexOf(index-1) != -1) return false
//     arr.push(index-1)
//     n = n - Math.pow(3,index-1)
//   }
//   if(n == 2) return false
//   return true
// };

// console.log(checkPowersOfThree(33))