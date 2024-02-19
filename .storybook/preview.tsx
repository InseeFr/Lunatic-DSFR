import type { Preview } from "@storybook/react";
import { darkTheme, lightTheme } from "./customTheme";
import "./static/dsfr/utility/icons/icons.min.css";
import "./static/dsfr/dsfr.css";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import { useIsDark as useIsDsfrDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useDarkMode as useStorybookUiDarkMode } from "storybook-dark-mode";
import { useEffectOnValueChange } from "../src/hooks/useEffectOnValueChange";

import React, { useEffect } from "react";
import { DocsContainer } from "./DocsContainer";

const defaultLang = "fr";

startReactDsfr({
    "defaultColorScheme": "system",
    "useLang": () => defaultLang,
});

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
        backgrounds: { disable: true },
        docs: {
            autodocs: "tags",
            container: DocsContainer,
        },
        darkMode: {
            light: lightTheme,
            dark: darkTheme,
        },
    },
    argTypes: {
        darkMode: {
            control: { type: "boolean" },
            "description": "Global color scheme enabled, light or dark",
        },
    },
    decorators: [
        (Story, context) => {
            const isStorybookUiDark = useStorybookUiDarkMode();
            const { isDark, setIsDark: setIsDsfrDark } = useIsDsfrDark();
            useEffect(
                //We initialize storybook canva with the same theme as storybook webSite
                () => {
                    setIsDsfrDark(isStorybookUiDark);
                },
                [],
            );
            useEffectOnValueChange(() => {
                setIsDsfrDark(context.args.darkMode);
            }, [context.args.darkMode]);

            return <Story />;
        },
    ],
} satisfies Preview;

export default preview;
