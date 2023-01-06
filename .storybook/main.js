const config = require('process');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react", 
  webpackFinal: async (config, { configType }) => {
    // config.module.rules.push({
		// 	test: /\.scss$/,
		// 	use: ['style-loader', 'css-loader', 'sass-loader'],
		// 	include: path.resolve(__dirname, '../'),
		// });
    config.resolve = {
			modules: [
				...(config.resolve.modules || []),
				path.resolve(__dirname, '../src'),
			],
			fallback: {
				...(config.resolve || {}).fallback,
				fs: false,
				stream: false,
				os: false,
			},
      plugins: [
        ...(config.resolve.plugins || []), 
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        })
      ]
		};
    return config;
  }
}