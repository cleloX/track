// 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

 /**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  // let arr = []
  // arr.push(nums.shift())
  for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length - 1 - i; j++){
      if(''+nums[j]+nums[j+1] > ''+nums[j+1]+nums[j]) [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
    }
  }
  let res = ''
  nums.forEach(val => res += val)
  return res
  console.log(nums)
};


console.log(minNumber([3,30,34,5,9]))