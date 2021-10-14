const express = require('express')
const router = express.Router()
const {
  singupUserController,
  loginUserController,
  logoutUserController,
  currentUserController
} = require('../../controllers')
const guard = require('../../helpers/guard')

router.get('/current', guard, currentUserController)

router.post('/singup', singupUserController)

router.post('/login', loginUserController)

router.post('/logout', guard, logoutUserController)

module.exports = router
