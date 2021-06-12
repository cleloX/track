/**
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//   let arr = []
//   for(let i=1;i<=nums.length;i++){
//     if(nums.indexOf(i) === -1) Array.push(i)
//   }
//   return arr
// };

var findDisappearedNumbers = function(nums) {
  let arr = new Array(nums.length).fill(1)
  for(let i=0;i<nums.length;i++){
    arr[nums[i]] = 0
  }
  let res = []
  arr.forEach((val,index) => {
    if(val === 1) res.push(nums[index])
  })
  return res
};