const jwt = require('jsonwebtoken')
require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY
const { UNAUTH, OK } = require('../../helpers/constants')

const {
  getUserByEmailModel,
  updateUserTokenModel
} = require('../../model')

const loginUserController = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await getUserByEmailModel(email)
    const isValidPassword = user.isValidPassword(password)
    if (!user || !isValidPassword) {
      return res
        .status(UNAUTH)
        .json({
          status: 'error',
          code: UNAUTH,
          message: 'Email or password is wrong',
        })
    }
    const userId = user.id
    const payload = { id: userId }
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })
    await updateUserTokenModel(userId, token)
    return res
      .json({
        status: 'success',
        code: OK,
        token: token,
        user: {
          email: user.email,
          subscription: user.subscription
        },
      })
  } catch (err) {
    next(err)
  }
}

module.exports = loginUserController
