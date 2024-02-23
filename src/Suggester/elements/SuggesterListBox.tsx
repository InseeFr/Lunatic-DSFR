import { fr } from "@codegouvfr/react-dsfr";
import { type PropsWithChildren, type LegacyRef, forwardRef } from "react";
import { tss } from "tss-react/dsfr";

type SuggesterListBoxProps = {
    display: boolean;
};

const useStyles = tss.create(() => ({
    root: {
        backgroundColor: fr.colors.decisions.background.alt.grey.default,
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

export const SuggesterListBox = forwardRef(function SuggesterListBox(
    props: PropsWithChildren<SuggesterListBoxProps>,
    ref: LegacyRef<HTMLUListElement>,
) {
    const { children, display, ...rest } = props;
    const { classes, cx } = useStyles();

    if (display) {
        return (
            <ul {...rest} className={cx(classes.root, "fr-mt-0-5v")} ref={ref}>
                {children}
            </ul>
        );
    }
    return null;
});
