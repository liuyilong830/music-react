const path = require('path')

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'api': resolve('src/api'),
      'utils': resolve('src/utils'),
      'store': resolve('src/store'),
      'router': resolve('src/router'),
      'assets': resolve('src/assets'),
      'views': resolve('src/views')
    }
  }
}