const { defineConfig } = require('@vue/cli-service')
const {DefinePlugin} = require('webpack');
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        'process.env': {
          MY_VARIABLE: JSON.stringify('my value')
        }
      })
    ]
  }
})
