

var minCostClimbingStairs = function(cost) {
  let index = 2
  let num = [cost[0], cost[1]]
  while(index < cost.length){
    num[index] = cost[index] + Math.min(num[index-1],num[index-2])
    
    index++

  }
 
  return Math.min(num[index-1],num[index-2])
};

// var minCostClimbingStairs = function(cost) {
//   let dp = new Array(cost.length + 1), i = 1
//   while(i++ < cost.length) 
//       // console.log('---',i)
//       dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
//   return dp[i - 1]
// };



console.log(minCostClimbingStairs([1, 2,3,3,3,3,3]))