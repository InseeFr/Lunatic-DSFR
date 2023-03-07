import React, { useCallback } from "react";
import classnames from "classnames";
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";

const UnitDisplay = ({ unit }: { unit?: string }) => {
    if (unit !== "") {
        return <span className="fr-col-1">{unit}</span>;
    }
    return null;
};

export function InputNumber({
    id,
    onChange,
    disabled,
    readOnly,
    label,
    min,
    max,
    step,
    unit,
    description,
}: {
    id: string;
    // value:string,
    // eslint-disable-next-line @typescript-eslint/ban-types
    onChange: Function;
    disabled: boolean;
    readOnly: boolean;
    // labelId: number,
    label: string;
    min: number;
    max: number;
    step: number;
    unit: string;
    description: string;
}) {
    const handleChange = useCallback(
        function (e: React.ChangeEvent<HTMLInputElement>) {
            const val = e.target.valueAsNumber;
            onChange(isNaN(val) ? null : val);
        },
        [onChange],
    );

    return (
        <div className="lunatic-input-number-container fr-grid-row fr-grid-row--middle">
            <InputDSFR
                label={label}
                hintText={description}
                className={classnames("lunatic-dsfr-input-number", {
                    disabled,
                    readOnly,
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
                    disabled: disabled,
                    min: min,
                    max: max,
                    step: step,
                }}
            />
            <UnitDisplay unit={unit} />
        </div>
    );
}

export default InputNumber;
