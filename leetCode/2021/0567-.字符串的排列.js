/***
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

换句话说，第一个字符串的排列之一是第二个字符串的子串。

输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
*/



/**
 * 本题滑动窗口精要
*/
//由于需要遍历的子串长度均为 nn，我们可以使用一个固定长度为 nn 的滑动窗口来维护 
​	
//  ：滑动窗口每向右滑动一次，就多统计一次进入窗口的字符，少统计一次离开窗口的字符。



/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
  function reMap(){
    for (const [key, val] of map) {
      console.log(key, val);
      map.set(key, [val[0],val[0]])
    }
  }
  let map = new Map()

  for(let i=0;i<s1.length;i++){
    if(map.has(s1[i])) map.set(s1[i], [map.get(s1[i])[0]+1,map.get(s1[i])[1]+1])
    else map.set(s1[i], [1,1])
  }
  let left  = index = 0, right = s1.length - 1
  let res = false
  while(right < s2.length){
    reMap()
    index = left
    while(index <= right && map.get(s2[index])){
      // console.log('----------');
      if(map.get(s2[index])[1]){
        map.set(s2[index], [map.get(s2[index])[0],map.get(s2[index])[1]-1])
        index++
      }else{
        index = left
        break
      }
      
    }
    // console.log('---',map);
    index++
    left = index
    right = s1.length - 1 + left
    for (const [key, val] of map) {
      if(val[1] === 0) res = true
      else{
        res = false
        break
      }
    }
    if(res) return res

  }
  return false


};

console.log(checkInclusion("acd", "afaadkkk"));