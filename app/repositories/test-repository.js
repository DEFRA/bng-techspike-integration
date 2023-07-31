const { models } = require('../data')

async function getTestCount () {
  return models.test.count()
}

async function getAll () {
  return models.test.findAll()
}

module.exports = {
  getTestCount,
  getAll
}
