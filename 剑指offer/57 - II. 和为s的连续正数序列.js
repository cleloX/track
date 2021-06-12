/* 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。 */

/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(sum) {
  let right = parseInt((sum + 1)/2)  //最大数必定小于sum/2
  let left = right
  let arr = Array(right+1).fill(0)
  for(let i=0; i<arr.length; i++){
    arr[i] = i
  }
  let res = []
  let num = 0
  while(left >= 0){
    // let num = 0
    while(num < sum && left >= 0){
      num += left
      left--
    }
    // if(num == sum){
    //   // console.log(left+1, right+1)
    //   res.unshift(arr.slice(left+1, right+1))
    //   right--
    //   left = right
    // }else if(num > sum){
    //   right--
    //   left = right
    // }
    if(num == sum) res.unshift(arr.slice(left+1, right+1))
    num -= right
    right--
  }
  return res
};

console.log(findContinuousSequence(100))