//先获取AB两个数组的任意两数之，得到数组1[]
//先获取CD两个数组的任意两数之，得到数组2[]
//再比对两个数组中有多少组相加和为0

//思路简化

//在获取CD数组两数和的同时，获取数组1[]进行判断和总计

//方法简化

//先获取AB两个数组的任意两数之，放到map中
////在获取CD数组两数和的同时，获取map中i+j的相反数的数量，进行判断和总计

let A = [ 1, 2]
let B = [-2,-1]
let C = [-1, 2]
let D = [ 0, 2]

var fourSumCount = function(A, B, C, D) {
  let map = new Map()
  let sum = 0
  A.forEach(i => {
    B.forEach(j => {
      if(map.get(i+j) == undefined){
        map.set(i+j,1)
      }else{
        map.set(i+j,map.get(i+j)+1)
      }
    })
  } )

  C.forEach(i => {
    D.forEach(j => {
      if(map.has(-i-j)){
        sum += map.get(-i-j)
      }
    })
  } )



  return sum
};

console.log(fourSumCount(A, B, C, D))