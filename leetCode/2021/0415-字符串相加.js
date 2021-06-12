/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。


提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  num1 = num1.split('').map(val => parseInt(val))
  num2 = num2.split('').map(val => parseInt(val))
  num1.length > num2.length ? '' : [num1, num2] = [num2, num1]
  let lenX = num1.length - num2.length
  let num = 0
  let jinwei = 0
  let mid = 0
  for(let i=num1.length-1;i>=0;i--){
    if(i - lenX < 0) num = 0
    else num = num2[i-lenX]

    mid = (num1[i] + num + jinwei)
    num1[i] = mid  % 10
    console.log(num1);
    jinwei = parseInt(mid / 10)
  
  }
  if(jinwei) num1.unshift(jinwei)

  let result = 0
  
  return parseInt(num1.join(''))
};

console.log(addStrings('1', '9'));