const Contact = require('../../schemas/contacts')
const { NOT_FOUND } = require('../../helpers/constants')

const updateStatusContactModel = async (userId, contactId, body) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      { _id: contactId, owner: userId },
      { favorite: body },
      { new: true }
    ).populate({
      path: 'owner',
      select: 'email subscription -_id'
    })
    return contact
  } catch {
    throw new Error(NOT_FOUND)
  }
}

module.exports = updateStatusContactModel
