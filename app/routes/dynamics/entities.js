const get = require('../../dynamics')

module.exports = {
  method: 'GET',
  path: '/dynamics/entities',
  handler: async (request, h) => {
    const res = await get('entities')
    return h.response(res).code(200)
  }
}