import type { Preview } from "@storybook/react";
import { darkTheme, lightTheme } from "./customTheme";
import "@codegouvfr/react-dsfr/dsfr/utility/icons/icons.min.css";
import "@codegouvfr/react-dsfr/dsfr/dsfr.min.css";
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import { useIsDark as useIsDsfrDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useDarkMode as useStorybookUiDarkMode } from "storybook-dark-mode";
import type { Channel } from "@storybook/channels";
import { UPDATE_STORY_ARGS } from "@storybook/core-events";
import React, { useEffect, useRef } from "react";
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
            controls: { exclude: ["darkMode"] },
        },
        darkMode: {
            light: lightTheme,
            dark: darkTheme,
        },
        controls: {
            exclude: ["activeControls", "shortcut", "filterDescription"],
            expanded: true,
        },
    },

    argTypes: {
        darkMode: {
            control: { type: "boolean" },
            "description":
                "Global color scheme enabled, light or dark, it change only the color scheme of the Canvas",
        },
        initialPage: {
            table: { disable: true },
            control: { type: "text" },
        },
        autoSuggesterLoading: {
            table: { disable: true },
            control: { type: "boolean" },
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

    tags: ["autodocs"],
} satisfies Preview;

export default preview;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useEffectOnValueChange<T extends readonly [value: any, ...moreValues: any[]]>(
    effect: (...args: T) => void | (() => void),
    values: T,
): void {
    const refIsFistRender = useRef(true);

    useEffect(() => {
        if (refIsFistRender.current) {
            refIsFistRender.current = false;
            return;
        }

        return effect(...values);
    }, values);
}
