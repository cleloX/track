// 若M × N矩阵中某个元素为0，则将其所在的行与列清零。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
  // let arr = JSON.parse(JSON.stringify(matrix))
  let flag = []
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[0].length;j++){
      if(matrix[i][j] === 0) flag.push([i,j])
    }
  }
  console.log(flag);
  flag.forEach(arr => {
    for(let i=0;i<matrix.length;i++){
      matrix[i][arr[1]] = 0
    }
    for(let i=0;i<matrix[0].length;i++){
      matrix[arr[0]][i] = 0
    }
  })

  return matrix
};

console.log(setZeroes([
  [0,1]
]));