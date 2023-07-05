import { useState, useEffect, useCallback } from "react";
import { LunaticError } from "../utils/type/type";
import { SuggesterContainer } from "./elements/SuggesterContainer";
import { ComboBox, DefaultLabelRenderer } from "../commons";
import { ComboBoxOption } from "../commons/combo-box.type";
import { LunaticComponentProps } from "../type";
import { SuggesterOption } from "./elements/SuggesterOption";

type SearchResults = {
    results: Array<ComboBoxOption>;
};

export type SuggesterProps = {
    className?: string;
    placeholder?: string;
    onSelect?: (value: unknown) => void;
    value: string | null;
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
        optionRenderer = SuggesterOption,
        placeholder,
        value,
    } = props;

    const [localValue, setLocalValue] = useState<string | null>(value);
    const [search, setSearch] = useState<string | null>("");
    const [suggestions, setSuggestions] = useState<Array<ComboBoxOption>>([]);
    const onInputChange = useCallback(
        (newValue: string | null) => {
            setLocalValue(newValue ?? newValue);
            setSearch(newValue ?? "");
            if (typeof newValue === "string" && newValue) {
                onSelect(newValue);
            }
        },
        [onSelect],
    );

    const handleSelect = useCallback(
        function (value: string | ComboBoxOption | null) {
            if (value && typeof value === "object") {
                const { id } = value as ComboBoxOption;
                onSelect(id ?? "");
            } else {
                onSelect(value);
                setLocalValue(value);
            }
        },
        [onSelect],
    );

    useEffect(
        function () {
            if (value && value.trim().length) {
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

    function getSearch(search: string | null, value: string | null) {
        if (search && !search.length && value) {
            return value;
        }

        return "";
    }

    const defaultSearch = getSearch(search, localValue);

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
                value={value ? value : localValue}
                search={defaultSearch}
                optionRenderer={optionRenderer}
                labelRenderer={labelRenderer}
                placeholder={placeholder}
                label={label}
                description={description}
            />
        </SuggesterContainer>
    );
}
