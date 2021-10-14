const { removeContactModel } = require('../../model')
const { OK } = require('../../helpers/constants')

const removeContactController = async (req, res, next) => {
  try {
    const userId = req.user.id
    const { contactId } = req.params
    await removeContactModel(userId, contactId)
    return res
      .json({ status: 'succsess', code: OK, message: 'contact deleted' })
  } catch (err) {
    next(err)
  }
}

module.exports = removeContactController
