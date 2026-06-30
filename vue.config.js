module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/portfolio-app/'   //任意
  //   : '/'
  outputDir: 'dist',
  assetsDir: './',
  publicPath: '/',
  filenameHashing: false,
  productionSourceMap: false,
  devServer: {
    historyApiFallback: {
      index: '/index.html',
    },
  },
}
