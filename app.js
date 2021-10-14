const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const ratelimit = require('express-rate-limit')

const HttpCodes = require('./helpers/constants')
const limitRateOptions = require('./helpers/limitRateOptions')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(helmet())
app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json({ limit: 10000 }))

app.use('/api/', ratelimit(limitRateOptions))

app.use('/api/', require('./routes/api'))

app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res
      .status(HttpCodes.BAD_REQ)
      .json({ status: 'error', code: HttpCodes.BAD_REQ, message: err.message })
  }
  if (err.message === HttpCodes.NOT_FOUND) {
    return res
      .status(HttpCodes.NOT_FOUND)
      .json({ status: 'error', code: HttpCodes.NOT_FOUND, message: 'Not found' })
  } else {
    return res
      .status(HttpCodes.SERVER_ERR)
      .json({ status: 'error', code: HttpCodes.SERVER_ERR, message: err.message })
  }
})

module.exports = app
