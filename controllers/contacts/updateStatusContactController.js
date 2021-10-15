const { updateStatusContactModel } = require('../../model')
const { OK } = require('../../helpers/constants')

const updateStatusContactController = async (req, res, next) => {
  try {
    const userId = req.user.id
    const { favorite } = req.body
    const { contactId } = req.params
    const changedContact = await updateStatusContactModel(userId, contactId, favorite)
    return res
      .json({ status: 'succsess', code: OK, data: changedContact })
  } catch (err) {
    next(err)
  }
}

module.exports = updateStatusContactController
