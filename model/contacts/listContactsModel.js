const Contact = require('../../schemas/contacts')

const listContactsModel = async (userId, queryParams) => {
  try {
    const {
      sortBy,
      filter,
      favorite = false,
      limit = 20,
      offset = 0
    } = queryParams
    const queryOptions = { owner: userId }
    if (favorite) {
      queryOptions.favorite = favorite
    }

    const contacts = await Contact.paginate(queryOptions, {
      limit,
      offset,
      sort: {
        ...(sortBy ? { [`${sortBy}`]: 1 } : {})
      },
      select: filter ? filter.split('|').join(' ') : '',
      populate: {
        path: 'owner',
        select: 'email subscription -_id'
      }
    })
    return contacts
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = listContactsModel
