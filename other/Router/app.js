const Koa = require('koa2')
const path = require('path')
const koaStatic = require('koa-static')
const app = new Koa()

app.use(koaStatic(path.join(__dirname),{
  index:'router.html'
}))
// console.log(path.join(__dirname, 'router.html'));
app.listen(8000, () => {
  console.log('App listening at port 8000')
})