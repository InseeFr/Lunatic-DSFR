const config = require("process");
const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

    features: {
        storyStoreV7: false,
    },

    addons: [
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
                transcludeMarkdown: true,
            },
        },
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-mdx-gfm",
    ],

    framework: {
        name: "@storybook/react-webpack5",
        options: { fastRefresh: true },
    },

    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../"),
        });

        config.resolve = {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            modules: [...(config.resolve.modules || []), path.resolve(__dirname, "../src")],
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
                }),
            ],
        };

        return config;
    },

    docs: {
        autodocs: true,
    },
};
