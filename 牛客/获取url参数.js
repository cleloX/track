function getUrlParam(sUrl, sKey) {
  let props = sUrl.split('?')[1].split('#')[0].split('&')
  let res = []
  if(!sKey){
      if(sKey == '') return ''
      let obj = {}
      props.forEach(str => {
        if(!obj[str.split('=')[0]]){
          obj[str.split('=')[0]] = str.split('=')[1]
        }else{
          obj[str.split('=')[0]] = [].concat(obj[str.split('=')[0]],str.split('=')[1])
        }
          
      })
      // console.log(obj.key.join(''))
      return obj
  }else{
      props.forEach(str => {
          if(str.split('=')[0] == sKey) res.push(str.split('=')[1])
      })
      if(res.length == 1) return res[0]
      else if(res.length == 0) return ''
      return res
  }
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'))
let obj = {}
obj.a = 1
obj.a = 1
let c = [].concat(2, 3)
console.log(c)