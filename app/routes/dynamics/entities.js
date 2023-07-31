const dynamicsApi = require('../../dynamics/dynamics-api')

module.exports = {
  method: 'GET',
  path: '/dynamics/entities',
  handler: async (request, h) => {
    const entityRequest = {
      collection: 'entities'
    }
    
    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
}