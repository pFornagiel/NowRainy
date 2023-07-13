import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': 'http://localhosT:8080'
    }
  },
  plugins: [react(), svgr()],
})
