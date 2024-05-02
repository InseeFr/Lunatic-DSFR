import { NumericFormat, type NumberFormatValues } from "react-number-format";
import type { DateDuration, DurationKey } from "./type";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { fr } from "@codegouvfr/react-dsfr";

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
                    customInput={Input}
                    disabled={disabled}
                    readOnly={readOnly}
                    allowNegative={false}
                    label="Années"
                    allowLeadingZeros={false}
                    isAllowed={({ floatValue }) =>
                        floatValue === undefined || (floatValue >= 1 && floatValue <= 9999)
                    }
                    onValueChange={values => onValueChange(values, "years")}
                    nativeInputProps={{
                        id: `${id}-year`,
                        type: "numeric",
                        defaultValue: durationValues.years,
                    }}
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
                    customInput={Input}
                    disabled={disabled}
                    readOnly={readOnly}
                    allowNegative={false}
                    label="Mois"
                    allowLeadingZeros
                    isAllowed={({ floatValue }) =>
                        floatValue === undefined || (floatValue >= 0 && floatValue <= 11)
                    }
                    onValueChange={values => onValueChange(values, "months")}
                    nativeInputProps={{
                        id: `${id}-month`,
                        type: "numeric",
                        defaultValue: durationValues.months,
                    }}
                />
            </div>
        </>
    );
}
