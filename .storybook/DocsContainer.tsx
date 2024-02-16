import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { DocsContainer as DocsContainer_base } from "@storybook/addon-docs";
import React, { ReactNode, useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { darkTheme, lightTheme } from "./customTheme";

export function DocsContainer(props: { children: ReactNode; context: any }) {
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
