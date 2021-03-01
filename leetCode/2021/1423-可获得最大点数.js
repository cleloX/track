/**
 * 几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。

每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。

你的点数就是你拿到手中的所有卡牌的点数之和。

给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。
*/


// 由题目可知：两边必定是连续的 -> 中间也必定是连续的 ；求两边最大，也即是求中间最小

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  let sum = cardPoints.reduce((pre, cru) => pre + cru)
  if(cardPoints.length === k) return sum
  let min = Infinity
  let i = 0, j = cardPoints.length - k - 1
  while(j < cardPoints.length){
    let res = 0
    for (let index = i; index <= j; index++) {
      res += cardPoints[index]
    }
    min = min < res ? min : res
    i++, j++
  }
  return sum - min
};

console.log(maxScore([9,7,7,9,7,7,9], 6));
// console.log(maxScore([9,7,7,9,7,7,9], 7));