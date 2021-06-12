/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  const sumA = A.reduce((pre,cru) => pre + cru), sumB = B.reduce((pre,cru) => pre + cru)
  let avg = (sumA + sumB) / 2
  if(avg != parseInt(avg)) return 0
  A = new Set(A)
  console.log(A);
  console.log(sumA, sumB)

  for(let i=0;i<B.length;i++){
    console.log(avg -sumB + B[i],B[i],B)
    if(A.has(avg -sumB + B[i])) return [avg -sumB + B[i], B[i]]
    break
  }
  return 0
};

console.log(fairCandySwap([2], [1,3]));