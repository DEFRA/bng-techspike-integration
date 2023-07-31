const dynamicsApi = require('../../../dynamics/dynamics-api')
const config = require('../../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/developer/registration',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.developerRegistraionEntity
    }

    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
}
