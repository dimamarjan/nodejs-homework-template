const express = require('express')
const router = express.Router()
const {
  singupUserController,
  loginUserController,
  logoutUserController,
  currentUserController
} = require('../../controllers')
const { userValidation } = require('../../middlewares/validations')
const guard = require('../../helpers/guard')

router.get('/current', guard, currentUserController)

router.post('/singup', userValidation, singupUserController)

router.post('/login', userValidation, loginUserController)

router.post('/logout', guard, logoutUserController)

module.exports = router
