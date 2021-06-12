/* 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 function quickSort(arr, left, right){
  function quickSortIndex(arr, left, right){
    let privot = arr[left]
    while(left < right){
      while(left < right && arr[right] > privot) right--
      arr[left] = arr[right]
      while(left < right && arr[left] <= privot) left++
      arr[right] = arr[left]
    }
    arr[left] = privot
    return left
  }
  if(left < right){
    let mid = quickSortIndex(arr, left, right)
    quickSort(arr, left, mid-1)
    quickSort(arr, mid+1, right)
  }
}
var majorityElement = function(nums) {
  quickSort(nums, 0, nums.length-1)
  console.log(nums)
  let left = 0, right = 0
  while(right < nums.length){
    console.log(nums[left], left,right)
    if(nums[left] != nums[right]) left = right
    if(right - left + 1 >= nums.length/2) return nums[left]
    
    right++
  }
};

console.log(majorityElement([3,2,3]))
