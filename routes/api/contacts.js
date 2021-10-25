const express = require('express')
const router = express.Router()
const controllers = require('../../controllers')
const validators = require('../../middlewares/validations')
const guard = require('../../helpers/guard')

router
  .get('/', guard, controllers.listContactsController)
  .post('/', guard, validators.contactValidator, controllers.addContactController)

router
  .get('/:contactId', guard, controllers.getContactByIdController)
  .delete('/:contactId', guard, controllers.removeContactController)
  .put('/:contactId', guard, validators.contactValidatorChanges, controllers.changeContactController)

router.patch('/:contactId/favorite', guard, validators.contactValidatorFavoriteChanges, controllers.updateStatusContactController)

module.exports = router
