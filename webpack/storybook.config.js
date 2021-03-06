const common = require('./common')
const webpackConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js')

module.exports = (config, env) => {
  const newConfig = webpackConfig(config, env)

  newConfig.module.rules.push(common.standardPreLoader)
  newConfig.module.rules.push(common.stylusLoader)
  newConfig.module.noParse = /strclass\.min\.js$/
  newConfig.resolve = common.resolve

  return newConfig
}
