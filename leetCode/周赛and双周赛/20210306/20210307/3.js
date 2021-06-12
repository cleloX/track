/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
  s = s.split('')
  let left = 0, right = 2
  let res = 0
  while(left<s.length - 2){
    right = left + 2
    let map = new Map()
    let max = 0, min = Infinity
    let flag = right
    while(right < s.length){
      if(flag == right){
        
        for (const c of s.slice(left, right+1)) {
          if(map.get(c)){
            map.set(c,map.get(c)+1)
          }else{
            map.set(c,1)
          }
        }
        
        for (const [key,val] of map) {
          if(val>max) max = val
          if(val < min) min = val
        }
      }else{
        let c = s[right]
        if(map.get(c)){
          map.set(c,map.get(c)+1)
        }else{
          map.set(c,1)
        }
        max = 0, min = Infinity
        for (const [key,val] of map) {
          if(val>max) max = val
          if(val < min) min = val
        }
      }
      res += max - min
      // console.log(max, min)
      right++
    }


    left++
  }
  return res

};

console.log(beautySum('xzvfsppsjfbxdwkqe'))