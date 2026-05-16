import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'QuickElement',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    target: 'es2015',
    outDir: 'lib',
    emptyOutDir: true,
    minify: true,
  },
})
