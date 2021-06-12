/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = Array(m*n).fill(0)
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      if(i === 0 || j === 0) dp[i*n+j] = 1
      else dp[i*n+j] = dp[(i-1)*n+j] + dp[i*n+j-1] 
    }
  }
  return dp[m*n-1]
};