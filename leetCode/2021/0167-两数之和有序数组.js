//采用双指针，最左和最右
// 条件（之和小于target，left++）（之和大于target，right--
// 



/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while(left < right){
    if(numbers[left] + numbers[right] == target) return [left, right]
    else if(numbers[left] + numbers[right] < target) left++
    else right--
  }
  
};