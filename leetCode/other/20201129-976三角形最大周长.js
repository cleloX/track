

function quickSortM(arr,left,right){
  let pivot = arr[right]
 
  while(left < right){
    // console.log(arr)
    while(left < right && arr[left] <= pivot) left++
    arr[right] = arr[left]
    while(left < right && arr[right] >= pivot) right--
    arr[left] = arr[right]
  }
  arr[right] = pivot
  return left
}

function quickSort(arr,left,right){
  let middle = quickSortM(arr,left,right)
  if(left < right){
    quickSort(arr,left,middle-1)
    quickSort(arr,middle+1,right)
  }
  
}



var largestPerimeter = function(A) {
  quickSort(A,0,A.length-1)
  A = [...A]
  for(let i = A.length - 1; i >1; i--){
    if(A[i] < A[i-1] + A[i-2]) return A[i] + A[i-1] + A[i-2]
  }
  

};
// largestPerimeter([3,6,2,3])
console.log(largestPerimeter([3,6,2,3]))