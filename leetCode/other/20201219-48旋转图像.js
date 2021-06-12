var rotate = function(matrix) {
  for (let i = 0; i < parseInt(matrix.length / 2); i++) {
    [matrix[i], matrix[matrix.length - 1 - i]] = [matrix[matrix.length - 1 - i], matrix[i]]
  }
  
  let index = 1
  for (let i = index; i < matrix.length; i++) {
    for (let j = 0; j < index; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      
    }
    index++
    
  }
console.log(matrix)

};

rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
])