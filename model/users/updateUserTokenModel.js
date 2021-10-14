const User = require('../../schemas/users')

const updateTokenModel = async (userId, token) => {
  try {
    return await User.updateOne({ _id: userId }, { token: token })
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = updateTokenModel
