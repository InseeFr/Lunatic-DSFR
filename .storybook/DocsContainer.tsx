import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs";
import { Unstyled } from "@storybook/blocks";

import React, { ReactNode, useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { fr } from "@codegouvfr/react-dsfr";
import { darkTheme, lightTheme } from "./customTheme";

export function DocsContainer(props: { children: ReactNode; context: any }) {
    const { children, context, ...rest } = props;
    console.log("DocsContainer");
    const isStorybookUiDark = useDarkMode();
    const { setIsDark } = useIsDark();
    const backgroundColor = fr.colors.decisions.background.default.grey.default;
    useEffect(
        //Docs Page and storybookUI must have same theme
        () => {
            setIsDark(isStorybookUiDark);
        },
        [isStorybookUiDark],
    );
    console.log(context);

    return (
        <Unstyled>
            <h2>H2 TEST </h2>
            <BaseContainer
                context={{
                    ...context,
                }}
                {...rest}
            >
                <div
                    style={{
                        background: backgroundColor,
                    }}
                >
                    {children}
                </div>
            </BaseContainer>
        </Unstyled>
    );
}
