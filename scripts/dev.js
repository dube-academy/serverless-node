const server = require('../src')
const portfinder = require('portfinder')
const chalk = require('chalk')

portfinder.basePort = 3000

portfinder.getPortPromise().then(port => {
  server.listen(port)
  global.PORT = port
  console.info(chalk.bold.blue(`Server listening on http://localhost:${port}`))
})
