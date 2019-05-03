module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: false
    },
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    },
    moment: {
      locales: [
        'de_de',
        'en_us'
      ]
    }
  }
}
