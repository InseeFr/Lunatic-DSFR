import { ReactNode } from "react";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Checkbox as CheckboxDSFR } from "@codegouvfr/react-dsfr/Checkbox";
import { LunaticError } from "./utils/type/type";
import { useStyles } from "tss-react/dsfr";

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
    const { cx } = useStyles();
    return (
        <CheckboxDSFR
            className={cx("checkbox-lunatic-dsfr", className, id)}
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
