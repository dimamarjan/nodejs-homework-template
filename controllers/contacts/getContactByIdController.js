const { getContactByIdModel } = require('../../model')
const { OK } = require('../../helpers/constants')

const getContactByIdController = async (req, res, next) => {
  try {
    const userId = req.user.id
    const { contactId } = req.params
    const contact = await getContactByIdModel(userId, contactId)
    return res
      .json({ status: 'succsess', code: OK, data: contact })
  } catch (err) {
    next(err)
  }
}

module.exports = getContactByIdController
