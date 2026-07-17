import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

const admin = (): Plugin => ({
  name: 'serve-admin',
  configureServer: server => {
    server.middlewares.use((req, _res, next) => {
      const pathname = req.url?.split('?')[0];

      if (pathname === '/admin' || pathname === '/admin/') {
        req.url = '/admin/index.html';
      }

      next()
    })
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [admin(), react(), tailwindcss()],
})
