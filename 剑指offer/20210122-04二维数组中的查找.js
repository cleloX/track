// 和LeetCode 240题相同
// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

var findNumberIn2DArray = function(matrix, target) {
  // console.log(matrix[1][0]);
  let col = matrix[0].length - 1
  let row = 0
  while(row<matrix.length-1 && matrix[row][col] < target) row++
  while(row<matrix.length-1 && matrix[row][0] > target) row++
  console.log(row);
  // 每一行进行二分查找
  while(row < matrix.length){
    
    let left =  0
    let right = col
    while(left <= right){
      if(matrix[row][parseInt((left+right)/2)] == target) return true
      else if(matrix[row][parseInt((left+right)/2)] < target){
        left = parseInt((left+right)/2) + 1
      }
      else{
        right = parseInt((left+right)/2) - 1
      } 
    }
    row++
    
  }

  return false

}

console.log(findNumberIn2DArray([
  [-1,2],[2,3]
],
5));