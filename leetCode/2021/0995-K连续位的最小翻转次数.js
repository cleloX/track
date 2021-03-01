/**
 * 在仅包含 0 和 1 的数组 A 中，一次 K 位翻转包括选择一个长度为 K 的（连续）子数组，同时将子数组中的每个 0 更改为 1，而每个 1 更改为 0。

返回所需的 K 位翻转的最小次数，以便数组没有值为 0 的元素。如果不可能，返回 -1。
*/

//暴力：从左到右，遇到0则翻转接下来的k个数

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var minKBitFlips = function(A, K) {
  if(A.indexOf(0) === -1) return 0
  let left = 0, right = K - 1
  let num = 0
  while(right < A.length){
    while(A[left] === 1 ){
      left++,
      right++
    }
    if(A[left] === 0 && right < A.length){
      for(let i=left;i<=right;i++){
        if(A[i] === 0) A[i] = 1
        else A[i] = 0
        num += 1
      }
    }

    left++,
    right++

    
  }
  if(A.indexOf(0) === -1) return num / K
  else return -1
};

console.log(minKBitFlips([1,1,1], 1));