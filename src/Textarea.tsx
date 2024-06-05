import { Input } from "@codegouvfr/react-dsfr/Input";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { useId } from "react";
import { getErrorStates } from "./utils/errorStates";

export const Textarea: LunaticSlotComponents["Textarea"] = props => {
    const {
        value,
        onChange,
        label,
        description,
        errors,
        required,
        rows,
        maxLength,
        cols,
        placeHolder,
        disabled,
        readOnly,
        declarations,
    } = props;

    const id = useId();
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
        <Input
            label={label}
            hintText={description}
            id={id}
            textArea
            disabled={disabled}
            nativeTextAreaProps={{
                value: value ?? "",
                rows,
                required,
                maxLength,
                onChange: e => onChange(e.target.value),
                cols,
                placeholder: placeHolder,
                readOnly,
                ...(state === "error"
                    ? { "aria-invalid": true, "aria-errormessage": errorMessageId }
                    : {}),
            }}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
};
