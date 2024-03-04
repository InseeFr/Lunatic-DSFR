import { getErrorStates } from "./utils/errorStates";
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import type { LunaticSlotComponents } from "@inseefr/lunatic";

export const Input: LunaticSlotComponents["Input"] = props => {
    const {
        value,
        onChange,
        disabled,
        required,
        maxLength,
        label,
        description,
        id,
        errors,
        readOnly,
        declarations,
    } = props;

    const { state, stateRelatedMessage } = getErrorStates(errors);

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }

    return (
        <InputDSFR
            label={label}
            disabled={disabled}
            nativeInputProps={{
                id: id,
                maxLength: maxLength,
                value: value ?? "",
                required: required,
                onChange: e => onChange(e.target.value),
                readOnly: readOnly,
                "aria-invalid": state === "error",
            }}
            hintText={description}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
};
