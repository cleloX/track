var reversePairs = function(nums) {
  let num = 0
  for(let i=0;i<nums.length-1;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i] > 2*nums[j]) num++
    }
  }
  return num
};

console.log(reversePairs([1,3,2,3,1]))