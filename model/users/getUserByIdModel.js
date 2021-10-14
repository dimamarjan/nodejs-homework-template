const User = require('../../schemas/users')
const { NOT_FOUND } = require('../../helpers/constants')

const getUserByIdModel = async (userId) => {
  try {
    const user = await User.findById({ _id: userId })
    return user
  } catch {
    throw new Error(NOT_FOUND)
  }
}

module.exports = getUserByIdModel
