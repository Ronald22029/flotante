/* eslint-env node */

const ESLintPlugin = require('eslint-webpack-plugin')
const { configure } = require('quasar/wrappers')

module.exports = configure(function (ctx) {
  return {
    boot: [],
    css: [],
    extras: [
      'roboto-font',
      'material-icons'
    ],

    build: {
      chainWebpack (chain) {
        chain.plugin('eslint-webpack-plugin')
          .use(ESLintPlugin, [{ extensions: ['js', 'vue'] }])
      }
    },

    devServer: { // Asegúrate de que esta sección esté correctamente separada por comas
      open: true, // auto abre el navegador
      port: 8080 // puerto del servidor de desarrollo
    },

    framework: {
      config: {},

      plugins: []
    },

    animations: [],

    ssr: {
      pwa: false,

      prodPort: 3000,

      middlewares: [
        ctx.prod ? 'compression' : '',
        'render'
      ]
    },

    pwa: {
      workboxPluginMode: 'GenerateSW',
      manifest: {
        name: 'Quasar App',
        short_name: 'Quasar App',
        description: 'A Quasar Project',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    }
  }
})
