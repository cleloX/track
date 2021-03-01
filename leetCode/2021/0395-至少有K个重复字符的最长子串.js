/* 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  let map = new Map()
    for(let i=0;i<s.length;i++){
      if(!map.get(s[i])) map.set(s[i], 1)
      else map.set(s[i], map.get(s[i])+1)
    }
  let left = -1,right = 0
  while(right < s.length){
    if(map.get(s[right]) < k)
  }
  
};
console.log(longestSubstring("adbabbc", 2))