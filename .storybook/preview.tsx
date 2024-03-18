import type { Preview } from "@storybook/react";
import { darkTheme, lightTheme } from "./customTheme";
import "./static/dsfr/utility/icons/icons.min.css";
import "./static/dsfr/dsfr.css";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import { useIsDark as useIsDsfrDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useDarkMode as useStorybookUiDarkMode } from "storybook-dark-mode";
import { useEffectOnValueChange } from "../src/hooks/useEffectOnValueChange";
import type { Channel } from "@storybook/channels";
import { UPDATE_STORY_ARGS } from "@storybook/core-events";
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
            autodocs: true,
            container: DocsContainer,
        },
        darkMode: {
            light: lightTheme,
            dark: darkTheme,
        },
        controls: {
            exclude: [
                "activeControls",
                "initialPage",
                "autoSuggesterLoading",
                "shortcut",
                "filterDescription",
            ],
        },
    },
    argTypes: {
        darkMode: {
            control: { type: "boolean" },
            "description":
                "Global color scheme enabled, light or dark, it change only the color scheme of the Canvas",
        },
    },
    decorators: [
        (Story, context) => {
            const isStorybookUiDark = useStorybookUiDarkMode();
            const { setIsDark: setIsDsfrDark } = useIsDsfrDark();
            const channel = (window as any).__STORYBOOK_ADDONS_CHANNEL__ as Channel;

            useEffect(
                //We initialize storybook canva with the same theme as storybook webSite
                () => {
                    setIsDsfrDark(isStorybookUiDark);
                    channel.emit(UPDATE_STORY_ARGS, {
                        storyId: context.id,
                        updatedArgs: { darkMode: isStorybookUiDark },
                    });
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
