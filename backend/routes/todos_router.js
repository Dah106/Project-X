const Router = require('koa-router')
const router = new Router()
const app_controller = require('../controllers/app_controller')

router.get('/', app_controller.findAll)
router.post('/', app_controller.create)
router.post('/:id', app_controller.update)
router.delete('/:id', app_controller.destroy)

module.exports = router.routes()
