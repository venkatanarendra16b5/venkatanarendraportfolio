import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/venkatanarendraportfolio/', // 👈 exact repo name
})
