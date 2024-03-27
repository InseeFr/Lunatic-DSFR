import { fr } from "@codegouvfr/react-dsfr";
import type { LunaticSlotComponents } from "@inseefr/lunatic";
import { Declarations } from "./Declarations";

export const Sequence: LunaticSlotComponents["Sequence"] = props => {
    const { id, label, declarations, description } = props;
    return (
        <div
            id={id}
            className={fr.cx("fr-p-4w")}
            style={{ backgroundColor: fr.colors.decisions.background.alt.grey.default }}
        >
            <h2>{label}</h2>
            <p>{description}</p>
            <Declarations type="AFTER_QUESTION_TEXT" declarations={declarations} id={id} />
        </div>
    );
};
