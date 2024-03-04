import { getErrorStates } from "./utils/errorStates";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import RadioButtons from "@codegouvfr/react-dsfr/RadioButtons";

export const RadioGroup: LunaticSlotComponents["RadioGroup"] = props => {
    const { options, value, id, label, description, onSelect, errors, disabled } = props;

    //TODO readonly ?? waiting spec

    const { state, stateRelatedMessage } = getErrorStates(errors);

    return (
        <RadioButtons
            id={id}
            legend={label}
            hintText={description}
            disabled={disabled}
            options={options.map(option => ({
                label: option.label,
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
