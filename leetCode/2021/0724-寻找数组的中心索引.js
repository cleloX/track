/**
 * 给你一个整数数组 nums，请编写一个能够返回数组 “中心索引” 的方法。

数组 中心索引 是数组的一个索引，其左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，返回 -1 。如果数组有多个中心索引，应该返回最靠近左边的那一个。

注意：中心索引可能出现在数组的两端。
*/

// 代码思路明了，两个坑：
// 1.[] return -1      2.左右侧没有数据时，和为0

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if(nums.length === 0) return -1
  let sum = nums.reduce(function(prev, curr, idx, arr){
    // console.log(prev, curr, idx, arr)
    return prev + curr;
  })
  let leftSum = 0
  for (let i = 0; i < nums.length ; i++) {
    if(sum - nums[i] - leftSum === leftSum) return i
    leftSum += nums[i]
  }
  return -1
};

console.log(pivotIndex([-1,-1,-1,-1,-1,0]));