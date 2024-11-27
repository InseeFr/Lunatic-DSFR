import { useId, useState } from "react";
import { getErrorStates } from "./utils/errorStates";
import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import type { Split } from "./utils/type";
import { NumericFormat, type NumberFormatValues } from "react-number-format";
import { FiledsetError } from "./shared/FieldsetError";
import { CustomInputDsfr } from "./shared/CustomInputDsfr";
import { useQuestionId } from "./Question";

type DateState = { day: string; month: string; year: string };

export const Datepicker: LunaticSlotComponents["Datepicker"] = props => {
    const {
        disabled,
        readOnly,
        value = "",
        dateFormat = "YYYY-MM-DD",
        label,
        errors,
        description,
        declarations,
        onChange,
        iteration,
    } = props;

    const id = useId();
    const questionId = useQuestionId();

    const errorMessageId = `${id}-messages`;

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }

    const showDay = dateFormat.includes("DD");
    const showMonth = dateFormat.includes("MM");

    const extractDateFromValue = () => {
        if (!value) {
            return { year: "", month: "", day: "" };
        }
        const parts = value.split("-");

        return {
            year: parts[0] ?? "",
            month: parts[1] ?? "",
            day: parts[2] ?? "",
        };
    };
    const [dateValues, setDateValues] = useState<DateState>(extractDateFromValue);

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
        const countEmptyDate = Object.values(date).filter(d => d === "").length;

        // Date has a missing part
        if (countEmptyDate > 3 - formatParts.length) {
            onChange(null);
            return;
        }

        const mapping = {
            "YYYY": date.year.padStart(4, "0"),
            "MM": date.month.padStart(2, "0"),
            "DD": date.day.padStart(2, "0"),
        };

        const result = formatParts.map(part => mapping[part]).join("-");
        onChange(result);
    };

    const { state, stateRelatedMessage } = getErrorStates(errors);
    const hasLegend = Boolean(label || description);

    return (
        <fieldset
            className={fr.cx(
                "fr-fieldset",
                (() => {
                    switch (state) {
                        case "default":
                            return undefined;
                        case "error":
                            return "fr-fieldset--error";
                        case "success":
                            return "fr-fieldset--valid";
                    }
                })(),
            )}
            id={`${id}-fieldset`}
            aria-labelledby={label ? undefined : questionId}
        >
            {hasLegend && (
                <legend className={fr.cx("fr-fieldset__legend")}>
                    {label}
                    {description && <span className={fr.cx("fr-hint-text")}>{description}</span>}
                </legend>
            )}
            {showDay && (
                <div
                    className={fr.cx(
                        "fr-fieldset__element",
                        "fr-fieldset__element--inline",
                        "fr-fieldset__element--number",
                    )}
                >
                    <NumericFormat
                        id={`${id}-day-${iteration ?? ""}`}
                        key={`${id}-${iteration ?? ""}-day`}
                        customInput={CustomInputDsfr}
                        disabled={disabled}
                        readOnly={readOnly}
                        allowNegative={false}
                        inputMode="numeric"
                        dsfrProps={{
                            label: "Jour",
                            hintText: "Exemple: 14",
                        }}
                        allowLeadingZeros
                        isAllowed={({ value, floatValue }) =>
                            floatValue === undefined ||
                            (floatValue >= 0 && value.length <= 2 && value !== "00" && floatValue <= 31)
                        }
                        onValueChange={values => onValueChange(values, "day")}
                        value={dateValues.day}
                        {...(state === "error"
                            ? { "aria-invalid": true, "aria-errormessage": errorMessageId }
                            : {})}
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
                        key={`${id}-${iteration ?? ""}-month`}
                        id={`${id}-${iteration ?? ""}-month`}
                        inputMode="numeric"
                        customInput={CustomInputDsfr}
                        disabled={disabled}
                        readOnly={readOnly}
                        allowNegative={false}
                        allowLeadingZeros
                        isAllowed={({ value, floatValue }) =>
                            floatValue === undefined ||
                            (floatValue >= 0 && value.length <= 2 && value !== "00" && floatValue <= 12)
                        }
                        value={dateValues.month}
                        onValueChange={values => onValueChange(values, "month")}
                        dsfrProps={{
                            label: "Mois",
                            hintText: "Exemple: 07",
                        }}
                        {...(state === "error"
                            ? { "aria-invalid": true, "aria-errormessage": errorMessageId }
                            : {})}
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
                    key={`${id}-${iteration ?? ""}-year`}
                    id={`${id}-${iteration ?? ""}-year`}
                    inputMode="numeric"
                    customInput={CustomInputDsfr}
                    disabled={disabled}
                    readOnly={readOnly}
                    allowNegative={false}
                    allowLeadingZeros
                    isAllowed={({ value, floatValue }) =>
                        floatValue === undefined ||
                        (floatValue >= 0 && value.length <= 4 && value !== "0000" && floatValue <= 9999)
                    }
                    onValueChange={values => onValueChange(values, "year")}
                    value={dateValues.year}
                    dsfrProps={{
                        label: "Année",
                        hintText: "Exemple: 2024",
                    }}
                    {...(state === "error"
                        ? { "aria-invalid": true, "aria-errormessage": errorMessageId }
                        : {})}
                />
            </div>

            <FiledsetError state={state} stateRelatedMessage={stateRelatedMessage} id={errorMessageId} />
        </fieldset>
    );
};
