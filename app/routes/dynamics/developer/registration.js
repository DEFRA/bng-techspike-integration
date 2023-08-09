const { get } = require('../../../dynamics')
const config = require('../../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/developer/registration',
  handler: async (request, h) => {
    const res = await get(config.developerRegistraionEntity)

    return h.response(res).code(200)
  }
}
