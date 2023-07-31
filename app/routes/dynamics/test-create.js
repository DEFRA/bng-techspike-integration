const dynamicsApi = require('../../dynamics/dynamics-api')
const config = require('../../config')

module.exports = {
  method: 'GET',
  path: '/dynamics/leads',
  handler: async (request, h) => {
    const enitiyRequest = {
      collection: 'EntityDefinitions',
      key: 'LogicalName="lead"',
      navigationProperty: 'Attributes',
      metadataAttributeType: 'Microsoft.Dynamics.CRM.StringAttributeMetadata'
  }


    

    const res = await dynamicsApi.retrieveRequest(enitiyRequest)
    return h.response(res).code(200)
  }
}