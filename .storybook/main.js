import config from "process";
import { resolve } from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

export const stories = ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"];
export const staticDirs = ["../public"];
export const features = {
    storyStoreV7: false,
};
export const addons = [
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
];
export const framework = {
    name: "@storybook/react-webpack5",
    options: { fastRefresh: true },
};
export async function webpackFinal(config, { configType }) {
    config.module.rules.push({
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: resolve(__dirname, "../"),
    });

    config.resolve = {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modules: [...(config.resolve.modules || []), resolve(__dirname, "../src")],
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
}
export const docs = {
    autodocs: true,
};
