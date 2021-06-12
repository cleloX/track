// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = []
  while(nums1.length || nums2.length){
    if(nums1.length === 0){
      arr.push(nums2.shift())
    }else if(nums2.length === 0){
      arr.push(nums1.shift())
    }else{
      if(nums1[0] < nums2[0]) arr.push(nums1.shift())
      else arr.push(nums2.shift())
    }
  }
  console.log(arr)
  if(arr.length % 2 === 1) return arr[(arr.length-1)/2]
  else return (arr[arr.length/2] + arr[arr.length/2-1])/2
};

console.log(findMedianSortedArrays([1,2], [6,8]))