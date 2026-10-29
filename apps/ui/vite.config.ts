import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-static';
import tailwindcss from '@tailwindcss/vite';

const upstream = {
	target: process.env.SERVER_URL ?? 'http://localhost:3000/',
	secure: true,
	changeOrigin: true,
	logLevel: 'info',
	ws: true
};

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: { experimental: { async: true } },
			adapter: adapter({
				fallback: 'index.html',
				precompress: true
			})
		})
	],
	server: {
		// connect to a remote backend during web-only development
		proxy: {
			'/api': upstream,
			'/.well-known/coffee-helper': upstream
		}
	},
	optimizeDeps: {
		entries: ['src/**/*.{svelte,ts,html}']
	}
});
