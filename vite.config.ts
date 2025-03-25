import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  publicDir: 'public',
  base: './',
  resolve: {
    alias: {
      '@/': path.join(__dirname, 'src/'),
    },
  },
  css: {
    modules: {
      localsConvention: 'dashes',
    }
  },
});
