const get = require('../../../dynamics')
const config = require('../../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/gainsite/otherLandowner',
  handler: async (request, h) => {
    const res = await get(config.otherLandownerEntity)
    return h.response(res).code(200)
  }
}
