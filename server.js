var koa          = require('koa'),
    app          = koa(),
    path         = require('path'),
    rewrite      = require('koa-rewrite'),
    staticCache  = require('koa-static-cache')

var port         = process.env.PORT || 3000,
    maxAge       = 0

// import { Klass } from 'hydraulik'
// import sets      from './sets.js'

// var klass = new Klass()

// sets.forEach(set => klass.push(require(`./${set}`)))

// export default klass.sets

// logger
app.use(function *(next){
  var start = new Date()
  yield next
  var ms = new Date() - start
  console.log('%s %s - %s', this.method, this.url, ms)
})



app.use(rewrite(/^\/(?!assets).*/, '/index.html'))
app.use(staticCache(path.join(__dirname, 'public'), { maxAge: maxAge }))

app.listen(port)
