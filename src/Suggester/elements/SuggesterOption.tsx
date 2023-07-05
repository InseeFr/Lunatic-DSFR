import { makeStyles } from "@codegouvfr/react-dsfr/tss";
import { fr } from "@codegouvfr/react-dsfr";
import { SuggesterOption as SuggesterOptionType } from "../../type";

type Props = {
    option: SuggesterOptionType;
    selected?: boolean;
};

const useStyles = makeStyles()(theme => ({
    root: {
        "&:hover": {
            background: theme.decisions.background.open.blueFrance.default,
        },
        cursor: "pointer",
    },
}));

function getStyle(selected: boolean) {
    const backgroundColor = fr.getColors(false).decisions.background.open.blueFrance.default;
    if (selected) {
        return {
            backgroundColor,
        };
    }
}

export function SuggesterOption({ option, selected }: Props) {
    const { label } = option;
    const { classes, cx } = useStyles();

    return (
        <li className={cx(classes.root, "fr-p-2w")} style={getStyle(selected ? selected : false)}>
            {label}
        </li>
    );
}
