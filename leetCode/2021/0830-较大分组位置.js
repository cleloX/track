var largeGroupPositions = function(s) {
  s = s.split('')
  let val = s[0]
  let start = 0
  let num = 1
  let result = []
  for (let i = 1; i <= s.length; i++) {
    if(s[i] == val){
      num ++
    }else{
      if(num >= 3){
        result.push([start, i-1])
      }
      start = i
      num = 1
      val = s[i]
    }
    
  }
  return result
};


console.log(largeGroupPositions("aaa"))