/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if(rowIndex === 0) return [1]
  else if(rowIndex === 1) return [1,1]
  let arr = new Array(rowIndex+1).fill(1), arrIndex = new Array(rowIndex).fill(1)
  for(let i = 2;i <= rowIndex; i++){
    let index = 1
    while(index<i){
      arr[index] = (arrIndex[index] == undefined ? 0 : arrIndex[index]) + arrIndex[index-1]
      console.log(`i = ${i}, arr[index] = ${arr[index]}, arrIndex[index] = ${arrIndex[index]}， arrIndex[index-1] = ${arrIndex[index-1]}`);
      index++

    }
    for(let j=1;j < i;j++){
      arrIndex[j] = arr[j]
    }
  }
  return arr
};
console.log(getRow(3));