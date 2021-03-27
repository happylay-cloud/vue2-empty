module.exports = {
  productionSourceMap: false,
  publicPath: './',
  outputDir: process.env.outputDir,
  devServer: {
    port: 12020,
    https: false,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:18080',
        changeOrigin: true,
        pathRewrite: { '^/api': 'api' }
      }
    }
  }
}
