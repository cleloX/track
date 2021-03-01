/**
 * 今天，书店老板有一家店打算试营业 customers.length 分钟。每分钟都有一些顾客（customers[i]）会进入书店，所有这些顾客都会在那一分钟结束后离开。

在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。 当书店老板生气时，那一分钟的顾客就会不满意，不生气则他们是满意的。

书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 X 分钟不生气，但却只能使用一次。

请你返回这一天营业下来，最多有多少客户能够感到满意的数量。
输入：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
输出：16
解释：
书店老板在最后 3 分钟保持冷静。
感到满意的最大客户数量 = 1 + 1 + 1 + 1 + 7 + 5 = 16.
*/

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, K) {
  let index = 0
  let result = 0
  function getter(index){
    let i = index
    let res = 0
    while(i < index+K){
      if(grumpy[i] === 1) res += customers[i]
      i++
    }
    // console.log('res',res);
    return res
  }
  for(let i=0;i<=customers.length - K ;i++){
    if(getter(i) > getter(index)) index = i
    if(grumpy[i] === 0) result += customers[i]
  }
  // console.log('reslut1', result);
  // console.log('index', index);
  let i = grumpy.length - K+1
    while(i < grumpy.length){
      if(grumpy[i] === 0) result += customers[i]
      i++
    }

  i = index
    while(i < index + K){
      if(grumpy[i] === 1) result += customers[i]
      i++
    }
  
    return result
};

console.log(maxSatisfied([1,0,1,2,1,1,7,5], 
                         [0,1,0,1,0,1,0,1], 3));