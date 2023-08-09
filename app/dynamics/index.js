const dynamicsApi = require('./dynamics-api')

const get = async (logicalName) => {
  const entityRequest = {
    collection: logicalName
  }

  return dynamicsApi.retrieveMultipleRequest(entityRequest)
}

const getSingle = async (logicalName, key) => {
  const entityRequest = {
    key,
    collection: logicalName
  }

  return dynamicsApi.retrieveRequest(entityRequest)
}

const create = async (payload, logicalName) => {
  const request = {
    collection: logicalName,
    entity: payload,
    returnRepresentation: true
  }

  return dynamicsApi.createRequest(request)
}

const update = async (payload, logicalName, key) => {
  const request = {
    key,
    collection: logicalName,
    entity: payload,
    returnRepresentation: true
  }

  return dynamicsApi.updateRequest(request)
}

const remove = async (logicalName, key) => {
  const request = {
    key,
    collection: logicalName
  }

  return dynamicsApi.deleteRequest(request)
}

module.exports =
{
  get,
  getSingle,
  create,
  update,
  remove
}
