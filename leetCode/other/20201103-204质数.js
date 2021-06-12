var countPrimes = function(n) {
  let arr = new Array(n).fill(0)
  arr[0] = 1
  arr[1] = 1
  let th = [2,3,5,7]
  for(let i = 2;i<n;i++){
    th.forEach(val => {
      if(i % val == 0 && i / val > 1) arr[i] = 1
    })
  }
  console.log(11)
  let sum = 0
  for(let i = 2;i<n;i++){
    // arr[i*i] = 1
    if(!arr[i]){
      sum++
      if(i<Math.pow(n,0.5)) arr[i*i] = 1
    }
  }

  console.log(sum)
  return sum
};



console.log(countPrimes(499997))