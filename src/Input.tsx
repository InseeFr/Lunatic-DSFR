import { useCallback, useState, useEffect } from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import { LunaticError } from "./utils/type/type";
import { makeStyles } from "tss-react/dsfr";

const useStyles = makeStyles()({
    readOnly: {
        ".fr-input:read-only": {
            "color": "var(--text-disabled-grey)",
            "box-shadow": "inset 0 -2px 0 0 var(--border-disabled-grey)",
        },
    },
    root: {
        "> label": {
            display: "block",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            color: "var(--text-label-grey)",
            fontWeight: "400",
            fontFamily: "Marianne",
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
    disabled,
    required,
    maxLength,
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
    errors: Record<string, Array<LunaticError>>;
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

    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);
    return (
        <InputDSFR
            label={label}
            disabled={disabled}
            className={classnames("lunatic-dsfr-input", cx(classes.readOnly), classes.root)}
            nativeInputProps={{
                id: id,
                maxLength: maxLength,
                value: checkValue(localValue),
                required: required,
                onChange: handleChange,
                readOnly: readOnly,
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
