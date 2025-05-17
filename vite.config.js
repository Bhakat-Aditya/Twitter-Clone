import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src'), // Sets "/src" as the root
  build: {
    outDir: '../dist', // Outputs files to "/dist" (optional)
  },
  server: {
    port: 3000, // Forces port 3000 (optional)
  },
});