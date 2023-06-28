import { join } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
	server: { port: 8080 },
	preview: { port: 9090 },
	plugins: [react(), generouted(), svgLoader()],
	resolve: {
		alias: {
			components: join(__dirname, 'src', 'components'),
			misc: join(__dirname, 'src', 'misc'),
			styles: join(__dirname, 'src', 'styles')
		}
	},
	build: {
		emptyOutDir: true,
		outDir: 'dist'
	}
})
