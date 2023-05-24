// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    // srcDir: "src/",
    // components: ["~/src/components"],
    plugins: [
        "~/plugins/auth.ts",
        // "~/plugins/pinia.ts"
    ],
    css: [
        // CSS file in the project
        "~/assets/global.css",
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
