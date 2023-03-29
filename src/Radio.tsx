import { useCallback } from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { RadioButtons as RadioDSFR } from "@codegouvfr/react-dsfr/RadioButtons";
import { LunaticError } from "./utils/type/type";

type RadioGroupType = {
    onSelect: (value?: number | string) => void;
    disabled?: boolean;
    label: string;
    description: string;
    options: Array<{
        value: string;
        description?: string;
        label: string;
    }>;
    id: string;
    errors: Record<string, Array<LunaticError>>;
    value?: number | string;
};

type OptionType = {
    label: string;
    value?: number | string;
    description?: string;
};

function getOptions(
    options: Array<OptionType>,
    selection: string | number | undefined | null,
    handleChange: (value?: string | number) => void,
) {
    return options.map(function (option) {
        const { value, label, description } = option;
        return {
            label,
            hintText: description,
            nativeInputProps: {
                value,
                onChange: () => handleChange(value),
                checked: selection === value,
            },
        };
    });
}

export function Radio({
    onSelect,
    disabled,
    label,
    description,
    options,
    id,
    errors,
    value,
}: RadioGroupType) {
    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);

    const handleChange = useCallback(
        function (value?: string | number) {
            onSelect(value);
        },
        [onSelect],
    );

    const htmlOptions = getOptions(options, value, handleChange);

    return (
        <RadioDSFR
            disabled={disabled}
            legend={label}
            name="radio"
            hintText={description}
            className={classnames("lunatic-dsfr-radio")}
            options={htmlOptions}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}

export default Radio;
