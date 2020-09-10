const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const productionGzipExtensions = ['js', 'css']; // 增加gzip资源
module.exports = {
  outputDir: 'dist',
  chainWebpack: config => {
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
    }
  },
  productionSourceMap: true,
  css: {
    sourceMap: false,
    loaderOptions: {
    sass: {
      prependData: `@import "@/styles/variables.scss";`
    }
    },
    modules: false
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,
    before: app => {}
  },
  pluginOptions: {
  }
}