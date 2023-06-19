import { useState, useEffect, useCallback, SyntheticEvent } from "react";
import useAutocomplete from "@mui/material/useAutocomplete";
import { LunaticError } from "../utils/type/type";
import { SuggesterContainer } from "./elements/SuggesterContainer";
import { SuggesterInputContainer } from "./elements/SuggesterInputContainer";
import { SuggesterLabel } from "./elements/SuggesterLabel";
import { SuggesterInput } from "./elements/SuggesterInput";
import { SuggesterOption } from "./elements/SuggesterOption";
import { SuggesterListBox } from "./elements/SuggesterListBox";
import {
    ComboBox,
    DefaultOptionRenderer,
    DefaultLabelRenderer,
    // createCustomizableLunaticField,
} from "../commons";
import { ComboBoxOption } from "../commons/combo-box.type";
import { LunaticComponentProps } from "../type";

type SearchResults = {
    results: Array<ComboBoxOption>;
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
    labelRenderer: LunaticComponentProps<"Suggester">["labelRenderer"];
    optionRenderer: LunaticComponentProps<"Suggester">["optionRenderer"];
};

async function BLANK() {
    return [];
}

function isOptionEqualToValue(option: ComboBoxOption, value: ComboBoxOption) {
    return option.id === value.id;
}

export function Suggester(props: SuggesterProps) {
    const {
        label,
        id,
        searching = BLANK,
        onSelect = () => null,
        description,
        className,
        disabled,
        labelRenderer = DefaultLabelRenderer,
        optionRenderer = DefaultOptionRenderer,
        placeholder = "toto",
    } = props;
    const [value, setValue] = useState<string>("");
    const [search, setSearch] = useState("");
    const [activeId, setActiveId] = useState<unknown>(undefined);
    const [suggestions, setSuggestions] = useState<Array<ComboBoxOption>>([]);

    const onInputChange = useCallback(
        (newValue: string | null) => {
            setValue(newValue ?? "");
            if (newValue?.length) {
                onSelect(newValue);
            }
        },
        [onSelect],
    );

    const handleSelect = useCallback(
        function (id: string | null) {
            onSelect(id ? id : null);
        },
        [onSelect],
    );

    const handleChange = useCallback(
        function (value: string | ComboBoxOption | null) {
            if (value && typeof value === "object") {
                const { id } = value as ComboBoxOption;
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

    // const {
    //     getRootProps,
    //     getInputLabelProps,
    //     getInputProps,
    //     getListboxProps,
    //     getOptionProps,
    //     groupedOptions,
    // } = useAutocomplete<ComboBoxOption, false, false, true>({
    //     onInputChange,
    //     id,
    //     options: suggestions,
    //     filterOptions: x => x,
    //     // onChange: handleChange,
    //     isOptionEqualToValue,
    // });

    function getSearch(search: string, value: string | null) {
        if (!search.length && value) {
            return value;
        }

        return "";
    }

    const defaultSearch = getSearch(search, value);

    return (
        <SuggesterContainer>
            <ComboBox
                id={id}
                className={className}
                onChange={onInputChange}
                disabled={disabled}
                options={suggestions}
                editable={true}
                onSelect={handleSelect}
                value={value}
                search={defaultSearch}
                optionRenderer={optionRenderer}
                labelRenderer={labelRenderer}
                placeholder={placeholder}
                label={label}
                description={description}
            />
            {/* <SuggesterInputContainer {...getRootProps()}>
                <SuggesterLabel {...getInputLabelProps()}>{label}</SuggesterLabel>
                <SuggesterInput {...getInputProps()} />
            </SuggesterInputContainer>
            <SuggesterListBox {...getListboxProps()} display={suggestions.length > 0}>
                {(groupedOptions as typeof suggestions).map((option, index) => {
                    const { id, label } = option;
                    const p = getOptionProps({ option, index });
                    const selected = id === activeId;
                    return <SuggesterOption {...p} label={label} key={id} selected={selected} />;
                })}
            </SuggesterListBox> */}
        </SuggesterContainer>
    );
}
