import type { LunaticSlotComponents } from "@inseefr/lunatic";
import Autocomplete from "@mui/material/Autocomplete";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { fr } from "@codegouvfr/react-dsfr";
import { getErrorStates } from "./utils/errorStates";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { useState } from "react";

export const Suggester: LunaticSlotComponents["Suggester"] = props => {
    const {
        onFocus,
        onBlur,
        options,
        state,
        onSearch,
        value,
        onSelect,
        search,
        errors,
        label,
        description,
        id,
        onClear,
    } = props;
    const [defaultSelectedOption] = useState(() => options.find(o => o.id === value[0]?.id) ?? null);
    const inputValue = ((search || value[0]?.label) ?? "").toString();
    const { state: errorState, stateRelatedMessage } = getErrorStates(errors);

    console.log({
        value,
        search,
    });

    return (
        <Autocomplete
            open={search !== ""}
            id={id}
            disablePortal
            className={fr.cx("fr-input-group")}
            onFocus={onFocus}
            onBlur={onBlur}
            inputValue={inputValue}
            isOptionEqualToValue={(a, b) => a.id === b.id}
            loading={state === "loading"}
            loadingText="Liste en cours de chargement"
            noOptionsText="Aucun résultat trouvée"
            options={options}
            defaultValue={defaultSelectedOption}
            filterOptions={x => x}
            onChange={(_e, option) => {
                onSelect(option);
            }}
            getOptionLabel={option => {
                if (option.id === "OTHER") {
                    return `Aucun résultat trouvé : choisir "${option.label}"`;
                }
                return option.label;
            }}
            onInputChange={(e, v) => {
                // Only search on change (this event is also called on blur)
                if (e && e.type === "change") {
                    onSearch(v);
                }
            }}
            renderInput={params => {
                const { InputProps, disabled, id, inputProps } = params;
                return (
                    <Input
                        ref={InputProps.ref}
                        state={errorState}
                        stateRelatedMessage={stateRelatedMessage}
                        label={label}
                        hintText={description}
                        id={id}
                        addon={
                            <Button
                                iconId="fr-icon-delete-line"
                                priority="secondary"
                                onClick={onClear}
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
