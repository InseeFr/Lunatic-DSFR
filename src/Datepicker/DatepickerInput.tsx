import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import { useState, useEffect } from "react";

type DatepickerInputType = {
    dateValues: Record<string, string>;
    disabled: boolean;
    id: string;
    onChange: (value: string) => void;
    state?: string;
};

export function DatepickerInput({ dateValues, disabled, id, onChange, state }: DatepickerInputType) {
    const [year, setYear] = useState<string>(dateValues.year);
    const [month, setMonth] = useState<string>(dateValues.month);
    const [day, setDay] = useState<string>(dateValues.day);

    useEffect(() => {
        setYear(dateValues.year);
        setMonth(dateValues.month);
        setDay(dateValues.day);
    }, [dateValues]);

    useEffect(() => {
        const newValue = `${year}-${month}-${day}`;
        onChange(newValue);
    }, [year, month, day]);

    return (
        <>
            <div className="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--number">
                <InputDSFR
                    disabled={disabled}
                    label="Jour"
                    hintText="Exemple: 14"
                    className={state ? `fr-input-group--${state}` : ""}
                    nativeInputProps={{
                        id: `${id}-day`,
                        value: dateValues.day == "00" ? "" : dateValues.day,
                        onChange: e => {
                            setDay(e.target.value);
                        },
                    }}
                />
            </div>
            <div className="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--number">
                <InputDSFR
                    disabled={disabled}
                    label="Mois"
                    hintText="Exemple: 7"
                    className={state ? `fr-input-group--${state}` : ""}
                    nativeInputProps={{
                        id: `${id}-month`,
                        value: dateValues.month == "00" ? "" : dateValues.month,
                        onChange: e => {
                            setMonth(e.target.value);
                        },
                    }}
                />
            </div>
            <div className="fr-fieldset__element fr-fieldset__element--inline fr-fieldset__element--year">
                <InputDSFR
                    disabled={disabled}
                    label="Année"
                    hintText="Exemple: 2023"
                    className={state ? `fr-input-group--${state}` : ""}
                    nativeInputProps={{
                        id: `${id}-year`,
                        value: dateValues.year == "0000" ? "" : dateValues.year,
                        onChange: e => {
                            setYear(e.target.value);
                        },
                    }}
                />
            </div>
        </>
    );
}

export default DatepickerInput;
