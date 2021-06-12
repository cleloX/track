// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  
  let arr = Array(32).fill(0)
  nums.forEach(num => {
    
    for(let i=31; i>=0; i--){
      // console.log(num)
      arr[i] += num & 1
      num = num >> 1
    }
  })
  // console.log(arr)
   let res = ''
   arr.forEach(val => {
     res += val % 3
   })
// console.log(res)
   return parseInt(res, 2)
};

console.log(singleNumber([3,4,3,3]))