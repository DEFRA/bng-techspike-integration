const dynamicsApi = require('../../../dynamics/dynamics-api')
const config = require('../../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/gainsite/application',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.gainsiteApplicationEntity
    }

    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
}
