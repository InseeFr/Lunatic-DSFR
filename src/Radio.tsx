import { useCallback } from "react";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { RadioButtons as RadioDSFR } from "@codegouvfr/react-dsfr/RadioButtons";
import { useStyles } from "tss-react/dsfr";
import type { LunaticError } from "@inseefr/lunatic";

type RadioGroupType = {
    onSelect: (value?: unknown) => void;
    disabled?: boolean;
    label: string;
    description: string;
    options: Array<{
        value: string;
        description?: string;
        label: string;
    }>;
    id: string;
    errors: Array<LunaticError>;
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
    const state = getState(errors);
    const stateRelatedMessage = getStateRelatedMessage(errors);
    const { cx } = useStyles();
    const handleChange = useCallback(
        function (value?: unknown) {
            onSelect(value);
        },
        [onSelect],
    );

    const htmlOptions = getOptions(options, value, handleChange);

    return (
        <RadioDSFR
            name={id}
            disabled={disabled}
            legend={label}
            hintText={description}
            className={cx("lunatic-dsfr-radio")}
            options={htmlOptions}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}
