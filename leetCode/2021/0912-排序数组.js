/**
 * @param {number[]} nums
 * @return {number[]}
 */

 // 选择排序
var sortArray = function(nums) {
  let index = 0
  for(let i = 0; i < nums.length; i++){
    index = i
    for(let j = i+1; j < nums.length; j++){
      if(nums[j] < nums[index]) index = j
    }
    [nums[i], nums[index]] = [nums[index], nums[i]]
  }
  return nums
};