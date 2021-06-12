// 统计所有小于非负整数 n 的质数的数量。

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if(n 2) return 0
  // else if(n == 1) return 0

  let arr = Array(n).fill(true)
  res = n - 2
  arr[0] = false, arr[1] = false
  let index = 2
  while(2 * index < n){
    if(arr[2 * index] == true){
      arr[2 * index] = false
      res--
    }
    index++
    
  }
  index = 2
  while(3 * index < n){
    if(arr[3 * index]){
      arr[3 * index] = false
      res--
    }
    index++
  }
  index = 2
  while(5 * index < n){
    if(arr[5 * index]){
      arr[5 * index] = false
      res--
    }
    index++
  }

  return res
};

console.log(countPrimes(10))