const { createUserModel, getUserByEmailModel } = require('../../model')
const { CREATED, CONFLICT } = require('../../helpers/constants')

const createUserController = async (req, res, next) => {
  try {
    const conflictUser = await getUserByEmailModel(req.body.email)
    if (conflictUser) {
      return res
        .status(CONFLICT)
        .json({
          status: 'error',
          code: CONFLICT,
          message: 'Email in use'
        })
    }
    const createdUser = await createUserModel(req.body)
    return res
      .status(CREATED)
      .json({
        status: 'succsess',
        code: CREATED,
        user: {
          email: createdUser.email,
          subscription: createdUser.subscription
        }
      })
  } catch (err) {
    next(err)
  }
}

module.exports = createUserController
