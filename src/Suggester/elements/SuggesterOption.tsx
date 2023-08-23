import { makeStyles } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

type SuggesterOption = {
    label: string;
    selected: boolean;
};

const useStyles = makeStyles()(theme => ({
    root: {
        "&.Mui-focused": {
            background: theme.decisions.background.open.blueFrance.default,
        },
        cursor: "pointer",
    },
}));

function getStyle(selected: boolean) {
    const backgroundColor = fr.colors.decisions.background.open.blueFrance.default;
    if (selected) {
        return {
            backgroundColor,
        };
    }
}

export function SuggesterOption(props: SuggesterOption) {
    const { label, selected } = props;
    const { classes, cx } = useStyles();

    return (
        <li {...props} className={cx(classes.root, "fr-p-2w")} style={getStyle(selected)}>
            {label}
        </li>
    );
}
