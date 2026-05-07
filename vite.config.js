import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        login: resolve(import.meta.dirname, 'login.html'),
        admin: resolve(import.meta.dirname, 'admin.html')
      },
    },
  },
})