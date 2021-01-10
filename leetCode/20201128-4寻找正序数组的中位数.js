//方法：将数组2nums2直接插入到数组nums1，，使得nums1变成一个有序数组
//思路：因为将2插入到1中，以遍历nums2完成为结束条件
//利用双指针

var findMedianSortedArrays = function(nums1, nums2) {

  let i = j = 0
  while(j<nums2.length){
    while(nums2[j]>=nums1[i]) i++
    nums1.splice(i,0,nums2[j])
    j++
  }
  // console.log(nums1)
  let len = nums1.length
  // console.log(len)
  if(parseInt(len % 2) == 1){
    return nums1[parseInt(len / 2)]
  }else{
    return (nums1[parseInt(len / 2)] + nums1[parseInt(len / 2)-1])/2
  }
};

console.log(findMedianSortedArrays(nums1 = [1,3], nums2 = [2,4]))