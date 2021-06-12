// Number : 8 bytes
// Boolean: 4 bytes
// String : 2 bytes

function sizeOf(obj){
  // if(Object.prototype.toString.call(obj)) return Object.prototype.toString.call(obj)
  const type = typeof obj
  if(type == 'number') return 8
  else if(type == 'boolean') return 4
  else if(type == 'string') return obj.length * 2
  else{
    if(Array.isArray(obj)){
      return obj.map(sizeOf).reduce((pre,cru) => pre+cru, 0)
    }else{
      if(obj == null) return 
      let bytes = 0
      const keys = Object.keys(obj)
      let map = new Map() // 存在key不同，但是val相同，引用，只计算一遍
      keys.forEach(key => {
        // 如果value已经计算过了，则只需要计算key的大小，因为object的key也占用内存
        if(map.has(obj[key])) bytes += sizeOf(key)
        else{
          map.set(obj[key])
          bytes += sizeOf(key) + sizeOf(obj[key])
        }
      })
      return bytes
    }
  }
}
let xx = [true]
console.log(sizeOf({a:1,
  b:'string',
  c: xx,
  d:xx
}))