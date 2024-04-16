import { fr } from "@codegouvfr/react-dsfr";
import Alert from "@codegouvfr/react-dsfr/Alert";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import React from "react";

export const Loop: LunaticSlotComponents["Loop"] = props => {
    const { declarations, description, id, label, canControlRows, children, errors, addRow, removeRow } =
        props;

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }

    return (
        <>
            <label htmlFor={id} id={`label-${id}`}>
                {label}
                <span>{description}</span>
            </label>
            {errors && (
                <Alert
                    severity="error"
                    description={errors.map(error => (
                        <React.Fragment key={error.id}>{error.errorMessage}</React.Fragment>
                    ))}
                    small
                    className={fr.cx("fr-mt-1w")}
                />
            )}
            {children}
            {canControlRows && (
                <ButtonsGroup
                    alignment="left"
                    buttons={[
                        {
                            priority: "secondary",
                            children: "Ajouter une ligne",
                            onClick: addRow,
                            disabled: !addRow,
                        },
                        {
                            priority: "tertiary",
                            children: "Supprimer la dernière ligne",
                            onClick: removeRow,
                            disabled: !removeRow,
                        },
                    ]}
                    inlineLayoutWhen="md and up"
                />
            )}
        </>
    );
};
