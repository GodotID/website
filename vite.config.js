import { join } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	server: { port: 8080 },
	preview: { port: 9090 },
	plugins: [react(), generouted(), svgr()],
	resolve: {
		alias: {
			components: join(import.meta.dirname, 'src', 'components'),
			misc: join(import.meta.dirname, 'src', 'misc'),
			styles: join(import.meta.dirname, 'src', 'styles')
		}
	},
	build: {
		emptyOutDir: true,
		outDir: 'dist'
	}
})
