/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim()
  if(s === '') return ''
  s = s.split(' ')
  let result = s[s.length-1]
  if(s.length === 1) return result
  for (let i = s.length - 2; i >= 0; i--) {
    if(s[i] != '')
      result += ` ${s[i]}`
  }
  return result
};

console.log(reverseWords("  hello world!  "));