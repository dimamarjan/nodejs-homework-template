const express = require('express')
const router = express.Router()
const controllers = require('../../controllers')

const { userValidation } = require('../../middlewares/validations')
const guard = require('../../helpers/guard')
const upload = require('../../middlewares/upload')

router.get('/current', guard, controllers.currentUserController)

router.post('/singup', userValidation, controllers.singupUserController)

router.post('/login', userValidation, controllers.loginUserController)

router.post('/logout', guard, controllers.logoutUserController)

router.patch('/avatar', guard, upload.single('avatar'), controllers.avatarUserController)

module.exports = router
