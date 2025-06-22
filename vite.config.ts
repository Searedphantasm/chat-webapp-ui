import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Mystrong@123
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/styled', '@emotion/react', '@mui/material'],
  },
  resolve: {
    dedupe: ['@emotion/react'],
  },
})
