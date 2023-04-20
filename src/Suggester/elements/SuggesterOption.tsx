import { makeStyles } from "@codegouvfr/react-dsfr/tss";
import { fr } from "@codegouvfr/react-dsfr";

type SuggesterOption = {
    label: string;
    selected: boolean;
};

const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: theme.decisions.background.open.blueFrance.default,
    },
}));

function getStyle(selected: boolean) {
    const color = fr.getColors(false).decisions.text.label.grey.default;
    const cursor = "pointer";
    if (selected) {
        return {
            color,
            cursor,
            backgroundColor: "yellow",
        };
    }

    return {
        color,
        cursor,
        backgroundColor: "transparent",
    };
}

export function SuggesterOption(props: SuggesterOption) {
    const { label, selected } = props;
    const { classes, cx } = useStyles();

    return (
        <li {...props} className={cx(classes.root)} style={getStyle(selected)}>
            {label}
        </li>
    );
}
