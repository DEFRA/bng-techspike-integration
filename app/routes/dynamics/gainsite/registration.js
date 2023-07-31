const dynamicsApi = require('../../../dynamics/dynamics-api')
const config = require('../../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/gainsite/registration',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.gainsiteRegistraionEntity
    }

    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
}
