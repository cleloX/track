// 解决思路，规律：按行前后交换位置 -> 按照（i,i）交换位置

var rotate = function(matrix) {
  for (let i = 0; i < matrix.length / 2; i++) {
    [matrix[i], matrix[matrix.length - 1 -i]] = [matrix[matrix.length - 1 -i], matrix[i]]
  }
  for (let i = 1; i < matrix.length ; i++) {
    for (let j = 0; j < i ; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  
  return matrix
};

console.log(rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]))