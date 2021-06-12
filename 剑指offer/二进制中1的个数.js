function NumberOf1(n)
{
    // write code here
    
    let num = n.toString(2) + 1
    console.log(num)
    let res = 0
    for(let i=0; i<num.length; i++){
      if(num[i] === '1') res++
    }

    return res
}

console.log(NumberOf1(214748367))