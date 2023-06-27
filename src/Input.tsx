import { useCallback, useState, useEffect } from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import { LunaticError } from "./utils/type/type";
import { LunaticComponentProps } from "./type";
import { descriptionAsString } from "@inseefr/lunatic";

function checkValue(value: string) {
    return value ?? "";
}

export type TypeError = Record<string, Array<LunaticError>>;

type Props = Pick<
    LunaticComponentProps<"Input">,
    "value" | "disabled" | "required" | "maxLength" | "label" | "description" | "id" | "errors"
> & { onChange: (v: string) => void };

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
}: Props) {
    const [localValue, setLocalValue] = useState<string>(value ?? "");

    useEffect(() => {
        setLocalValue(value ?? "");
    }, [value]);

    const handleChange = useCallback(
        function (e: React.ChangeEvent<HTMLInputElement>) {
            setLocalValue(e.target.value);
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
                value: checkValue(localValue),
                required: required,
                onChange: handleChange,
            }}
            hintText={descriptionAsString(description)}
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
