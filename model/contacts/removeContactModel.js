const Contact = require('../../schemas/contacts')
const { NOT_FOUND } = require('../../helpers/constants')

const removeContactModel = async (userId, contactId) => {
  try {
    const contact = await Contact.findByIdAndDelete({ _id: contactId, owner: userId })
    return contact
  } catch {
    throw new Error(NOT_FOUND)
  }
}

module.exports = removeContactModel
