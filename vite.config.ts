import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
