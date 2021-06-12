var reverse = function(x) {

  x = x.toString().split('')
  let isPlus = true
  if(x[0] == '-'){
    isPlus = false
    x.shift()
  }
  x = x.reverse()
  if(x[0] == 0){
    x.shift()
  }
  x = Number(x.join(''))
  console.log(typeof x)
  if(!isPlus) x = -x
  if(x >= -Math.pow(2,31) && x <= Math.pow(2,31)-1) return x
  else return 0




  
};


console.log(reverse(-123))