import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import gQueryCodegen from '@leveluptuts/g-query/codegen';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		target: '#svelte',
		vite: {
			plugins: [
				gQueryCodegen({
					schema: './src/schema.graphql',
					out: './src/lib/graphql',
					gPath: '$lib/g'
				})
			]
		}
	}
};

export default config;
