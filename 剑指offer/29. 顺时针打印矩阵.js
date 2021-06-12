// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

  let res = []
  res.push(matrix[0][0])
  while(res.length < matrix.length * matrix[0].length){
    while(matrix[x][y+1] != undefined && matrix[x][y+1] != Infinity){
      y++
      res.push(matrix[x][y])
    }
    y--
    while(matrix[x+1][y] != undefined && matrix[x+1][y] != Infinity){
      x++
      res.push(matrix[x][y])
    }
    x--
    while(matrix[x][y-1] != undefined && matrix[x][y-1] != Infinity){
      y--
      res.push(matrix[x][y])
    }
    y++
    while(matrix[x-1][y] != undefined && matrix[x-1][y] != Infinity){
      x--
      res.push(matrix[x][y])
    }
    x++
  }
};