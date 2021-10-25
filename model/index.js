const listContactsModel = require('./contacts/listContactsModel')
const getContactByIdModel = require('./contacts/getContactByIdModel')
const removeContactModel = require('./contacts/removeContactModel')
const addContactModel = require('./contacts/addContactModel')
const changeContactModel = require('./contacts/changeContactModel')
const updateStatusContactModel = require('./contacts/updateStatusContactModel')

const createUserModel = require('./users/createUserModel')
const getUserByIdModel = require('./users/getUserByIdModel')
const getUserByEmailModel = require('./users/getUserByEmailModel')
const updateUserTokenModel = require('./users/updateUserTokenModel')
const updateUserAvatarModel = require('./users/updateUserAvatarModel')

module.exports = {
  listContactsModel,
  getContactByIdModel,
  removeContactModel,
  addContactModel,
  changeContactModel,
  updateStatusContactModel,

  createUserModel,
  getUserByIdModel,
  getUserByEmailModel,
  updateUserTokenModel,
  updateUserAvatarModel
}
