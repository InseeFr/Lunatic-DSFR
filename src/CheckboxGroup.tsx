import classnames from "classnames";
import { useCallback } from "react";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Checkbox as CheckboxDSFR } from "@codegouvfr/react-dsfr/Checkbox";
import { LunaticError } from "./utils/type/type";

type OptionType = {
    label: string;
    checked?: boolean;
    name?: string;
    description?: string;
    onClick: (status: boolean) => void;
};

function Options(options: Array<OptionType>) {
    return options.map(function (option, index) {
        const { label, name, description, checked, onClick } = option;
        const checkboxId = `lunatic-dsfr-checkbox-${index}-${name}`;

        const onClickOption = useCallback(
            function () {
                onClick(!checked);
            },
            [checked, onClick],
        );

        return {
            label: label,
            id: checkboxId,
            hintText: description,
            nativeInputProps: {
                name: checkboxId,
                checked: checked,
                onChange: onClickOption,
            },
        };
    });
}

export function CheckboxGroup({
    label,
    description,
    id,
    disabled,
    className,
    options,
    errors,
}: {
    disabled: boolean;
    label: string;
    description: string;
    id: string;
    className: string;
    options: Array<OptionType>;
    errors: Record<string, Array<LunaticError>>;
}) {
    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);

    return (
        <CheckboxDSFR
            className={classnames("dropdown-lunatic-dsfr", className, id)}
            disabled={disabled}
            legend={label}
            hintText={description}
            options={Options(options)}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}

export default CheckboxGroup;
