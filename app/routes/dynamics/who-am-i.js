const dynamicsApi = require('../../dynamics/dynamics-api')

module.exports = {
  method: 'GET',
  path: '/dynamics/WhoAmI',
  handler: async (request, h) => {
    const res = await dynamicsApi.executeUnboundFunction("WhoAmI")

    return h.response(res).code(200)
  }
}
