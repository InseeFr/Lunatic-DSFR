import classnames from "classnames";
import { PropsWithChildren } from "react";
import { makeStyles } from "@codegouvfr/react-dsfr/tss";

type Props = PropsWithChildren<{
    focused?: boolean;
    expanded?: boolean;
    id?: string;
}>;

const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: theme.decisions.background.alt.grey.default,
        width: "100%",
        marginRight: 0,
        marginLeft: 0,
        marginBottom: 0,
        padding: 0,
        zIndex: 2,
        position: "absolute",
        listStyle: "none",
        overflow: "auto",
        maxHeight: "200px",
    },
}));

export function PanelContainer({ children, focused, expanded, id }: Props) {
    const { classes, cx } = useStyles();

    return (
        <ul
            id={`lunatic-combo-box-panel-${id}`}
            aria-label="suggestions"
            // className={classnames('lunatic-combo-box-panel', {
            // 	focused,
            // 	expanded,
            // })}
            className={cx(classes.root, "fr-mt-0-5v")}
            role="listbox"
        >
            {children}
        </ul>
    );
}
