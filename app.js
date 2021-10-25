const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const ratelimit = require('express-rate-limit')
const boolParser = require('express-query-boolean')
const path = require('path')

const HttpCodes = require('./helpers/constants')
const limitRateOptions = require('./helpers/limitRateOptions')
require('dotenv').config()
const USERS_AVATAR = process.env.USERS_AVATAR

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(helmet())
app.use(express.static(path.join(__dirname, 'public', USERS_AVATAR)))
app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json({ limit: 10000 }))
app.use(boolParser())

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

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason)
})

module.exports = app
