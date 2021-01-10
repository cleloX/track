var myAtoi = function(s) {
  s = s.trim().split('')
  let str = s.shift()
  
  console.log('------','.' > 0)
  console.log(typeof str)
  let symbols = false
  if(str == '-') {
    console.log('-')
    symbols = true
  }else if(str == '+'){
    symbols = false
    console.log('+')
  }else if(str <= 'z' && str >= 'A'){
    console.log('---')
    return 0
  }
  // str = symbols + str

 
  for (let index = 0; index < s.length; index++) {
    if(s[index] >= 0 && s[index] <= 9) {
      str += s[index];
      console.log(str,'str')
    }else{
      break;
    }
    
  }
  
  str = parseInt(str)
  if(symbols){
    str = str
  }
  if(isNaN(str)) return 0
  console.log(str,symbols)
  if(str < -Math.pow(2,31)) return -Math.pow(2,31)
  if(str > Math.pow(2,31)-1) return Math.pow(2,31)-1
  return str

};

console.log(myAtoi("+-12"))