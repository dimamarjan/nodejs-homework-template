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

router
  .get('/', listContactsController)
  .post('/', contactValidator, addContactController)

router
  .get('/:contactId', getContactByIdController)
  .delete('/:contactId', removeContactController)
  .put('/:contactId', contactValidatorChanges, changeContactController)

router.patch('/:contactId/favorite', contactValidatorFavoriteChanges, updateStatusContactController)

module.exports = router
