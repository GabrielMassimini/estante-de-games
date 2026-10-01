import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // O site é publicado em gabrielmassimini.github.io/estante-de-games/,
  // então os arquivos do build precisam apontar para essa subpasta.
  base: '/estante-de-games/',
})
