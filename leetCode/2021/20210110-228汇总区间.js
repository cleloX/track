var summaryRanges = function(nums) {
  if(nums.length == 1) return [nums[0]+""]
  let result = []
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]+1 != nums[i+1]){
      if(i - index == 0) result.push(nums[i]+"")
      else result.push(`${nums[index]}->${nums[i]}`)
      index = i+1
    }
  }
  return result
};

console.log(summaryRanges([0,1,2,4,6,7]))