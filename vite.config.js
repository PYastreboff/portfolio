import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // If building on Vercel, force standard root path. 
  // Otherwise, use /portfolio/ for production (GitHub Pages).
  base: process.env.VERCEL ? '/' : (mode === 'production' ? '/portfolio/' : '/'),
  build: {
    cssMinify: false,
  },
}));
