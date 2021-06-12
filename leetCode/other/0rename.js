const fs = require('fs')

// 获取 2021目录下所有文件的文件名数组
let lists = fs.readdirSync('./2021')  // 原文件名   ‘日期’-‘题目编号’‘题目名字’

lists.forEach(list => {
  let name = list.split('-')[1]
  let index = 0

  while(name[index] >= 0 && name[index] <= 9) index++
  let number = name.substring(0, index)
  number = number.trim()
  while(number.length < 4){
    number = '0' + number
  }
  // console.log(number + '-' + name.substring(index,name.length))   // 现在文件名  ‘题目编号’-‘题目名字’
  fs.rename(`./2021/${list}`, './2021/' + number + '-' + name.substring(index,name.length), (err,res) => {
    console.log('err', err)
    console.log('res', res)
  })

})