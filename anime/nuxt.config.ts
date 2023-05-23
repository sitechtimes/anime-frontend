// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
	plugins: [
		"~/plugins/auth.ts",
		// "~/plugins/pinia.ts"
	],

	runtimeConfig: {
		public: {
			clientID: process.env.clientID,
		},
	},
	// buildModules: [],
	dir: {
		// Rename `pages` directory to `routes`
		pages: "routes",
	},
	modules: [
		// ...
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
		'nuxt-icon'
	],
	nitro: {
		compressPublicAssets: true,
	},
});
