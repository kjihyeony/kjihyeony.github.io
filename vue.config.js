const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/_abstracts.scss";
          @import "@/assets/scss/_common.scss";
          @import "@/assets/scss/_page.scss";
        `
      }
    }
  },
  // publicPath:'/jihyeonPortFolio',
})


