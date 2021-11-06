import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        compact: false,
        minified: true,
        plugins: [
          [
            'babel-plugin-root-import',
            {
              rootPathSuffix: './src',
              rootPathPrefix: '~/',
            },
          ],
        ],
      },
    }),
  ],
  base: 'https://kulothungan16.github.io/',
});
