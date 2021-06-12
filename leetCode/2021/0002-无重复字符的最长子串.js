// 滑动窗口
// 开启一个新的子串，说明必定有当前字符出现重复，则可以

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0
  let str = []
  for(let i=0;i<s.length;i++){
    if(str.indexOf(s[i]) === -1) str.push(s[i])
    else{
      if(max < str.length) max = str.length
      str.push(s[i])
      
      while(str[0] != s[i]) str.shift()
      str.shift()
    }
  }
  if(max < str.length) max = str.length
  return max
};

console.log(lengthOfLongestSubstring(" "));