require('source-map-support/register')
const serverlessExpress = require('@vendia/serverless-express')
const server = require('.')

exports.handler = serverlessExpress({ app: server })
