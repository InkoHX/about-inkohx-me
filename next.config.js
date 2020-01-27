const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  webpack: (config) => {
    console.log(config)
    config.resolve.plugins.push(new TsconfigPathsPlugin())
  }
}
