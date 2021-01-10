function transMap(str){
  let map = new Map()
  for(let i=0;i<str.length;i++){
    if(!map.get(str.charAt(i))){
      map.set(str.charAt(i),1)
    }else{
      map.set(str.charAt(i), map.get(str.charAt(i))+1)
    }
  }
  return map
}



var findTheDifference = function(s, t) {
  let mapS = transMap(s)
  let mapT = transMap(t)
  console.log(mapS)
  console.log(mapT)
  let flag = ''
  mapT.forEach((val,key) => {
    console.log(val,key)
    if(mapS.get(key) != val){
      flag = key
      return
    }
    // console.log(val,key)
  })
  return flag
};

findTheDifference("abcd", "abcdd")
