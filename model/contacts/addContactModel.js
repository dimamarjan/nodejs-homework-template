const Contact = require('../../schemas/contacts')
const phoneNumberFormatter = require('../../utils/phoneNumberFormatter')

const addContactModel = async (user, { name, email, phone, favorite }) => {
  try {
    const newContact = {
      name,
      email,
      phone: phoneNumberFormatter(phone),
      favorite: favorite || false,
      owner: user
    }
    const contact = await Contact.create(newContact)
    return contact
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = addContactModel
