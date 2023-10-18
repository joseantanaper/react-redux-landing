import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@config': path.resolve(__dirname, './src/config'),
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@app': path.resolve(__dirname, './src/app'),
      '@bootstrap-scss': path.resolve(
        __dirname,
        './node_modules/bootstrap/scss/bootstrap'
      ),
      '@bootstrap-icons': path.resolve(
        __dirname,
        './node_modules/bootstrap/scss/bootstrap'
      ),
      '@bootstrap-js': path.resolve(
        __dirname,
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
      ),
      '@style': path.resolve(__dirname, './src/style'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
  },
})
