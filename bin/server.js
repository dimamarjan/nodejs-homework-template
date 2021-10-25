const app = require('../app')
const db = require('../db/db')
const createAvatarFolder = require('../helpers/createFolder')
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT || 3000
const UPLOAD_DIR = process.env.UPLOAD_DIR
const USERS_AVATAR = process.env.USERS_AVATAR

const pathToAvatarFolder = path.join(__dirname, '..', 'public', USERS_AVATAR)

db.then(() => {
  app.listen(PORT, async () => {
    await createAvatarFolder(UPLOAD_DIR)
    await createAvatarFolder(pathToAvatarFolder)
    console.log(`Server running. Use our API on port: ${PORT}`)
  })
}).catch(err => {
  console.log(err)
})
