// let line = '2{AB}CD'
// function fn(line){
//   if(parseInt(line) == line){
//     console.log(line)
//      return;
//   }

//   line = line.split('').reverse()
//   let res = '', str = ''
//   for(let i=0;i < line.length;i++){
//     if(line[i] >= 'A' && line[i] <= 'Z'){
//       str += line[i]
//     }else if(line[i] == '}'){
//       res += str
//       str = ''
//     }else if(line[i] >= '1' && line[i] <= '9'){
//       let num = parseInt(line[i])
//       while(num--){
//         res += str
//       }
//       str = ''
//     }
//   }
//   res += str
//   res = res.split('').reverse().join('')
//   console.log(res)
// }





// fn(line)











// let line = '2-5,6-7,8-9'
// line = line.split(',').map(val => val.split('-').map(va => parseInt(va)))
// let res = []
// res.push(line[0])
// console.log(res)
// for(let i = 1;i < line.length;i++){
//   console.log(line[i][0] , res[res.length-1][1] + 1)
//   if(line[i][0] <= res[res.length-1][1] + 1 && line[i][0] >= res[res.length-1][0]) 
//     res[res.length-1][1] = line[i][1]
//   else
//     res.push(line[i])
// }
// res = res.map(arr => arr.join('-')).join(',')
// console.log(res)











// let nums = '600,100,700,30,30,30,60,120'.split(',').map(val => parseInt(val))
// let k = parseInt('3')
// let left = 0, right = left + k
// let res = []

// while(right <= nums.length){
//   let arr = nums.slice(left, right)
//   res.push(Math.max(...arr))
//   left++, right++
// }
// console.log(res)



let nums = '600,100,700,30,30,30,60,120'
let k = 3
nums = nums.split(',').map(val => parseInt(val))


let left = 0, right = left + k
let res = []

while(right <= nums.length){
  let arr = nums.slice(left, right)
  res.push(Math.max(...arr))
  left++, right++
}
console.log(res)



