const express = require('express')
const router = express.Router()
const {
  listContactsController,
  getContactByIdController,
  addContactController,
  removeContactController,
  changeContactController,
  updateStatusContactController
} = require('../../controllers')
const {
  contactValidator,
  contactValidatorChanges,
  contactValidatorFavoriteChanges
} = require('../../middlewares/validations')
const guard = require('../../helpers/guard')

router
  .get('/', guard, listContactsController)
  .post('/', guard, contactValidator, addContactController)

router
  .get('/:contactId', guard, getContactByIdController)
  .delete('/:contactId', guard, removeContactController)
  .put('/:contactId', guard, contactValidatorChanges, changeContactController)

router.patch('/:contactId/favorite', guard, contactValidatorFavoriteChanges, updateStatusContactController)

module.exports = router
