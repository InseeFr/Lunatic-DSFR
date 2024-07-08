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

    const hasErrors = errors && errors.length > 0;

    return (
        <>
            <label htmlFor={id} id={`label-${id}`}>
                {label}
                {description && <span>{description}</span>}
            </label>
            {hasErrors && (
                <div role="alert">
                    {errors.map(error => {
                        if (!error.errorMessage) {
                            //TODO throw error
                            console.error(`The error : ${error} do not contains message`);
                            return;
                        }
                        return (
                            <Alert
                                severity="error"
                                description={error.errorMessage}
                                small
                                className={fr.cx("fr-mt-1w")}
                                key={error.id}
                                id={error.id}
                            />
                        );
                    })}
                </div>
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
