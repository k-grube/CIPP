import { defineConfig } from 'vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const nextAliases = {
  'next/router': path.resolve(dirname, 'src/stories/mocks/next-router.js'),
  'next/navigation': path.resolve(dirname, 'src/stories/mocks/next-navigation.js'),
  'next/head': path.resolve(dirname, 'src/stories/mocks/next-head.js'),
  'next/image': path.resolve(dirname, 'src/stories/mocks/next-image.js'),
  'next/link': path.resolve(dirname, 'src/stories/mocks/next-link.js'),
}

const coverageConfig = {
  provider: 'v8',
  reporter: ['text', 'text-summary'],
  include: ['src/components/**/*.{js,jsx}', 'src/utils/**/*.{js,jsx}'],
  exclude: ['src/components/**/index.js'],
}

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
    loader: 'jsx',
    include: /(src|\.storybook)\/.*\.(js|jsx)$/,
    exclude: [],
  },
  resolve: { alias: nextAliases },
  define: { 'process.env': '{}' },
  test: {
    globals: true,
    coverage: coverageConfig,
    projects: [
      {
        resolve: { alias: nextAliases },
        define: { 'process.env': '{}' },
        esbuild: {
          jsx: 'automatic',
          jsxImportSource: 'react',
          loader: 'jsx',
          include: /(src|\.storybook)\/.*\.(js|jsx)$/,
          exclude: [],
        },
        test: {
          name: 'unit',
          environment: 'jsdom',
          globals: true,
          setupFiles: ['./vitest.setup.js'],
          include: ['src/**/*.test.{js,jsx}'],
          css: false,
          teardownTimeout: 5000,
          forceExit: true,
        },
      },
      {
        plugins: [
          storybookTest({ configDir: path.resolve(dirname, '.storybook') }),
        ],
        resolve: { alias: nextAliases },
        define: { 'process.env': '{}' },
        optimizeDeps: {
          include: [
            'react',
            'react-dom',
            'react/jsx-dev-runtime',
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
          name: 'storybook',
          globals: true,
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
