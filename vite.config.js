import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['firebase/auth', 'firebase/firestore']
  }
});

// https://vite.dev/config/
