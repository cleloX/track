function quickSortM(arr, left, right){
  // let left = 0
  // let right = arr.length - 1
  let pivot = arr[right]
  while(left < right){
    while(left < right && arr[left] <= pivot) left++
    arr[right] = arr[left]
    while(left < right && arr[right] >= pivot) right--
    arr[left] = arr[right]
  }
  arr[right] = pivot
  return left
}
function quickSort(arr,i ,j){
  let middle = quickSortM(arr,i ,j)
  if(i<j){
    quickSort(arr,i,middle - 1)
    quickSort(arr, middle+1, j)
  }
}

let arr = [12,2,45,234]
quickSort(arr,0,arr.length-1)
console.log(arr)

var sortString = function(s = "aabbcc") {
  let arr = s.split('')
  quickSort(arr,0,arr.length-1)
  let fArr = [...new Set(arr)]
  let flag = 0
  let string = ''
  while(arr.length){
    if(flag%2 == 0){
      for(let i = 0;i<fArr.length;i++){
        let index = arr.indexOf(fArr[i])
        if(index != -1){
          string += arr[index]
          arr.splice(index,1)
        }
      }
    }else{
      for(let i = fArr.length-1;i>=0;i--){
        let index = arr.indexOf(fArr[i])
        if(index != -1){
          string += arr[index]
          arr.splice(index,1)
        }
      }
    }
    flag++
  }
  console.log(string)

};
// sortString()