require('./insights').setup()
const config = require('./config')
const Hapi = require('@hapi/hapi')

const server = Hapi.server({
  port: config.port
})

const routes = [].concat(
  require('./routes/healthy'),
  require('./routes/healthz'),
  require('./routes/dynamics/bank-details'),
  require('./routes/dynamics/entities'),
  require('./routes/dynamics/legal-agreement'),
  require('./routes/dynamics/who-am-i'),
  require('./routes/dynamics/payment-details'),
  require('./routes/dynamics/developer/registration'),
  require('./routes/dynamics/gainsite/application'),
  require('./routes/dynamics/gainsite/case'),
  require('./routes/dynamics/gainsite/other-landowner')
)

server.route(routes)

module.exports = server
