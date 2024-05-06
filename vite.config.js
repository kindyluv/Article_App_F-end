import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prettier from 'prettier';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        {
          transform(code, id) {
            if (/\.js$/.test(id)) {
              return prettier.format(code, { parser: 'babel' });
            }
            return code;
          },
        },
      ],
    },
  },
})

