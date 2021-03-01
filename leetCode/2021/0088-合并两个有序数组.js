/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if(m === 0){
    nums1 = nums2
    return nums1
  }
  let n1 = m - 1, n2 = n - 1
  let index = m + n - 1
  while(nums2.length > 0){
    if(n1 < 0) nums1[n1] = -Infinity
    if(nums2[n2] >= nums1[n1]){
      nums1[index] = nums2.pop()
      n2--
    }else{
      nums1[index] = nums1[n1]
      n1--
    }
    index--
  }
  return nums1
};

// console.log(merge([1,2,3,0,0,0], 3, [2,5,6],  3));
console.log(merge([0], 0, [2],  1));