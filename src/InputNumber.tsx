import { Input } from "@codegouvfr/react-dsfr/Input";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { NumericFormat, type NumberFormatValues, type OnValueChange } from "react-number-format";
import { getErrorStates } from "./utils/errorStates";
import { getNumberSeparators } from "./utils/numbers";
import { useId } from "react";

export const InputNumber: LunaticSlotComponents["InputNumber"] = props => {
    const {
        value = null,
        disabled = false,
        readOnly = false,
        onChange,
        max = Infinity,
        min = -Infinity,
        decimals = 0,
        unit,
        label,
        errors,
        required = true,
        description,
        declarations,
        iteration,
    } = props;

    const id = useId();

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }

    const { state, stateRelatedMessage } = getErrorStates(errors);

    const onValueChange: OnValueChange = ({ floatValue }) => {
        onChange(floatValue !== undefined && !Number.isNaN(floatValue) ? floatValue : null);
    };

    const { decimalSeparator, thousandSeparator } = getNumberSeparators();

    const isAllowed = (values: NumberFormatValues) => {
        const { floatValue } = values;
        //We allow to clean input
        if (!floatValue) return true;
        return min < 0 ? floatValue >= min : floatValue <= max;
    };

    return (
        <NumericFormat
            key={`${id}-${iteration ?? ""}`}
            customInput={Input}
            allowNegative={min < 0}
            label={label}
            isAllowed={isAllowed}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
            onValueChange={onValueChange}
            decimalScale={decimals}
            decimalSeparator={decimalSeparator}
            allowLeadingZeros
            thousandSeparator={thousandSeparator}
            required={required}
            hintText={description}
            readOnly={readOnly}
            disabled={disabled}
            nativeInputProps={{
                id: `${id}-${iteration ?? ""}`,
                inputMode: decimals === 0 ? "numeric" : "decimal",
                pattern: "[0-9]*",
                placeholder: unit,
                defaultValue: value ?? undefined,
            }}
        />
    );
};
