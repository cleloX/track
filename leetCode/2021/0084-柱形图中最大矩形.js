/**
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。
*/

/**
 * @param {number[]} heights
 * @return {number}
 */

/**
 * 暴力破解：
 * 以heights[i]为最短高，向左右两边扩散。每次可以得到以heights[i]为高的矩形
 * 依次得到heights.length个值，取最大值
*/
// var largestRectangleArea = function(heights) {
//   if(heights.length === 0) return 0
//   let left, right
//   let result = 0
//   let leftVal, rightVal, sumVal
//   for(let i=0;i<heights.length;i++){
//     left = right = i
//     while(left > 0 && heights[left-1] >= heights[i]) left--
//     while(right < heights.length - 1 && heights[right+1] >= heights[i]) right++
//     // console.log('left, right',left, right)
//     sumVal = (right - left + 1) * heights[i]
//     // console.log('leftVal, rightVal, sumVal, result',leftVal, rightVal, sumVal, result)
//     result = Math.max(sumVal, result)
//   }
//   return result
// };


/**
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/bao-li-jie-fa-zhan-by-liweiwei1419/
*/
var largestRectangleArea = function(heights) {
  let stack = []
  let result = 0
  for(let i=0;i<heights.length;i++){

    while(stack.length && heights[stack[stack.length - 1]] > heights[i]){
      let index = stack.pop()
      while(index === stack[stack.length-1]) stack.pop()   // 排除重复的元素
      
      // 此时stack[stack.length-1]代表：弹出出当前的位置后，第一个高度比heights[index]低的坐标位置
      if(stack.length) result = Math.max(heights[index] * (i - stack[stack.length-1] - 1), result)
      else result = Math.max(heights[index] * i , result)  //最后一个坐标一定是高度最低的那个
  
    }
    stack.push(i)

    // if(heights[i] > heights[i+1]){
    //   if(stack) result = Math.max(heights[i] * (i + 1), result)
    //   else result = Math.max(heights[i], result)
    //   while(stack.length && heights[stack[stack.length - 1]] > heights[i+1]){
    //     let index = stack.pop()
    //     result = Math.max(heights[index] * (i - index + 1), result)
    //   }
    // }else{
    //   stack.push(i)
    // }
  }
  // 余下的在stack一定是按照非递减排列的
  while(stack.length){
    let index = stack.pop()
    while(index === stack[stack.length-1]) stack.pop()   // 排除重复的元素
    
    // 此时stack[stack.length-1]代表：弹出出当前的位置后，第一个高度比heights[index]低的坐标位置
    if(stack.length) result = Math.max(heights[index] * (heights.length - stack[stack.length-1] - 1), result)
    else result = Math.max(heights[index] * heights.length , result)  //最后一个坐标一定是高度最低的那个

  }
  console.log(stack);
  return result
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
// console.log(largestRectangleArea([3,6,5,7,4,8,1,0]));