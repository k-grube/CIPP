/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-vitest'
  ],
  framework: '@storybook/nextjs-vite',
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...(config.define || {}),
        process: '({ env: {} })',
        'process.env': '{}',
      },
      esbuild: {
        ...config.esbuild,
        jsx: 'automatic',
        jsxImportSource: 'react',
        loader: 'jsx',
        include: /src\/.*\.(js|jsx)$/,
        exclude: []
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        esbuildOptions: {
          ...config.optimizeDeps?.esbuildOptions,
          jsx: 'automatic',
          jsxImportSource: 'react',
          loader: {
            '.js': 'jsx',
            '.jsx': 'jsx'
          }
        }
      }
    };
  },
  staticDirs: ['..\\public']
};

export default config;