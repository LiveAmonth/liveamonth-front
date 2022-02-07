module.exports = {
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
