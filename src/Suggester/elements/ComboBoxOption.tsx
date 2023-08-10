import classnames from "classnames";
import { makeStyles } from "@codegouvfr/react-dsfr/tss";
import { fr } from "@codegouvfr/react-dsfr";
import { ReactNode } from "react";

type ComboBoxOptionType = {
    id?: string;
    description?: ReactNode;
    label?: ReactNode;
    value: string;
    search?: string;
};

type Props = {
    option: ComboBoxOptionType;
    selected?: boolean;
};

const useStyles = makeStyles()(theme => ({
    root: {
        "&.Mui-focused": {
            background: theme.decisions.background.open.blueFrance.default,
        },
        cursor: "pointer",
    },
}));

function getStyle(selected?: boolean) {
    const backgroundColor = fr.getColors(false).decisions.background.open.blueFrance.default;
    if (selected) {
        return {
            backgroundColor,
        };
    }
}

export function ComboboxOption({ option, selected }: Props) {
    const { id, value, label } = option;
    const { classes, cx } = useStyles();

    if (label && typeof label === "string" && label.length) {
        return (
            <div
                className={classnames(
                    "lunatic-dsfr-combo-box-option",
                    { selected },
                    cx(classes.root, "fr-p-2w"),
                )}
                style={getStyle(selected)}
            >
                <span className="id">{id || value}</span>
                <span> - </span>
                <span className="label">{label}</span>
            </div>
        );
    }
    return (
        <div className={classnames("lunatic-dsfr-combo-box-option", { selected })}>
            <span className="id">{id}</span>
        </div>
    );
}
