const { Schema, model } = require('mongoose')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const SALT_VAL = 10

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ['starter', 'pro', 'business'],
    default: 'starter'
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    default: function () {
      return gravatar.url(this.email, { size: '250' }, true)
    }
  },
}, {
  versionKey: false
})

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(SALT_VAL)
    this.password = await bcrypt.hash(this.password, salt)
  }
  next()
})

userSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

const Users = model('users', userSchema)

module.exports = Users
