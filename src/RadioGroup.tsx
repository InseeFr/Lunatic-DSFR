import { getErrorStates } from "./utils/errorStates";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useId } from "react";

export const RadioGroup: LunaticSlotComponents["RadioGroup"] = props => {
    const { options, value, label, description, onSelect, errors, disabled, readOnly } = props;

    const id = useId();

    const { state, stateRelatedMessage } = getErrorStates(errors);

    return (
        <RadioButtons
            id={id}
            legend={label}
            hintText={description}
            disabled={disabled || readOnly}
            options={options.map(option => ({
                label: <span>{option.label}</span>,
                hintText: option.description,
                nativeInputProps: {
                    checked: value === option.value,
                    onChange: () => onSelect(option.value),
                },
            }))}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
};
