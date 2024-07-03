import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-dark-mode",
        "@storybook/addon-a11y",
    ],

    docs: {
        //👇 See the table below for the list of supported options
        autodocs: true,
        defaultName: "Documentation",
    },

    framework: {
        name: "@storybook/react-vite",
        options: {},
    },

    core: {
        builder: "@storybook/builder-vite",
    },
    staticDirs: ["./static"],

    async viteFinal(config) {
        const { mergeConfig } = await import("vite");

        // Merge custom configuration into the default config
        return mergeConfig(config, {
            plugins: [tsconfigPaths()],
            // Add dependencies to pre-optimization
            optimizeDeps: {
                include: ["storybook-dark-mode"],
            },
        });
    },
} satisfies StorybookConfig;
