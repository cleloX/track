/**
 * 给你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。

如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 。


输入：matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
输出：true
解释：
在上述矩阵中, 其对角线为: 
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]"。 
各条对角线上的所有元素均相同, 因此答案是 True 。
*/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  let row = col = 0
  for(let i=0;i<matrix[0].length;i++){
    row = 0
    col = i
    while(row < matrix.length && col < matrix[0].length){
      if(matrix[row][col] !== matrix[0][i]) return false
      row++
      col++
    }
  }
  for(let i=1;i<matrix.length;i++){
    row = i
    col = 0
    while(row < matrix.length && col < matrix[0].length ){
      if(matrix[row][col] !== matrix[i][0]) return false
      row++
      col++
    }
  }
  return true
};

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,5,2]]));