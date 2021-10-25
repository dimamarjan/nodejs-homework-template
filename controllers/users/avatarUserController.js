const fs = require('fs/promises')
const path = require('path')
require('dotenv').config()
const USERS_AVATAR = process.env.USERS_AVATAR
const { OK } = require('../../helpers/constants')
const { updateUserAvatarModel } = require('../../model')
const UploadAvatars = require('../../services/uploadAvatars')

const avatarUserController = async (req, res, next) => {
  try {
    if (req.user) {
      const { id, avatarURL } = req.user
      const uploads = new UploadAvatars(USERS_AVATAR)
      const avatarUrl = await uploads.saveImage({ id, imgData: req.file })
      try {
        await fs.unlink(path.join('public', USERS_AVATAR, avatarURL))
      } catch (err) {
        console.log('no previous image')
      }
      const avatarPath = path.join(USERS_AVATAR, avatarUrl)
      await updateUserAvatarModel(id, avatarPath)
      return res
        .json({
          status: 'success',
          code: OK,
          user: {
            avatarURL: avatarPath
          },
        })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = avatarUserController
