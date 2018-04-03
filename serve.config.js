const convert = require('koa-connect')
const history = require('connect-history-api-fallback')
const proxy = require('http-proxy-middleware')

module.exports = {
  add: (app, middleware, options) => {
    app.use(convert(proxy('/api', { target: 'http://localhost:3000' })))
    app.use(convert(history()))
  }
}
