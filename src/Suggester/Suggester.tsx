import { ChangeEvent, useState, useEffect } from "react";
import { LunaticError } from "../utils/type/type";
import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";

export type SuggesterProps = {
    className?: string;
    placeholder?: string;
    onSelect?: () => void;
    value?: unknown;
    disabled?: boolean;
    id?: string;
    searching?: (search: string) => Promise<unknown>;
    label?: string;
    description?: string;
    errors: Record<string, Array<LunaticError>>;
};

async function BLANK() {
    return [];
}

export function Suggester(props: SuggesterProps) {
    const { label, id, searching = BLANK } = props;
    const [value, setValue] = useState<string>("");

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    useEffect(
        function () {
            if (value.trim().length) {
                (async function () {
                    const results = await searching(value);
                    console.log(results);
                })();
            }
        },
        [searching, value],
    );

    return (
        <>
            <label className="fr-label" htmlFor={id}>
                {label}
            </label>
            <SearchBar nativeInputProps={{ id, value, onChange }} />
            <div className="lifted">Panel</div>
        </>
    );
}
