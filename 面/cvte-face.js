let task = [
  {
    name:'task1',
    time:1,
    dependency:''
  },
  {
    name:'task2',
    time:2,
    dependency:''
  },
  {
    name:'task3',
    time:3,
    dependency:'task1'
  },
  {
    name:'task4',
    time:4,
    dependency:'task5'
  },
  {
    name:'task5',
    time:5,
    dependency:'task3'
  },
]

function getTime(task){
  let map = new Map()
  // 创建一个map，以每个任务的name为键值，如果有依赖，则以object为值，否则以任务时间为值（可以直接根据类型知道是否有依赖，作为深度搜索的条件）
  task.forEach(obj => {
    map.set(obj.name, obj)
    if(obj.dependency){
      map.set(obj.name, obj)
    }else{
      map.set(obj.name, obj.time)
    }
  })
  let max = 0
  // 遍历map
  for (let [name, obj] of map) {
    let  num = 0
// 如果 typeof obj == 'object'，则说明当前任务对象有依赖，则需要深度遍历
    while(typeof obj == 'object'){
      num += obj.time
      map.set(obj.name, obj.time)  // 代表当前有依赖的任务已经遍历到了，将map值设为time
      obj = map.get(obj.dependency) // 继续遍历下一个有依赖的任务
    }
    // 在while循环之后，num代表在任务name之后所有的任务时间总和
    num += obj  // 加上当前时间，代表 当前任务时间 + 以当前任务为开头的所有任务的时间总和
    map.set(name, num)
    // console.log(num)
    if(max < num) max = num
  }
  return max
}

console.log(getTime(task)) 