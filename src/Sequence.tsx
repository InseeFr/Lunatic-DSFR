import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { Declarations } from "./Declarations";
import { useId } from "react";

export const Sequence: LunaticSlotComponents["Sequence"] = props => {
    const { label, declarations, description } = props;

    const id = useId();

    return (
        <div
            id={id}
            className={fr.cx("fr-p-4w", "fr-mb-2w")}
            style={{ backgroundColor: fr.colors.decisions.background.alt.grey.default }}
        >
            <h2>{label}</h2>
            <p>{description}</p>
            <Declarations type="AFTER_QUESTION_TEXT" declarations={declarations} id={id} />
        </div>
    );
};
