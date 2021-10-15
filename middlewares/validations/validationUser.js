const Joi = require('joi')

const validator = async (req, res, next) => {
  try {
    const validator = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['ua', 'com', 'net'] } }).required(),
      password: Joi.string().required()
    })
    const { error } = validator.validate(req.body)
    if (error) {
      next(error)
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = validator
