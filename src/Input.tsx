import { useCallback } from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import { LunaticError } from "./utils/type/type";

function checkValue(value: string) {
    return value ?? "";
}

export type TypeError = Record<string, Array<LunaticError>>;

export function Input({
    value,
    onChange,
    disabled,
    required,
    maxLength,
    label,
    description,
    id,
    errors,
}: {
    value: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onChange: Function;
    disabled: boolean;
    required: boolean;
    maxLength: number;
    label: string;
    description: string;
    id: string;
    errors: Record<string, Array<LunaticError>>;
}) {
    const handleChange = useCallback(
        function (e: React.ChangeEvent<HTMLInputElement>) {
            onChange(e.target.value);
        },
        [onChange],
    );

    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);
    return (
        <InputDSFR
            label={label}
            disabled={disabled}
            className={classnames("lunatic-dsfr-input")}
            nativeInputProps={{
                id: id,
                maxLength: maxLength,
                value: checkValue(value),
                required: required,
                onChange: handleChange,
            }}
            hintText={description}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}

Input.defaultProps = {
    disabled: false,
    required: true,
    maxLength: Number.MAX_SAFE_INTEGER,
};

export default Input;
