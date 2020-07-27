const cracoLinaria = require("craco-linaria")

module.exports = {
  stories: ['../src/**/*.stories.{js,jsx,ts,tsx}'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register'
  ],
  webpackFinal( config, { configType } ) {
    return cracoLinaria.overrideWebpackConfig( {
      webpackConfig: config,
      context: {
        env: configType.toLowerCase(),
      },
    } );
  },
}
