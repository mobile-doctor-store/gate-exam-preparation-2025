// client/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This will output to 'client/dist' because this config is in 'client/'
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000', // Your local backend server URL for development
        changeOrigin: true,
        // You might need a rewrite rule here if your backend doesn't expect /api
        // For example: rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});