const { OK } = require('../../helpers/constants')

const currentUserController = async (req, res, next) => {
  try {
    if (req.user) {
      return res
        .json({
          status: 'success',
          code: OK,
          user: {
            email: req.user.email,
            subscription: req.user.subscription
          },
        })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = currentUserController
