const ENV = process.env.ENV || 'development'
const IS_DEV = ENV === 'development'
const IS_PRODUCTION = ENV === 'production'

module.exports = {
  ENV,
  IS_DEV,
  IS_PRODUCTION,
}
