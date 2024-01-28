import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'docs',
      assets: 'docs',
      fallback: 'index.html',
      precompress: false
    }),
    // other options
  }
};

// export default config;

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };

export default config;
