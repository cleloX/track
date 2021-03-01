/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim()
  if(s === '') return s
  // s = s.split(' ')
  let index = s.length
  let res = ""
  while(index >= 0){
    while(index >= 0 && s[index] === ' ') index--
    let word = []
    while(index >= 0 && s[index] != ' '){
      word.unshift(s[index])
      index--
    }
    if(index >= 0)
      res += word.join('') + ' '
    else 
      res += word.join(',')

  }
  return  res
};
console.log(reverseWords('a  bb    b '));