const { TOO_MANY_REQUESTS } = require('./constants')

const limitRateOptions = {
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: (req, res, next) => {
    return res
      .status(TOO_MANY_REQUESTS)
      .json({ status: 'error', code: TOO_MANY_REQUESTS, message: 'Too many requests' })
  }
}

module.exports = limitRateOptions
