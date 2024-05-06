import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const __dirname = import.meta.dirname;

console.log(__dirname)

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@':  __dirname + '/src',
    }
  }
});
