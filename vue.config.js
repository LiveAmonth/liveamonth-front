const target = "http://localhost:8081";

const path = require("path");
module.exports = {
  publicPath: process.env.BASE_URL,
  assetsDir: process.env.BASE_URL,
  devServer: {
    port: 8080,
    proxy: {
      "^/v1/api": {
        target,
        changeOrigin: true,
      },
    },
    contentBase: path.join(__dirname, ""), // 설정하면 url(/src/assets") 경로 사용 가능
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~bootstrap/scss/functions.scss";
          @import "~bootstrap/scss/variables.scss";
        `,
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: "ko_KR",
      fallbackLocale: "en_US",
      localeDir: "locales",
      enableLegacy: undefined,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
};
