/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  nums = nums.join('').split('0')
  let max = 0
  nums.forEach(val => {
    if(val.length > max) max = val.length
  })
  return max
};

console.log(findMaxConsecutiveOnes([1,1,0,,1,1,1]));