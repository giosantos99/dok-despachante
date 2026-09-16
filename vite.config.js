import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug-transformer'

export default defineConfig({
  plugins: [
    pugPlugin({
      pugOptions: {
        pretty: true
      }
    })
  ]
})
