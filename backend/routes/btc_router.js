const Router = require('koa-router')
const router = new Router()
const appController = require('../controllers/app_controller')

router.get('/', appController.getAllBtcAddressInDb)

module.exports = router.routes()
