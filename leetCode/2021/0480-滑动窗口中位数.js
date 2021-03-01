/***
 * 
中位数是有序序列最中间的那个数。如果序列的长度是偶数，则没有最中间的数；此时中位数是最中间的两个数的平均数。

例如：

[2,3,4]，中位数是 3
[2,3]，中位数是 (2 + 3) / 2 = 2.5
给你一个数组 nums，有一个长度为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1 位。你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function quickSort(arr, left, right){
  function getIndex(arr, left, right){
    let privot = arr[right]
    while(left < right){
      while(left < right && arr[left] < privot) left++
      arr[right] = arr[left]
      while(left < right && arr[right] >= privot) right--
      arr[left] = arr[right]
    }
    arr[left] = privot
    return left
  }
  if(left < right){
    let mid = getIndex(arr, left, right)
    quickSort(arr, left, mid-1)
    quickSort(arr, mid+1, right)
  }
  return arr
}


var medianSlidingWindow = function(nums, k) {
  let left = 0, right = k
  let res = []
  let med 
  while(right <= nums.length){
    med = nums.slice(left, right)
    med = quickSort(med,0,med.length-1)
    console.log(med);
    if((k - 1) / 2 === parseInt((k - 1) / 2))
      res.push(med[(k-1) / 2])
    else
      res.push((med[parseInt((k-1) / 2)] + med[parseInt((k-1) / 2)+1]) / 2)

    left++
    right++
  }
  return res
};

console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7],3));