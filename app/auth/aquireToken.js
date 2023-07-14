const msal = require('@azure/msal-node')
const config = require('../config')

const clientConfig = {
  auth: {
    clientId: config.clientId,
    authority: config.authorityUrl
  }
}

const context = new msal.PublicClientApplication(clientConfig)

const request = {
  username: config.dynamicsUsername,
  password: config.dynamicsPassword,
  scopes: [ `${config.dynamicsBaseUrl}/.default` ]
}

const acquireToken = (dynamicsWebApiCallback) => {
  context.acquireTokenByUsernamePassword(request).then(response => {
    dynamicsWebApiCallback(response.accessToken)
  }).catch(error => {
    console.log(error)
  })
}

module.exports = {
  acquireToken
}
