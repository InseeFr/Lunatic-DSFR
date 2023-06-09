import { useState, useEffect } from "react";
import { DatepickerInput } from "./DatepickerInput";
import { getState, getStateRelatedMessage } from "../utils/errors/getErrorStates";
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
    if (value && value !== null && value[0] !== null) {
        const [year, month, day] = value.split("-");
        return {
            day: day,
            month: month,
            year: year,
        };
    }
    return {
        day: "",
        month: "",
        year: "",
    };
}

function DisplayErrors({ ...props }) {
    const { state, stateRelatedMessage, id } = props;
    if (props.state && stateRelatedMessage) {
        return (
            <div className="fr-messages-group">
                <p
                    id={`${id}-desc-${state}`}
                    className={`fr-message fr-message--${state} fr-col-12 fr-mt-0`}
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
        return <span className="fr-hint-text">{description}</span>;
    }
    return null;
}

export function Datepicker({
    disabled,
    value = "",
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
        if (value && value !== null && value !== "--") {
            setDateValues(getDateValues(value));
        }
    }, [value]);
    const state = getState(errors, id);
    const stateRelatedMessage = getStateRelatedMessage(errors, id);

    return (
        <fieldset
            className={`fr-fieldset${state ? ` fr-fieldset--${state}` : ""}`}
            id={`${id}-fieldset`}
            role="group"
            aria-labelledby={`${id}-fieldset-legend ${id}-fieldset-messages`}
        >
            <legend className="fr-fieldset__legend" id={`${id}-fieldset-legend`}>
                {label}
                {displayDescription(description)}
            </legend>
            <DatepickerInput
                dateValues={dateValues}
                disabled={disabled}
                id={id}
                state={state}
                onChange={onChange}
            />
            <DisplayErrors state={state} stateRelatedMessage={stateRelatedMessage} id={id} />
        </fieldset>
    );
}

export default Datepicker;
