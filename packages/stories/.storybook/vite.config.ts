import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@react-financial-charts/annotations': '../annotations/src',
      '@react-financial-charts/axes': '../axes/src',
      '@react-financial-charts/coordinates': '../coordinates/src',
      '@react-financial-charts/core': '../core/src',
      '@react-financial-charts/indicators': '../indicators/src',
      '@react-financial-charts/interactive': '../interactive/src',
      '@react-financial-charts/scales': '../scales/src',
      '@react-financial-charts/series': '../series/src',
      '@react-financial-charts/tooltip': '../tooltip/src',
      '@react-financial-charts/utils': '../utils/src',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
