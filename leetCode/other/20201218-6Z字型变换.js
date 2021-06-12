



var convert = function(s, numRows) {
  if(numRows == 1) return s
  
  let arr = []
  for(let i = 0; i<numRows;i++){
    arr.push([])
  }
  s = s.split('')
  
  if(numRows == 2){
    s.forEach((val,index) => {
      arr[index % numRows].push(val)
    });
  }else{
    let index = 0
    let flag = s.length
    while(flag>0){
      while(index<numRows && flag > 0){
        arr[index].push(s.shift())
        index++
        flag--
        console.log(arr,'++',flag)
      }
      index = index-2
      while(index>0 && flag > 0){
        arr[index].push(s.shift())
        index--
        flag--
        console.log(arr,'--',flag)
      }
  
      
    }
  }
  

  // arr = arr.join().split(',').join('')
  let string = ''
  arr.forEach(ar => {
    ar.forEach(val => {
      if(val != undefined) string += val
    })
  })

  return string
};
console.log(convert("Lpdkhg,er", 3))