const Contact = require('../../schemas/contacts')
const phoneNumberFormatter = require('../../utils/phoneNumberFormatter')
const { NOT_FOUND } = require('../../helpers/constants')

const changeContactModel = async (userId, contactId, body) => {
  try {
    if (body.phone) {
      body.phone = phoneNumberFormatter(body.phone)
    }
    const contact = await Contact.findByIdAndUpdate(
      { _id: contactId, owner: userId },
      { ...body },
      { new: false }
    ).populate({
      path: 'owner',
      select: 'email subscription -_id'
    })
    return contact
  } catch {
    throw new Error(NOT_FOUND)
  }
}

module.exports = changeContactModel
