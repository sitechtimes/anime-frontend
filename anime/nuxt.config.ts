// https://nuxt.com/docs/api/configuration/nuxt-config
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
      runtimeConfig: {
        client: process.env.CLIENT_ID,
        public: {
          GQL_HOST: 'https://api.spacex.land/graphql' // overwritten by process.env.GQL_HOST
        }
      }
})
