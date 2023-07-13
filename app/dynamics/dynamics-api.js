const DynamicsWebAPI = require('dynamics-web-api')
const { acquireToken } = require('../auth/aquireToken')

const dynamicsWebApi = new DynamicsWebAPI({
  webApiUrl: process.env.Dynamics365ServerUrl + '/api/data/v9.2/',
  onTokenRefresh: acquireToken
})

module.exports = dynamicsWebApi
