/**
 * 给定一个正整数数组 A，如果 A 的某个子数组中不同整数的个数恰好为 K，则称 A 的这个连续、不一定独立的子数组为好子数组。

（例如，[1,2,3,1,2] 中有 3 个不同的整数：1，2，以及 3。）

返回 A 中好子数组的数目。

*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
  let map = new Map()
  let left = right = 0
  let res = 0
  while(right < A.length || map.size === 3){
    if(map.has(A[right])){
      map.set(A[right], map.get(A[right])+1)
    }else{
      if(map.size < K){
        map.set(A[right], 1)
      } else{
        // 此时不同元素个数大于K，开始left右移 缩小滑窗
        while(map.size === K){
          if(map.get(A[left]) === 1) map.delete(A[left])
          else{
            map.set(A[left], map.get(A[left])-1)
            res++
            left++
          }
          
        }
        left++
        right--
      }
    }
    if(map.size === K) res++  
    right++  
  }
  return res
};
var subarraysWithKDistinct = function(A, K) {
  const n = A.length;
  const num1 = new Array(n + 1).fill(0);
  const num2 = new Array(n + 1).fill(0);
  let tot1 = 0, tot2 = 0;
  let left1 = 0, left2 = 0, right = 0;
  let ret = 0;
  while (right < n) {
      if (num1[A[right]] == 0) {
          tot1++;
      }
      num1[A[right]]++;
      if (num2[A[right]] == 0) {
          tot2++;
      }
      num2[A[right]]++;
      while (tot1 > K) {
          num1[A[left1]]--;
          if (num1[A[left1]] == 0) {
              tot1--;
          }
          left1++;
      }
      while (tot2 > K - 1) {
          num2[A[left2]]--;
          if (num2[A[left2]] == 0) {
              tot2--;
          }
          left2++;
      }
      ret += left2 - left1;
      right++;
  }
  return ret;
};

console.log(subarraysWithKDistinct([1,2,1,2,3], 2));