import type { LunaticSlotComponents } from "@inseefr/lunatic";
import Autocomplete from "@mui/material/Autocomplete";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { useState, type ComponentProps } from "react";
import { fr } from "@codegouvfr/react-dsfr";
import { getErrorStates } from "./utils/errorStates";

type OptionType = Awaited<
    ReturnType<Required<ComponentProps<LunaticSlotComponents["Suggester"]>>["searching"]>
>["results"];

export const Suggester: LunaticSlotComponents["Suggester"] = props => {
    const { id, searching, onSelect, disabled, readOnly, label, description, errors, value } = props;

    const [options, setOptions] = useState<OptionType>([]);
    const selectedOption = options.find(o => o.id === value) ?? null;
    const [inputValue, setInputValue] = useState(value);

    const handleSearch = async (query: string) => {
        if (!searching) {
            return;
        }
        const { results } = await searching(query);
        if (results && Array.isArray(results)) {
            setOptions(results);
        }
    };

    const { state, stateRelatedMessage } = getErrorStates(errors);
    return (
        <Autocomplete
            className={fr.cx("fr-input-group")}
            id={id}
            disablePortal
            isOptionEqualToValue={(a, b) => a.id === b.id}
            loadingText="Recherche en cours ..."
            noOptionsText="Aucun résultat trouvée"
            disabled={disabled}
            readOnly={readOnly}
            options={options}
            filterOptions={x => x} // see https://mui.com/material-ui/react-autocomplete/#search-as-you-type
            getOptionLabel={option => option.label?.toString() ?? option.id ?? ""}
            autoComplete
            value={selectedOption}
            inputValue={inputValue ?? ""}
            onChange={(_e, option) => {
                onSelect?.(option?.id ?? "");
            }}
            onInputChange={(e, v) => {
                // When "options" changes, MUI calls "onInputChange" unexpectedly and without event (skip this situation)
                if (!e) {
                    return;
                }
                setInputValue(v);
                if (e && e.type === "change") {
                    //Search only when we type on input, this avoid to search when option is selected
                    handleSearch(v);
                }
            }}
            renderInput={params => {
                const { InputProps, disabled, id, inputProps } = params;
                return (
                    <Input
                        ref={InputProps.ref}
                        state={state}
                        stateRelatedMessage={stateRelatedMessage}
                        label={label}
                        hintText={description}
                        id={id}
                        disabled={disabled}
                        nativeInputProps={{
                            ...inputProps,
                            placeholder: "Commencez votre saisie",
                        }}
                    />
                );
            }}
        />
    );
};
