// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
	plugins: [
		"~/plugins/auth.ts",
		// "~/plugins/pinia.ts"
	],
	css: [
		// CSS file in the project
		'~/assets/global.css',
	],

	runtimeConfig: {
		public: {
			clientID: process.env.CLIENT_ID,
		},
	},
	// buildModules: [],
	dir: {
		pages: "pages",
	},
	modules: [
		// ...
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
	],
	nitro: {
		compressPublicAssets: true,
	},
});
