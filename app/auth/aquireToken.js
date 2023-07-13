const msal = require('@azure/msal-node')

const clientConfig = {
  auth: {
    clientId: process.env.Dynamics365ClientId,
    authority: process.env.Dynamics365AuthorityURL
  }
}

const context = new msal.PublicClientApplication(clientConfig)

const request = {
  username: process.env.Dynamics365UserName,
  password: process.env.Dynamics365Password,
  scopes: [ `${process.env.Dynamics365ServerUrl}/.default` ]
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
