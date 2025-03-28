import { useId, useState } from "react";
import { getErrorStates } from "./utils/errorStates";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { fr } from "@codegouvfr/react-dsfr";
import { fr as frLocale } from "date-fns/locale/fr";
import { parseISO, format } from "date-fns";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { useQuestionId } from "./Question";
import { frFR } from "@mui/x-date-pickers/locales";

export type DateFormat = "YYYY-MM-DD" | "YYYY-MM" | "YYYY";

export const Datepicker: LunaticSlotComponents["Datepicker"] = props => {
    const {
        disabled,
        readOnly,
        value = "",
        dateFormat = "YYYY-MM-DD",
        min,
        max,
        label,
        errors,
        description,
        declarations,
        onChange,
    } = props;

    const id = useId();
    const questionId = useQuestionId();

    if (declarations) {
        console.error("Only declaration in Question are displayed");
    }

    // Convert value string to Date object
    const parsedDate = value ? parseISO(value) : null;
    const [selectedDate, setSelectedDate] = useState<Date | null>(parsedDate);

    // Convert min/max props to Date objects
    const minDate = min ? parseISO(min) : undefined;
    const maxDate = max ? parseISO(max) : undefined;

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        // Convert the date back to the string format expected by the component
        onChange(date ? format(date, computeDateFnsFormat(dateFormat)) : null);
    };

    const { state, stateRelatedMessage } = getErrorStates(errors);
    const hasLabel = Boolean(label || description);
    const labelId = `label-${id}`;

    return (
        <div
            className={fr.cx(
                "fr-input-group",
                (() => {
                    switch (state) {
                        case "error":
                            return "fr-input-group--error";
                        case "success":
                            return "fr-input-group--valid";
                        case "default":
                            return undefined;
                    }
                })(),
            )}
        >
            {hasLabel && (
                <label className={fr.cx("fr-label")} htmlFor={id} id={`label-${id}`}>
                    {label}
                    {description && <span className={fr.cx("fr-hint-text")}>{description}</span>}
                </label>
            )}

            <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={frLocale}
                localeText={frFR.components.MuiLocalizationProvider.defaultProps.localeText}
            >
                <MuiDatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                    format={computeDisplayedFormat(dateFormat)}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabled={disabled}
                    readOnly={readOnly}
                    slotProps={{
                        field: {
                            clearable: true,
                        },
                        textField: {
                            id,
                            "aria-labelledby": hasLabel ? labelId : questionId,
                        },
                    }}
                />
            </LocalizationProvider>

            {state && stateRelatedMessage && (
                <div id={`${id}-messages-group`} className={fr.cx("fr-messages-group")} role="alert">
                    <p
                        id={`${id}-${state}`}
                        className={fr.cx(
                            "fr-message",
                            (() => {
                                switch (state) {
                                    case "error":
                                        return "fr-message--error";
                                    case "success":
                                        return "fr-message--valid";
                                }
                            })(),
                        )}
                    >
                        {stateRelatedMessage}
                    </p>
                </div>
            )}
        </div>
    );
};

/** Compute displayed format for DatePicker */
function computeDisplayedFormat(format: DateFormat) {
    switch (format) {
        case "YYYY-MM":
            return "MM/yyyy";
        case "YYYY":
            return "yyyy";
        default:
            return "dd/MM/yyyy";
    }
}

/** Compute date-fns format */
function computeDateFnsFormat(format: DateFormat) {
    return format.replace("YYYY", "yyyy").replace("DD", "dd");
}
