const { get, getSingle, create, update, remove } = require('../../dynamics')
const config = require('../../config')

module.exports = [{
    method: 'GET',
    path: '/dynamics/lead/{leadId?}',
    handler: async (request, h) => {
      const leadId = request.params.leadId
    
      const res = leadId === null ?
        await get(config.leadEntity) :
        await getSingle(config.leadEntity, leadId)

      return h.response(res).code(200)
    }
  },
  {
    method: 'POST',
    path: '/dynamics/lead',
    handler: async (request, h) => {
      const res = await create(request.payload, 'lead')

      return h.response(res).code(201)
    }
  },
  {
    method: 'PUT',
    path: '/dynamics/lead/{leadId}',
    handler: async (request, h) => {
      const res = await update(request.payload, 'lead', request.params.leadId)

      return h.response(res).code(200)
    }
  },
  {
    method: 'DELETE',
    path: '/dynamics/lead/{leadId}',
    handler: async (request, h) => {
      const res = await remove('lead', request.params.leadId)

      return h.response().code(200)
    }
  }
]
