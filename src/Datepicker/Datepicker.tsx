import { useState, useEffect } from "react";
import { DatepickerInput } from "./DatepickerInput";
import { getState, getStateRelatedMessage } from "../utils/errors/getErrorStates";
import { LunaticError } from "../utils/type/type";
import { fr } from "@codegouvfr/react-dsfr";

type DatepickerType = {
    disabled: boolean;
    value: string;
    onChange: (value: unknown) => void;
    id: string;
    min: number;
    max: number;
    className: string;
    label: string;
    errors: Array<LunaticError>;
    description: string;
};

function checkValue(value: string) {
    return value && value !== "0000-00-00" ? value : "0000-00-00";
}

function getDateValues(value: string) {
    if (typeof value === "string" && value) {
        const [year, month, day] = value.split("-");
        return {
            day: day === "NaN" ? "00" : day,
            month: month === "NaN" ? "00" : month,
            year: year === "NaN" ? "00" : year,
        };
    }
    return {
        day: "00",
        month: "00",
        year: "0000",
    };
}

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

function displayDescription(description: string) {
    if (description) {
        return <span className={fr.cx("fr-hint-text")}>{description}</span>;
    }
    return null;
}

export function Datepicker({
    disabled,
    value = "0000-00-00",
    onChange,
    id,
    label,
    errors,
    description,
}: DatepickerType) {
    const [dateValues, setDateValues] = useState<Record<string, string>>({
        day: getDateValues(value).day,
        month: getDateValues(value).month,
        year: getDateValues(value).year,
    });
    useEffect(() => {
        setDateValues(getDateValues(checkValue(value)));
    }, [value]);

    const state = getState(errors);
    const stateRelatedMessage = getStateRelatedMessage(errors);

    return (
        <fieldset
            className={`fr-fieldset${state ? ` fr-fieldset--${state}` : ""}`}
            id={`${id}-fieldset`}
            role="group"
            aria-labelledby={`${id}-fieldset-legend ${id}-fieldset-messages`}
        >
            <legend className={fr.cx("fr-fieldset__legend")} id={`${id}-fieldset-legend`}>
                {label}
                {displayDescription(description)}
            </legend>
            <DatepickerInput
                dateValues={dateValues}
                disabled={disabled}
                setDateValues={setDateValues}
                id={id}
                state={state}
                onChange={onChange}
            />
            <DisplayErrors state={state} stateRelatedMessage={stateRelatedMessage} id={id} />
        </fieldset>
    );
}

export default Datepicker;
