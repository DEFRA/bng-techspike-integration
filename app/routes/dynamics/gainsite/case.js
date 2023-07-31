const get = require('../../../dynamics')
const config = require('../../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/gainsite/case',
  handler: async (request, h) => {
    const res = await get(config.caseEntity)
    return h.response(res).code(200)
  }
}