import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      // dev 固有の設定
      base: '/',
      plugins: [vue()]
    }
  } else {
    // command === 'build'
    return {
      // build 固有の設定
      base: '/vue_tetris/',
      plugins: [vue()]
    }
  }
})
