/*给定长度分别为 m 和 n 的两个数组，其元素由 0-9 构成，表示两个自然数各位上的数字。现在从这两个数组中选出 k (k <= m + n) 个数字拼接成一个新的数，要求从同一个数组中取出的数字保持其在原数组中的相对顺序。

求满足该条件的最大数。结果返回一个表示该最大数的长度为 k 的数组。

说明: 请尽可能地优化你算法的时间和空间复杂度。

示例 1:

输入:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
输出:
[9, 8, 6, 5, 3]
示例 2:

输入:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
输出:
[6, 7, 6, 0, 4]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/create-maximum-number
*/


//函数的功能是得到num2中个数为i的最大数
function getMaxChild(nums2,i){
  
    let arr2 = []
    arr2.push(nums2[0])
    let j
    let remove = nums2.length - i
    for(j = 1;j<nums2.length;j++){
      // console.log('jj',j)
      if(i == 0){
        arr2 = []
        break
      }
      if(nums2[j] >= arr2[arr2.length-1] && remove > 0) {
        while(nums2[j] > arr2[arr2.length-1] && arr2[0] != undefined  && remove > 0) {
          arr2.pop()
          remove--
        }
        if(arr2.length < i) arr2.push(nums2[j])
      }
      else{
        if(arr2.length < i) arr2.push(nums2[j])
      }
      // arr2.splice(arr2.length-1,0,...nums2.slice(j,nums2.length-1))
    }
    arr2.splice(arr2.length,0,...nums2.slice(j,i-arr2.length+j))
    return arr2
}



var maxNumber = function(nums1, nums2, k) {
  if(nums1.length < nums2.length) [nums1, nums2] = [nums2, nums1]
  let max = 0
  for(let i = k - nums1.length > 0 ? k - nums1.length:0;i<=nums2.length;i++){
    let arr1 = getMaxChild(nums2,i)
    let arr2 = getMaxChild(nums1,k-i)
    if(arr1.length < arr2.length) [arr1, arr2] = [arr2, arr1]
    console.log(i, getMaxChild(nums2,i),getMaxChild(nums1,k-i))
    let index1 = index2 = 0
    // console.log(arr2)
    while(arr2[0] != undefined){
      while(arr1[index1] > arr2[0]) index1++
      arr1.splice(index1,0,...arr2.splice(0,1))
      console.log(arr1)
      index1++
    }
    
    let max0 = 0
  if(arr1.length == 1) max0 = arr1[0]
  else max0 = arr1.join('')
  max0 = parseInt(max0)
  if(max0 > max) max = max0
  }
  
  max = max.toString()
  console.log(max.split(''))
  return max.split('')
};

let nums1 = [3,4,6,5]



 let nums2 = [9,1,2,5,8,3]

maxNumber(nums1, nums2, 5)