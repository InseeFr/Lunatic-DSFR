import { useCallback, useState, useEffect } from "react";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import { tss } from "tss-react/dsfr";
import type { LunaticError } from "@inseefr/lunatic";

const useStyles = tss.create({
    readOnly: {
        ".fr-input:read-only": {
            "color": "var(--text-disabled-grey)",
            "boxShadow": "inset 0 -2px 0 0 var(--border-disabled-grey)",
        },
    },
});

function checkValue(value: string) {
    return value ?? "";
}

export type TypeError = Record<string, Array<LunaticError>>;

export function Input({
    value,
    onChange,
    disabled = false,
    required = true,
    maxLength = Number.MAX_SAFE_INTEGER,
    label,
    description,
    id,
    errors,
    readOnly,
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
    errors: Array<LunaticError>;
    readOnly?: boolean;
}) {
    const { classes, cx } = useStyles();
    const [localValue, setLocalValue] = useState<string>(value);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    const handleChange = useCallback(
        function (e: React.ChangeEvent<HTMLInputElement>) {
            setLocalValue(e.target.value);
            onChange(e.target.value);
        },
        [onChange],
    );

    const state = getState(errors);
    const stateRelatedMessage = getStateRelatedMessage(errors);
    return (
        <InputDSFR
            label={label}
            disabled={disabled}
            className={cx("lunatic-dsfr-input", cx(classes.readOnly))}
            nativeInputProps={{
                id: id,
                maxLength: maxLength,
                value: checkValue(localValue),
                required: required,
                onChange: handleChange,
                readOnly: readOnly,
                "aria-invalid": state === "error",
            }}
            hintText={description}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
        />
    );
}
