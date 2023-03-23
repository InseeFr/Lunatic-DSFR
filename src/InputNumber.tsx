import {
    useCallback,
    //     ReactNode,
} from "react";
import classnames from "classnames";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import { LunaticError } from "./utils/type/type";

function checkValue(value: number) {
    return value ?? null;
}

export function InputNumber({
    id,
    value,
    onChange,
    disabled,
    readOnly,
    label,
    min,
    max,
    step,
    unit,
    description,
    errors,
}: {
    id: string;
    value: number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onChange: Function;
    disabled: boolean;
    readOnly: boolean;
    label: string;
    min: number;
    max: number;
    step: number;
    unit: string;
    description: string;
    errors: Record<string, Array<LunaticError>>;
}) {
    const handleChange = useCallback(
        function (e: React.ChangeEvent<HTMLInputElement>) {
            const value = e.target.valueAsNumber;
            onChange(isNaN(value) ? null : value);
        },
        [onChange],
    );

    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);

    return (
        <div className="lunatic-input-number-container fr-grid-row fr-grid-row--middle">
            <InputDSFR
                label={label}
                disabled={disabled}
                hintText={description}
                className={classnames("lunatic-dsfr-input-number", {
                    "fr-col-11": unit !== undefined,
                    "fr-col-12": unit === undefined,
                })}
                nativeInputProps={{
                    inputMode: "numeric",
                    id: id,
                    maxLength: 30,
                    pattern: "[0-9]*",
                    type: "number",
                    onChange: handleChange,
                    readOnly: readOnly,
                    min: min,
                    max: max,
                    step: step,
                    value: checkValue(value),
                    placeholder: unit,
                }}
                state={state}
                stateRelatedMessage={stateRelatedMessage}
            />
        </div>
    );
}

export default InputNumber;
