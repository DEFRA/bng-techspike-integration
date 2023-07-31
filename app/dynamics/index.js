const dynamicsApi = require('./dynamics-api')

const get = async (logicalName) => {
  const entityRequest = {
    collection: logicalName
  }

  return dynamicsApi.retrieveMultipleRequest(entityRequest)
}

module.exports = get
