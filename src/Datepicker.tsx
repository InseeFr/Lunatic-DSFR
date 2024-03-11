import { useState } from "react";
import { getErrorStates } from "./utils/errorStates";
import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import type { Split } from "./utils/type";
import Input from "@codegouvfr/react-dsfr/Input";
import { NumericFormat, type NumberFormatValues } from "react-number-format";

type DateState = { day: string; month: string; year: string };

export const Datepicker: LunaticSlotComponents["Datepicker"] = props => {
    const {
        disabled,
        readOnly,
        value = "",
        dateFormat = "YYYY-MM-DD",
        id,
        label,
        errors,
        description,
        declarations,
        onChange,
    } = props;

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }

    const showDay = dateFormat.includes("DD");
    const showMonth = dateFormat.includes("MM");

    const numbersFromDateString = () => {
        if (!value) {
            return { year: "", month: "", day: "" };
        }
        const parts = value.split("-");
        return {
            year: parts[0],
            month: parts[1],
            day: parts[2],
        };
    };
    const [dateValues, setDateValues] = useState<DateState>(numbersFromDateString);

    const onValueChange = (values: NumberFormatValues, key: keyof DateState) => {
        updateDate(key, values.value);
    };

    const updateDate = (key: keyof DateState, value: string) => {
        const newDate = {
            ...dateValues,
            [key]: value,
        };
        setDateValues(newDate);
        onDateChange(newDate);
    };

    const onDateChange = (date: DateState) => {
        const formatParts = dateFormat.split("-") as Split<"YYYY-MM-DD" | "YYYY-MM" | "YYYY", "-">;
        const countEmptyDate = Object.values(dateValues).filter(d => d === "").length;

        // Date has a missing part
        if (countEmptyDate > formatParts.length) {
            onChange(null);
            return;
        }

        const mapping = {
            "YYYY": date.year,
            "MM": date.month.padStart(2, "0"),
            "DD": date.day.padStart(2, "0"),
        };

        const result = formatParts.map(part => mapping[part]).join("-");
        onChange(result);
    };

    const { state, stateRelatedMessage } = getErrorStates(errors);

    return (
        <fieldset
            className={fr.cx("fr-fieldset", state === "error" && "fr-fieldset--error")}
            id={`${id}-fieldset`}
            aria-labelledby={`${id}-fieldset-legend ${id}-fieldset-messages`}
        >
            <legend className={fr.cx("fr-fieldset__legend")} id={`${id}-fieldset-legend`}>
                {label}
                <span className={fr.cx("fr-hint-text")}>{description}</span>
            </legend>
            {showDay && (
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
                        label="Jour"
                        hintText="Exemple: 14"
                        allowLeadingZeros
                        isAllowed={({ value, floatValue }) =>
                            floatValue === undefined ||
                            (floatValue >= 0 && value !== "00" && floatValue <= 31)
                        }
                        onValueChange={values => onValueChange(values, "day")}
                        nativeInputProps={{
                            id: `${id}-day`,
                            type: "numeric",
                            defaultValue: dateValues.day,
                        }}
                    />
                </div>
            )}
            {showMonth && (
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
                        hintText="Exemple: 07"
                        allowLeadingZeros
                        isAllowed={({ value, floatValue }) =>
                            floatValue === undefined ||
                            (floatValue >= 0 && value !== "00" && floatValue <= 12)
                        }
                        onValueChange={values => onValueChange(values, "month")}
                        nativeInputProps={{
                            id: `${id}-month`,
                            type: "numeric",
                            defaultValue: dateValues.month,
                        }}
                    />
                </div>
            )}

            <div
                className={fr.cx(
                    "fr-fieldset__element",
                    "fr-fieldset__element--inline",
                    "fr-fieldset__element--year",
                )}
            >
                <NumericFormat
                    customInput={Input}
                    disabled={disabled}
                    readOnly={readOnly}
                    allowNegative={false}
                    label="Année"
                    allowLeadingZeros={false}
                    hintText="Exemple: 2024"
                    isAllowed={({ floatValue }) =>
                        floatValue === undefined || (floatValue >= 1 && floatValue <= 9999)
                    }
                    onValueChange={values => onValueChange(values, "year")}
                    nativeInputProps={{
                        id: `${id}-year`,
                        type: "numeric",
                        defaultValue: dateValues.year,
                    }}
                />
            </div>

            <DisplayErrors state={state} stateRelatedMessage={stateRelatedMessage} id={id} />
        </fieldset>
    );
};

function DisplayErrors({ ...props }) {
    const { state, stateRelatedMessage, id } = props;
    if (props.state && stateRelatedMessage) {
        return (
            <div className={fr.cx("fr-messages-group")}>
                <p
                    id={`${id}-desc-${state}`}
                    className={`fr-message--${state} ${fr.cx("fr-message", "fr-col-12", "fr-mt-0")}`}
                >
                    {stateRelatedMessage}
                </p>
            </div>
        );
    }
    return null;
}
