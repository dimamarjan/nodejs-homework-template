const User = require('../../schemas/users')
const { NOT_FOUND } = require('../../helpers/constants')

const getUserByEmailModel = async (userEmail) => {
  try {
    const user = await User.findOne({ email: userEmail })
    return user
  } catch {
    throw new Error(NOT_FOUND)
  }
}

module.exports = getUserByEmailModel
