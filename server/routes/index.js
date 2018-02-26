let router = require('koa-router')()
let userctrl = require('../app/controllers/user/user_controller')

router.get('/api/user/getUser', userctrl.getUser)
router.get('/api/user/addUser', userctrl.addUser)

module.exports = router