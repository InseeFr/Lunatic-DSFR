import Input from "@codegouvfr/react-dsfr/Input";
import type { LunaticCustomizedComponent } from "@inseefr/lunatic";
import { NumericFormat, type NumberFormatValues, type OnValueChange } from "react-number-format";
import { getErrorStates } from "utils/errors/getErrorStates";
import { getNumberSeparators } from "utils/numbers";

export const InputNumber: LunaticCustomizedComponent["InputNumber"] = props => {
    const {
        id,
        value = null,
        handleChange,
        disabled = false,
        readOnly = false,
        max = Infinity,
        min = -Infinity,
        decimals = 0,
        unit,
        label,
        errors,
        response,
        required = true,
        description,
        declarations,
    } = props;

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }
    const { state, stateRelatedMessage } = getErrorStates(errors, id);

    const onChange: OnValueChange = ({ floatValue }) => {
        handleChange(response, floatValue && !Number.isNaN(floatValue) ? floatValue : null);
    };

    const { decimalSeparator, thousandSeparator } = getNumberSeparators();

    const isAllowed = (values: NumberFormatValues) => {
        const { floatValue } = values;
        //We allow to clean input
        if (!floatValue) return true;
        return floatValue >= min && floatValue <= max;
    };

    return (
        <NumericFormat
            customInput={Input}
            id={id}
            value={value}
            label={label}
            isAllowed={isAllowed}
            state={state}
            stateRelatedMessage={stateRelatedMessage}
            onValueChange={onChange}
            decimalScale={decimals}
            decimalSeparator={decimalSeparator}
            allowLeadingZeros
            thousandSeparator={thousandSeparator}
            required={required}
            hintText={description}
            nativeInputProps={{
                inputMode: decimals === 0 ? "numeric" : "decimal",
                id: id,
                pattern: "[0-9]*",
                readOnly: readOnly,
                disabled: disabled,
                placeholder: unit,
                "aria-invalid": state === "error",
            }}
        />
    );
};
