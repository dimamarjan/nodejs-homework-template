const path = require('path')
const jimp = require('jimp')
const fs = require('fs/promises')
const createAvatarFolder = require('../helpers/createFolder')

class UploadAvatars {
  constructor(avatarsFolder) {
    this.avatarsFolder = avatarsFolder
  }

  async imageTransformation(path) {
    const image = await jimp.read(path)
    await image.autocrop().cover(250, 250, jimp.HORIZONTAL_ALIGN_CENTER | jimp.VERTICAL_ALIGN_MIDDLE).writeAsync(path)
  }

  async saveImage({ id, imgData }) {
    await this.imageTransformation(imgData.path)
    const avatarFolder = path.join('public', this.avatarsFolder, id)
    await createAvatarFolder(avatarFolder)
    await fs.rename(imgData.path, path.join(avatarFolder, imgData.filename))
    return path.normalize(path.join(id, imgData.filename))
  }
}

module.exports = UploadAvatars
