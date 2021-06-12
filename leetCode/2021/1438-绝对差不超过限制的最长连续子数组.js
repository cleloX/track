/**
 * 给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。

如果不存在满足条件的子数组，则返回 0 。
*/

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  if(nums.length === 1) return 1
  let left = 0, right = 0
  let arr = []
  let res = 0
  // let max = -Infinity, min = Infinity
  let max = nums[0], min = nums[0]
  while(right < nums.length){
    arr.push(nums[right])
    console.log(arr);
    console.log(`max = ${max}, min = ${min}`);
    if(nums[right] >= min && nums[right] <= max || Math.max(...arr) - Math.min(...arr) <= limit) {
      if(nums[right] < min) min = nums[right]
      if(nums[right] > max) max = nums[right]
      res = Math.max(res,arr.length)
    }
    else{
      if(nums[right] < min) min = nums[right]
      if(nums[right] > max) max = nums[right]
      while(max - min > limit) {
        left++
        arr.shift()
        min = Math.min(...arr)
        max = Math.max(...arr)
      }
    }

    right++
  }

  return res
};
console.log(longestSubarray([8,1,8,1,5,10,10],7))