import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import { useState, useEffect, useCallback } from "react";

type DatepickerInputType = {
    dateValues: Record<string, string>;
    disabled: boolean;
    id: string;
    onChange: (value: string) => void;
    state?: string;
};

function checkSubValue(i: number, v: string) {
    if (v.replace(/^0+/, "").replace(/[^0-9]/g, "").length <= i) {
        return `${Array(i)
            .fill("0")
            .join("")
            .substring(0, i - v.replace(/^0+/, "").replace(/[^0-9]/g, "").length)}${
            !isNaN(parseInt(v.replace(/^0+/, ""))) ? parseInt(v.replace(/^0+/, "")) : ""
        }`;
    } else {
        return `${parseInt(v.substring(0, i))}`;
    }
}

export function DatepickerInput({ dateValues, disabled, id, onChange, state }: DatepickerInputType) {
    const [year, setYear] = useState<string>(dateValues.year);
    const [month, setMonth] = useState<string>(dateValues.month);
    const [day, setDay] = useState<string>(dateValues.day);

    useEffect(() => {
        setYear(dateValues.year);
        setMonth(dateValues.month);
        setDay(dateValues.day);
    }, [dateValues]);

    const changeDay = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setDay(checkSubValue(2, e.target.value));
            console.log(`${year}-${month}-${day}`);
            onChange(`${year}-${month}-${e.target.value}`);
        },
        [year, month],
    );
    const changeMonth = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setMonth(checkSubValue(2, e.target.value));
            onChange(`${year}-${e.target.value}-${day}`);
        },
        [year, day],
    );
    const changeYear = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setYear(checkSubValue(4, e.target.value));
            onChange(`${e.target.value}-${month}-${day}`);
        },
        [month, day],
    );

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
                        value: dateValues.day === "00" ? "" : dateValues.day,
                        onChange: changeDay,
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
                        value: dateValues.month === "00" ? "" : dateValues.month,
                        onChange: changeMonth,
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
                        value: dateValues.year === "0000" ? "" : dateValues.year,
                        onChange: changeYear,
                    }}
                />
            </div>
        </>
    );
}

export default DatepickerInput;
