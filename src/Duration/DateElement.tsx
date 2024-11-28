import { NumericFormat, type NumberFormatValues } from "react-number-format";
import type { DateDuration, DurationKey } from "./type";
import { fr } from "@codegouvfr/react-dsfr";
import { CustomInputDsfr } from "../shared/CustomInputDsfr";

type DateElementProps = {
    id: string;
    durationValues: DateDuration;
    disabled: boolean | undefined;
    readOnly: boolean | undefined;
    onValueChange: (values: NumberFormatValues, key: DurationKey<"PnYnM">) => void;
};

export function DateElement(props: DateElementProps) {
    const { id, disabled, durationValues, onValueChange, readOnly } = props;
    return (
        <>
            <div
                className={fr.cx(
                    "fr-fieldset__element",
                    "fr-fieldset__element--inline",
                    "fr-fieldset__element--number",
                )}
            >
                <NumericFormat
                    customInput={CustomInputDsfr}
                    disabled={disabled}
                    readOnly={readOnly}
                    dsfrProps={{
                        label: "Années",
                    }}
                    id={`${id}-year`}
                    inputMode="numeric"
                    value={durationValues.years}
                    allowNegative={false}
                    allowLeadingZeros={false}
                    decimalScale={0}
                    isAllowed={({ floatValue }) =>
                        floatValue === undefined || (floatValue >= 1 && floatValue <= 9999)
                    }
                    onValueChange={values => onValueChange(values, "years")}
                />
            </div>
            <div
                className={fr.cx(
                    "fr-fieldset__element",
                    "fr-fieldset__element--inline",
                    "fr-fieldset__element--number",
                )}
            >
                <NumericFormat
                    customInput={CustomInputDsfr}
                    disabled={disabled}
                    readOnly={readOnly}
                    allowNegative={false}
                    dsfrProps={{ label: "Mois" }}
                    allowLeadingZeros
                    decimalScale={0}
                    isAllowed={({ floatValue }) =>
                        floatValue === undefined || (floatValue >= 0 && floatValue <= 11)
                    }
                    onValueChange={values => onValueChange(values, "months")}
                    inputMode="numeric"
                    id={`${id}-month`}
                    value={durationValues.months}
                />
            </div>
        </>
    );
}
