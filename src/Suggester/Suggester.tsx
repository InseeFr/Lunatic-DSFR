import { useState, useEffect, useCallback, SyntheticEvent } from "react";
import useAutocomplete from "@mui/material/useAutocomplete";
import { LunaticError } from "../utils/type/type";
import { SuggesterContainer } from "./elements/SuggesterContainer";
import { SuggesterInputContainer } from "./elements/SuggesterInputContainer";
import { SuggesterLabel } from "./elements/SuggesterLabel";
import { SuggesterInput } from "./elements/SuggesterInput";
import { SuggesterOption } from "./elements/SuggesterOption";
import { SuggesterListBox } from "./elements/SuggesterListBox";

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

function isOptionEqualToValue(option: ReferentielEntity, value: ReferentielEntity) {
    return option.id === value.id;
}

function toStringValue(value: unknown) {
    if (value) {
        if (Array.isArray(value)) {
            return "array";
        }
        const type = typeof value;
        switch (type) {
            case "object":
                return JSON.stringify(value);
            case "function":
                return "function";

            default:
                return `${value}`;
        }
    }
    return undefined;
}

export function Suggester(props: SuggesterProps) {
    const { label, id, searching = BLANK, onSelect = () => null, value } = props;
    const [search, setSearch] = useState<string>(toStringValue(value) || "");
    const [activeId, setActiveId] = useState<unknown>(undefined);
    const [suggestions, setSuggestions] = useState<Array<ReferentielEntity>>([]);

    const onInputChange = useCallback(
        (_: unknown, newValue: string | null) => {
            setSearch(newValue ?? "");
            if (newValue?.length) {
                onSelect(newValue);
            }
        },
        [onSelect],
    );

    const handleChange = useCallback(
        function (_: SyntheticEvent<Element>, value: string | ReferentielEntity | null) {
            if (value && typeof value === "object") {
                const { id } = value as ReferentielEntity;
                onSelect(id ?? null);
                setActiveId(id);
            } else {
                onSelect(null);
            }
        },
        [onSelect],
    );

    useEffect(
        function () {
            if (search.trim().length) {
                (async function () {
                    try {
                        const response = await searching(search);
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
        [searching, search],
    );

    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete<ReferentielEntity, false, false, true>({
        onInputChange,
        id,
        options: suggestions,
        filterOptions: x => x,
        onChange: handleChange,
        isOptionEqualToValue,
    });

    return (
        <SuggesterContainer>
            <SuggesterInputContainer {...getRootProps()}>
                <SuggesterLabel {...getInputLabelProps()}>{label}</SuggesterLabel>
                <SuggesterInput {...getInputProps()} value={search} />
            </SuggesterInputContainer>
            <SuggesterListBox {...getListboxProps()} display={suggestions.length > 0}>
                {(groupedOptions as typeof suggestions).map((option, index) => {
                    const { id, label } = option;
                    const p = getOptionProps({ option, index });
                    const selected = id === activeId;
                    return <SuggesterOption {...p} label={label} key={id} selected={selected} />;
                })}
            </SuggesterListBox>
        </SuggesterContainer>
    );
}
