/* Component WIP */
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import Autocomplete from "@mui/material/Autocomplete";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { useState, type ComponentProps } from "react";
import { fr } from "@codegouvfr/react-dsfr";

type OptionType = Awaited<
    ReturnType<Required<ComponentProps<LunaticSlotComponents["Suggester"]>>["searching"]>
>["results"];

//  SOMETIME LABEL ARE SAVED INSTEAD OF ID
export const SuggesterFreeSolo: LunaticSlotComponents["Suggester"] = props => {
    const { id, searching, onSelect, disabled, readOnly, label, description, value } = props;

    const [options, setOptions] = useState<OptionType>([]);
    //const selectedOption = options.find(o => o.id === value) ?? null;

    const handleSearch = async (query: string) => {
        if (!searching) {
            return;
        }
        const { results } = await searching(query);
        if (results && Array.isArray(results)) {
            setOptions(results as any as typeof options);
        }
    };

    console.log({ value });

    return (
        <Autocomplete
            className={fr.cx("fr-input-group")}
            id={id}
            disablePortal
            isOptionEqualToValue={(a, b) => a.id === b.id}
            loadingText="Recherche en cours ..."
            freeSolo
            noOptionsText="Aucun résultat trouvé"
            disabled={disabled}
            readOnly={readOnly}
            options={options}
            filterOptions={x => x} // see https://mui.com/material-ui/react-autocomplete/#search-as-you-type
            getOptionLabel={option =>
                typeof option === "string" ? option : option.label?.toString() ?? option.id ?? ""
            }
            autoComplete
            inputValue={value ?? ""}
            onChange={(_e, option) => {
                console.log("onChange", option);
                if (typeof option !== "string") {
                    // TODO : For future version we want to send the selected option
                    //onSelect?.(option?.id ?? '')
                    return;
                }
                //onSelect?.(option?.id ?? "");
            }}
            onInputChange={(e, v) => {
                if (e && e.type === "change") {
                    handleSearch(v);
                }
                onSelect?.(v ?? null);
            }}
            renderInput={params => {
                const { InputProps, disabled, id, inputProps } = params;
                return (
                    <Input
                        ref={InputProps.ref}
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
