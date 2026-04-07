import { defineConfig } from 'vitest/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const sharedConfig = {
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
    loader: 'jsx',
    include: /(src|\.storybook)\/.*\.(js|jsx)$/,
    exclude: [],
  },
  resolve: {
    alias: {
      'next/router': path.resolve(dirname, 'src/stories/mocks/next-router.js'),
      'next/navigation': path.resolve(dirname, 'src/stories/mocks/next-navigation.js'),
      'next/head': path.resolve(dirname, 'src/stories/mocks/next-head.js'),
      'next/image': path.resolve(dirname, 'src/stories/mocks/next-image.js'),
      'next/link': path.resolve(dirname, 'src/stories/mocks/next-link.js'),
    },
  },
  define: {
    'process.env': '{}',
  },
}

export default defineConfig({
  ...sharedConfig,
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.js'],
    include: ['src/**/*.test.{js,jsx}'],
    exclude: ['src/**/*.browser.test.{js,jsx}'],
    css: false,
    teardownTimeout: 5000,
    forceExit: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary'],
      include: ['src/components/**/*.{js,jsx}'],
      exclude: ['src/components/**/index.js'],
    },
    projects: [
      {
        ...sharedConfig,
        test: {
          name: 'unit',
          environment: 'jsdom',
          globals: true,
          setupFiles: ['./vitest.setup.js'],
          include: ['src/**/*.test.{js,jsx}'],
          exclude: ['src/**/*.browser.test.{js,jsx}'],
          css: false,
          teardownTimeout: 5000,
          forceExit: true,
        },
      },
      {
        ...sharedConfig,
        optimizeDeps: {
          include: [
            'react',
            'react-dom',
            'react/jsx-dev-runtime',
            '@testing-library/jest-dom/vitest',
            'vitest-browser-react',
            'react-redux',
            '@reduxjs/toolkit',
            '@tanstack/react-query',
            '@mui/material/styles',
            '@mui/material',
            '@mui/system',
            'material-react-table',
          ],
          esbuildOptions: {
            jsx: 'automatic',
            loader: { '.js': 'jsx' },
          },
        },
        test: {
          name: 'browser',
          globals: true,
          include: ['src/**/*.browser.test.{js,jsx}'],
          setupFiles: ['./vitest.browser.setup.js'],
          browser: {
            enabled: true,
            provider: 'playwright',
            headless: true,
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
})
