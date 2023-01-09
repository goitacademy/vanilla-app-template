import { defineConfig } from 'vite';

const BASE_PUBLIC_PATH_DEV = '/';
const BASE_PUBLIC_PATH_PROD = '/vanilla-app-template/';

export default defineConfig({
  root: 'src',
  base:
    process.env.NODE_ENV === 'development'
      ? BASE_PUBLIC_PATH_DEV
      : BASE_PUBLIC_PATH_PROD,
});
