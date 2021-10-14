const { changeContactModel } = require('../../model')
const { OK } = require('../../helpers/constants')

const changeContactController = async (req, res, next) => {
  try {
    const userId = req.user.id
    const bodyRequest = req.body
    const { contactId } = req.params
    const changedContact = await changeContactModel(userId, contactId, bodyRequest)
    return res
      .json({ status: 'succsess', code: OK, data: changedContact })
  } catch (err) {
    next(err)
  }
}

module.exports = changeContactController
