import { defineConfig } from 'vitest/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
    loader: 'jsx',
    include: /(src|\.storybook)\/.*\.(js|jsx)$/,
    exclude: [],
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.js'],
    include: ['src/**/*.test.{js,jsx}'],
    css: false,
    teardownTimeout: 5000,
    forceExit: true,
  },
  resolve: {
    alias: {
      'next/router': path.resolve(dirname, '.storybook/mocks/next-router.js'),
      'next/navigation': path.resolve(dirname, '.storybook/mocks/next-navigation.js'),
      'next/head': path.resolve(dirname, '.storybook/mocks/next-head.js'),
      'next/image': path.resolve(dirname, '.storybook/mocks/next-image.js'),
    },
  },
})
