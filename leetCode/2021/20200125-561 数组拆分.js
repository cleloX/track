// 排序 取 奇数位数字和


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  function quickSort(array,i,j){
    function quickSortIndex(arr, left, right){
      let indexVal = arr[right]
      while(left < right){
        while(left < right && arr[left] < indexVal) left++
        arr[right] = arr[left]
        // console.log(left);
        while(left < right && arr[right] >= indexVal) right--
        arr[left] = arr[right]
      }
      arr[left] = indexVal
      return right
    }
    
    if(i < j){
      let index = quickSortIndex(array,i,j)
      quickSort(array, i, index - 1);
			quickSort(array, index + 1, j);
    }
  }

  quickSort(nums,0,nums.length-1)


  // return nums

  let result = 0
  for (let index = 0; index < nums.length; index += 2) {
    result += nums[index]
    
  }
  return result

};

console.log(arrayPairSum([ 38, 65, 97, 23, 22, 76, 1, 5, 8, 2, 0, -1, 22]));