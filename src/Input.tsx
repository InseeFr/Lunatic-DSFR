import { getErrorStates } from "./utils/errorStates";
import { Input as InputDSFR, type InputProps } from "@codegouvfr/react-dsfr/Input";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { forwardRef, useId } from "react";

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
                readOnly: readOnly,
                "aria-invalid": state === "error",
            }}
            hintText={description}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
};

export type CustomInputProps = InputProps["nativeInputProps"] & {
    dsfrProps: Omit<InputProps.RegularInput, "nativeInputProps">;
};

/**
 * Only use this component inside NumberFormat from `react-number-format`
 * This abstraction is necessary because `react-number-format` passes `onChange`, `onFocus`, `onBlur`, and other input events directly to the Input component.
 * Therefore, these props need to be at the root level.
 * See: https://s-yadav.github.io/react-number-format/docs/quirks#notes-and-quirks
 */
export const CustomInputDsfr = forwardRef<HTMLInputElement, CustomInputProps>((props, ref) => {
    const { dsfrProps, ...restProps } = props;
    return <InputDSFR {...dsfrProps} ref={ref} nativeInputProps={restProps} />;
});
