import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: { manifest: true, outDir: './dist'},
  plugins: [react()],
  server: {
    port: 3000,
    proxy: process.env.NODE_ENV === 'development' ? {
      "/api": {
        target: "http://localhost:8000"
      }
    } : {}
  },
})
