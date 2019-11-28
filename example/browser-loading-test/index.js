const Koa = require('koa');
const static = require('koa-static');
const app = new Koa();
app.use(static('./static', {
  defer: true
}))

app.use(async (ctx, next) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, +ctx.query.lazy || 0)
  })
  next();
})
app.listen(8080)