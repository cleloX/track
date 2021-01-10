

var reorganizeString = function(s) {
  let map = new Map()
  for(let i = 0; i < s.length; i++){
    if(map.get(s[i]) == undefined) map.set(s[i],1)
    else map.set(s[i],map.get(s[i])+1)
  }
  let maxLen = max = {key:'',num:0} //获取重复最多的字符个数
  let arr = [] //存储无重复字符串
  let str = ''
  let mmap = new Map()

  //按照以出现次数从大到小重新建立一个map
  //以个数最大的字符为基础（插入其他字符），获取出现最多的字符+个数
  while(map.size){
    map.forEach((item, key) => {
      if(item > max.num) {
       max.num = item
       max.key = key
      }
     })
     mmap.set(max.key, max.num)
     map.delete(max.key)
     if(max.num > maxLen.num) maxLen = max
     max = {key:'',num:0}
  }

  if(maxLen.num > (s.length+1)/2) return ""
  
  //将出现最多的字符放入数组中
  for(let i=0;i<maxLen.num;i++){
    arr.push(maxLen.key)
  }
  mmap.delete(maxLen.key)
  let index = 1
  while(mmap.size){
    mmap.forEach((val,key) => {
      for(;index<=arr.length && val > 0;){
        
        arr.splice(index,0,key)
        index = index+2
        index = index % (arr.length+1) 
        // if(index == 0) index = 1
        
        val--
        console.log(arr,index,val)
      }
      mmap.delete(key)
    })
  }

  return arr.join('')
};

console.log(reorganizeString('abbabbaaabc'))