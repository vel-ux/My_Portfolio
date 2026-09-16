
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/My_Portfolio/',
  plugins: [
    tailwindcss(),
  ],
})