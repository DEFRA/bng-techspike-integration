const { get } = require('../../../dynamics')
const config = require('../../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/gainsite/registration',
  handler: async (request, h) => {
    const res = await get(config.gainsiteRegistraionEntity)
    return h.response(res).code(200)
  }
}
