const { listContactsModel } = require('../../model')
const { OK } = require('../../helpers/constants')

const listContactsController = async (req, res, next) => {
  try {
    const userId = req.user.id
    const queryParams = req.query
    const contacts = await listContactsModel(userId, queryParams)
    return res
      .json({ status: 'succsess', code: OK, data: { contacts } })
  } catch (err) {
    next(err)
  }
}

module.exports = listContactsController
