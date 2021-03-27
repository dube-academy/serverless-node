const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const { getCurrentInvoke } = require('@vendia/serverless-express')
const server = express()
const router = express.Router()

router.use(compression())

router.use(cors())
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  const currentInvoke = getCurrentInvoke()
  const { event = {} } = currentInvoke
  const { requestContext = {}, multiValueHeaders = {} } = event
  const { stage = '' } = requestContext
  const { Host = ['localhost:' + global.PORT] } = multiValueHeaders

  const apiUrl = `https://${Host[0]}/${stage}`
  res.send({
    debug: true,
    success: true,
    apiUrl,
    stage,
    date: new Date().toString(),
  })
})

server.use('/', router)

module.exports = server
