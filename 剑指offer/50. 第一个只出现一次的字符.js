/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let map =  new Map()
  for(let i=0; i<s.length; i++){
    if(!map.has(s[i])) map.set(s[i], true)
    else map.set(s[i], false)
  }
  for(let [key,val] of map){
   if(val) return key
  }
  return ' '
};