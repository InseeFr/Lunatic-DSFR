import type { LunaticSlotComponents } from "@inseefr/lunatic";
import Autocomplete from "@mui/material/Autocomplete";
import { getErrorStates } from "./utils/errorStates";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { useId } from "react";
import { useQuestionId } from "./Question";
import type { SuggesterOptionType } from "@inseefr/lunatic/lib/components/Suggester/SuggesterType";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { fr } from "@codegouvfr/react-dsfr";

export const Suggester: LunaticSlotComponents["Suggester"] = props => {
    const {
        options,
        state,
        onSearch,
        value,
        onSelect,
        search,
        errors,
        label,
        description,
        onClear,
        disabled,
    } = props;

    const id = useId();
    const questionId = useQuestionId();
    /**
     * Note that the error message ID follows the format `${id}-desc-error` because this is the convention used by the underlying library react-dsfr
     * See: https://github.com/codegouvfr/react-dsfr/blob/4c41367febcb78307f261df1b761fedb52c8a905/src/Input.tsx#L103
     */

    const inputValue = ((value[0]?.label || search) ?? "").toString();
    const { state: errorState, stateRelatedMessage } = getErrorStates(errors);

    return (
        <Autocomplete
            id={id}
            disablePortal
            value={(value[0] ?? null) as SuggesterOptionType} //To remove when https://github.com/InseeFr/Lunatic/pull/1067 merged
            inputValue={inputValue}
            isOptionEqualToValue={(a, b) => a.id === b.id}
            loading={state === "loading"}
            loadingText="Liste en cours de chargement"
            noOptionsText="Aucun résultat trouvé"
            options={options}
            filterOptions={x => x}
            onChange={(_, option) => {
                onSelect(option);
            }}
            getOptionLabel={option => {
                if (option.id === "OTHER") {
                    return `Aucun résultat trouvé : choisir "${option.label}"`;
                }
                return option.label;
            }}
            onInputChange={(e, v) => {
                if (e && e.type === "change") {
                    onSearch(v);
                }
            }}
            renderInput={params => {
                const errorMessageId = `${params.id}-desc-error`; //we use the same convention as react-dsfr
                return (
                    <div
                        ref={params.InputProps.ref}
                        className={fr.cx(
                            "fr-input-group",
                            disabled && "fr-input-group--disabled",
                            (() => {
                                switch (errorState) {
                                    case "error":
                                        return "fr-input-group--error";
                                    case "success":
                                        return "fr-input-group--valid";
                                    case "default":
                                        return undefined;
                                }
                            })(),
                        )}
                    >
                        <label className={fr.cx("fr-label")} htmlFor={params.id}>
                            {label}
                            {description !== undefined && (
                                <span className="fr-hint-text">{description}</span>
                            )}
                        </label>
                        <div className={fr.cx("fr-input-wrap", "fr-input-wrap--addon")}>
                            {/* @ts-expect-error cf https://github.com/mui/material-ui/issues/29961#issuecomment-2260546769 */}
                            <TextareaAutosize
                                {...params.inputProps}
                                className={fr.cx(
                                    "fr-input",
                                    (() => {
                                        switch (errorState) {
                                            case "error":
                                                return "fr-input--error";
                                            case "success":
                                                return "fr-input--valid";
                                            case "default":
                                                return undefined;
                                        }
                                    })(),
                                )}
                                {...(errorState === "error"
                                    ? { "aria-invalid": true, "aria-errormessage": errorMessageId }
                                    : {})}
                                aria-labelledby={questionId}
                                aria-describedby={errorMessageId}
                                disabled={disabled}
                                style={{
                                    minHeight: 0, //Override dsfr minHeight
                                    resize: "none",
                                }}
                            >
                                <Button
                                    iconId="ri-close-line"
                                    priority="secondary"
                                    onClick={onClear}
                                    title="vider le champ"
                                    disabled={inputValue === ""}
                                />
                            </TextareaAutosize>
                            <Button
                                iconId="ri-close-line"
                                priority="secondary"
                                onClick={onClear}
                                title="vider le champ"
                                disabled={inputValue === ""}
                            />
                        </div>
                        {errorState !== "default" && (
                            <p
                                id={errorMessageId}
                                className={fr.cx(
                                    (() => {
                                        switch (errorState) {
                                            case "error":
                                                return "fr-error-text";
                                            case "success":
                                                return "fr-valid-text";
                                        }
                                    })(),
                                )}
                            >
                                {stateRelatedMessage}
                            </p>
                        )}
                    </div>
                );
            }}
        />
    );
};
