import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
	plugins: [
		react(),
		ghPages({
			branch: 'gh-pages',
			dotfiles: true
		})
	],
	base: '/rsschool-cv/',
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: './index.html'
			}
		}
	}
});
