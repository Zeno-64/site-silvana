import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

const raiz = (caminho: string) => fileURLToPath(new URL(caminho, import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Duas páginas estáticas, sem roteador: a inicial e /bronze/.
    rollupOptions: {
      input: {
        inicio: raiz('./index.html'),
        bronze: raiz('./bronze/index.html'),
      },
    },
  },
})
