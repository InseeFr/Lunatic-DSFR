import type { Preview } from "@storybook/react";
import { darkTheme, lightTheme } from "./customTheme";

import "./static/dsfr/utility/icons/icons.min.css";
import "./static/dsfr/dsfr.css";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useDarkMode } from "storybook-dark-mode";

import React, { useEffect } from "react";
import { DocsContainer } from "./DocsContainer";

startReactDsfr({
    "defaultColorScheme": "system",
    "useLang": () => "fr",
});
const toto: Preview = {};

const preview: Preview = {
    globalTypes: {
        locale: {
            description: "Internationalization locale",
            defaultValue: "fr",
            toolbar: {
                icon: "globe",
                items: [
                    { value: "fr", right: "🇫🇷", title: "Français" },
                    { value: "en", right: "🇺🇸", title: "English" },
                ],
            },
        },
    },
    parameters: {
        backgrounds: { "disable": true },
        darkMode: {
            light: lightTheme,
            dark: darkTheme,
        },
        docs: {
            container: DocsContainer,
        },
    },
    decorators: [
        (Story, context) => {
            console.log(context.globals.locale);
            const isStorybookUiDark = useDarkMode();
            const { setIsDark } = useIsDark();
            useEffect(
                //We initialize storybook canva with the same theme as storybook webSite
                () => {
                    setIsDark(isStorybookUiDark);
                },
                [],
            );
            return <Story />;
        },
    ],
};

export default preview;
