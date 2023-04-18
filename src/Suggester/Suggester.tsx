import { useState, useEffect, useCallback, SyntheticEvent } from "react";
import { LunaticError } from "../utils/type/type";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { RenderOption } from "./RenderOption";

export type ReferentielEntity = { label: string; id: string };

type SearchResults = {
    results: Array<ReferentielEntity>;
};

export type SuggesterProps = {
    className?: string;
    placeholder?: string;
    onSelect?: (value: unknown) => void;
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

function isEqualOptions(option: ReferentielEntity, value: ReferentielEntity) {
    return option.id === value.id;
}

export function Suggester(props: SuggesterProps) {
    const { label, id, searching = BLANK, onSelect = () => null } = props;
    const [value, setValue] = useState<string>("");
    const [suggestions, setSuggestions] = useState<Array<ReferentielEntity>>([]);

    function onInputChange(_: unknown, newValue: string | null) {
        setValue(newValue ?? "");
    }

    const handleChange = useCallback(
        function (_: SyntheticEvent<Element>, value: ReferentielEntity | null) {
            if (value) {
                const { id } = value;
                onSelect(id);
            } else {
                onSelect(null);
            }
        },
        [onSelect],
    );

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
        <Autocomplete
            disablePortal
            onInputChange={onInputChange}
            id={id}
            options={suggestions}
            sx={{ width: "auto" }}
            autoComplete
            includeInputInList
            filterSelectedOptions
            onChange={handleChange}
            filterOptions={x => x}
            renderInput={params => <TextField {...params} label={label} value={value} />}
            isOptionEqualToValue={isEqualOptions}
            renderOption={RenderOption}
        />
    );
}
