const { get } = require('../../../dynamics')
const config = require('../../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/gainsite/application',
  handler: async (request, h) => {
    const res = await get(config.gainsiteApplicationEntity)
    return h.response(res).code(200)
  }
}
