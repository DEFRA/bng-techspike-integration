const get = require('../../dynamics')
const config = require('../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/legalAgreement',
  handler: async (request, h) => {
    const res = await get(config.legalAgreementPartyEntity)
    return h.response(res).code(200)
  }
}
