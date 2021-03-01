/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle == '') return 0
  if(haystack.toString() === needle.toString()) return 0
  //kmp算法求解
  //1求解跳转table（可理解为双指针的第二指针）
  let table = Array(needle.length).fill(0)      // table[i]代表第i个元素前（在0 ~ i-1）个元素中有table[i]个元素是重复子串。
  {
    let index = 1     //从1开始检索needle，table[0]必定为0
    let num = 0       //用于确定table[i]的值
    while(index < needle.length){
      if(needle[index] === needle[num]){
        //说明有了一个重复字符串，指针后移
        index++
        num++
        table[index] = num
      }else{
        if(num > 0)
          num = table[num ]
        else
          index++
      }
    }
  }
console.log(table);
  //匹配
  {
    let hIndex = 0
    let nIndex = 0
    while(hIndex < haystack.length && nIndex < needle.length){
      if(haystack[hIndex] === needle[nIndex]){
        hIndex++
        nIndex++
      }else{
        if(nIndex == 0)
          hIndex++
        else{
          nIndex = table[nIndex]
        }
      }
    }
    console.log('---',hIndex,nIndex)
    if(nIndex === needle.length)
    return hIndex - needle.length
  }
  return -1
};
console.log();
console.log(strStr('aabaaabaaac','aabaaac'))
console.log([1].toString() == [1].toString());