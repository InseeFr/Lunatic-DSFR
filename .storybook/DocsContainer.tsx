import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { DocsContainer as DocsContainer_base } from "@storybook/blocks";
import React, { ComponentProps, useEffect } from "react";
import { darkTheme, lightTheme } from "./customTheme";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

import { addons } from "@storybook/preview-api";
const channel = addons.getChannel();

type Props = ComponentProps<typeof DocsContainer_base>;

export function DocsContainer(props: Props) {
    const { children, context } = props;

    const { setIsDark, isDark } = useIsDark();

    useEffect(() => {
        // listen to DARK_MODE event
        channel.on(DARK_MODE_EVENT_NAME, setIsDark);
        return () => channel.off(DARK_MODE_EVENT_NAME, setIsDark);
    }, [channel, setIsDark]);

    return (
        <DocsContainer_base context={context} theme={isDark ? darkTheme : lightTheme}>
            {children}
        </DocsContainer_base>
    );
}
