import { ChangeEvent, useState, useEffect } from "react";
import { LunaticError } from "../utils/type/type";
import { SearchBar } from "@codegouvfr/react-dsfr/SearchBar";
import { Panel } from "./Panel";

export type ReferentielEntity = { label: string; id: string };

type SearchResults = {
    results: Array<ReferentielEntity>;
};

export type SuggesterProps = {
    className?: string;
    placeholder?: string;
    onSelect?: () => void;
    value?: unknown;
    disabled?: boolean;
    id?: string;
    searching?: (search: string) => Promise<SearchResults>;
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
    const [suggestions, setSuggestions] = useState<Array<ReferentielEntity>>([]);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    useEffect(
        function () {
            if (value.trim().length) {
                (async function () {
                    try {
                        const response = await searching(value);
                        if ("results" in response) {
                            setSuggestions(response.results);
                        } else {
                            throw new Error(`Fail during search : ${value}`);
                        }
                    } catch (e) {
                        throw new Error(`Fail during search : ${value}`);
                    }
                })();
            } else {
                setSuggestions([]);
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
            <Panel suggestions={suggestions} />
        </>
    );
}
