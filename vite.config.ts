import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, './src'),
      '@/core': path.resolve(__dirname, './core'),
      '@/store': path.resolve(__dirname, './store'),
      '@/config': path.resolve(__dirname, './config'),
    },
  },
});
