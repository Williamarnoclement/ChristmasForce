// vue.config.js
module.exports = {
    chainWebpack: config => {
      config.module
        .rule('hdr')
        .test(/\.hdr|glb$/)
        .use('file-loader')
          .loader('file-loader')
          .end()
    }
  }