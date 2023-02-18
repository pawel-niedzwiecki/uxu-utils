import path from 'path';

module.exports = {
  core: { builder: 'webpack5' },
  stories: [

    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials' , '@nrwl/react/plugins/storybook'

    , 'storybook-addon-swc',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js'),
      },
    }

  ]
};
