// function numberToChines(number){
  
//   let arr1 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
//   if(number < 10) return arr1[number]
//   let arr2 = ['', '十', '百', '千', '万']
//   let num0 = null, num1 = 0
//   let result = ''
//   while(number){
//       num0 = number % 10
//       number = parseInt(number / 10)
//       if(num0 == 0) 
//         result = arr1[num0] + result
//       else
//         result = arr1[num0] + arr2[num1] + result
//       num1++
//   }
//   result = result.split('')
//   while(result[result.length - 1] == '零') result.pop()
//   for(let i = 0; i < result.length - 1; i++){
//     if(result[i] == '零' && result[i+1] == '零'){
//       result.splice(i, 1)
//       i--
//     }
//   }
//   if(number < 20) result.shift()
//   return result.join('')
// }

// console.log(numberToChines(5))

function getMinToAv(...arg){
  let arr = arg.slice(0, 1)
  arr = arr.toString().split(',').map(val => parseInt(val))    //获取第一个数组
  
  // 双重循环去重（这里用最朴素的去重方法）
  for(let i = 1; i < arg.length; i++){
      for(let j = 0; j < arg[i].length; j++){
          if(arr.indexOf(arg[i][j]) == -1) arr.push(arg[i][j])
      }
  }

  arr = arr.sort((a, b) => a - b)  // 排序
  let aval = arr.reduce((pre, val) => pre + val, 0) / arr.length    // 获取平均值
  aval = parseFloat(aval)  // 将平均值进行变为浮点数
  let int = Math.floor(aval)  // 整数部分
  let flo = aval - Math.floor(aval)  // 小数部分
  let direction = 0
  if(flo > 0.5){
    int += 1
    direction = 1
    if(arr.indexOf(int) > -1) return int
    else int--
  }

  if(arr.indexOf(int) > -1) return int
  else int++

  
  
}

console.log(getMinToAv([1,2,3,4,5,6], [2,3,4,5]))