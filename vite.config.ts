import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Fix: Use '.' instead of process.cwd() to prevent TS error about missing cwd on Process type
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Polyfill process.env.API_KEY for the Gemini service
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});