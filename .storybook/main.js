/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  'stories': [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-vitest'
  ],
  'framework': '@storybook/react-vite',
  'staticDirs': [
    '..\\public'
  ]
};

export default config;
