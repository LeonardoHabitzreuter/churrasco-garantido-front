'use strict'

const PORT = process.env.PORT || 3000
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack/dev.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  overlay: true,
  stats: { colors: true }
}).listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Listening on http://localhost:3000')
})
