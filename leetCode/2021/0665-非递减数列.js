/**
 * 给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。

我们是这样定义一个非递减数列的： 对于数组中所有的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
*/


// 正常的非递减，要使 nums[i+1] >= nums[i] ... nums[0]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let num = 1
  for(let i=0;i<nums.length-1;i++){
    if(nums[i] > nums[i+1] && num>=0){
      num -= 1
      if(nums[i] > nums[i+2]) nums[i] = nums[i+1]
      else nums[i+1] = nums[i]
      if(nums[i - 1] > nums[i+1]) num--
    }
    if(num < 0){
      return false
      break
    }
  }
  return true
};
     
     

console.log(checkPossibility([5,7,1,8]));