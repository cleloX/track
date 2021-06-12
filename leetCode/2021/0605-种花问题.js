var canPlaceFlowers = function(flowerbed, n) {
  if(flowerbed.length <= 2){
    if(flowerbed == [0] || flowerbed == [0,0]) return true
    return false
  }
  let i = 1
  while(i<flowerbed.length-1 && n){
    if(flowerbed[i] == 1){
      i += 2
    }else{
      if(flowerbed[i+1] == 1){
        i += 3
        if(flowerbed[i-1] == 0){
          n--
          console.log('14--')
        }
      }
      else{
        if(flowerbed[i-1] == 1) i++
        else{
          console.log('14--',n)
        flowerbed[i] = 1
        i += 2
        n--
        }
      }
    }
  }

  // console.log(n)
  if(!n){
    console.log(n)
    console.log("22")
    return true
  }
  else return false
};


console.log(canPlaceFlowers([1,0,1,0,1,0,1],1))
