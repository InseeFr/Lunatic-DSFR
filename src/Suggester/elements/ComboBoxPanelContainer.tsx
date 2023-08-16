import classnames from "classnames";
import { PropsWithChildren } from "react";
import { makeStyles } from "tss-react/dsfr";

type Props = PropsWithChildren<{
    focused?: boolean;
    expanded?: boolean;
    id?: string;
}>;

const useStyles = makeStyles()(theme => ({
    root: {
        "> li": {
            "listStyle": "none",
            "padding": "0.25rem",
            background: theme.decisions.background.contrast.grey.default,
            ":hover": {
                background: theme.decisions.background.contrast.grey.active,
            },
        },
    },
}));

export function ComboboxPanelContainer({ children, focused, expanded, id }: Props) {
    const { classes, cx } = useStyles();
    return (
        <ul
            id={`lunatic-combo-box-panel-${id}`}
            aria-label="suggestions"
            className={classnames(
                "lunatic-combo-box-panel",
                "fr-select",
                "fr-p-0",
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
