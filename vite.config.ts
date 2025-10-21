import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'

import { resolve } from 'node:path'
import netlify from '@netlify/vite-plugin-tanstack-start'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [netlify(), viteReact(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
