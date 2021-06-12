/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let left = 0, right = k - 1
  let index
  let sum
  let max = 0
  while(right < nums.length){
    index = left
    sum = 0
    while(index <= right){
      sum += nums[index]
      index++
    }
    if(sum / k > max) max = sum / k
    left++
    right++
  }
  return max
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));