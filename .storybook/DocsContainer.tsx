import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { DocsContainer as DocsContainer_base } from "@storybook/blocks";
import React, { ReactNode, useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { fr } from "@codegouvfr/react-dsfr";
import { MuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";
import { darkTheme, lightTheme } from "./customTheme";

(function patchStorybookDocumentContainer() {
    // Callback function to execute when mutations are observed
    const callback: MutationCallback = mutationsList => {
        for (const mutation of mutationsList) {
            if (mutation.type !== "childList") {
                return;
            }

            mutation.addedNodes.forEach(function callee(node) {
                if (node.nodeType !== 1) {
                    return;
                }

                const element = node as Element;

                remove_emotion_classes: {
                    if (
                        !element.classList.contains("sbdocs-wrapper") &&
                        !element.classList.contains("sbdocs-content")
                    ) {
                        break remove_emotion_classes;
                    }

                    element.classList.forEach(className => {
                        if (!className.startsWith("css-")) {
                            return;
                        }

                        element.classList.remove(className);
                    });
                }

                element.childNodes.forEach(callee);
            });
        }
    };

    new MutationObserver(callback).observe(document.body, {
        childList: true,
        subtree: true,
    });
})();

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

    return (
        <DocsContainer_base context={context}>
            <MuiDsfrThemeProvider>{children}</MuiDsfrThemeProvider>
        </DocsContainer_base>
    );
}
