require('./insights').setup()
const config = require('./config')
const Hapi = require('@hapi/hapi')

const server = Hapi.server({
  port: config.port
})

const routes = [].concat(
  require('./routes/healthy'),
  require('./routes/healthz'),
  require('./routes/dynamics')
)

server.route(routes)

module.exports = server
