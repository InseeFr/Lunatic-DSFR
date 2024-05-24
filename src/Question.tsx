import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { Declarations } from "./Declarations";
import { useId } from "react";

export const Question: LunaticSlotComponents["Question"] = props => {
    const { description, declarations, label, children } = props;

    const id = useId();

    return (
        <fieldset className={fr.cx("fr-fieldset")}>
            <legend id={`question-legend-${id}`} className={fr.cx("fr-fieldset__legend")}>
                <h6 className={fr.cx("fr-mb-0")}>{label}</h6>
                <p className={fr.cx("fr-hint-text")} id={`question-description-${id}`}>
                    {description}
                </p>
                <Declarations type="AFTER_QUESTION_TEXT" declarations={declarations} id={id} />
            </legend>
            <div className={fr.cx("fr-fieldset__content")}>{children}</div>
        </fieldset>
    );
};
