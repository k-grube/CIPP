import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type import('vite').UserConfig */
export default function viteConfig(config = { esbuild: {}, optimizeDeps: {} }) {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        'next/router': path.resolve(dirname, 'mocks/next-router.js'),
        'next/navigation': path.resolve(dirname, 'mocks/next-navigation.js'),
        'next/head': path.resolve(dirname, 'mocks/next-head.js'),
        'next/image': path.resolve(dirname, 'mocks/next-image.js'),
      },
    },
    define: {
      ...(config.define || {}),
      'process.env': '{}',
    },
    esbuild: {
      ...config.esbuild,
      jsx: 'automatic',
      jsxImportSource: 'react',
      loader: 'jsx',
      include: /(src|\.storybook)\/.*\.(js|jsx)$/,
      exclude: [],
    },
    optimizeDeps: {
      ...config.optimizeDeps,
      esbuildOptions: {
        ...config.optimizeDeps?.esbuildOptions,
        jsx: 'automatic',
        jsxImportSource: 'react',
        loader: {
          '.js': 'jsx',
          '.jsx': 'jsx',
        },
      },
    },
  }
}
