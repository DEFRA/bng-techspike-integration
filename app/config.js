require('dotenv').config();
const joi = require('joi')

const schema = joi.object({
  port: joi.number().default(3000),
  clientId: joi.string().uuid().required(),
  clientSecret: joi.string().required(),
  authorityUrl: joi.string().uri().required(),
  dynamicsBaseUrl: joi.string().uri().required(),
  gainsiteRegistraionEntity: joi.string().default('bng_gainsiteregistration'),
  developerRegistraionEntity: joi.string().default('bng_developerregistration'),
  gainsiteAttachmentEntity: joi.string().default('bng_gainsiteproperty'),
  gainsiteApplicationEntity: joi.string().default('contact'),
  legalAgreementPartyEntity: joi.string().default('bng_legalagreementparty'),
  bankDetailsEntity: joi.string().default('bng_bankdetails'),
  paymentDetailsEntity: joi.string().default('bng_paymentdetails'),
  caseEntity: joi.string().default('bng_gainsiteregistrationid'),
  otherLandownerEntity: joi.string().default('bng_gainsitepropertylandowners')
})

const config = {
  port: process.env.PORT,
  clientId: process.env.Dynamics365ClientId,
  clientSecret: process.env.Dynamics365ClientSecret,
  authorityUrl: process.env.Dynamics365AuthorityURL,
  dynamicsBaseUrl: process.env.Dynamics365ServerUrl,
  gainsiteRegistraionEntity: process.env.GainsiteRegistraionEntity,
  developerRegistraionEntity: process.env.DeveloperRegistraionEntity,
  gainsiteAttachmentEntity: process.env.GainsiteAttachmentEntity,
  gainsiteApplicationEntity: process.env.GainsiteApplicationEntity,
  legalAgreementPartyEntity: process.env.LegalAgreementPartyEntity,
  bankDetailsEntity: process.env.BankDetailsEntity,
  paymentDetailsEntity: process.env.PaymentDetailsEntity,
  caseEntity: process.env.CaseEntity,
  otherLandownerEntity: process.env.OtherLandownerEntity
}

const { error, value } = schema.validate(config, {
  abortEarly: false
})

if (error) {
  throw new Error(`Config is invalid: ${error.message}`)
}

module.exports = value
