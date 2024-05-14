import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';
import daisyui from 'daisyui';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      assets: `${path.resolve(__dirname, './src/assets')}`,
      layouts: `${path.resolve(__dirname, './src/layouts')}`,
      hooks: `${path.resolve(__dirname, './src/hooks')}`,
    },
  },
  define: {
    'process.env': process.env,
  },
});
