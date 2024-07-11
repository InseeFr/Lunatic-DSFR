import { getErrorStates } from "./utils/errorStates";
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { useId } from "react";
import { useQuestionId } from "./Question";

export const Input: LunaticSlotComponents["Input"] = props => {
    const {
        value,
        onChange,
        disabled,
        required,
        maxLength,
        label,
        description,
        errors,
        readOnly,
        declarations,
    } = props;

    const id = useId();
    const questionId = useQuestionId();
    /**
     * Note that the error message ID follows the format `${id}-desc-error` because this is the convention used by the underlying library react-dsfr
     * See: https://github.com/codegouvfr/react-dsfr/blob/4c41367febcb78307f261df1b761fedb52c8a905/src/Input.tsx#L103
     */
    const errorMessageId = `${id}-desc-error`;

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
                id,
                maxLength: maxLength,
                value: value ?? "",
                required: required,
                onChange: e => onChange(e.target.value),
                readOnly,
                "aria-labelledby": questionId,
                ...(state === "error"
                    ? { "aria-invalid": true, "aria-errormessage": errorMessageId }
                    : {}),
            }}
            hintText={description}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
};
