import { useId, useState } from "react";
import { getErrorStates } from "./utils/errorStates";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { fr } from "@codegouvfr/react-dsfr";
import { fr as frLocale } from "date-fns/locale/fr";
import { parseISO, format } from "date-fns";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { FiledsetError } from "./shared/FieldsetError";
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
    const errorMessageId = `${id}-messages`;

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
                    {description && <span className={fr.cx("fr-hint-text")}>{description}</span>}
                </legend>
            )}

            <div className={fr.cx("fr-fieldset__element", "fr-fieldset__element--inline")}>
                {/* Cannot give the className directly to MuiDatePicker since mui style overloads it. */}
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
                        }}
                    />
                </LocalizationProvider>
            </div>

            <FiledsetError state={state} stateRelatedMessage={stateRelatedMessage} id={errorMessageId} />
        </fieldset>
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
