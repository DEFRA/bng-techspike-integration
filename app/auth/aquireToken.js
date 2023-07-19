const msal = require('@azure/msal-node')
const config = require('../config')

const clientConfig = {
  auth: {
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    authority: config.authorityUrl
  }
}

const context = new msal.ConfidentialClientApplication(clientConfig)

const request = {
  scopes: [ `${config.dynamicsBaseUrl}/.default` ]
}

const acquireToken = (dynamicsWebApiCallback) => {
  context.acquireTokenByClientCredential(request).then(response => {
    dynamicsWebApiCallback(response.accessToken)
  }).catch(error => {
    console.log(error)
  })
}

module.exports = {
  acquireToken
}
