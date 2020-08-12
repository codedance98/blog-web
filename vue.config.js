module.exports = {
  outputDir: 'dist',
  chainWebpack: () => {},
  configureWebpack: config => {
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