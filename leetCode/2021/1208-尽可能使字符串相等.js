/**
 * 
 * 给你两个长度相同的字符串，s 和 t。

将 s 中的第 i 个字符变到 t 中的第 i 个字符需要 |s[i] - t[i]| 的开销（开销可能为 0），也就是两个字符的 ASCII 码值的差的绝对值。

用于变更字符串的最大预算是 maxCost。在转化字符串时，总开销应当小于等于该预算，这也意味着字符串的转化可能是不完全的。

如果你可以将 s 的子字符串转化为它在 t 中对应的子字符串，则返回可以转化的最大长度。

如果 s 中没有子字符串可以转化成 t 中对应的子字符串，则返回 0
**/

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
  let res = 0
  let charCode = []
 
  for(let i=0;i<s.length;i++){
    charCode.push(Math.abs(s[i].charCodeAt() - t[i].charCodeAt()))
  }
  let left = right = 0
  while(right < charCode.length && charCode[right] >maxCost) {
    left++
    right++
  }
  if(left === charCode.length) return 0
  res += charCode[left]
  while(right < charCode.length){
    if(res <= maxCost){
      right++
      res += charCode[right]
    }else{
      res -= charCode[left]
      left++
      right++
      res += charCode[right]
    } 
  }
  console.log(charCode);
  return right - left
};

console.log(equalSubstring("krrgw", "zjxss",19));