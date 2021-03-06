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
  outputDir: 'docs',
  assetsDir: './',
  publicPath: '/portfolio',
  filenameHashing: false,
}
