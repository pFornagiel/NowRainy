import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'path';



// https://vitejs.dev/config/
export default defineConfig({
  base: '/NowRainy',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  plugins: [react(), svgr()],
})
