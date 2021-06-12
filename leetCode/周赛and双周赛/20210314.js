var areAlmostEqual = function(s1, s2) {
  str = []
  for(let i=0;i<s1.length;i++){
    if(s1[i] != s2[i]) str.push([s1[i], s2[i]])
  }
  if(str.length == 0) return true
  if(str.length == 1){
    return false
  }
  if(str.length > 2) return false
  if(str[0][1] == str[1][0] && str[1][1] == str[0][0]) return true
  return true
};


var maxAverageRatio = function(classes, extraStudents) {
  let res = []
  classes.forEach(arr => {
    res.push(arr[0]/arr[1])
  })
  console.log(res)
  for(let i=0;i<extraStudents;i++){
    let max = [0,0]
    classes.forEach((arr, index) => {
      console.log(arr,index)
      if((arr[1]-arr[0])/(arr[1]+1)/arr[1] > max[0]) max = [(arr[1]-arr[0])/(arr[1]+1)/arr[1], index]
    })
    console.log(max)
    
    classes[max[1]] = [classes[max[1]][0]+1,classes[max[1]][1]+1]
    res[max[1]] = classes[max[1]][0]/classes[max[1]][1]
  }
  let sum = 0
  res.forEach(val => sum+= val)
  return sum/res.length
};
console.log(maxAverageRatio([[1,2],[3,5],[2,2]],2))
// var maximumScore = function(nums, k) {
//   let arr = []
//   for(let i = 0; i <= k ; i++){
//     for(let j = k; j < nums.length; j++){
//       arr.push([i,j])
//     }
//   }
//   let max = -Infinity
//   arr.forEach(ar => {
//     let num = Math.min(...nums.slice(ar[0], ar[1]+1)) * (ar[1] - ar[0] + 1)
//     if(num > max) max = num
//   })
//   return max
// };

console.log('abd'.includes('b'))
