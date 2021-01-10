var generate = function(numRows) {
  if(numRows == 1) return [[1]]
  else if(numRows == 2) return [[1], [1,1]]
  let arr = [[1], [1,1]]
  console.log(arr[])
  for(let i = 2;i<numRows;i++){
    let arr0 = [1]
    for(let j = 1;j<numRows-1;j++){
      arr0.push(arr[i][j] + arr[i][j-1])
    }
    arr.push(1)
    arr.push(arr0)
  }
  console.log(arr)
};

generate(5)