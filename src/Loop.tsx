import { fr } from "@codegouvfr/react-dsfr";
import Alert from "@codegouvfr/react-dsfr/Alert";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";
import type { LunaticSlotComponents } from "@inseefr/lunatic";

export const Loop: LunaticSlotComponents["Loop"] = props => {
    const { declarations, description, id, label, canControlRows, children, errors, addRow, removeRow } =
        props;

    if (declarations) {
        //TODO throw and handle globaly errors in an alert with a condition to avoid to display alert in prod
        console.error("Only declaration in Question are displayed");
    }
    console.log(id);

    return (
        <>
            <label htmlFor={id} id={`label-${id}`}>
                {label}
                <span>{description}</span>
            </label>
            {errors?.map(error =>
                error.errorMessage ? (
                    <Alert
                        severity="error"
                        description={error.errorMessage}
                        small
                        className={fr.cx("fr-mt-1w")}
                        key={error.id}
                    />
                ) : null,
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
