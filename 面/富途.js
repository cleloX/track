// function findMedianinTwoSortedAray( arr1 ,  arr2 ) {
//   // write code here
// arr1 = arr1.concat(...arr2)
// arr1 = arr1.sort((a, b) => a -b)
// return arr1[parseInt((arr1.length-1) / 2)]
// }

// console.log((findMedianinTwoSortedAray([1,2,3,4],[3,4,5,6])))

// function solve( nums ) {
//   // write code here
// nums = nums.map(val => String(val))
// // console.log(nums)
// let res = ''
// let max = '0'
// while(nums.length){
//   let index = 0
//   max = '0'
//   for(let i=0;i<nums.length;i++){
//     for(let j=0; j < Math.max(nums[i].length, max.length);j++){
//       if(max[j] == undefined) max[j] = 0
//       if(nums[i][j] == undefined) nums[i][j] = 0
//       if(nums[i][j] > max[j]){
//         max = nums[i]
//         index = i
//         break
//       }
//     }
    
//   }
//   // console.log(nums[index])
//   res += nums[index]
//   // console.log(res)
//   nums[index] = nums[nums.length-1]
//   nums.pop()
// }
// if(parseInt(res) == 0) return '0'
// return res
// }


function solve( nums ) {
  // write code here
  if(nums.length == 0) return ''
nums = nums.map(val => String(val))
// console.log(nums)
  
let res = ''
let max = '0'
while(nums.length){
  let index = 0
  max = '0'
  for(let i=0;i<nums.length;i++){
    let j=0
    for(; j < Math.min(nums[i].length, max.length);j++){

      if( nums[i][j] > max[j]){
        max = nums[i]
        console.log('max',max)
        index = i
        break
      }

      if(j ==  Math.min(nums[i].length, max.length)-1){
        if(nums[i].length <= max.length){
          index = i
          max = nums[i]
        }
      } 
    }
    
  }
  console.log(max,'max', res, nums,index)
  
  res += nums[index]
  // console.log(res)
  nums[index] = nums[nums.length-1]
  nums.pop()
}
  if(parseInt(res) == 0) return '0'
return res
}

console.log(solve([9,993]))