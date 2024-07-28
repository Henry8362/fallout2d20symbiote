const { defineConfig } = require('@vue/cli-service');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              // Preserve function names that match the regex /TS/
              keep_fnames: /TS/,
            },
            mangle: {
              // Do not mangle properties or variables named 'TS' or 'onStateChangeEvent'
              reserved: ['TS', 'onStateChangeEvent']
            }
          }
        })
      ]
    }
  }
});
