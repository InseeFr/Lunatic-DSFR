import { useState, useEffect, useCallback, SyntheticEvent } from "react";
import useAutocomplete from "@mui/material/useAutocomplete";
import { LunaticError } from "../utils/type/type";
import { SuggesterContainer } from "./elements/SuggesterContainer";
import { styled } from "@mui/system";
import InputContainer from "./elements/InputContainer";
import { SuggesterLabel } from "./elements/SuggesterLabel";
import { SuggesterInput } from "./elements/SuggesterInput";

const Listbox = styled("ul")(({ theme }) => ({
    width: "auto",
    margin: 0,
    padding: 0,
    zIndex: 1,
    position: "absolute",
    listStyle: "none",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
    overflow: "auto",
    maxHeight: 200,
    border: "1px solid rgba(0,0,0,.25)",
    "& li.Mui-focused": {
        backgroundColor: "#4a8df6",
        color: "white",
        cursor: "pointer",
    },
    "& li:active": {
        backgroundColor: "#2977f5",
        color: "white",
    },
}));

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

export function Suggester(props: SuggesterProps) {
    const { label, id, searching = BLANK, onSelect = () => null } = props;
    const [value, setValue] = useState<string>("");
    const [suggestions, setSuggestions] = useState<Array<ReferentielEntity>>([]);

    function onInputChange(_: unknown, newValue: string | null) {
        setValue(newValue ?? "");
    }

    const handleChange = useCallback(
        function (_: SyntheticEvent<Element>, value: string | ReferentielEntity | null) {
            if (value && typeof value === "object") {
                const { id } = value as ReferentielEntity;
                onSelect(id ?? null);
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
            <InputContainer {...getRootProps()}>
                <SuggesterLabel {...getInputLabelProps()}>{label}</SuggesterLabel>
                <SuggesterInput {...getInputProps()} />
            </InputContainer>
            {groupedOptions.length > 0 ? (
                <Listbox {...getListboxProps()}>
                    {(groupedOptions as typeof suggestions).map((option, index) => (
                        <li {...getOptionProps({ option, index })} key={option.id}>
                            {option.label}
                        </li>
                    ))}
                </Listbox>
            ) : null}
        </SuggesterContainer>
    );

    // return (
    //     <Autocomplete
    //         disablePortal
    //         onInputChange={onInputChange}
    //         id={id}
    //         options={suggestions}
    //         sx={{ width: "auto" }}
    //         autoComplete
    //         includeInputInList
    //         filterSelectedOptions
    //         onChange={handleChange}
    //         filterOptions={x => x}
    //         renderInput={params => <TextField {...params} label={label} value={value} />}
    //         isOptionEqualToValue={isEqualOptions}
    //         renderOption={RenderOption}
    //     />
    // );
}
