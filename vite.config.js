import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/your-repo-name/', // Replace with your actual repository name
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
  },
  server: {
    port: 3000,
  },
});