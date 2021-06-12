

var letterCombinations = function(digits) {
  if(digits == '') return []
  
  let map = new Map([[2,['a','b','c']], [3,['d','e','f']], [4,['g','h','i']],[5,['j','k','l']],[6,['m','n','o']],[7,['p','q','r','s']],[8,['t','u','v']],[9,['w','x','y','z']]])

  if(digits.length == 1) return map.get(parseInt(digits))
  let arrMap = []
  let numArr = digits.split('').map(val => parseInt(val))
  numArr.forEach(val => {
    arrMap.push(map.get(val))
  });

  while(arrMap.length > 1){
    let arr = []
    for (let i = 0; i < arrMap[0].length; i++) {
      for (let j = 0; j < arrMap[1].length; j++) {
        arr.push(arrMap[0][i]+arrMap[1][j])
      }
    }
    arrMap.shift()
    arrMap.shift()
    arrMap.unshift(arr)
  }
  return arrMap[0]
};

console.log(letterCombinations('23'))