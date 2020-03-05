const storybook = require('@storybook/react/standalone')

storybook({
  mode: 'static',
  configDir: './config',
  staticDir: ['../../dist/storybook'],
  watch: true,
  port: 9000,
  previewUrl: 'http://localhost:1337',
})
