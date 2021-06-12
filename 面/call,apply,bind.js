// 

function get(line){
  function getMax(line){
  let left = 1,right = left
    let max = 0
    while(right < line.length){
      right = left
      while(line[right] == '1') right++
      if(right-left > max) max = right - left
      left = right
      while(line[left] == '0') left++
    }
    return max
}
  if(line == '' || line == '0') return 0
  if(line[0] == '0') {
    return getMax(line)
  }else{
    // console.log(111,line)
    let j = line.length-1
    while(line[j] == '1') j--
    let str = line.slice(j,line.length) + line.slice(0,j)
    return getMax(str)
  }
}

// console.log(get('11101'))

function maxProfit( prices ) {
  // write code here
// if(prices.length < 2) return 0
// 1.有两种状态：第i天的时候持股和不持股
let dp = new Array(prices.length)
for(let i=0;i<prices.length;i++){
  dp[i] = [0,0]
}

console.log(dp)
dp[0][0] = 0
dp[0][1] = -prices[0]
for(let i = 1; i < prices.length; i++){
  dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
  dp[i][1] = Math.max(dp[i-1][1], -prices[i])
}
return dp[prices.length-1][0]
}

console.log(maxProfit([1,4,2]))