import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          entryFileNames: 'app.js',
          chunkFileNames: 'app-[hash].js',
          assetFileNames: 'app[extname]'
        }
      }
    },
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  }
})
