var intToRoman = function(num) {
  let nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  let key = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

let result = ''
  nums.forEach((val,index) => {
    while(num >= val){
      num -= val
      result += key[index]
    }
  });
return result
}


console.log(intToRoman(321))