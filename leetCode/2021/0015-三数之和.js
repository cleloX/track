//思路：排序 -> 固定一个数 + 双指针
//固定一个数：从数组的0号元素开始向右移动，遇到相同的元素跳过
//双指针：从固定的元素的后一个i+1向后移和数组最后一个向前移
//移动条件：left<right


function quickSort(arr,left,right){
  function quickSortIndex(arrC,left,right){
    let val = arrC[right]
    while(left < right){
      while(left < right && arrC[left] < val) left++
      [arrC[left],arrC[right]] = [arrC[right],arrC[left]]
      while(left < right && arrC[right] >= val) right--
      [arrC[left],arrC[right]] = [arrC[right],arrC[left]]
    }
    arrC[left] = val
    return left
  }
  
    let index = quickSortIndex(arr,left,right)
    if(left<index-1)
      quickSort(arr,left,index-1)
    if(index+1<right)
      quickSort(arr,index+1,right)
  
}



// var threeSum = function(nums) {
  
//   if(nums.toString() == [0,0,0].toString()) return [[0,0,0]]
//   quickSort(nums,0,nums.length-1)
//   if(nums.length < 3 || nums[0] > 0 || nums[nums.length - 1] < 0) return []
  
//   console.log(nums)
//   let left
//   let right
//   let result = []
//   for (let i = 0; i < nums.length-2; i++) {
//     left = i+1
//     right = nums.length-1
//     while(nums[i] + nums[left] + nums[right] < 0 && left < right) left++
//     while(nums[i] + nums[left] + nums[right] > 0 && left < right) right--
//     while(nums[i] + nums[left] + nums[right] == 0 && left < right) {
//       result.push([nums[i], nums[left], nums[right]])
//       right--
//       left++
//     }

//     while(nums[i] == nums[i+1]) i++

    
//   }
// console.log('res')
//   return result
// };


var threeSum = function(nums) {
  
  if(nums.toString() == [0,0,0].toString()) return [[0,0,0]]
  quickSort(nums,0,nums.length-1)
  if(nums.length < 3 || nums[0] > 0 || nums[nums.length - 1] < 0) return []
  
  let left
  let right
  let result = []
  for (let i = 0; i < nums.length-2; i++) {
    left = i+1
    right = nums.length-1
    while(left < right){      //移动条件：left<right
      if(nums[i] + nums[left] + nums[right] == 0) {
        result.push([nums[i], nums[left], nums[right]])
        while( nums[left]==nums[left+1]) left++     //避免重复出现有等于0的元组
        while( nums[right]==nums[right-1]) right--      //避免重复出现有等于0的元组
        right--
        left++
      }
      /* 结果的和不为0的时候不影响移动*/
      else if(nums[i] + nums[left] + nums[right] < 0) left++
      else if(nums[i] + nums[left] + nums[right] > 0) right--
    }
    
    while(nums[i] == nums[i+1]) i++      //固定的元素，(遇到重复的跳过)直到固定的一个数没有重复出现 -> 避免重复
  }

  return result
};


console.log(threeSum([-2,1,1,1]))

