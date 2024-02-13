import { Input, InputProps } from "@codegouvfr/react-dsfr/Input";
import { useCallback, useState } from "react";
import { type NumberFormatValues, NumericFormat, type NumericFormatProps } from "react-number-format";
import { getState, getStateRelatedMessage } from "./utils/errors/getErrorStates";
import { LunaticError } from "./utils/type/type";
import { fr } from "@codegouvfr/react-dsfr";
import { useStyles } from "tss-react/dsfr";

function checkValue(value: number) {
    if (!value && value != 0) {
        return null;
    }
    return value;
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
    errors: Array<LunaticError>;
}) {
    // Decimals is a number indicates the number behind the separator of decimals
    // Computing step attribute of input according to decimal number
    const [step] = useState(decimals ? 1 / Math.pow(10, decimals) : 1);

    const { cx } = useStyles();
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

    const state = getState(errors);
    const stateRelatedMessage = getStateRelatedMessage(errors);

    return (
        <div
            className={cx("lunatic-input-number-container", fr.cx("fr-grid-row", "fr-grid-row--middle"))}
        >
            <NumberFormatDSFR
                DSFRProps={{
                    label: label,
                    disabled: disabled,
                    hintText: description,
                    className: cx("lunatic-dsfr-input-number", {
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
                        "aria-invalid": state === "error",
                    },
                }}
                onValueChange={handleChange}
                value={checkValue(value)}
                isAllowed={isAllowed}
                allowedDecimalSeparators={[",", "."]}
                decimalSeparator={","}
                /* we have removed the space for the thousandSeparator until we find a better solution */
                thousandSeparator={""}
                decimalScale={decimals}
                allowLeadingZeros
            />
        </div>
    );
}
