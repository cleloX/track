function deepClone(obj){
  let newObj = Array.isArray(obj) ? [] : {} 
  for(let c in obj){
    if( typeof obj[c] === 'object' &&  typeof obj[c] != null)
      newObj[c] = deepClone(obj[c])
    else
    newObj[c] = obj[c]
  }
  return newObj
}

let o1 = {
  a:12,
  b:{bb:'bb'},
  c:function(){},
  d:null
}

// let o2 = o1
// let o2 = deepClone(o1)
let o2 = JSON.parse(JSON.stringify(o1))
o2.a = 'aaa'

console.log(o1)