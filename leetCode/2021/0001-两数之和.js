/* 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。
 */

const { NOTFOUND } = require("dns");


 // 思路 ：  双循环

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// function quickSort(arr, left = 0, right = arr.left-1){
//   function quickSortIndex(arr, left, right){
//     let privot = arr[right]
//     while(left < right){
//       while(left < right && arr[left] < privot) left++
//       arr[right] = arr[left]
//       while(left < right && arr[right] >= privot) right--
//       arr[left] = arr[right]
//     }
//     arr[left] = privot
//     return left
//   }

//   if(left < right){
//     let mid = quickSortIndex(arr,left, right)
//     quickSort(arr, left, mid-1)
//     quickSort(arr, mid+1, right)
//   }
// }

var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++){
      if(nums[i] + nums[j] === target) return [i, j]
    }
  }

  
};

console.log(twoSum([3,2,4], 6))