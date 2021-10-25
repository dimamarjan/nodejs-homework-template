const fs = require('fs/promises')

const isCreateAvatarFolder = async (path) => {
  try {
    await fs.access(path)
    return true
  } catch {
    return false
  }
}

const createAvatarFolder = async (path) => {
  try {
    const isCreated = await isCreateAvatarFolder(path)
    if (!isCreated) {
      await fs.mkdir(path)
    }
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = createAvatarFolder
