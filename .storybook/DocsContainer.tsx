import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { DocsContainer as DocsContainer_base } from "@storybook/addon-docs";
import React, { ComponentProps, useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme, lightTheme } from "./customTheme";

type Props = ComponentProps<typeof DocsContainer_base>;

export function DocsContainer(props: Props) {
    const { children, context } = props;
    const isStorybookUiDark = useDarkMode();
    const { setIsDark } = useIsDark();

    useEffect(
        //Docs Page and storybookUI must have same theme
        () => {
            setIsDark(isStorybookUiDark);
        },
        [isStorybookUiDark],
    );

    return (
        <DocsContainer_base context={context} theme={isStorybookUiDark ? darkTheme : lightTheme}>
            {children}
        </DocsContainer_base>
    );
}
