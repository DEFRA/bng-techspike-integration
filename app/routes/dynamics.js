const dynamicsApi = require('../dynamics/dynamics-api')
const config = require('../config')

module.exports = [{
  method: 'GET',
  path: '/dynamics/WhoAmI',
  handler: async (request, h) => {
    const res = await dynamicsApi.executeUnboundFunction("WhoAmI")

    return h.response(res).code(200)
  }
},
{
  method: 'GET',
  path: '/dynamics/entites',
  handler: async (request, h) => {
    const entityRequest = {
      collection: 'entities'
    }
    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
},
{
  method: 'GET',
  path: '/dynamics/gainsite/registration',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.gainsiteRegistraionEntity
    }
    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
},
{
  method: 'GET',
  path: '/dynamics/developer/registration',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.developerRegistraionEntity
    }
    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
},
{
  method: 'GET',
  path: '/dynamics/gainsite/attachment',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.gainsiteAttachmentEntity
    }
    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
},
{
  method: 'GET',
  path: '/dynamics/gainsite/application',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.gainsiteApplicationEntity
    }
    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
},
{
  method: 'GET',
  path: '/dynamics/gainsite/case',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.caseEntity
    }
    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
},
{
  method: 'GET',
  path: '/dynamics/gainsite/otherLandowner',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.otherLandownerEntity
    }
    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
},
{
  method: 'GET',
  path: '/dynamics/legalAgreement',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.legalAgreementPartyEntity
    }
    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
},
{
  method: 'GET',
  path: '/dynamics/bankDetails',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.bankDetailsEntity
    }
    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
},
{
  method: 'GET',
  path: '/dynamics/paymentDetails',
  handler: async (request, h) => {
    const entityRequest = {
      collection: config.paymentDetailsEntity
    }
    const res = await dynamicsApi.retrieveMultipleRequest(entityRequest)

    return h.response(res).code(200)
  }
}]
