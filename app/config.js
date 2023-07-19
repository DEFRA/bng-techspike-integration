require('dotenv').config();
const joi = require('joi')

const schema = joi.object({
  port: joi.number().default(3000),
  clientId: joi.string().uuid().required(),
  clientSecret: joi.string().required(),
  authorityUrl: joi.string().uri().required(),
  dynamicsBaseUrl: joi.string().uri().required()
})

const config = {
  port: process.env.PORT,
  clientId: process.env.Dynamics365ClientId,
  clientSecret: process.env.Dynamics365ClientSecret,
  authorityUrl: process.env.Dynamics365AuthorityURL,
  dynamicsBaseUrl: process.env.Dynamics365ServerUrl
}

const { error, value } = schema.validate(config, {
  abortEarly: false
})

if (error) {
  throw new Error(`Config is invalid: ${error.message}`)
}

module.exports = value
