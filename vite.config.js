import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({ registerType: 'autoUpdate' }),
  ViteImageOptimizer({
    
    jpeg:{
      quality: 40
    },
    jpg:{
      quality:40
    },
    png:{
      quality:40
    }
  })],
})
