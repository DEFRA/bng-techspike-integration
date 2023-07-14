require('dotenv').config();
const joi = require('joi')

const schema = joi.object({
  port: joi.number().default(3000),
  clientId: joi.string().uuid().required(),
  authorityUrl: joi.string().uri().required(),
  dynamicsBaseUrl: joi.string().uri().required(),
  dynamicsUsername: joi.string().required(),
  dynamicsPassword: joi.string().required()
})

const config = {
  port: process.env.PORT,
  clientId: process.env.Dynamics365ClientId,
  authorityUrl: process.env.Dynamics365AuthorityURL,
  dynamicsBaseUrl: process.env.Dynamics365ServerUrl,
  dynamicsUsername: process.env.Dynamics365UserName,
  dynamicsPassword: process.env.Dynamics365Password
}

const { error, value } = schema.validate(config, {
  abortEarly: false
})

if (error) {
  throw new Error(`Config is invalid: ${error.message}`)
}

module.exports = value
