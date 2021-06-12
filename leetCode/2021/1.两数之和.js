/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = new Map()
    numbers.forEach((val, index) => {
      val = target - val
      if(!map.has(val))
        map.set(val, [index])
      else{
        let arr = map.get(val)
        arr.push(index)
        map.set(val, arr)
      }
    })
    
    let val = null
    for(let index = 0; index < numbers.length; index++){
      val = numbers[index]
      if(map.has(val)){
        let indexs = map.get(val)
        if(indexs.length >= 2){
          return [indexs[0], indexs[1]]
        }else if(indexs.length == 1 && index != indexs[0]){
          return [index, indexs[0]]
        }
      }
    }
};
// @lc code=end

