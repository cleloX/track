/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if(height.length < 3) return 0
  let leftMax = height[0], rightMax = height[height.length - 1]
  let left = 1, right = height.length - 2
  let res = 0
  let min
  while(left <= right){
    min = leftMax < rightMax ? leftMax : rightMax
    if(min === leftMax){
      if(min> height[left]) {
        res += min - height[left]
        leftMax = min
      }else{
        leftMax = height[left]
      }
      left++
    }else{
      if(min> height[right]) {
        res += min - height[right]
        rightMax = min
      }else{
        rightMax = height[right]
      }
      right--
    }
  }
  return res
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));