const { getAll } = require('../repositories/test-repository')

module.exports = {
  method: 'GET',
  path: '/data',
  handler: async (request, h) => {
    const getAllTest = await getAll()
    return h.response(getAllTest).code(200)
  }
}
