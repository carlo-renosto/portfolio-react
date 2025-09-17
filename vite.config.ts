import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/portfolio-react/' : '/portfolio-react/',
  server: {
    host: '0.0.0.0', // Accesible desde todos los dispositivos en la misma red
    port: 5173,
    proxy: {
      '/users': {
        target: 'https://api.github.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
}))
