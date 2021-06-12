//思路：滑动窗口
//将字符串一个个入队列，如果遇到相同字符，则将第一次出现该字符的位置之前的串去除

var lengthOfLongestSubstring = function(s) {
  s = s.split('')
  let len = index = 0
  
  let arr = []
  s.forEach(item => {
    if(arr.indexOf(item) == -1){
      arr.push(item)
      index++
      // len = index
    }else{

      
      arr.push(item)
      arr = arr.slice(arr.indexOf(item)+1)
      index = arr.length
      
    }
    if(index>len) len = index
  })
  return len
};

console.log(lengthOfLongestSubstring('aa '))

// let strArr = [1,2,3,4,5]
// strArr =  strArr.slice(2)
// let arr = strArr.join('',',')
// console.log(arr)