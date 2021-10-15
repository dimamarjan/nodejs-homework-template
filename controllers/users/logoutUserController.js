const { updateUserTokenModel } = require('../../model')
const { NO_CONTENT } = require('../../helpers/constants')

const logoutUserController = async (req, res, next) => {
  try {
    const id = req.user.id
    await updateUserTokenModel(id, null)
    return res.status(NO_CONTENT).json({})
  } catch (err) {
    next(err)
  }
}

module.exports = logoutUserController
