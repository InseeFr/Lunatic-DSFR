import { PropsWithChildren } from "react";
import { tss } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

type Props = PropsWithChildren<{
    focused?: boolean;
    expanded?: boolean;
    id?: string;
}>;

const useStyles = tss.create(() => ({
    root: {
        maxHeight: "20rem",
        overflowX: "hidden",
        overflowY: "scroll",
        "> li": {
            listStyle: "none",
            boxSizing: "border-box",
            background: fr.colors.decisions.background.contrast.grey.default,
            padding: 0,
            ":hover": {
                background: fr.colors.decisions.background.open.blueFrance.default,
            },
            ":focus": {
                borderColor: "blue",
                borderWidth: "2px",
                borderStyle: "solid",
            },
            ".selected": {
                background: fr.colors.decisions.background.open.blueFrance.default,
            },
        },
    },
}));

export function ComboboxPanelContainer({ children, focused, expanded, id }: Props) {
    const { classes, cx } = useStyles();

    if (Array.isArray(children) && children.length > 0) {
        return (
            <ul
                id={`lunatic-combo-box-panel-${id}`}
                aria-label="suggestions"
                className={cx(
                    "lunatic-combo-box-panel",
                    "fr-select",
                    "fr-p-0",
                    "fr-mb-0",
                    "fr-mt-0",
                    {
                        focused,
                        expanded,
                    },
                    cx(classes.root),
                )}
                role="listbox"
            >
                {children}
            </ul>
        );
    }
    return null;
}
