/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。
*/

/**
 * 暴力破解，超时
 * 优化 -> 使用队列mid将过度的值下标存下。当前值比mid中的值对应的nums值大时，说明最大值不会是mid中对应的值。于是
*/



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let res = []
  let mid = [] //
  // mid.push(nums[0])
  let left = 0, right =  k -1

  while(right < nums.length){
     while(left <= right){
       if(mid[mid.length-1] == undefined || nums[left] <= nums[mid[mid.length-1]] ) mid.push(left)
       else{
         while(nums[left] > nums[mid[mid.length-1]] && mid.length) mid.pop()
         mid.push(left)
       }
       console.log(right, mid);
       left++
     }
    if(mid[0] < right - k + 1) mid.shift()
    res.push(nums[mid[0]])
    right++
    left = mid[mid.length-1]+1
  }

  return res
};

console.log(maxSlidingWindow([7,3,4], 2));