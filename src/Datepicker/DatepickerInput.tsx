import { fr } from "@codegouvfr/react-dsfr";
import { Input as InputDSFR } from "@codegouvfr/react-dsfr/Input";
import { useState, useEffect } from "react";

type DatepickerInputType = {
    dateValues: Record<string, string>;
    disabled: boolean;
    id: string;
    onChange: (value: string) => void;
    state?: string;
    setDateValues: (value: Record<string, string>) => void;
};

function checkSubValue(i: number, v: string) {
    // i represents the length of the day/month/year value. eg: year => 4, month => 2, day => 2
    // v is the value of the input

    // checks if the length of v is not bigger than i
    if (v.replace(/^0+/, "").replace(/[^0-9]/g, "").length <= i) {
        // returns a value of length i comprised of just `0`
        return `${Array(i)
            .fill("0")
            .join("")
            // replaces the last v.length characters with v if v is comprised of numbers
            .substring(0, i - v.replace(/^0+/, "").replace(/[^0-9]/g, "").length)}${
            !isNaN(parseInt(v.replace(/^0+/, ""))) ? parseInt(v.replace(/^0+/, "")) : ""
        }`;
    } else {
        // if length of v is bigger than i, return the first i characters of v
        return `${parseInt(v.substring(0, i))}`;
    }
}

export function DatepickerInput({
    dateValues,
    disabled,
    id,
    onChange,
    state,
    setDateValues,
}: DatepickerInputType) {
    const [year, setYear] = useState<string>(dateValues.year);
    const [month, setMonth] = useState<string>(dateValues.month);
    const [day, setDay] = useState<string>(dateValues.day);
    useEffect(() => {
        setYear(dateValues.year);
        setMonth(dateValues.month);
        setDay(dateValues.day);
    }, [dateValues]);

    useEffect(() => {
        setDateValues({
            day: day,
            month: month,
            year: year,
        });
    }, [day, month, year]);

    const changeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateValues({
            day: checkSubValue(2, e.target.value),
            month: month,
            year: year,
        });
        onChange(`${year}-${month}-${checkSubValue(2, e.target.value)}`);
    };

    const changeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateValues({
            day: day,
            month: checkSubValue(2, e.target.value),
            year: year,
        });
        onChange(`${year}-${checkSubValue(2, e.target.value)}-${day}`);
    };

    const changeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateValues({
            day: day,
            month: month,
            year: checkSubValue(4, e.target.value),
        });
        onChange(`${checkSubValue(4, e.target.value)}-${month}-${day}`);
    };

    return (
        <>
            <div
                className={fr.cx(
                    "fr-fieldset__element",
                    "fr-fieldset__element--inline",
                    "fr-fieldset__element--number",
                )}
            >
                <InputDSFR
                    disabled={disabled}
                    label="Jour"
                    hintText="Exemple: 14"
                    className={state ? `fr-input-group--${state}` : ""}
                    nativeInputProps={{
                        id: `${id}-day`,
                        value: day === "00" ? "" : day,
                        onChange: changeDay,
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
                <InputDSFR
                    disabled={disabled}
                    label="Mois"
                    hintText="Exemple: 7"
                    className={state ? `fr-input-group--${state}` : ""}
                    nativeInputProps={{
                        id: `${id}-month`,
                        value: month === "00" ? "" : month,
                        onChange: changeMonth,
                    }}
                />
            </div>
            <div
                className={fr.cx(
                    "fr-fieldset__element",
                    "fr-fieldset__element--inline",
                    "fr-fieldset__element--year",
                )}
            >
                <InputDSFR
                    disabled={disabled}
                    label="Année"
                    hintText="Exemple: 2023"
                    className={state ? `fr-input-group--${state}` : ""}
                    nativeInputProps={{
                        id: `${id}-year`,
                        value: year === "0000" ? "" : year,
                        onChange: changeYear,
                    }}
                />
            </div>
        </>
    );
}

export default DatepickerInput;
