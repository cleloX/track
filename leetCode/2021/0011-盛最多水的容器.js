/* 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器。 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0, right = height.length - 1
  let result = 0

  while(left < right){
    if(height[left] < height[right]){
      result = result < (right - left) * height[left] ? (right - left) * height[left] : result
      left++
    }else{
      result = result < (right - left) * height[right] ? (right - left) * height[right] : result
      right--
    }
  }
  return result
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))