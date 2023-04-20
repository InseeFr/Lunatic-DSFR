import { PropsWithChildren, LegacyRef, forwardRef } from "react";
import { makeStyles } from "@codegouvfr/react-dsfr/tss";

type SuggesterListBoxProps = {
    display: boolean;
};

const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: theme.decisions.background.raised.grey.default,
        width: "100%",
        margin: 0,
        padding: 0,
        zIndex: 2,
        position: "absolute",
        listStyle: "none",
        overflow: "auto",
        maxHeight: "200px",
        border: "1px solid rgba(0,0,0,.25)",
    },
}));

export const SuggesterListBox = forwardRef(function SuggesterListBox(
    props: PropsWithChildren<SuggesterListBoxProps>,
    ref: LegacyRef<HTMLUListElement>,
) {
    const { children, display, ...rest } = props;
    const { classes, cx } = useStyles();

    if (display) {
        return (
            <ul {...rest} className={cx(classes.root)} ref={ref}>
                {children}
            </ul>
        );
    }
    return <ul></ul>;
});
