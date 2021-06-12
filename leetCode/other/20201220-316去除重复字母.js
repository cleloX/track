


var removeDuplicateLetters = function(s) {
  s = s.split('')
  let stack = []
  let map = new Map()
  s.forEach(val => {
    if(map.get(val) == undefined) map.set(val,1)
    else map.set(val,map.get(val)+1)
  })
  console.log(map)
  let min = s[0]
  stack.push(s[0])
  // map.set(s[0],map.get(s[0])-1)
  s.forEach((val, index )=> {
    if(map.get(val) == 1 || )
    // if(stack.indexOf(val) == -1) stack.push(val)
    // else{
    //   if(val > stack[stack.indexOf(val)+1]){
    //     stack.splice(stack.indexOf(val),1)
    //     stack.push(val)
    //   }
    // }
  });
  return stack
};


console.log(removeDuplicateLetters('bcabc'))