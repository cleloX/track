/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let arr0 = 0 // 代表当天买入当天卖出
  let arr1 = -prices[0] // 代表第i天结束时没有卖出（当然亏本了）
  let arr2 = 0 // 代表第i天结束时卖出
  for(let i=1;i<prices.length;i++){
    arr1 = Math.max(arr1, -prices[i])
    arr2 = Math.max(arr2,arr1 + prices[i])
  }
  return Math.max(arr2, arr0)
};
// @lc code=end

