import { ReactNode } from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Checkbox as CheckboxDSFR } from "@codegouvfr/react-dsfr/Checkbox";
import { LunaticError } from "./utils/type/type";
import { descriptionAsString } from "@inseefr/lunatic";

type CheckboxGroupOption = {
    label: ReactNode;
    name: string;
    checked: boolean;
    description?: ReactNode;
    onClick: (b: boolean) => void;
};

type Props = {
    options: CheckboxGroupOption[];
    errors?: Record<string, LunaticError[]>;
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
    return (
        <CheckboxDSFR
            className={classnames("dropdown-lunatic-dsfr", className, id)}
            disabled={disabled}
            legend={label}
            hintText={descriptionAsString(description)}
            options={getOptions(options)}
            state={errors ? getState(errors, id) : undefined}
            stateRelatedMessage={errors ? getStateRelatedMessage(errors, id) : undefined}
        />
    );
}

export default CheckboxGroup;
