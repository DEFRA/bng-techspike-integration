const get = require('../../dynamics')
const config = require('../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/bankDetails',
  handler: async (request, h) => {
    const res = await get(config.bankDetailsEntity)
    return h.response(res).code(200)
  }
}
