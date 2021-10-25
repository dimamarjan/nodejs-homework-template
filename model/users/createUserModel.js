const Users = require('../../schemas/users')

const createUserModel = async (body) => {
  try {
    const { email, password, subscription, avatarURL } = body
    const newUser = await Users.create({ email, password, subscription, avatarURL })
    return newUser
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = createUserModel
