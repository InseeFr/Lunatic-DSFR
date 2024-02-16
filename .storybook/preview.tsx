import type { Preview } from "@storybook/react";
import { darkTheme, lightTheme } from "./customTheme";

import "./static/dsfr/utility/icons/icons.min.css";
import "./static/dsfr/dsfr.css";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import { useIsDark as useIsDsfrDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useDarkMode as useStorybookUiDarkMode } from "storybook-dark-mode";

import React, { useEffect } from "react";
import { DocsContainer } from "./DocsContainer";

const defaultLang = "fr";

startReactDsfr({
    "defaultColorScheme": "system",
    "useLang": () => defaultLang,
});

console.log(document.body);

const toto: Preview = {};

const preview = {
    globalTypes: {
        locale: {
            description: "Internationalization locale",
            defaultValue: defaultLang,
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
        /*
        backgrounds: { disable: true },
        */
        docs: {
            container: DocsContainer,
        },
        darkMode: {
            light: lightTheme,
            dark: darkTheme,
        },
    },
    decorators: [
        (Story, context) => {
            console.log(context.globals.locale);
            const isStorybookUiDark = useStorybookUiDarkMode();
            const { setIsDark: setIsDsfrDark } = useIsDsfrDark();
            useEffect(
                //We initialize storybook canva with the same theme as storybook webSite
                () => {
                    setIsDsfrDark(isStorybookUiDark);
                },
                [],
            );
            return <Story />;
        },
    ],
} satisfies Preview;

export default preview;
