import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react(), svgr(), FullReload(['images/**/*.svg'])],
    server: {
        host: '0.0.0.0'
    },
    build: {
        outDir: 'docs',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                hobbies: resolve(__dirname, 'pages/hobbies.html')
            }
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        testIdAttribute: 'id'
    },

    base: '/02-eigene-webseite-giannagartmannn/'
})
