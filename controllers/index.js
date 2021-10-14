const listContactsController = require('./contacts/listContactsController')
const getContactByIdController = require('./contacts/getContactByIdController')
const addContactController = require('./contacts/addContactController')
const removeContactController = require('./contacts/removeContactController')
const changeContactController = require('./contacts/changeContactController')
const updateStatusContactController = require('./contacts/updateStatusContactController')

const singupUserController = require('./users/singupUserController')
const loginUserController = require('./users/loginUserController')
const logoutUserController = require('./users/logoutUserController')
const currentUserController = require('./users/currentUserController')

module.exports = {
  listContactsController,
  getContactByIdController,
  addContactController,
  removeContactController,
  changeContactController,
  updateStatusContactController,

  singupUserController,
  loginUserController,
  logoutUserController,
  currentUserController
}
