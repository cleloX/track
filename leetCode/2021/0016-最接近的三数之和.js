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



var threeSumClosest = function(nums, target) {
  
  if(nums.length == 3) return nums[0] + nums[1] + nums[2]
  quickSort(nums,0,nums.length-1)
 
  
  let left
  let right
  let res = 100000
  for (let i = 0; i < nums.length-2; i++) {
    left = i+1
    right = nums.length-1
    while(left < right){      //移动条件：left<right
      if (Math.abs(nums[i] + nums[left] + nums[right] - target) < Math.abs(res - target)) {
        res = nums[i] + nums[left] + nums[right]
      }
      if(nums[i] + nums[left] + nums[right] <= target) left++
      else if(nums[i] + nums[left] + nums[right] > target) right--
      
    }
    
   
    // while(nums[i] == nums[i+1]) i++      //固定的元素，(遇到重复的跳过)直到固定的一个数没有重复出现 -> 避免重复
  }
  
  return res
};
console.log(threeSumClosest([1,2,-1,-4],1))


var threeSumClosest1 = function (nums, target) {
  quickSort(nums,0,nums.length-1)
  let res = nums[0] + nums[1] + nums[nums.length - 1];

  for (let i = 0; i < nums.length - 2; i++) {
    const n1 = nums[i];
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const n2 = nums[l];
      const n3 = nums[r];
      const sum = n1 + n2 + n3;
      if (sum > target) {
        r--;
      } else {
        l++;
      }
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
    }
  }
  return res;
};

console.log(threeSumClosest1([1,2,-1,-4],1))


