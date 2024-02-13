import type { Preview } from "@storybook/react";
import { darkTheme, lightTheme } from "./customTheme";
//TO CHANGE WHEN Upgrade react-dsfr
import "../public/dsfr/utility/icons/icons.min.css";
import "../public/dsfr/dsfr.css";

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
