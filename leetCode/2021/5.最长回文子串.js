/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(A) {
  let n = A.length
  if(n < 2) return A
    // write code here
  let res = 0, num = 0, result = '', str = ''
  let left, right
  for(let i = 0; i < n - 1; i++){
    num = 1
    left = i,
    right = i + 1
    result = A[left]
    while(A[left] == A[right]){
      result += A[right]
      right++
      num++
     
    }
    left--
    
    while(A[left] && A[right] && A[left] == A[right]){
      num += 2
      result = A[left] + result + A[right]
      left--, right++
    }
    
    if(num > res){
      res = num
      str = result
    }
  }
  return str
}
// @lc code=end

