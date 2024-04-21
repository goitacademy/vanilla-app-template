import { defineConfig } from 'vite';
import glob from 'fast-glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,

      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      ViteImageOptimizer({
        png: {
          quality: 86,
        },
        jpeg: {
          quality: 86,
        },
        jpg: {
          quality: 86,
        },
      }),
      {
        ...imagemin(['./src/img/**/*.{jpg,png,jpeg}'], {
          destination: './src/img/webp/',
          plugins: [imageminWebp({ quality: 86 })],
        }),
        apply: 'serve',
      },
    ],
  };
});
