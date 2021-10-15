const Users = require('../../schemas/users')

const createUserModel = async (body) => {
  try {
    const { email, password, subscription } = body
    const newUser = await Users.create({ email, password, subscription })
    return newUser
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = createUserModel
