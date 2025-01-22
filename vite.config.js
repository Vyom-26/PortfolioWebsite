import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@react-three/fiber', '@react-three/drei', 'react-responsive'],
    },
  },
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei', 'react-responsive'], //comment
  },
});
