module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'igorgawrys',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portoflio by Authour' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css", rel: 'stylesheet' }
    ]
  },

  /*
  ** Customize the progress bar color
  */

  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

