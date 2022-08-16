import { sveltekit } from '@sveltejs/kit/vite';
import { gQueryCodegen } from '@leveluptuts/g-query-vite-plugin'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		gQueryCodegen({
			schema: './src/schema.graphql',
			out: './src/lib/graphql',
			gPath: '$lib/g'
		})
	]
};

export default config;
