import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ assets': path.resolve(__dirname, './src/assets'),
      '@ components': path.resolve(__dirname, './src/components'),
      '@ pages': path.resolve(__dirname, './src/pages'),
      '@ styles': path.resolve(__dirname, './src/styles'),
      '@ data': path.resolve(__dirname, './src/data'),
      '@ services': path.resolve(__dirname, './src/services'),
      '@ store': path.resolve(__dirname, './src/store'),
      '@ types': path.resolve(__dirname, './src/types'),
    },
  },
})
