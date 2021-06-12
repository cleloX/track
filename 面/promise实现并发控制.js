var urls = [
  {
    url:'',
    time:5000
  },
  {
    url:'',
    time:500
  },
  {
    url:'',
    time:800
  },{
    url:'',
    time:2000
  },{
    url:'',
    time:2000
  },{
    url:'',
    time:300
  },{
    url:'',
    time:600
  },{
    url:'',
    time:1000
  },{
    url:'',
    time:900
  },{
    url:'',
    time:800
  },{
    url:'',
    time:1500
  },{
    url:'',
    time:2300
  },{
    url:'',
    time:1200
  },{
    url:'',
    time:2500
  },{
    url:'',
    time:2800
  },{
    url:'',
    time:3200
  },{
    url:'',
    time:800
  },{
    url:'',
    time:400
  },
]

// 需要进行的异步操作，
function handler(url){
  return new Promise((resolve, reject) => {
    console.log('start'+url.time)
    setTimeout(function(){
      console.log('end'+url.time)
      resolve(url.time)
    },url.time)
  },)
}


 function promiseAll(promises){
  return new Promise( (resolve, reject) => {
    if(!Array.isArray(promises)){
      reject(new Error('参数必须为数组'))
    }

    let result = []
    let count = 0
    for(let i=0;i<promises.length;i++){
      Promise.resolve(promises[i]).then(res => {
        result[i] =  res
        count++
        if(count === promises.length) resolve(result)
      },
      err => reject(err)
      )
      
      
      
    }
    
  })
}
let promises = urls.map(url => handler(url))

promiseAll(promises).then(res => console.log(res))


// function promiseLimit(handler, urls, limit){
//   let request = [].concat(urls) // 拷贝一下要请求的地址列表

//   // 截取长度为limit的数组出来，也就是前n个要发送请求的网址
//   // 还用map函数，将其数组元素改变为5个异步请求
//   // 在网络请求上链接一个.then 并return一个当前网络请求在promise中的下边index（利用index可以知道数组中的哪一个Promise执行完毕）, 这样，可以在每个promise的下一个then中获得index
//   let promise = request.splice(0, limit).map((url, index) => {
//     return handler(url).then(() => {
//       return index
//     })
//   })

//   // 获得promise数组中最先执行完毕的请求（Promise），并且链接then可以获得当前元素的index
//   let p = Promise.race(promise)
//   for(let i=0;i<request.length;i++){
//     p = p.then(index => {
//       // 将数组promise中已经执行完毕的请求（Promise）替换剩余没有执行的请求
//       promise[index] = handler(request[i]).then(() => {
//         return index
//       })
//       // 再次返回最快的一个请求（Promise）
//       return Promise.race(promise)
//     })
//   }
// }

// promiseLimit(handler, urls, 4)