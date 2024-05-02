import { NumericFormat, type NumberFormatValues } from "react-number-format";
import type { DurationKey, TimeDuration } from "./type";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { fr } from "@codegouvfr/react-dsfr";

type TimeElementProps = {
    id: string;
    durationValues: TimeDuration;
    disabled: boolean | undefined;
    readOnly: boolean | undefined;
    onValueChange: (values: NumberFormatValues, key: DurationKey<"PTnHnM">) => void;
};

export function TimeElement(props: TimeElementProps) {
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
                    label="Heures"
                    allowLeadingZeros={false}
                    isAllowed={({ floatValue }) =>
                        floatValue === undefined || (floatValue >= 0 && floatValue <= 99)
                    }
                    onValueChange={values => onValueChange(values, "hours")}
                    nativeInputProps={{
                        id: `${id}-hours`,
                        type: "numeric",
                        defaultValue: durationValues.hours,
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
                    label="Minutes"
                    allowLeadingZeros
                    isAllowed={({ floatValue }) =>
                        floatValue === undefined || (floatValue >= 0 && floatValue <= 59)
                    }
                    onValueChange={values => onValueChange(values, "minutes")}
                    nativeInputProps={{
                        id: `${id}-minutes`,
                        type: "numeric",
                        defaultValue: durationValues.minutes,
                    }}
                />
            </div>
        </>
    );
}
