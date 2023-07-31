const get = require('../../dynamics')
const config = require('../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/paymentDetails',
  handler: async (request, h) => {
    const res = await get(config.paymentDetailsEntity)
    return h.response(res).code(200)
  }
}
