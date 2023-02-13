// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
    plugins:[
        "~/plugins/auth.ts",
        // "~/plugins/pinia.ts"
    ],
    // buildModules: [],
    dir: {
        // Rename `pages` directory to `routes`
        pages: 'routes'
      },
      modules: [
        // ...
        'nuxt-graphql-client',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
      ],
     
})
