import type { LunaticSlotComponents } from "@inseefr/lunatic";
import Autocomplete from "@mui/material/Autocomplete";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { fr } from "@codegouvfr/react-dsfr";
import { getErrorStates } from "./utils/errorStates";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { useState } from "react";

//min is hardcoded until lunatic provides it
const min = 1;

export const Suggester: LunaticSlotComponents["Suggester"] = props => {
    const {
        id,
        onSelect,
        disabled,
        readOnly,
        label,
        description,
        errors,
        value,
        onSearch,
        search,
        options,
        state: suggesterState,
        //min we wait lunatic provides min value until search
    } = props;

    //Controle the panel to open only when search has been made ie when search.length > min (in suggester.queryParser.params.min)
    const [openPanel, setOpenPanel] = useState<boolean>(false);

    const selectedOption = options.find(o => o.id === value[0]?.id) ?? null;

    const handleClear = () => {
        onSearch("");
        onSelect(null);
    };

    const { state, stateRelatedMessage } = getErrorStates(errors);

    return (
        <Autocomplete
            loading={suggesterState === "loading"}
            className={fr.cx("fr-input-group")}
            open={openPanel}
            id={id}
            disablePortal
            isOptionEqualToValue={(a, b) => a.id === b.id}
            loadingText="Liste en cours de chargement"
            noOptionsText="Aucun résultat trouvée"
            disabled={disabled}
            readOnly={readOnly}
            options={options}
            filterOptions={x => x} // see https://mui.com/material-ui/react-autocomplete/#search-as-you-type
            getOptionLabel={option => {
                if (option.id === "OTHER") return `Aucun résultat trouvé : ${option.label.toString()}`;
                return option.label?.toString() ?? option.id ?? "";
            }}
            autoComplete
            value={selectedOption}
            inputValue={search}
            onChange={(_e, option) => {
                onSelect(option);
            }}
            onClose={() => setOpenPanel(false)}
            onInputChange={(e, v) => {
                // When "options" changes, MUI calls "onInputChange" unexpectedly and without event (skip this situation)
                if (!e) {
                    return;
                }
                // The panel opens when the value is greater or equal to the min.
                if (v.length >= min) setOpenPanel(true);
                // Panel closes when input value falls below min
                if (openPanel && v.length < min) setOpenPanel(false);
                onSearch(v);
                if (e && e.type === "change") {
                    //Search only when we type on input, this avoid to search when option is selected
                    onSearch(v);
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
                        addon={
                            <Button
                                iconId="fr-icon-delete-line"
                                priority="secondary"
                                onClick={handleClear}
                                title="vider le champ"
                            />
                        }
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
