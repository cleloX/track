/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = []
  let len = nums.length
  function swap(x, y){
    let val = nums[x]
    nums[x] = nums[y]
    nums[y] = val
  }
  function sort(index){
    
    for(let i=index;i<len;i++){
      swap(index, i)
      // console.log(i);
      // result.push(JSON.parse(JSON.stringify(nums)))
      if(index < len - 2) sort(index+1)
      else result.push(JSON.parse(JSON.stringify(nums)))
      swap(index, i)
    }
    
  }
  sort(0)
  console.log(nums);
  console.log(result);
};

console.log(permute([1,2,3,4]));
console.log(new Set(...['123','22']));