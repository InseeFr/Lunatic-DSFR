import type { Preview } from "@storybook/react";
import { darkTheme, lightTheme } from "./customTheme";
import "./static/dsfr/utility/icons/icons.min.css";
import "./static/dsfr/dsfr.css";

import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";

startReactDsfr({
    "defaultColorScheme": "system",
    "useLang": () => "fr",
});

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: { "disable": true },
        darkMode: {
            current: "dark",
            light: lightTheme,
            dark: darkTheme,
        },
        docs: {
            autodocs: true,
        },
    },
};

export default preview;
