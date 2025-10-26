import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173
  },
  base: '/venkatanarendraportfolio/', // 👈 Must match the repo name exactly
  build: {
    outDir: 'dist'
  },
})
