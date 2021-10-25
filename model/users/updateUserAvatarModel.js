const User = require('../../schemas/users')

const updateUserAvatarModel = async (userId, avatar) => {
  try {
    return await User.updateOne({ _id: userId }, { avatarURL: avatar })
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = updateUserAvatarModel
