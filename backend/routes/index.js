module.exports = (router) => {
  router.prefix('/v1')
  router.use('/todos', require('./todos_router'))
  router.use('/btc', require('./btc_router'))
}
