import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-dark-mode",
    ],
    core: {
        builder: "@storybook/builder-vite", // 👈 The builder enabled here.
    },
    framework: "@storybook/react-vite",
    staticDirs: ["./static"],
    async viteFinal(config) {
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
