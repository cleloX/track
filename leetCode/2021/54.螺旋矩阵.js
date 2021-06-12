/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
  const fin = '0'
  let res = []
  let i = 0, j = -1
  while(res.length < matrix.length * matrix[0].length){
    while(matrix[i] && matrix[i][j+1] !== fin && matrix[i][j+1] != undefined){
      j++
      res.push(matrix[i][j])
      matrix[i][j] = fin
    }
    while(matrix[i+1] && matrix[i+1][j] !== fin && matrix[i+1][j] != undefined){
      i++
      res.push(matrix[i][j])
      matrix[i][j] = fin
    }

    while(matrix[i][j-1] !== fin && matrix[i][j-1] != undefined){
      j--
      res.push(matrix[i][j])
      matrix[i][j] = fin
    }

    while(matrix[i-1] && matrix[i-1][j] !== fin && matrix[i-1][j] != undefined){
      i--
      res.push(matrix[i][j])
      matrix[i][j] = fin
    }
  }

  return res
};
// @lc code=end

