var firstUniqChar = function(s) {
  s = s.split('')
  let map = new Map()
  s.forEach(val => {
    if(map.get(val) == undefined) map.set(val,1)
    else map.set(val, map.get(val)+1)
  });

  let cha = ''
  for(let val of map){
    if(val[1] == 1){
      return s.indexOf(val[0])
    }
    console.log(val)
  }

  return -1
  
};

console.log(firstUniqChar('loveleetcode'))