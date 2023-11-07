import { ReactNode } from "react";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Checkbox as CheckboxDSFR } from "@codegouvfr/react-dsfr/Checkbox";
import { LunaticError } from "./utils/type/type";
import { makeStyles } from "tss-react/dsfr";

const useStyles = makeStyles()({
    root: {
        "> legend": {
            paddingBottom: "1rem",
            paddingLeft: "0.75rem",
            paddingRight: "0.75rem",
            marginLeft: "-0.25rem",
            marginRight: "-0.25rem",
            fontSize: "1.75rem !important",
            lineHeight: "2.25rem !important",
            fontWeight: "700 !important",
        },
    },
});
type CheckboxGroupOption = {
    label: ReactNode;
    name: string;
    checked: boolean;
    description?: ReactNode;
    onClick: (b: boolean) => void;
};

type Props = {
    options: CheckboxGroupOption[];
    errors?: LunaticError[];
    id: string;
    label?: ReactNode;
    description?: ReactNode;
    shortcut?: boolean;
    disabled?: boolean;
    className?: string;
};

function getOptions(options: Array<CheckboxGroupOption>) {
    if (options) {
        return options.map(function (option) {
            const { label, description, name, onClick, checked } = option;
            return {
                label,
                hintText: description,
                nativeInputProps: {
                    name,
                    checked,
                    onChange: () => onClick(!checked),
                },
            };
        });
    }
    return [];
}

export function CheckboxGroup({ label, description, id, disabled, className, errors, options }: Props) {
    const { classes, cx } = useStyles();
    return (
        <CheckboxDSFR
            className={cx(classes.root, "checkbox-lunatic-dsfr", className, id)}
            disabled={disabled}
            legend={label}
            hintText={description}
            options={getOptions(options)}
            state={errors ? getState(errors) : undefined}
            stateRelatedMessage={errors ? getStateRelatedMessage(errors) : undefined}
        />
    );
}

export default CheckboxGroup;
