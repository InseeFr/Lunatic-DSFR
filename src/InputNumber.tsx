import { Input, InputProps } from "@codegouvfr/react-dsfr/Input";
import classNames from "classnames";
import { useCallback, useState } from "react";
import { NumberFormatValues, NumericFormat, NumericFormatProps } from "react-number-format";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { LunaticError } from "./utils/type/type";

function checkValue(value: number) {
    return value ?? null;
}

const InputDSFR = (props: { DSFRProps: InputProps } & NumericFormatProps) => {
    const {
        DSFRProps: { nativeInputProps, ...otherDsfr },
        ...rest
    } = props;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return <Input nativeInputProps={{ ...nativeInputProps, ...rest }} {...otherDsfr} />;
};

const NumberFormatDSFR = ({ ...props }: { DSFRProps: InputProps } & NumericFormatProps) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <NumericFormat customInput={InputDSFR} {...props} />
);

export function InputNumber({
    id,
    value,
    onChange,
    disabled,
    readOnly,
    label,
    min,
    max,
    decimals,
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
    decimals: number;
    unit: string;
    description: string;
    errors: Record<string, Array<LunaticError>>;
}) {
    // Decimals is a number indicates the number behind the separator of decimals
    // Computing step attribute of input according to decimal number
    const [step] = useState(decimals ? 1 / Math.pow(10, decimals) : 1);

    const isAllowed = useCallback(
        (values: NumberFormatValues) => {
            const { floatValue } = values;
            if (Number.isInteger(max) && floatValue && max) return floatValue <= max || false;
            return true;
        },
        [max],
    );

    const handleChange = useCallback(
        function (values: NumberFormatValues) {
            const val = values.floatValue ?? null;
            onChange(Number.isNaN(val) ? null : val);
        },
        [onChange],
    );

    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);

    return (
        <div className="lunatic-input-number-container fr-grid-row fr-grid-row--middle">
            <NumberFormatDSFR
                DSFRProps={{
                    label: label,
                    disabled: disabled,
                    hintText: description,
                    className: classNames("lunatic-dsfr-input-number", {
                        "fr-col-11": unit !== undefined,
                        "fr-col-12": unit === undefined,
                    }),
                    state: state,
                    stateRelatedMessage: stateRelatedMessage,
                    nativeInputProps: {
                        inputMode: "numeric",
                        id: id,
                        maxLength: 30,
                        pattern: "([0-9]|\\s)*",
                        type: "number",
                        readOnly: readOnly,
                        disabled: disabled,
                        min: min,
                        max: max,
                        step: step,
                        placeholder: unit,
                    },
                }}
                onValueChange={handleChange}
                value={checkValue(value)}
                isAllowed={isAllowed}
                allowedDecimalSeparators={[",", "."]}
                decimalSeparator={","}
                thousandSeparator={" "}
                decimalScale={decimals}
                allowLeadingZeros
            />
        </div>
    );
}

export default InputNumber;
