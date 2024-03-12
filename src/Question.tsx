import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { Declarations } from "./Declarations";

export const Question: LunaticSlotComponents["Question"] = props => {
    const { id, description, declarations, label, children } = props;

    return (
        <fieldset className={fr.cx("fr-fieldset")}>
            <legend id={`question-legend-${id}`} className={fr.cx("fr-fieldset__legend")}>
                <h3 className={fr.cx("fr-mb-0")}>{label}</h3>
                <p className={fr.cx("fr-hint-text")} id={`question-description-${id}`}>
                    {description}
                </p>
                <Declarations type="AFTER_QUESTION_TEXT" declarations={declarations} id={id} />
            </legend>
            {children}
        </fieldset>
    );
};
