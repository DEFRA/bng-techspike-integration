const DynamicsWebAPI = require('dynamics-web-api')
const config = require('../config')
const { acquireToken } = require('../auth/aquireToken')

const dynamicsWebApi = new DynamicsWebAPI({
  webApiUrl: config.dynamicsBaseUrl + '/api/data/v9.2/',
  onTokenRefresh: acquireToken,
  useEntityNames: true
})

module.exports = dynamicsWebApi
