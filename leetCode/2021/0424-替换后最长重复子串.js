
var characterReplacement = function(s, k) {
  let left = 0
  let right = 0
  let max = 0

  while(right < s.length-1){
    let kk = k
    right = left
    let cruMax = 0
    do{
      console.log('--', left, right)
      if(s[left] != s[right] && kk > 0)
        kk--
      right++
      cruMax++
      
      
      
    }while(right < s.length && kk > 0 || right < s.length && s[right] === s[left])
    if(cruMax > max) max = cruMax
    while(left < s.length-1 && s[left] === s[left+1]) left++
    left++
    console.log(cruMax);
  }
  return max
};

console.log(characterReplacement("ABBB",1));