/*if(arr[arr.length-1] == s[i]){
  transition.push(s[i])
  transition.unshift(arr.pop())
  let flag = 1
  while(flag){
    if(s[i+flag] != undefined && arr[arr.length-1] == s[i+flag] ){
      transition.push(s[i+flag])
      transition.unshift(arr.pop())
      flag++
      console.log(flag)
    }else{
      flag = 0
      arr = arr.concat(...transition)
      
    }
  }
  if(max.length < transition.length) max = transition
  transition = []
}else if(arr[arr.length-2] == s[i]){
  transition.push(s[i])
  transition.unshift(arr.pop())
  transition.unshift(arr.pop())
  let flag = 1
  while(flag){
    if(arr[arr.length-1] == s[i+flag]){
      transition.push(s[i+flag])
      transition.unshift(arr.pop())
      flag++
      console.log(flag)
    }else{
      flag = 0
      arr = arr.concat(...transition)
      
    }
  }
  if(max.length < transition.length) max = transition
  transition = []

}else{
  arr.push(s[i])
}
}
max = max.join('')
*/

var longestPalindrome = function(s='cbd') {
  if(s.length == 1) return s
  s = s.split('')
  let arr = []
  let max = s[0]
  let transition = []
  if(s.length == 2){
    if(s[0] != s[1]) return s[0]
    else return ''+s[0]+s[1]
  }
  let left = right = 0
  for(let i=1;i<s.length-1;i++){
    left = i-1
    right = i+1
    while(s[left] == s[i] && left >= 0) left--
    while(s[right] == s[i] && right < s.length) right++
    while(s[left] == s[right] && left >= 0 && right < s.length){
      left--
      right++
    }
    transition = s.slice(left+1, right)
    if(max.length < transition.length) max = transition
  }
  if(max.length <= 1) return max[0]
  return max.join('')
};

console.log(longestPalindrome())
// let a = [1]
// console.log(a[10])