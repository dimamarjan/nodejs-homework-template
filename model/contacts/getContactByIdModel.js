const Contact = require('../../schemas/contacts')
const { NOT_FOUND } = require('../../helpers/constants')

const getContactByIdModel = async (userId, contactId) => {
  try {
    const contact = await Contact.findById({ _id: contactId, owner: userId }).populate({
      path: 'owner',
      select: 'email subscription -_id'
    })
    return contact
  } catch {
    throw new Error(NOT_FOUND)
  }
}

module.exports = getContactByIdModel
