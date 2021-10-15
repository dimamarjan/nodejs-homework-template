const contactValidator = require('./validatorCreation')
const contactValidatorChanges = require('./validatorChanges')
const contactValidatorFavoriteChanges = require('./validatorFavoritesChange')
const userValidation = require('./validationUser')

module.exports = {
  contactValidator,
  contactValidatorChanges,
  contactValidatorFavoriteChanges,

  userValidation
}
