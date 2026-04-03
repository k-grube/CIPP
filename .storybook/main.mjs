import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-themes',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(config) {
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
        global: 'window',
      },
      esbuild: {
        ...config.esbuild,
        jsx: 'automatic',
        jsxImportSource: 'react',
        loader: 'jsx',
        include: /(src|\.storybook)\/.*\.(js|jsx)$/,
        exclude: [],
      },
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          onwarn(warning, warn) {
            if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
            warn(warning)
          },
        },
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
  },
  staticDirs: ['../public'],
}

export default config
