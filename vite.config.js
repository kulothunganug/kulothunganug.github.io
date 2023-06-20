import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        compact: false,
        minified: true,
      },
    }),
  ],
  base: 'https://kulothunganug.github.io/',
});
