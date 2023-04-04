import { useState, useEffect } from "react";
import { DatepickerInput } from "./DatepickerInput";
import { LunaticError } from "../utils/type/type";

type DatepickerType = {
    disabled: boolean;
    value: string;
    onChange: (value: unknown) => void;
    id: string;
    min: number;
    max: number;
    className: string;
    label: string;
    errors: Record<string, Array<LunaticError>>;
    description: string;
};

function getDateValues(value: string) {
    const dateValue = new Date(value);
    return {
        day:
            value !== null && !isNaN(dateValue.getDate())
                ? dateValue.getDate().toString()
                : value.split("-")[2],
        // getMonth indexes January as 0
        month:
            value !== null && !isNaN(dateValue.getDate())
                ? (dateValue.getMonth() + 1).toString()
                : value.split("-")[1],
        year:
            value !== null && !isNaN(dateValue.getDate())
                ? dateValue.getFullYear().toString()
                : value.split("-")[0],
    };
}

function displayDescription(description: string) {
    if (description) {
        return <span className="fr-hint-text">{description}</span>;
    }
    return null;
}

export function Datepicker({
    disabled,
    value,
    onChange,
    id,
    label,
    errors,
    description,
}: DatepickerType) {
    const [dateValues, setDateValues] = useState<Record<string, string>>({
        day: "1",
        month: "7",
        year: "2000",
    });
    useEffect(() => {
        if (value !== null) {
            setDateValues(getDateValues(value));
        }
    }, [value]);

    return (
        <fieldset
            className="fr-fieldset"
            id="date-default-1578-fieldset"
            role="group"
            aria-labelledby="date-default-1578-fieldset-legend date-default-1578-fieldset-messages"
        >
            <legend className="fr-fieldset__legend" id="date-default-1578-fieldset-legend">
                {label}
                {displayDescription(description)}
            </legend>
            <DatepickerInput
                dateValues={dateValues}
                disabled={disabled}
                id={id}
                errors={errors}
                onChange={onChange}
            />
        </fieldset>
    );
}

export default Datepicker;
