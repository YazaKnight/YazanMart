import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			pages: 'public',
			assets: 'public',
			precompress: true,
			strict: true
		}),
	}
};

export default config;
