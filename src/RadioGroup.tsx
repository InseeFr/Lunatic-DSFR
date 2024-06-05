import { getErrorStates } from "./utils/errorStates";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useId } from "react";

export const RadioGroup: LunaticSlotComponents["RadioGroup"] = props => {
    const { options, value, label, description, errors, disabled, readOnly } = props;

    const id = useId();
    /**
     * Note that the error message ID follows the format `${id}-messages` because this is the convention used by the underlying library react-dsfr
     * See: https://github.com/codegouvfr/react-dsfr/blob/4c41367febcb78307f261df1b761fedb52c8a905/src/shared/Fieldset.tsx#L101
     */
    const errorMessageId = `${id}-messages`;

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
                    onChange: option.onCheck,
                    ...(state === "error"
                        ? { "aria-invalid": true, "aria-errormessage": errorMessageId }
                        : {}),
                },
            }))}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
};
