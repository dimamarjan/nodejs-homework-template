const { addContactModel } = require('../../model')
const { CREATED } = require('../../helpers/constants')

const addContactController = async (req, res, next) => {
  try {
    const user = req.user
    const newContact = req.body
    const createdContact = await addContactModel(user, newContact)
    return res
      .status(CREATED)
      .json({
        status: 'succsess',
        code: CREATED,
        data: {
          id: createdContact.id,
          name: createdContact.name,
          email: createdContact.email,
          phone: createdContact.phone,
          owner: {
            email: createdContact.owner.email,
            subscription: createdContact.owner.subscription
          },
        }
      })
  } catch (err) {
    next(err)
  }
}

module.exports = addContactController
