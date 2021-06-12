/**
 * 给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
*/


// 可以知道， 最短连续子数组的长度，就是这个元素第一次出现的位置到最后一次出现的位置
// 遍历数组，使用map的value记录每个元素的出现的[“度数”, 开始出现index， 结束位置index， 最小长度]

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let map = new Map()
  for(let i=0;i<nums.length;i++){
    if(!map.has(nums[i])){
      map.set(nums[i], [1, i, i, 1])
    }else{
      map.set(nums[i], [map.get(nums[i])[0]+1, map.get(nums[i])[1], i, i - map.get(nums[i])[1]+1])
    }
  }

  let max = [0, Infinity]
  for (const [key,val] of map) {
    console.log(key, val);
    if(val[0] > max[0]) max = [val[0],val[3]]
    if(val[0] == max[0] && max[1] > val[3]) {
      // console.log(val,'-');
      max = [val[0],val[3]]
    }
    
  }

  console.log(max);
  return max[1]
};

console.log(findShortestSubArray([1,2,2,3,1,4,2]))